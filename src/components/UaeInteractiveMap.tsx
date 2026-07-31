import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Building2, Sparkles } from 'lucide-react';

interface UaeInteractiveMapProps {
  properties: Property[];
  selectedProperty: Property | null;
  onSelectProperty: (property: Property) => void;
  className?: string;
}

export const UaeInteractiveMap: React.FC<UaeInteractiveMapProps> = ({
  properties,
  selectedProperty,
  onSelectProperty,
  className = 'h-[600px] w-full',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const { formatPrice } = useLanguage();

  // UAE Regional Center Coordinates
  const UAE_BOUNDS = {
    all: { center: [24.8, 54.9] as [number, number], zoom: 8 },
    abuDhabi: { center: [24.49, 54.42] as [number, number], zoom: 11 },
    dubai: { center: [25.13, 55.22] as [number, number], zoom: 11 },
    rak: { center: [25.67, 55.74] as [number, number], zoom: 11 },
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: UAE_BOUNDS.all.center,
        zoom: UAE_BOUNDS.all.zoom,
        zoomControl: false,
        attributionControl: false,
      });

      // CartoDB Dark Matter tiles for ultra-luxurious dark theme matching app aesthetic
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      // Add Zoom Control to top right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker: L.Marker) => marker.remove());
    markersRef.current = {};

    // Create markers for each property
    properties.forEach((prop) => {
      if (!prop.coordinates?.lat || !prop.coordinates?.lng) return;

      const isSelected = selectedProperty?.id === prop.id;
      const priceText = `${(prop.priceAed / 1000000).toFixed(1)}M AED`;

      // Custom HTML Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `
          <div class="group cursor-pointer transition-transform transform duration-300 hover:scale-110 ${
            isSelected ? 'z-50 scale-110' : 'z-10'
          }">
            <div class="px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-tight shadow-xl flex items-center gap-1 border ${
              isSelected
                ? 'bg-blue-600 text-white border-white ring-2 ring-blue-400 shadow-blue-500/50'
                : 'bg-slate-900/95 text-blue-200 border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-400'
            }">
              <svg class="w-3 h-3 text-current shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>${priceText}</span>
            </div>
          </div>
        `,
        iconSize: [85, 30],
        iconAnchor: [42, 15],
      });

      const marker = L.marker([prop.coordinates.lat, prop.coordinates.lng], { icon: customIcon }).addTo(map);

      // Popup Content
      const popupHtml = `
        <div class="bg-slate-900 text-slate-100 p-3 rounded-xl border border-slate-700/80 shadow-2xl max-w-[220px]">
          <div class="relative h-28 rounded-lg overflow-hidden mb-2 bg-slate-950">
            <img src="${prop.imageUrl}" alt="${prop.title}" class="w-full h-full object-cover" />
            <span class="absolute top-1 left-1 bg-slate-950/90 text-blue-300 text-[9px] font-bold px-2 py-0.5 rounded border border-slate-700">
              ${prop.type}
            </span>
          </div>
          <h4 class="font-serif font-bold text-xs text-slate-100 line-clamp-1 mb-0.5">${prop.title}</h4>
          <p class="text-[11px] text-blue-300 font-sans font-semibold mb-1.5">${prop.location}</p>
          <div class="flex items-center justify-between border-t border-slate-800 pt-1.5">
            <span class="text-xs font-bold text-white">${formatPrice(prop.priceAed)}</span>
            <button id="inspect-btn-${prop.id}" class="px-2.5 py-1 bg-blue-600 text-white font-bold text-[9px] uppercase rounded tracking-wider hover:bg-blue-500 transition-colors">
              Inspect
            </button>
          </div>
        </div>
      `;

      const popup = L.popup({
        closeButton: false,
        className: 'luxury-map-popup',
        offset: [0, -10],
      }).setContent(popupHtml);

      marker.bindPopup(popup);

      // Event Listeners
      marker.on('click', () => {
        onSelectProperty(prop);
        setTimeout(() => {
          const btn = document.getElementById(`inspect-btn-${prop.id}`);
          if (btn) {
            btn.onclick = () => onSelectProperty(prop);
          }
        }, 100);
      });

      markersRef.current[prop.id] = marker;
    });

    // If properties exist, adjust bounds smoothly if count changed
    if (properties.length > 0 && !selectedProperty) {
      const validCoords = properties
        .filter((p) => p.coordinates?.lat && p.coordinates?.lng)
        .map((p) => [p.coordinates.lat, p.coordinates.lng] as [number, number]);

      if (validCoords.length > 0) {
        const bounds = L.latLngBounds(validCoords);
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
      }
    }
  }, [properties, selectedProperty, formatPrice]);

  // Handle selected property flyTo
  useEffect(() => {
    if (selectedProperty && mapInstanceRef.current && selectedProperty.coordinates) {
      mapInstanceRef.current.flyTo(
        [selectedProperty.coordinates.lat, selectedProperty.coordinates.lng],
        13,
        { duration: 1.2 }
      );

      const marker = markersRef.current[selectedProperty.id];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedProperty]);

  const flyToRegion = (regionKey: keyof typeof UAE_BOUNDS) => {
    if (mapInstanceRef.current) {
      const { center, zoom } = UAE_BOUNDS[regionKey];
      mapInstanceRef.current.flyTo(center, zoom, { duration: 1.2 });
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl ${className}`}>
      
      {/* Map Control Floating Header Bar */}
      <div className="absolute top-3 left-3 z-[1000] flex flex-wrap items-center gap-1.5 bg-slate-950/90 border border-slate-800 p-1.5 rounded-xl backdrop-blur-md shadow-xl text-xs">
        <span className="text-[10px] uppercase font-bold text-blue-400 px-2 flex items-center gap-1">
          <Navigation className="w-3 h-3 text-blue-400" />
          Quick Zoom:
        </span>
        <button
          onClick={() => flyToRegion('all')}
          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors text-[11px] font-medium"
        >
          All UAE
        </button>
        <button
          onClick={() => flyToRegion('abuDhabi')}
          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors text-[11px] font-medium"
        >
          Abu Dhabi
        </button>
        <button
          onClick={() => flyToRegion('dubai')}
          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors text-[11px] font-medium"
        >
          Dubai
        </button>
        <button
          onClick={() => flyToRegion('rak')}
          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors text-[11px] font-medium"
        >
          RAK
        </button>
      </div>

      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0 bg-slate-950" />
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Off-Plan Allocation');
  const [prefDate, setPrefDate] = useState('');
  const [prefTime, setPrefTime] = useState('10:00 AM');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 overflow-x-hidden">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          {t.contact.title}
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
          SCHEDULE VIP PRIVATE ADVISORY
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Booking Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h2 className="text-xl font-serif font-bold text-white border-b border-slate-800 pb-3">
                Confidential Appointment Request
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    {t.contact.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    {t.contact.phoneWhatsapp} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alexander@domain.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    Consultation Subject
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Off-Plan Allocation">Off-Plan Developer Launch</option>
                    <option value="Luxury Residence Buying">Luxury Residence Purchase</option>
                    <option value="Golden Visa Processing">Golden Visa Consultation</option>
                    <option value="Portfolio Sale">Property Listing / Sale</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    {t.contact.preferredDate}
                  </label>
                  <input
                    type="date"
                    value={prefDate}
                    onChange={(e) => setPrefDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block uppercase font-bold text-slate-400 mb-1">
                    {t.contact.preferredTime}
                  </label>
                  <select
                    value={prefTime}
                    onChange={(e) => setPrefTime(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="10:00 AM">10:00 AM (GST)</option>
                    <option value="02:00 PM">02:00 PM (GST)</option>
                    <option value="05:00 PM">05:00 PM (GST)</option>
                    <option value="07:00 PM">07:00 PM (GST)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase font-bold text-slate-400 mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify location preferences, budget, or timeline..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                id="contact-form-submit-btn"
                className="w-full py-4 bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all min-h-[48px]"
              >
                <Send className="w-4 h-4 text-blue-200" />
                {t.contact.submitRequest}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">
                Consultation Confirmed
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, {fullName}. Our Senior Advisory team will contact you via WhatsApp (+971 50 500 2896) to finalize your private session.
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact Info & Office Addresses (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
            <h2 className="text-xl font-serif font-bold text-white border-b border-slate-800 pb-3">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs">
              <a
                href="tel:+971505002896"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Direct Phone Line</span>
                  <span className="text-sm font-bold text-slate-100">+971 50 500 2896</span>
                </div>
              </a>

              <a
                href="mailto:Info@havestproperties.com"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Email Enquiries</span>
                  <span className="text-sm font-semibold text-slate-100">Info@havestproperties.com</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Working Hours</span>
                  <span className="text-xs text-slate-200 font-medium">{t.contact.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Offices List */}
            <div className="pt-4 border-t border-slate-800 space-y-4 text-xs">
              <div>
                <strong className="text-slate-200 block text-sm font-serif font-bold text-blue-300">
                  Abu Dhabi Regional Branch
                </strong>
                <p className="text-slate-400 mt-0.5">{t.contact.abuDhabiOffice}</p>
              </div>

              <div>
                <strong className="text-slate-200 block text-sm font-serif font-bold text-blue-300">
                  Dubai Flagship Headquarters
                </strong>
                <p className="text-slate-400 mt-0.5">{t.contact.dubaiOffice}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

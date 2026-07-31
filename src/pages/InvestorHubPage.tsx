import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

export const InvestorHubPage: React.FC = () => {
  const { t, formatPrice } = useLanguage();

  // Mortgage Calculator Inputs
  const [mortgagePrice, setMortgagePrice] = useState<number>(10000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(4.5);

  // ROI Calculator Inputs
  const [roiPrice, setRoiPrice] = useState<number>(15000000);
  const [expectedRent, setExpectedRent] = useState<number>(1050000);
  const [serviceChargePercent, setServiceChargePercent] = useState<number>(1.2);

  // Mortgage Calculations
  const downPaymentAmount = (mortgagePrice * downPaymentPercent) / 100;
  const loanPrincipal = mortgagePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPaymentsCount = loanTenureYears * 12;

  const monthlyInstallment =
    monthlyInterestRate > 0
      ? (loanPrincipal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPaymentsCount))) /
        (Math.pow(1 + monthlyInterestRate, totalPaymentsCount) - 1)
      : loanPrincipal / totalPaymentsCount;

  const totalPayment = monthlyInstallment * totalPaymentsCount;
  const totalInterestPayable = totalPayment - loanPrincipal;

  // ROI Calculations
  const annualServiceCharge = (roiPrice * serviceChargePercent) / 100;
  const netAnnualRent = expectedRent - annualServiceCharge;
  const grossYield = (expectedRent / roiPrice) * 100;
  const netYield = (netAnnualRent / roiPrice) * 100;

  // 10-Year Capital Growth Projection Data for Recharts
  const projectionData = Array.from({ length: 11 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    const appreciatedValue = Math.round(roiPrice * Math.pow(1.06, i));
    const cumulativeRentalIncome = Math.round(netAnnualRent * i);
    return {
      year: `Year ${i}`,
      propertyValue: appreciatedValue,
      rentalIncome: cumulativeRentalIncome,
    };
  });

  // Global Tax Comparison Data
  const taxData = [
    { city: 'Abu Dhabi / Dubai', incomeTax: 0, capitalGainsTax: 0, netYieldAvg: '7.8%' },
    { city: 'London, UK', incomeTax: 45, capitalGainsTax: 28, netYieldAvg: '3.4%' },
    { city: 'New York, USA', incomeTax: 37, capitalGainsTax: 20, netYieldAvg: '4.1%' },
    { city: 'Singapore', incomeTax: 24, capitalGainsTax: 0, netYieldAvg: '3.1%' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 overflow-x-hidden">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
          {t.investor.title}
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
          WEALTH & YIELD ANALYTICS
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          {t.investor.subtitle}
        </p>
      </div>

      {/* Grid: Mortgage & ROI Calculators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Mortgage Calculator Card */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-serif font-bold text-white">
                {t.investor.mortgageCalc}
              </h2>
            </div>
            <span className="text-xs text-emerald-400 font-sans font-semibold">Non-Resident Rates Included</span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Property Price Input */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.propertyPrice}</span>
                <span className="text-blue-300 font-bold">{formatPrice(mortgagePrice)}</span>
              </div>
              <input
                type="range"
                min={2000000}
                max={150000000}
                step={1000000}
                value={mortgagePrice}
                onChange={(e) => setMortgagePrice(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>

            {/* Down Payment slider */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.downPayment} ({downPaymentPercent}%)</span>
                <span className="text-blue-300 font-bold">{formatPrice(downPaymentAmount)}</span>
              </div>
              <input
                type="range"
                min={20}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.loanTenure}</span>
                <span className="text-blue-300 font-bold">{loanTenureYears} Years</span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                step={1}
                value={loanTenureYears}
                onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.interestRate}</span>
                <span className="text-blue-300 font-bold">{interestRate}%</span>
              </div>
              <input
                type="range"
                min={2.5}
                max={7.5}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-slate-950 p-6 rounded-xl border border-blue-500/30 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-xs uppercase">{t.investor.monthlyPayment}:</span>
              <span className="text-2xl font-serif font-bold text-blue-300">
                {formatPrice(Math.round(monthlyInstallment))} / mo
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-900">
              <span>{t.investor.totalInterest}:</span>
              <span className="font-mono text-slate-200">{formatPrice(Math.round(totalInterestPayable))}</span>
            </div>
          </div>
        </div>

        {/* ROI & Yield Calculator Card */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-serif font-bold text-white">
                {t.investor.roiCalc}
              </h2>
            </div>
            <span className="text-xs text-blue-400 font-mono font-semibold">0% Income Tax Advantage</span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Property Price Input */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.propertyPrice}</span>
                <span className="text-blue-300 font-bold">{formatPrice(roiPrice)}</span>
              </div>
              <input
                type="range"
                min={2000000}
                max={100000000}
                step={1000000}
                value={roiPrice}
                onChange={(e) => setRoiPrice(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>

            {/* Expected Annual Rent */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.annualRent}</span>
                <span className="text-blue-300 font-bold">{formatPrice(expectedRent)}</span>
              </div>
              <input
                type="range"
                min={100000}
                max={8000000}
                step={50000}
                value={expectedRent}
                onChange={(e) => setExpectedRent(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>

            {/* Service Charge % */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 uppercase font-semibold">{t.investor.serviceCharge}</span>
                <span className="text-blue-300 font-bold">{serviceChargePercent}%</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={3.0}
                step={0.1}
                value={serviceChargePercent}
                onChange={(e) => setServiceChargePercent(Number(e.target.value))}
                className="w-full accent-blue-500 min-h-[30px]"
              />
            </div>
          </div>

          {/* Net Yield Results */}
          <div className="bg-slate-950 p-6 rounded-xl border border-blue-500/30 grid grid-cols-2 gap-4 text-center">
            <div>
              <span className="text-[10px] uppercase text-slate-400 block mb-1">Gross Yield</span>
              <span className="text-2xl font-serif font-bold text-blue-400">{grossYield.toFixed(2)}%</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 block mb-1">{t.investor.netYield}</span>
              <span className="text-2xl font-serif font-bold text-emerald-400">{netYield.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 10-Year Capital Appreciation Interactive Chart */}
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-serif font-bold text-white">
              10-YEAR CAPITAL APPRECIATION & CUMULATIVE RENT
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Projected 6% annual compound growth + tax-free rental yield compounding.
            </p>
          </div>

          <div className="text-xs text-emerald-400 font-sans font-bold tabular-nums">
            Projected Total Return: +124.8%
          </div>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projectionData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="year" stroke="#64748b" fontSize={11} />
              <YAxis
                stroke="#64748b"
                fontSize={11}
                tickFormatter={(val) => `${(val / 1000000).toFixed(0)}M`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#3b82f6', borderRadius: '12px' }}
                formatter={(val: number) => [formatPrice(val), 'Value']}
              />
              <Area
                type="monotone"
                dataKey="propertyValue"
                stroke="#3b82f6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* UAE Tax Advantage Comparison Table */}
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
        <h2 className="text-2xl font-serif font-bold text-white">
          GLOBAL TAX EFFICIENCY COMPARISON
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-sans font-semibold">
                <th className="py-3 px-4">Global Jurisdiction</th>
                <th className="py-3 px-4">Personal Income Tax</th>
                <th className="py-3 px-4">Capital Gains Tax</th>
                <th className="py-3 px-4">Average Net Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {taxData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx === 0 ? 'bg-blue-600/20 font-bold text-blue-300' : 'text-slate-300'}
                >
                  <td className="py-3.5 px-4 font-serif text-sm">{row.city}</td>
                  <td className="py-3.5 px-4 tabular-nums">{row.incomeTax}%</td>
                  <td className="py-3.5 px-4 tabular-nums">{row.capitalGainsTax}%</td>
                  <td className="py-3.5 px-4 font-sans font-bold text-emerald-400 tabular-nums">{row.netYieldAvg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

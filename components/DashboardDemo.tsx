
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Cell
} from 'recharts';

const efficiencyData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Apr', value: 61 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 89 },
];

const impactData = [
  { name: 'Cost Reduction', value: 34, color: '#3b82f6' },
  { name: 'Time Saving', value: 45, color: '#8b5cf6' },
  { name: 'Error Reduction', value: 28, color: '#10b981' },
  { name: 'Client Satisfaction', value: 52, color: '#f59e0b' },
];

export const DashboardDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Chart 1: Efficiency Curve */}
      <div className="lg:col-span-2 glass p-8 rounded-3xl h-[400px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="font-bold text-lg">Operational Efficiency</h4>
            <p className="text-xs text-slate-500">Post-Implementation Metrics</p>
          </div>
          <div className="text-right">
            <span className="text-green-400 font-bold text-xl">+98%</span>
            <p className="text-[10px] text-slate-500 uppercase font-black">YoY Growth</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="70%">
          <AreaChart data={efficiencyData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#60a5fa' }}
            />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Metric Distribution */}
      <div className="glass p-8 rounded-3xl h-[400px]">
        <h4 className="font-bold text-lg mb-8">Impact Distribution</h4>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={impactData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" stroke="#475569" fontSize={10} width={100} tickLine={false} axisLine={false} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
              {impactData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-[10px] text-slate-500 uppercase mb-1">Total Savings</p>
            <p className="text-lg font-bold">$2.4M</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-[10px] text-slate-500 uppercase mb-1">Hours Saved</p>
            <p className="text-lg font-bold">12k+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

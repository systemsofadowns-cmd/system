import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'cyan';
  subtitle?: string;
}

const colorConfig = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    light: 'bg-blue-50',
    shadow: 'shadow-blue-500/25',
  },
  green: {
    bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    light: 'bg-emerald-50',
    shadow: 'shadow-emerald-500/25',
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    light: 'bg-purple-50',
    shadow: 'shadow-purple-500/25',
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    light: 'bg-orange-50',
    shadow: 'shadow-orange-500/25',
  },
  pink: {
    bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    light: 'bg-pink-50',
    shadow: 'shadow-pink-500/25',
  },
  cyan: {
    bg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    light: 'bg-cyan-50',
    shadow: 'shadow-cyan-500/25',
  },
};

export default function StatsCard({ title, value, change, icon: Icon, color, subtitle }: StatsCardProps) {
  const config = colorConfig[color];
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute -top-8 -right-8 w-24 h-24 ${config.light} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${config.bg} ${config.shadow} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
            isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
          }`}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>

        {/* Progress indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${config.bg} transition-all duration-1000`}
              style={{ width: `${Math.min(change + 50, 100)}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-400 font-medium">vs mes ant.</span>
        </div>
      </div>
    </div>
  );
}
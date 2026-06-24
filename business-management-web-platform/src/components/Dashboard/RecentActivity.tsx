import { ShoppingCart, UserPlus, Package, CreditCard, ClipboardCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { recentActivities } from '../../data/mockData';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const activityIcons: Record<string, { icon: any; color: string; bg: string }> = {
  sale: { icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
  employee: { icon: UserPlus, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  inventory: { icon: Package, color: 'text-orange-600', bg: 'bg-orange-100' },
  purchase: { icon: CreditCard, color: 'text-purple-600', bg: 'bg-purple-100' },
  task: { icon: ClipboardCheck, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  alert: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
};

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Actividad Reciente</h3>
            <p className="text-sm text-gray-500 mt-1">Últimas transacciones y eventos</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-semibold group">
            Ver todo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="space-y-1">
          {recentActivities.slice(0, 6).map((activity, index) => {
            const config = activityIcons[activity.type] || activityIcons.sale;
            const Icon = config.icon;
            return (
              <div 
                key={activity.id} 
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-2 rounded-xl ${config.bg} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900">{activity.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-400">
                      {format(parseISO(activity.date), "d MMM, HH:mm", { locale: es })}
                    </p>
                    {activity.user && (
                      <span className="text-xs text-gray-400">• {activity.user}</span>
                    )}
                  </div>
                </div>
                {activity.amount && (
                  <div className="text-right">
                    <span className="text-sm font-bold text-gray-900">
                      ₲{(activity.amount / 1000000).toFixed(0)}M
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
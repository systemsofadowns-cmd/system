import { DollarSign, TrendingUp, Users, UserCheck, ShoppingCart, Target } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import SalesChart from '../components/Dashboard/SalesChart';
import RecentActivity from '../components/Dashboard/RecentActivity';
import DepartmentChart from '../components/Dashboard/DepartmentChart';
import QuickTasks from '../components/Dashboard/QuickTasks';
import { dashboardStats } from '../data/mockData';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-16" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm mb-1">¡Bienvenida, María! 👋</p>
              <h2 className="text-2xl font-bold mb-2">Dashboard Ejecutivo</h2>
              <p className="text-blue-100 text-sm max-w-md">
                Resumen del rendimiento de tu empresa en tiempo real. Todo bajo control.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-blue-100 text-xs">Ingresos del Año</p>
                  <p className="text-xl font-bold">₲3,250M</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-right">
                  <p className="text-blue-100 text-xs">Órdenes del Año</p>
                  <p className="text-xl font-bold">156</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatsCard
          title="Ingresos Totales"
          value={`₲${(dashboardStats.totalRevenue / 1000000000).toFixed(1)}B`}
          change={dashboardStats.revenueChange}
          icon={DollarSign}
          color="blue"
          subtitle="Este año"
        />
        <StatsCard
          title="Gastos Totales"
          value={`₲${(dashboardStats.totalExpenses / 1000000000).toFixed(1)}B`}
          change={dashboardStats.expenseChange}
          icon={TrendingUp}
          color="orange"
          subtitle="Este año"
        />
        <StatsCard
          title="Empleados"
          value={dashboardStats.totalEmployees.toString()}
          change={dashboardStats.employeeChange}
          icon={Users}
          color="purple"
          subtitle="Activos"
        />
        <StatsCard
          title="Clientes"
          value={dashboardStats.totalClients.toString()}
          change={dashboardStats.clientChange}
          icon={UserCheck}
          color="green"
          subtitle="Activos"
        />
        <StatsCard
          title="Órdenes"
          value={dashboardStats.totalOrders.toString()}
          change={dashboardStats.ordersChange}
          icon={ShoppingCart}
          color="pink"
          subtitle="Este año"
        />
        <StatsCard
          title="Conversión"
          value={`${dashboardStats.conversionRate}%`}
          change={2.4}
          icon={Target}
          color="cyan"
          subtitle="Tasa de éxito"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <DepartmentChart />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <QuickTasks />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Nuevo Empleado', icon: '👤', color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/25' },
          { label: 'Nueva Factura', icon: '📄', color: 'from-emerald-500 to-emerald-600', shadow: 'shadow-emerald-500/25' },
          { label: 'Nuevo Cliente', icon: '🏢', color: 'from-purple-500 to-purple-600', shadow: 'shadow-purple-500/25' },
          { label: 'Ver Reportes', icon: '📊', color: 'from-orange-500 to-orange-600', shadow: 'shadow-orange-500/25' },
        ].map((action) => (
          <button
            key={action.label}
            className={`p-5 bg-gradient-to-br ${action.color} rounded-2xl text-white hover:shadow-xl ${action.shadow} transition-all duration-300 hover:-translate-y-1 group`}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
            <p className="text-sm font-semibold">{action.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
import { Download, Calendar, TrendingUp, DollarSign, Users, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Ene', revenue: 280000000, target: 300000000, profit: 95000000 },
  { month: 'Feb', revenue: 250000000, target: 300000000, profit: 85000000 },
  { month: 'Mar', revenue: 365000000, target: 330000000, profit: 155000000 },
  { month: 'Abr', revenue: 310000000, target: 330000000, profit: 120000000 },
  { month: 'May', revenue: 410000000, target: 365000000, profit: 180000000 },
  { month: 'Jun', revenue: 385000000, target: 365000000, profit: 170000000 },
  { month: 'Jul', revenue: 295000000, target: 365000000, profit: 100000000 },
  { month: 'Ago', revenue: 340000000, target: 365000000, profit: 135000000 },
  { month: 'Set', revenue: 445000000, target: 400000000, profit: 195000000 },
  { month: 'Oct', revenue: 480000000, target: 430000000, profit: 205000000 },
  { month: 'Nov', revenue: 450000000, target: 430000000, profit: 190000000 },
  { month: 'Dic', revenue: 520000000, target: 465000000, profit: 225000000 },
];

const salesByCategory = [
  { name: 'Electrónica', value: 45, color: '#3B82F6', amount: 1462500000 },
  { name: 'Periféricos', value: 25, color: '#8B5CF6', amount: 812500000 },
  { name: 'Mobiliario', value: 20, color: '#10B981', amount: 650000000 },
  { name: 'Audio', value: 10, color: '#F59E0B', amount: 325000000 },
];

const topProducts = [
  { name: 'Laptop ProBook 15"', sales: 156, revenue: 1403844000, trend: 12 },
  { name: 'Escritorio Standing Desk', sales: 89, revenue: 400500000, trend: 8 },
  { name: 'Monitor UltraWide 34"', sales: 78, revenue: 327600000, trend: -3 },
  { name: 'Auriculares NC', sales: 134, revenue: 241200000, trend: 15 },
  { name: 'Silla Ejecutiva', sales: 67, revenue: 187600000, trend: 5 },
];

const topClients = [
  { name: 'Constructora Paraguaya S.A.', purchases: 1500000000, orders: 23, growth: 18 },
  { name: 'TechSolutions S.A.', purchases: 850000000, orders: 18, growth: 12 },
  { name: 'Innovación Digital S.R.L.', purchases: 620000000, orders: 15, growth: -5 },
  { name: 'Clínica Bienestar Total', purchases: 480000000, orders: 12, growth: 8 },
  { name: 'Estudio Legal Martínez', purchases: 320000000, orders: 8, growth: 3 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reportes y Estadísticas</h2>
          <p className="text-sm text-gray-500 mt-1">Análisis detallado del rendimiento empresarial</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl bg-white">
            <Calendar className="w-4 h-4 text-gray-400" />
            <select className="focus:outline-none text-sm font-medium">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Ingresos Totales', value: '₲3,250M', change: 12.5, icon: DollarSign, gradient: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-400/30' },
          { label: 'Beneficio Neto', value: '₲1,150M', change: 8.3, icon: TrendingUp, gradient: 'from-emerald-500 to-emerald-600', iconBg: 'bg-emerald-400/30' },
          { label: 'Empleados', value: '8', change: 14.3, icon: Users, gradient: 'from-purple-500 to-purple-600', iconBg: 'bg-purple-400/30' },
          { label: 'Productos Activos', value: '8', change: 5.2, icon: Package, gradient: 'from-amber-500 to-amber-600', iconBg: 'bg-amber-400/30' },
        ].map((kpi) => (
          <div key={kpi.label} className={`bg-gradient-to-br ${kpi.gradient} rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${kpi.iconBg}`}>
                  <kpi.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  {kpi.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  <span className="font-bold">{Math.abs(kpi.change)}%</span>
                </div>
              </div>
              <p className="text-sm opacity-80">{kpi.label}</p>
              <p className="text-2xl font-bold mt-1">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Target */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Ingresos vs Objetivo</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(value) => `₲${(value / 1000000000).toFixed(1)}B`} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  formatter={(value) => [`₲${Number(value).toLocaleString()}`]}
                />
                <Legend iconType="circle" iconSize={8} />
                <Bar dataKey="revenue" name="Ingresos" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="target" name="Objetivo" fill="#E5E7EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Ventas por Categoría</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {salesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  formatter={(value) => [`${value}%`]}
                />
                <Legend iconType="circle" iconSize={8} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {salesByCategory.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <div>
                  <p className="text-xs font-medium text-gray-700">{cat.name}</p>
                  <p className="text-[10px] text-gray-400">₲{(cat.amount / 1000000).toFixed(0)}M</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Trend */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Tendencia de Crecimiento</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(value) => `₲${(value / 1000000000).toFixed(1)}B`} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                formatter={(value) => [`₲${Number(value).toLocaleString()}`]}
              />
              <Area
                type="monotone"
                dataKey="profit"
                name="Beneficio"
                stroke="#10B981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorProfit)"
                dot={{ r: 4, fill: '#10B981', strokeWidth: 2, stroke: 'white' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top Productos</h3>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                  <p className="text-xs text-gray-400">{product.sales} unidades vendidas</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">₲{(product.revenue / 1000000).toFixed(0)}M</p>
                  <p className={`text-xs font-bold ${product.trend >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {product.trend >= 0 ? '+' : ''}{product.trend}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clients */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top Clientes</h3>
          <div className="space-y-3">
            {topClients.map((client, index) => (
              <div key={client.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{client.name}</p>
                  <p className="text-xs text-gray-400">{client.orders} pedidos</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">₲{(client.purchases / 1000000).toFixed(0)}M</p>
                  <p className={`text-xs font-bold ${client.growth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {client.growth >= 0 ? '+' : ''}{client.growth}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
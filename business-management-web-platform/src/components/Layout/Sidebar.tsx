import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  UserCheck,
  FileText,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  ClipboardCheck,
  HelpCircle,
} from 'lucide-react';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard', badge: null },
  { path: '/employees', icon: Users, label: 'Empleados', badge: '8' },
  { path: '/inventory', icon: Package, label: 'Inventario', badge: '3' },
  { path: '/clients', icon: UserCheck, label: 'Clientes', badge: null },
  { path: '/invoices', icon: FileText, label: 'Facturación', badge: '2' },
  { path: '/tasks', icon: ClipboardCheck, label: 'Tareas', badge: '5' },
  { path: '/reports', icon: BarChart3, label: 'Reportes', badge: null },
  { path: '/settings', icon: Settings, label: 'Configuración', badge: null },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white min-h-screen transition-all duration-300 flex flex-col relative ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-0" />
      
      {/* Logo */}
      <div className="p-4 flex items-center gap-3 border-b border-white/10 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
          <Zap className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="font-bold text-lg leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ERPSystem
            </h1>
            <p className="text-xs text-slate-400">Gestión Empresarial</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 relative z-10">
        {!collapsed && (
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
            Principal
          </p>
        )}
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
              {!collapsed && (
                <>
                  <span className="truncate flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20' : 'bg-white/10 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Help Section */}
      {!collapsed && (
        <div className="mx-3 mb-3 p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-white/5 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Ayuda</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">¿Necesitas asistencia? Contáctanos</p>
          <button className="w-full py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-xs font-medium hover:from-blue-500 hover:to-purple-500 transition-all">
            Soporte Técnico
          </button>
        </div>
      )}

      {/* Collapse Button */}
      <div className="p-3 border-t border-white/10 relative z-10">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!collapsed && <span className="text-sm">Colapsar</span>}
        </button>
      </div>
    </aside>
  );
}
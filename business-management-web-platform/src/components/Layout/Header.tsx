import { Bell, Search, User, LogOut, ChevronDown, Maximize2, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const notifications = [
    { id: 1, text: 'Stock bajo: Monitor UltraWide 34"', time: 'Hace 5 min', read: false, type: 'warning' },
    { id: 2, text: 'Factura FAC-2024-003 vencida', time: 'Hace 1 hora', read: false, type: 'danger' },
    { id: 3, text: 'Venta exitosa: ₲145.189.000', time: 'Hace 2 horas', read: true, type: 'success' },
    { id: 4, text: 'Nuevo empleado registrado', time: 'Hace 3 horas', read: true, type: 'info' },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        {/* Title & Breadcrumb */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span>Inicio</span>
            <span>/</span>
            <span className="text-gray-600">{title}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>

        {/* Center - Search */}
        <div className="hidden lg:block flex-1 max-w-md mx-8">
          <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar empleados, clientes, productos..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100/80 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all text-sm"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-white rounded text-[10px] text-gray-400 border border-gray-200 font-mono">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Time */}
          <div className="hidden md:block text-right mr-4">
            <p className="text-sm font-semibold text-gray-700">
              {currentTime.toLocaleTimeString('es-PY', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-[10px] text-gray-400">
              {currentTime.toLocaleDateString('es-PY', { weekday: 'short', day: 'numeric', month: 'short' })}
            </p>
          </div>

          {/* Quick Actions */}
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
              className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-red-500/30">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">Notificaciones</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {unreadCount} nuevas
                    </span>
                  </div>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                        !n.read ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          n.type === 'warning' ? 'bg-yellow-500' :
                          n.type === 'danger' ? 'bg-red-500' :
                          n.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{n.text}</p>
                          <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-gray-50 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                    Ver todas las notificaciones →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="w-px h-8 bg-gray-200 mx-1" />

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white text-sm font-bold">MG</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-700">María G.</p>
                <p className="text-[10px] text-gray-400">Administradora</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
                  <p className="text-white font-bold">María González</p>
                  <p className="text-blue-100 text-xs">admin@empresa.com.py</p>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                    <User className="w-4 h-4" />
                    Mi Perfil
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                    <Settings className="w-4 h-4" />
                    Configuración
                  </button>
                  <div className="my-1 border-t border-gray-100" />
                  <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut className="w-4 h-4" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
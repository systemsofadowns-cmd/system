import { useState } from 'react';
import { Save, Building2, Bell, Shield, Globe, Palette, Database, User, Eye, EyeOff, Check } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: 'general', label: 'General', icon: Building2, description: 'Datos de la empresa' },
    { id: 'profile', label: 'Mi Perfil', icon: User, description: 'Datos personales' },
    { id: 'notifications', label: 'Notificaciones', icon: Bell, description: 'Preferencias' },
    { id: 'security', label: 'Seguridad', icon: Shield, description: 'Protección cuenta' },
    { id: 'appearance', label: 'Apariencia', icon: Palette, description: 'Diseño interfaz' },
    { id: 'integrations', label: 'Integraciones', icon: Globe, description: 'Conexiones' },
    { id: 'backup', label: 'Respaldo', icon: Database, description: 'Backup datos' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configuración</h2>
        <p className="text-sm text-gray-500 mt-1">Administra tu sistema y cuenta</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-72">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <tab.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{tab.label}</p>
                  <p className="text-[10px] text-gray-400">{tab.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Datos de la Empresa</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-100 transition-colors">
                      Cambiar Logo
                    </button>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG. Max 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Empresa</label>
                    <input
                      type="text"
                      defaultValue="Mi Empresa S.A."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">RUC</label>
                    <input
                      type="text"
                      defaultValue="80012345-6"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Corporativo</label>
                    <input
                      type="email"
                      defaultValue="info@miempresa.com.py"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      defaultValue="+595 21 123 456"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Dirección</label>
                    <input
                      type="text"
                      defaultValue="Av. Mariscal López 1234, Asunción"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Moneda</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm">
                      <option>PYG - Guaraní Paraguayo (₲)</option>
                      <option>USD - Dólar Americano ($)</option>
                      <option>BRL - Real Brasileño (R$)</option>
                      <option>ARS - Peso Argentino ($)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Zona Horaria</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm">
                      <option>Asunción (GMT-3)</option>
                      <option>Ciudad del Este (GMT-3)</option>
                      <option>Encarnación (GMT-3)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Idioma</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm">
                      <option>Español</option>
                      <option>Guaraní</option>
                      <option>Português</option>
                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">IVA</label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm">
                      <option>10%</option>
                      <option>5%</option>
                      <option>0%</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Preferencias de Notificaciones</h3>
              <div className="space-y-3">
                {[
                  { label: 'Nuevas Ventas', description: 'Notificación cuando se registra una nueva venta', enabled: true },
                  { label: 'Stock Bajo', description: 'Alertas cuando el inventario está por debajo del mínimo', enabled: true },
                  { label: 'Facturas Vencidas', description: 'Notificar sobre facturas que superen la fecha de vencimiento', enabled: true },
                  { label: 'Nuevos Empleados', description: 'Informar cuando se registra un nuevo empleado', enabled: false },
                  { label: 'Pagos Recibidos', description: 'Confirmar cuando se recibe un pago de cliente', enabled: true },
                  { label: 'Reporte Diario', description: 'Resumen de actividad diaria por email', enabled: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-6">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                  <Save className="w-4 h-4" />
                  Guardar Preferencias
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Seguridad de la Cuenta</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Cambiar Contraseña</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña Actual</label>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm pr-10" 
                        />
                        <button 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nueva Contraseña</label>
                      <input type="password" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmar Nueva Contraseña</label>
                      <input type="password" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">Autenticación en Dos Pasos (2FA)</h4>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Autenticación de Dos Factores</p>
                      <p className="text-xs text-gray-500 mt-1">Añade una capa extra de seguridad a tu cuenta</p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl text-sm font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
                      Activar 2FA
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                    <Save className="w-4 h-4" />
                    Actualizar Seguridad
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Personalización de Apariencia</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Tema</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: 'Claro', active: true, preview: 'bg-white border-2 border-blue-500' },
                      { name: 'Oscuro', active: false, preview: 'bg-gray-900' },
                      { name: 'Sistema', active: false, preview: 'bg-gradient-to-r from-white to-gray-900' },
                    ].map((theme) => (
                      <button
                        key={theme.name}
                        className={`p-4 border-2 rounded-2xl text-center transition-all ${
                          theme.active ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-full h-16 rounded-lg mb-3 ${theme.preview}`} />
                        <p className="font-semibold text-gray-900 text-sm">{theme.name}</p>
                        {theme.active && <p className="text-xs text-blue-600 mt-0.5">Activo</p>}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Color Principal</h4>
                  <div className="flex gap-3">
                    {[
                      { color: 'bg-blue-500', active: true },
                      { color: 'bg-purple-500', active: false },
                      { color: 'bg-emerald-500', active: false },
                      { color: 'bg-orange-500', active: false },
                      { color: 'bg-pink-500', active: false },
                      { color: 'bg-cyan-500', active: false },
                    ].map((item) => (
                      <button
                        key={item.color}
                        className={`w-10 h-10 rounded-xl ${item.color} ${
                          item.active ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'hover:scale-110'
                        } transition-transform flex items-center justify-center`}
                      >
                        {item.active && <Check className="w-4 h-4 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                    <Save className="w-4 h-4" />
                    Aplicar Cambios
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Integraciones</h3>
              <div className="space-y-3">
                {[
                  { name: 'Google Workspace', status: 'Conectado', connected: true, color: 'from-blue-500 to-blue-600' },
                  { name: 'WhatsApp Business', status: 'No conectado', connected: false, color: 'from-green-500 to-green-600' },
                  { name: 'Stripe', status: 'Conectado', connected: true, color: 'from-purple-500 to-purple-600' },
                  { name: 'Mailchimp', status: 'No conectado', connected: false, color: 'from-yellow-500 to-yellow-600' },
                  { name: 'Slack', status: 'No conectado', connected: false, color: 'from-pink-500 to-pink-600' },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center text-white`}>
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{integration.name}</p>
                        <p className="text-xs text-gray-400">{integration.status}</p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        integration.connected
                          ? 'bg-red-50 text-red-600 hover:bg-red-100'
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/25'
                      }`}
                    >
                      {integration.connected ? 'Desconectar' : 'Conectar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'backup' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Respaldo de Datos</h3>
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Último Respaldo</p>
                      <p className="text-xs text-gray-500">15 de Enero, 2024 03:00 AM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Respaldo Automático</h4>
                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Respaldo diario automático</p>
                      <p className="text-xs text-gray-400">Todos los días a las 3:00 AM</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                    <Database className="w-4 h-4" />
                    Crear Respaldo Ahora
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold">
                    Restaurar Datos
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Mi Perfil</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/25">
                    MG
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-100 transition-colors">
                      Cambiar Foto
                    </button>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG. Max 1MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                    <input type="text" defaultValue="María" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
                    <input type="text" defaultValue="González Benítez" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" defaultValue="maria.gonzalez@empresa.com.py" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input type="tel" defaultValue="+595 981 234 567" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm" />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 text-sm font-semibold">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
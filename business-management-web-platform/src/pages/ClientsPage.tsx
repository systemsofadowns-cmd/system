import { useState } from 'react';
import { Plus, Search, Building2, Mail, Phone, MapPin, Eye, Edit, Trash2, Star, MoreVertical } from 'lucide-react';
import { clients as initialClients } from '../data/mockData';
import { Client } from '../types';

export default function ClientsPage() {
  const [clients] = useState<Client[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = clients.reduce((sum, c) => sum + c.totalPurchases, 0);
  const activeClients = clients.filter((c) => c.status === 'active' || c.status === 'vip').length;
  const vipClients = clients.filter((c) => c.status === 'vip').length;

  const statusConfig = {
    active: { label: 'Activo', color: 'bg-emerald-100 text-emerald-700' },
    inactive: { label: 'Inactivo', color: 'bg-gray-100 text-gray-700' },
    vip: { label: 'VIP', color: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white' },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Clientes</h2>
          <p className="text-sm text-gray-500 mt-1">Gestiona tus clientes y relaciones</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
          <Plus className="w-4 h-4" />
          Nuevo Cliente
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
          <p className="text-blue-100 text-sm">Total Clientes</p>
          <p className="text-3xl font-bold mt-1">{clients.length}</p>
          <p className="text-blue-200 text-xs mt-2">registrados</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white">
          <p className="text-emerald-100 text-sm">Activos</p>
          <p className="text-3xl font-bold mt-1">{activeClients}</p>
          <p className="text-emerald-200 text-xs mt-2">clientes</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-5 text-white">
          <p className="text-amber-100 text-sm">VIP</p>
          <p className="text-3xl font-bold mt-1">{vipClients}</p>
          <p className="text-amber-200 text-xs mt-2">premium</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white">
          <p className="text-purple-100 text-sm">Facturación Total</p>
          <p className="text-3xl font-bold mt-1">₲{(totalRevenue / 1000000000).toFixed(1)}B</p>
          <p className="text-purple-200 text-xs mt-2">acumulado</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
          />
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClients.map((client) => {
          const status = statusConfig[client.status];
          return (
            <div key={client.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{client.company}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    {client.email}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {client.phone}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {client.address}
                  </p>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {renderStars(client.rating)}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400">Compras Totales</p>
                      <p className="text-lg font-bold text-gray-900">₲{(client.totalPurchases / 1000000).toFixed(0)}M</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">Última Compra</p>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(client.lastPurchase).toLocaleDateString('es-PY')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-3">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
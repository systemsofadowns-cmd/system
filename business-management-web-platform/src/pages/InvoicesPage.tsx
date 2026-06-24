import { useState } from 'react';
import { Plus, Search, FileText, Download, Eye, Clock, AlertCircle, CheckCircle, FileEdit, MoreVertical, ArrowUpRight } from 'lucide-react';
import { invoices as initialInvoices } from '../data/mockData';
import { Invoice } from '../types';

export default function InvoicesPage() {
  const [invoices] = useState<Invoice[]>(initialInvoices);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const statusConfig: Record<string, { label: string; color: string; bg: string; icon: any }> = {
    paid: { label: 'Pagada', color: 'text-emerald-700', bg: 'bg-emerald-100', icon: CheckCircle },
    pending: { label: 'Pendiente', color: 'text-amber-700', bg: 'bg-amber-100', icon: Clock },
    overdue: { label: 'Vencida', color: 'text-red-700', bg: 'bg-red-100', icon: AlertCircle },
    draft: { label: 'Borrador', color: 'text-gray-700', bg: 'bg-gray-100', icon: FileEdit },
  };

  const totalPaid = invoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.total, 0);
  const totalPending = invoices.filter((i) => i.status === 'pending').reduce((sum, i) => sum + i.total, 0);
  const totalOverdue = invoices.filter((i) => i.status === 'overdue').reduce((sum, i) => sum + i.total, 0);
  const totalDraft = invoices.filter((i) => i.status === 'draft').reduce((sum, i) => sum + i.total, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Facturación</h2>
          <p className="text-sm text-gray-500 mt-1">Gestiona todas tus facturas</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
          <Plus className="w-4 h-4" />
          Nueva Factura
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pagadas', value: totalPaid, color: 'from-emerald-500 to-emerald-600', icon: CheckCircle, iconBg: 'bg-emerald-400/30' },
          { label: 'Pendientes', value: totalPending, color: 'from-amber-500 to-amber-600', icon: Clock, iconBg: 'bg-amber-400/30' },
          { label: 'Vencidas', value: totalOverdue, color: 'from-red-500 to-red-600', icon: AlertCircle, iconBg: 'bg-red-400/30' },
          { label: 'Borradores', value: totalDraft, color: 'from-gray-500 to-gray-600', icon: FileEdit, iconBg: 'bg-gray-400/30' },
        ].map((stat) => (
          <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${stat.iconBg}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </div>
              <p className="text-sm opacity-80">{stat.label}</p>
              <p className="text-xl font-bold mt-1">₲{stat.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar facturas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
              />
            </div>
            <div className="flex bg-gray-100 rounded-xl p-1">
              {[
                { value: 'all', label: 'Todas' },
                { value: 'paid', label: 'Pagadas' },
                { value: 'pending', label: 'Pendientes' },
                { value: 'overdue', label: 'Vencidas' },
                { value: 'draft', label: 'Borradores' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setFilterStatus(filter.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filterStatus === filter.value
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80">
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Factura</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Vencimiento</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInvoices.map((invoice) => {
                const status = statusConfig[invoice.status];
                const StatusIcon = status.icon;
                return (
                  <tr key={invoice.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-mono font-semibold text-gray-900 text-sm">{invoice.id}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium text-gray-900 text-sm">{invoice.clientName}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600">{new Date(invoice.date).toLocaleDateString('es-PY')}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-gray-600">{new Date(invoice.dueDate).toLocaleDateString('es-PY')}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-bold text-gray-900">₲{invoice.total.toLocaleString()}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${status.bg} ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
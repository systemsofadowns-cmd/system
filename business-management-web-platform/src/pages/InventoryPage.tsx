import { useState } from 'react';
import { Plus, Search, Package, AlertTriangle, TrendingDown, Edit, Trash2, Eye, ArrowUpRight, BarChart3 } from 'lucide-react';
import { products as initialProducts } from '../data/mockData';
import { Product } from '../types';

export default function InventoryPage() {
  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const statusConfig = {
    'in-stock': { label: 'En Stock', color: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
    'low-stock': { label: 'Stock Bajo', color: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
    'out-of-stock': { label: 'Agotado', color: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  };

  const totalValue = products.reduce((sum, p) => sum + p.stock * p.cost, 0);
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0);
  const lowStockProducts = products.filter((p) => p.status === 'low-stock').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Inventario</h2>
          <p className="text-sm text-gray-500 mt-1">Gestiona tus productos y existencias</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25">
          <Plus className="w-4 h-4" />
          Nuevo Producto
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-blue-200" />
              <p className="text-blue-100 text-sm">Total Productos</p>
            </div>
            <p className="text-3xl font-bold">{products.length}</p>
            <p className="text-blue-200 text-xs mt-1">registrados</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-emerald-200" />
              <p className="text-emerald-100 text-sm">Valor Inventario</p>
            </div>
            <p className="text-3xl font-bold">₲{(totalValue / 1000000).toFixed(0)}M</p>
            <p className="text-emerald-200 text-xs mt-1">valor total</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-200" />
              <p className="text-amber-100 text-sm">Stock Bajo</p>
            </div>
            <p className="text-3xl font-bold">{lowStockProducts}</p>
            <p className="text-amber-200 text-xs mt-1">productos</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-200" />
              <p className="text-purple-100 text-sm">Ventas Totales</p>
            </div>
            <p className="text-3xl font-bold">{totalSales}</p>
            <p className="text-purple-200 text-xs mt-1">unidades</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm"
          >
            <option value="all">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="flex bg-gray-100 rounded-xl p-1">
            {[
              { value: 'all', label: 'Todos' },
              { value: 'in-stock', label: 'En Stock' },
              { value: 'low-stock', label: 'Stock Bajo' },
              { value: 'out-of-stock', label: 'Agotado' },
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => {
          const status = statusConfig[product.status];
          return (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Product Image Area */}
              <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 h-36 flex items-center justify-center relative">
                <Package className="w-14 h-14 text-gray-300 group-hover:text-gray-400 transition-colors group-hover:scale-110 duration-300" />
                <div className="absolute top-3 right-3">
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${status.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </span>
                </div>
                {product.stock <= product.minStock && product.stock > 0 && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-white rounded-lg text-[10px] font-bold">
                      <AlertTriangle className="w-3 h-3" />
                      Stock Bajo
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-bold text-gray-900 text-sm mt-0.5 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">SKU: {product.sku}</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xl font-bold text-gray-900">₲{product.price.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400">Costo: ₲{product.cost.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{product.stock}</p>
                    <p className="text-[10px] text-gray-400">uds</p>
                  </div>
                </div>

                {/* Sales indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="text-gray-400">Ventas</span>
                      <span className="font-bold text-gray-600">{product.sales}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${Math.min((product.sales / 250) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 font-bold">+{Math.floor(Math.random() * 20 + 5)}%</span>
                    <span>vs mes ant.</span>
                  </div>
                  <div className="flex items-center gap-1">
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
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/employees': 'Gestión de Empleados',
  '/inventory': 'Gestión de Inventario',
  '/clients': 'Gestión de Clientes',
  '/invoices': 'Facturación',
  '/tasks': 'Gestión de Tareas',
  '/reports': 'Reportes y Estadísticas',
  '/settings': 'Configuración',
};

export default function Layout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50/30">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
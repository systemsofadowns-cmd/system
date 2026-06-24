import { Clock, AlertCircle, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { tasks } from '../../data/mockData';

const priorityColors = {
  high: 'bg-red-100 text-red-700 border-red-200',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  low: 'bg-green-100 text-green-700 border-green-200',
};

const priorityLabels = {
  high: 'ALTA',
  medium: 'MEDIA',
  low: 'BAJA',
};

const statusIcons = {
  'todo': { icon: Circle, color: 'text-gray-400' },
  'in-progress': { icon: Clock, color: 'text-blue-500' },
  'review': { icon: AlertCircle, color: 'text-yellow-500' },
  'done': { icon: CheckCircle2, color: 'text-green-500' },
};

export default function QuickTasks() {
  const activeTasks = tasks.filter(t => t.status !== 'done').slice(0, 4);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden relative">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Tareas Pendientes</h3>
            <p className="text-sm text-gray-500 mt-1">Próximas entregas</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-semibold group">
            Ver todas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-3">
          {activeTasks.map((task) => {
            const StatusIcon = statusIcons[task.status].icon;
            return (
              <div 
                key={task.id}
                className="p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <StatusIcon className={`w-5 h-5 mt-0.5 ${statusIcons[task.status].color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${priorityColors[task.priority]}`}>
                        {priorityLabels[task.priority]}
                      </span>
                      <span className="text-xs text-gray-400">{task.dueDate}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                    {task.assignee.split(' ').map(n => n[0])[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="w-full mt-4 py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
          + Nueva Tarea
        </button>
      </div>
    </div>
  );
}
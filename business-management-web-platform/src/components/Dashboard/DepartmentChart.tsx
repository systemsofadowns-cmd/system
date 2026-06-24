import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { departmentData } from '../../data/mockData';

export default function DepartmentChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full" />
      
      <div className="relative">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">Empleados por Departamento</h3>
          <p className="text-sm text-gray-500 mt-1">Distribución del personal actual</p>
        </div>
        
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  padding: '8px 12px',
                }}
                formatter={(value) => [`${value} empleados`]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 mt-4">
          {departmentData.map((dept) => (
            <div key={dept.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }} />
                <span className="text-sm text-gray-700">{dept.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-900">{dept.value}</span>
                <span className="text-xs text-gray-400">₲{(dept.budget / 1000000).toFixed(0)}M</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
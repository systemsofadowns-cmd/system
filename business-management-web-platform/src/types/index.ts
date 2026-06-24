export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  salary: number;
  status: 'active' | 'inactive' | 'on-leave';
  startDate: string;
  avatar?: string;
  performance: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  image?: string;
  sales: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  totalPurchases: number;
  status: 'active' | 'inactive' | 'vip';
  lastPurchase: string;
  rating: number;
}

export interface Invoice {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'paid' | 'pending' | 'overdue' | 'draft';
  notes?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'review' | 'done';
  dueDate: string;
  tags: string[];
}

export interface Activity {
  id: string;
  type: 'sale' | 'purchase' | 'employee' | 'inventory' | 'task' | 'alert';
  description: string;
  date: string;
  amount?: number;
  user?: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalExpenses: number;
  totalEmployees: number;
  totalClients: number;
  revenueChange: number;
  expenseChange: number;
  employeeChange: number;
  clientChange: number;
  totalOrders: number;
  ordersChange: number;
  conversionRate: number;
  avgOrderValue: number;
}

export interface SalesData {
  month: string;
  sales: number;
  expenses: number;
  profit: number;
}

export interface DepartmentData {
  name: string;
  value: number;
  color: string;
  budget: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'reminder' | 'event';
  color: string;
}
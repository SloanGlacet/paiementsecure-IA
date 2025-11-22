import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Bell, 
  Settings,
  LogOut,
  CreditCard,
  TrendingUp
} from 'lucide-react';

const Sidebar = () => {
  const navigation = [
    { name: 'Tableau de bord', href: '/', icon: LayoutDashboard },
    { name: 'Factures', href: '/invoices', icon: FileText },
    { name: 'Clients', href: '/clients', icon: Users },
    { name: 'Alertes IA', href: '/alerts', icon: Bell },
    { name: 'Relances', href: '/reminders', icon: TrendingUp },
  ];
  
  const secondaryNav = [
    { name: 'Paramètres', href: '/settings', icon: Settings },
  ];
  
  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
          <CreditCard className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">PaiementSecure</h1>
          <p className="text-xs text-gray-500">Powered by AI</p>
        </div>
      </div>
      
      {/* Navigation principale */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      {/* Navigation secondaire */}
      <div className="px-3 py-4 border-t border-gray-200 space-y-1">
        {secondaryNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
        
        <button className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full">
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
      
      {/* User info */}
      <div className="px-3 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Jean Dubois</p>
            <p className="text-xs text-gray-500 truncate">Plan Starter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

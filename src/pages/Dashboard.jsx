import React from 'react';
import { 
  Euro, 
  AlertCircle, 
  TrendingUp, 
  Clock
} from 'lucide-react';
import StatCard from '../components/StatCard';
import Card, { CardHeader, CardTitle, CardContent } from '../components/Card';
import Badge from '../components/Badge';
import { mockStats, mockInvoices, mockAlerts, mockChartData } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const stats = mockStats;
  const recentInvoices = mockInvoices.slice(0, 5);
  const recentAlerts = mockAlerts.slice(0, 3);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  const getStatusBadge = (status) => {
    const statusConfig = {
      paid: { variant: 'success', label: 'Payée' },
      pending: { variant: 'warning', label: 'En attente' },
      overdue: { variant: 'danger', label: 'En retard' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };
  
  const getSeverityColor = (severity) => {
    const colors = {
      high: 'border-l-4 border-danger-500 bg-danger-50',
      medium: 'border-l-4 border-warning-500 bg-warning-50',
      low: 'border-l-4 border-primary-500 bg-primary-50'
    };
    return colors[severity] || colors.low;
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-1">Vue d'ensemble de vos paiements et alertes</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="En attente de paiement"
          value={formatCurrency(stats.totalPending)}
          subtitle={`${mockInvoices.filter(i => i.status === 'pending').length} factures`}
          icon={Euro}
          color="primary"
        />
        
        <StatCard
          title="Factures en retard"
          value={formatCurrency(stats.totalOverdue)}
          subtitle={`${stats.overdueCount} factures`}
          icon={AlertCircle}
          color="danger"
        />
        
        <StatCard
          title="Taux de recouvrement"
          value={`${stats.recoveryRate}%`}
          subtitle="Sur les 6 derniers mois"
          icon={TrendingUp}
          color="success"
          trend={{ value: '+2.5%', isPositive: true }}
        />
        
        <StatCard
          title="Délai moyen"
          value={`${stats.avgPaymentDelay}j`}
          subtitle="Temps de paiement"
          icon={Clock}
          color="warning"
          trend={{ value: '-3 jours', isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Évolution des paiements</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value) => formatCurrency(value)}
                />
                <Legend />
                <Bar dataKey="paid" fill="#10b981" name="Payé" radius={[8, 8, 0, 0]} />
                <Bar dataKey="overdue" fill="#ef4444" name="En retard" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>🤖 Alertes IA</CardTitle>
              <Badge variant="danger">{recentAlerts.filter(a => !a.isRead).length}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg ${getSeverityColor(alert.severity)} transition-all hover:shadow-md cursor-pointer`}
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {alert.clientName}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {alert.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {alert.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium py-2">
                Voir toutes les alertes →
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Factures récentes</CardTitle>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              Voir tout →
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">N° Facture</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Montant</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Échéance</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Statut</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">{invoice.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{invoice.clientName}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(invoice.dueDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(invoice.status)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        Détails
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

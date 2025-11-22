export const mockUser = {
  id: '1',
  name: 'Jean Dubois',
  email: 'jean@artisan-pro.fr',
  company: 'Artisan Pro',
  plan: 'starter'
};

export const mockClients = [
  {
    id: '1',
    name: 'Restaurant Le Gourmet',
    email: 'contact@legourmet.fr',
    phone: '06 12 34 56 78',
    siret: '12345678900011',
    riskScore: 25,
    riskLevel: 'low',
    totalInvoiced: 15420,
    avgPaymentDelay: 18,
    latePayments: 0,
    status: 'active'
  },
  {
    id: '2',
    name: 'Spa Zen Attitude',
    email: 'info@zenattitude.fr',
    phone: '06 23 45 67 89',
    siret: '98765432100022',
    riskScore: 45,
    riskLevel: 'medium',
    totalInvoiced: 8750,
    avgPaymentDelay: 32,
    latePayments: 2,
    status: 'active'
  },
  {
    id: '3',
    name: 'Électricien Pro Services',
    email: 'contact@elec-pro.fr',
    phone: '06 34 56 78 90',
    siret: '45678912300033',
    riskScore: 75,
    riskLevel: 'high',
    totalInvoiced: 12300,
    avgPaymentDelay: 48,
    latePayments: 5,
    status: 'warning'
  },
  {
    id: '4',
    name: 'Boulangerie Du Coin',
    email: 'boulangerie@ducoin.fr',
    phone: '06 45 67 89 01',
    siret: '78912345600044',
    riskScore: 15,
    riskLevel: 'low',
    totalInvoiced: 5200,
    avgPaymentDelay: 12,
    latePayments: 0,
    status: 'active'
  }
];

export const mockInvoices = [
  {
    id: 'INV-2024-001',
    clientId: '1',
    clientName: 'Restaurant Le Gourmet',
    amount: 2450,
    dueDate: '2024-11-15',
    status: 'paid',
    paidDate: '2024-11-12',
    createdAt: '2024-10-15',
    daysOverdue: 0
  },
  {
    id: 'INV-2024-002',
    clientId: '2',
    clientName: 'Spa Zen Attitude',
    amount: 1850,
    dueDate: '2024-11-20',
    status: 'pending',
    paidDate: null,
    createdAt: '2024-10-20',
    daysOverdue: 0
  },
  {
    id: 'INV-2024-003',
    clientId: '3',
    clientName: 'Électricien Pro Services',
    amount: 3200,
    dueDate: '2024-11-10',
    status: 'overdue',
    paidDate: null,
    createdAt: '2024-10-10',
    daysOverdue: 11
  },
  {
    id: 'INV-2024-004',
    clientId: '1',
    clientName: 'Restaurant Le Gourmet',
    amount: 1750,
    dueDate: '2024-12-01',
    status: 'pending',
    paidDate: null,
    createdAt: '2024-11-01',
    daysOverdue: 0
  },
  {
    id: 'INV-2024-005',
    clientId: '4',
    clientName: 'Boulangerie Du Coin',
    amount: 890,
    dueDate: '2024-11-25',
    status: 'pending',
    paidDate: null,
    createdAt: '2024-10-25',
    daysOverdue: 0
  },
  {
    id: 'INV-2024-006',
    clientId: '3',
    clientName: 'Électricien Pro Services',
    amount: 4200,
    dueDate: '2024-11-05',
    status: 'overdue',
    paidDate: null,
    createdAt: '2024-10-05',
    daysOverdue: 16
  }
];

export const mockAlerts = [
  {
    id: '1',
    type: 'payment_risk',
    severity: 'high',
    clientId: '3',
    clientName: 'Électricien Pro Services',
    message: 'Retard de paiement inhabituel détecté',
    aiReasoning: 'Ce client a 2 factures en retard totalisant 7 400€. Son délai de paiement a augmenté de 30% ce mois-ci.',
    recommendation: 'Relance ferme recommandée + appel téléphonique',
    createdAt: '2024-11-20T09:30:00',
    isRead: false
  },
  {
    id: '2',
    type: 'behavior_change',
    severity: 'medium',
    clientId: '2',
    clientName: 'Spa Zen Attitude',
    message: 'Délai de paiement en augmentation',
    aiReasoning: 'Les 3 derniers paiements ont été effectués avec un délai moyen de 35 jours vs 25 jours auparavant.',
    recommendation: 'Surveillance renforcée + relance préventive',
    createdAt: '2024-11-19T14:15:00',
    isRead: false
  },
  {
    id: '3',
    type: 'due_soon',
    severity: 'low',
    clientId: '2',
    clientName: 'Spa Zen Attitude',
    message: '3 factures arrivent à échéance dans 5 jours',
    aiReasoning: 'Total de 5 640€ à recevoir. Ce client paie généralement à temps.',
    recommendation: 'Relance de courtoisie automatique planifiée',
    createdAt: '2024-11-18T10:00:00',
    isRead: true
  }
];

export const mockStats = {
  totalPending: 12450,
  totalOverdue: 7400,
  overdueCount: 3,
  recoveryRate: 94,
  avgPaymentDelay: 28,
  thisMonthRevenue: 24680,
  lastMonthRevenue: 21340
};

export const mockChartData = [
  { month: 'Mai', paid: 18500, overdue: 2100 },
  { month: 'Juin', paid: 21200, overdue: 1800 },
  { month: 'Juil', paid: 19800, overdue: 2400 },
  { month: 'Août', paid: 22100, overdue: 1600 },
  { month: 'Sep', paid: 23400, overdue: 2200 },
  { month: 'Oct', paid: 21800, overdue: 2900 },
  { month: 'Nov', paid: 17050, overdue: 7400 }
];

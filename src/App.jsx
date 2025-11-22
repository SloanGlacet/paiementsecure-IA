import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

const Invoices = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Factures</h1>
    <p className="text-gray-600 mt-2">Liste de toutes vos factures</p>
  </div>
);

const Clients = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
    <p className="text-gray-600 mt-2">Gestion de vos clients</p>
  </div>
);

const Alerts = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Alertes IA</h1>
    <p className="text-gray-600 mt-2">Alertes intelligentes sur vos paiements</p>
  </div>
);

const Reminders = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Relances</h1>
    <p className="text-gray-600 mt-2">Gestion des relances automatiques</p>
  </div>
);

const Settings = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
    <p className="text-gray-600 mt-2">Configuration de votre compte</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="clients" element={<Clients />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

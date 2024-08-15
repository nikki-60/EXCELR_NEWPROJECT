import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PropertiesPage from './pages/PropertiesPage';
import AgentPage from './pages/AgentPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ClientDashboard from './pages/ClientDashboard';
import AgentDashboard from './pages/AgentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SearchBar from './components/SearchBar';
import AddProperty from './pages/AddProperty';
import TransactionPage from './components/TransactionPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import AgentsPage from './pages/AgentsPage';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Villa', email: 'Chennai', role: '123*12', mobile: '9999999999' },
    { id: 2, name: 'Plot', email: 'Telangana', role: '345*563', mobile: '99999999' },
    { id: 3, name: 'House', email: 'Andhra Pradesh', role: '140*245', mobile: '888888888' },
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/agent-dashboard" element={<AgentDashboard users={users} setUsers={setUsers} />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/add-property" element={<AddProperty users={users} setUsers={setUsers} />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/agents" element={<AgentsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
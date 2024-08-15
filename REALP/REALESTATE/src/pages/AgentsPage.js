// src/pages/AgentsPage.js
import React from 'react';
import '../styles/AgentsPage.css';

const AgentsPage = () => {
  // This would typically come from an API or database
  const agents = [
    {
      id: 1,
      name: "Saravanan",
      email: "Saravanan@realestate.com",
      phone: "+1 (123) 456-7890",
      specialization: "Residential Properties",
      image: "/images/Saravanan2.jpg"
    },
    {
      id: 2,
      name: "Saro",
      email: "Saro@realestate.com",
      phone: "+1 (234) 567-8901",
      specialization: "Commercial Properties",
      image: "/images/Saro1.jpg"
    },
    {
      id: 3,
      name: "Hafsa",
      email: "hafsa@realestate.com",
      phone: "+1 (345) 678-9012",
      specialization: "Luxury Homes",
      image: "/images/hafsa.jpg"
    }
  ];

  return (
    <div className="agents-page">
      <h1>Our Real Estate Agents</h1>
      <div className="agents-grid">
        {agents.map(agent => (
          <div key={agent.id} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <h2>{agent.name}</h2>
            <p><strong>Email:</strong> {agent.email}</p>
            <p><strong>Phone:</strong> {agent.phone}</p>
            <p><strong>Specialization:</strong> {agent.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
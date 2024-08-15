import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import '../styles/ClientDashboard.css';

const properties = [
    { id: '01', name: '01 Homes', location: 'Kolhapur', agent: 'Shruti Tiwari', date: '22-07-2022', image: '/images/property1.jpeg' },
    { id: '02', name: '02 Home', location: 'Karnataka', agent: 'Nikita', date: '22-07-2022', image: '/images/property2.jpeg' },
    { id: '03', name: '03 Home', location: 'Mumbai', agent: 'Hafsa', date: '22-07-2022', image: '/images/property3.jpeg' },
    { id: '04', name: '04 Homes', location: 'Mumbai', agent: 'Sakshi', date: '23-07-2022', image: '/images/property4.jpeg' },
    { id: '01', name: '01 Homes', location: 'Kolhapur', agent: 'Shruti Tiwari', date: '22-07-2022', image: '/images/property1.jpeg' },
    { id: '02', name: '02 Home', location: 'Karnataka', agent: 'Nikita', date: '22-07-2022', image: '/images/property2.jpeg' },
    { id: '03', name: '03 Home', location: 'Mumbai', agent: 'Hafsa', date: '22-07-2022', image: '/images/property3.jpeg' },
    { id: '04', name: '04 Homes', location: 'Mumbai', agent: 'Sakshi', date: '23-07-2022', image: '/images/property4.jpeg' },
];

const ClientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    return properties.filter(property => {
      return (
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.agent.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const filteredProperties = handleSearch();

  return (
    <div className="client-dashboard">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="properties-list">
        <h2>Listing All Properties</h2>
        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

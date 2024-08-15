import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import InstallmentCalculator from '../components/InstallmentCalculator';
import FeaturedProperty from '../components/FeaturedProperty';
import SearchBar from '../components/SearchBar';
import '../styles/HomePage.css';

const HomePage = () => {
  const properties = [
    {
      id: '02',
      name: '02 Home',
      location: 'Karnataka',
      agent: 'Nikita',
      date: '22-07-2022',
      image: '/images/property2.jpeg',
      bhkType: '2BHK',
      depositPrice: '₹80,000',
      ownerContact: '9876543211',
      propertyStatus: 'Rented',
    },
    {
      id: '01',
      name: '01 Homes',
      location: 'Kolhapur',
      agent: 'Shruti Tiwari',
      date: '22-07-2022',
      image: '/images/property1.jpeg',
      bhkType: '3BHK',
      depositPrice: '₹1,00,000',
      ownerContact: '9876543210',
      propertyStatus: 'Available',
    },
    {
      id: '02',
      name: '02 Home',
      location: 'Karnataka',
      agent: 'Nikita',
      date: '22-07-2022',
      image: '/images/property2.jpeg',
      bhkType: '2BHK',
      depositPrice: '₹80,000',
      ownerContact: '9876543211',
      propertyStatus: 'Rented',
    },
    {
      id: '02',
      name: '02 Home',
      location: 'Karnataka',
      agent: 'Nikita',
      date: '22-07-2022',
      image: '/images/property2.jpeg',
      bhkType: '2BHK',
      depositPrice: '₹80,000',
      ownerContact: '9876543211',
      propertyStatus: 'Rented',
    },
    {
      id: '01',
      name: '01 Homes',
      location: 'Kolhapur',
      agent: 'Shruti Tiwari',
      date: '22-07-2022',
      image: '/images/property1.jpeg',
      bhkType: '3BHK',
      depositPrice: '₹1,00,000',
      ownerContact: '9876543210',
      propertyStatus: 'Available',
    },
    {
      id: '01',
      name: '01 Homes',
      location: 'Kolhapur',
      agent: 'Shruti Tiwari',
      date: '22-07-2022',
      image: '/images/property1.jpeg',
      bhkType: '3BHK',
      depositPrice: '₹1,00,000',
      ownerContact: '9876543210',
      propertyStatus: 'Available',
    },

    // Add more properties as needed
  ];

  const featuredProperties = [
    { id: '01', name: '01 Apartment', image: '/images/featured1.jpeg' },
    { id: '02', name: '02 Apartments', image: '/images/featured2.jpeg' },
    { id: '03', name: 'Saravanan Homes', image: '/images/featured3.jpeg' },
    // Add more featured properties as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    return properties.filter((property) => {
      return (
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.agent.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const filteredProperties = handleSearch();

  return (
    <div className="home-page">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="main-content">
        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>
        <div className="sidebar">
          <InstallmentCalculator />
          <div className="featured-properties">
            <h2>Featured Properties</h2>
            {featuredProperties.map((property) => (
              <FeaturedProperty key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
      <div className="recently-added">
        <h2>Recently Added Properties</h2>
        <p>01 Apartment</p>
      </div>
    </div>
  );
};

export default HomePage;

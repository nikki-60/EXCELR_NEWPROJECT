import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/order-summary', { state: { property } });
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-content">
        <h2 className="property-title">{property.name}</h2>
        <p className="property-location">{property.location}</p>
        <div className="property-details">
          <div className="details-column">
            <p><strong>By:</strong> {property.agent}</p>
            <p><strong>BHK Type:</strong> {property.bhkType}</p>
          </div>
          <div className="details-column">
            <p><strong>Deposit:</strong> {property.depositPrice}</p>
            <p><strong>Owner:</strong> {property.ownerContact}</p>
            <p><strong>Status:</strong> {property.propertyStatus}</p>
          </div>
        </div>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default PropertyCard;
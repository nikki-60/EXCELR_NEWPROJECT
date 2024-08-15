import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';
import '../styles/OrderSummaryPage.css';

const OrderSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state;

  const handleConfirmPurchase = () => {
    // Handle the purchase confirmation here
    console.log('Purchase confirmed for:', property);
    navigate('/');
  };

  const handleCancelPurchase = () => {
    navigate('/');
  };

  return (
    <div className="order-summary-page">
      <OrderSummary
        property={property}
        onConfirm={handleConfirmPurchase}
        onCancel={handleCancelPurchase}
      />
    </div>
  );
};

export default OrderSummaryPage;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/AddPropertyForm.css';

const AddPropertyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(true); // Show modal after form submission
    // Handle form submission (e.g., send data to the server)
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form className="add-property-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Property</h2>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            {...register('imageUrl', { required: 'Image URL is required' })}
          />
          {errors.imageUrl && <p className="error">{errors.imageUrl.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="bhkType">BHK Type</label>
          <select id="bhkType" {...register('bhkType', { required: 'BHK Type is required' })}>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
          </select>
          {errors.bhkType && <p className="error">{errors.bhkType.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="depositPrice">Deposit Price</label>
          <input
            id="depositPrice"
            {...register('depositPrice', { required: 'Deposit Price is required' })}
          />
          {errors.depositPrice && <p className="error">{errors.depositPrice.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            {...register('location', { required: 'Location is required' })}
          />
          {errors.location && <p className="error">{errors.location.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && <p className="error">{errors.description.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="ownerName">Owner Name</label>
          <input
            id="ownerName"
            {...register('ownerName', { required: 'Owner Name is required' })}
          />
          {errors.ownerName && <p className="error">{errors.ownerName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="ownerContact">Owner Contact</label>
          <input
            id="ownerContact"
            {...register('ownerContact', {
              required: 'Owner Contact is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid contact number',
              },
            })}
          />
          {errors.ownerContact && <p className="error">{errors.ownerContact.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="propertyStatus">Property Status</label>
          <select id="propertyStatus" {...register('propertyStatus', { required: 'Property Status is required' })}>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Rented">Rented</option>
          </select>
          {errors.propertyStatus && <p className="error">{errors.propertyStatus.message}</p>}
        </div>

        <button type="submit">Add Property</button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Property added successfully!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPropertyForm;

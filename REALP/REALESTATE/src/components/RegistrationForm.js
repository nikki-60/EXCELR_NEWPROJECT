import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Email Validation
    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Please enter a valid email address";
      isValid = false;
    }

    // First Name Validation
    if (!formData.firstName) {
      tempErrors["firstName"] = "First Name is required";
      isValid = false;
    }

    // Last Name Validation
    if (!formData.lastName) {
      tempErrors["lastName"] = "Last Name is required";
      isValid = false;
    }

    // Mobile Number Validation
    if (!formData.mobileNumber) {
      tempErrors["mobileNumber"] = "Mobile Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors["mobileNumber"] = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Password Validation
    if (!formData.password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
        formData.password
      )
    ) {
      tempErrors["password"] =
        "Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character";
      isValid = false;
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      tempErrors["confirmPassword"] = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors["confirmPassword"] = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Sign-Up Successful!");
      navigate(`/${formData.role}-dashboard`);
    } else {
      for (let error in errors) {
        alert(errors[error]);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder='First Name'
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder='Last Name'
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter e-mail'
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="mobileNumber">Mobile Number</label>
      <input
        type="text"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        placeholder='Enter Mobile Number'
      />
      {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder='Confirm Password'
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <label htmlFor="role">Role</label>
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="agent">Agent</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

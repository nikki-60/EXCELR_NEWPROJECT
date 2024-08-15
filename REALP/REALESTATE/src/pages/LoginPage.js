// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginsignup.css';

const LoginForm = () => {
  const [userType, setUserType] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const credentials = {
    admin: { email: 'shrutitiwari@gmail.com', password: 'Shruti@13' },
    agent: { email: 'nikitha12@gmail.com', password: 'Nikita@123' },
    client: { email: 'hafsa34@gmail.com', password: 'Hafsa@123' },
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors["email"] = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password)
    ) {
      tempErrors["password"] =
        "Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate() || (email === credentials[userType].email && password === credentials[userType].password)) {
      alert("Login Successful!");
      navigate(`/${userType}-dashboard`);
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert('Invalid credentials');
      if (errors.email) alert(errors.email);
      if (errors.password) alert(errors.password);
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleLogin}>
        <select value={userType} onChange={(e) => setUserType(e.target.value)} className="input">
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="client">Client</option>
        </select>
        <div className="input-group">
          <input
            placeholder="Email address"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            placeholder="Password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="remember">
          <label><input type="checkbox"/> Remember me</label>
        </div>
        <button id="loginBtn" type="submit">Log in</button>
        <div className="register-link">
          <p>New user? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
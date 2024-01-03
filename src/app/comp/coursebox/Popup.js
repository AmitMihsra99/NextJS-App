// Popup.js
"use client";
import React, { useState } from 'react';
import styles from './Popup.module.css'; // Create a CSS module for styling

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      setError('All fields are required');
      return false;
    }

    // Add more specific validation logic if needed

    return true;
  };

  const handleProceed = () => {
    if (validateForm()) {
      // Implement your logic for processing the data
      // For example, you can send the data to the server
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Password:', password);

      // Close the popup
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Register today</h2>
        {error && <p className={styles.error}>{error}</p>}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
        </label><br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        </label><br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input} />
        </label><br />
        <button className={styles.submitbtn} onClick={handleProceed}>Pay</button>
        <br /><br />
      </div>
    </div>
  );
};

export default Popup;

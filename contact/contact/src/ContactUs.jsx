import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS for styling

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // For example, send the data to an API
    if (name === '' || email === '') {
      alert('Please enter both name and email');
      return;
    }
  
    // Mock login logic
    if (name === 'name' && email=='em@il') {
      alert('Submit successful');
      // Redirect to another page or update the state
    } else {
      alert('Invalid name or email');
    }
  };

  return (
    <div className="contact-us-container">
      <form onSubmit={handleSubmit} className="contact-us-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

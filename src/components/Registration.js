import React, { useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Student',
  'Researcher',
  'Faculty',
  'Industry Professional',
  'Volunteer',
];

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.role) newErrors.role = 'Role selection is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          alert('Something went wrong while submitting.');
        }
      } catch (err) {
        alert('Failed to connect to the server.');
        console.error(err);
      }
    }
  };

  if (submitted) {
    return (
      <section className="section">
        <h2 className="section-title">Thank you for registering!</h2>
        <p className="submitted-message">We look forward to seeing you at the symposium.</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Register for the Event</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="registration-form"
      >
        <label className="form-label">
          Name
          <input
            type="text"
            name="name"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </label>

        <label className="form-label">
          Email
          <input
            type="email"
            name="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>

        <label className="form-label">
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`form-input ${errors.role ? 'input-error' : ''}`}
          >
            <option value="">Select a role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <p className="error-text">{errors.role}</p>}
        </label>

        <div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-button"
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Registration;

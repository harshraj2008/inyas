import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Registration.css'; // Assuming you have a CSS file for styling

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
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim()) newErrors.email = 'Please enter a valid email address.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid.';
    if (!formData.role) newErrors.role = 'Please select your role.';
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
          alert('Submission failed. Please try again.');
        }
      } catch (err) {
        alert('Unable to connect to the server. Please try later.');
        console.error(err);
      }
    }
  };

  if (submitted) {
    return (
      <section className="section">
        <h2 className="section-title">Registration Successful</h2>
        <p className="submitted-message">
          Thank you for registering. We look forward to your participation in the symposium.
        </p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Participant Registration</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="registration-form"
      >
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address<span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="role" className="form-label">
            Role<span className="required">*</span>
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`form-input ${errors.role ? 'input-error' : ''}`}
          >
            <option value="">-- Select --</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <p className="error-text">{errors.role}</p>}
        </div>

        <div className="form-actions">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="submit-button"
          >
            Submit Registration
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Registration;

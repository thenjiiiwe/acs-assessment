import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { z } from 'zod';

// List of African country codes
const africanCountryCodes = [
  { code: '+213', label: 'Algeria' },
  // ... (Other country codes)
  { code: '+263', label: 'Zimbabwe' },
];

// Validation schema for phone number
const phoneSchema = z.object({
  phoneNumber: z.string().refine((value) => {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    return /^\d{8}$/.test(numericValue);
  }, {
    message: '✗ Please enter a valid phone number.',
  }),
});

const ContactForm = () => {
  // State for form data and validation error
  const [formData, setFormData] = useState({
    countryCode: africanCountryCodes[0].code,
    phoneNumber: '',
  });

  const [validationError, setValidationError] = useState(null);

  // Handle country code change
  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value,
    });

    // Trigger validation on country code change
    validateFormData();
  };

  // Handle phone number change
  const handlePhoneNumberChange = (e) => {
    setFormData({
      ...formData,
      phoneNumber: e.target.value,
    });

    // Trigger validation on phone number change
    validateFormData();
  };

  // Validate form data against the schema
  const validateFormData = () => {
    try {
      phoneSchema.parse(formData);
      // If validation passes, clear any previous validation error
      setValidationError(null);
    } catch (error) {
      // If validation fails, set the validation error
      setValidationError(error.errors?.[0]?.message || null);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Submitted Form Data:', formData);
  };

  return (
    <div style={{ backgroundColor: '#ffffff'}}>
      <div className="container-fluid">
        <div className="row no-gutters"> 
          <div className="row">
            {/* Left div with an image */}
            <div className="col-md-6">
              {/* Replace the following line with your image */}
              <img src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689648.jpg?w=740&t=st=1702392292~exp=1702392892~hmac=e65dd80d7da8370fd65a467c5a19dcb5f7c24b2a774a9f6e8e0d4211490afbf3" alt="Left Image" className="img-fluid" style={{ objectFit: 'fill'}}/>
            </div>

            {/* Right div with the contact form */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <form onSubmit={handleSubmit}>
                <h1>Contact Form</h1>

                {/* Add the Name field */}
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Tel label on its own line */}
                <div className="mb-3">
                  <label className="form-label">Tel:</label>
                </div>

                {/* Country Code Selector and Phone Number Input on the same line */}
                <div className="mb-3 d-flex">
                  {/* Country Code Selector */}
                  <select
                    className="form-select form-select-sm me-2" // Added form-select-sm for smaller size
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                  >
                    {africanCountryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label} ({country.code})
                      </option>
                    ))}
                  </select>

                  {/* Phone Number Input */}
                  <InputMask
                    mask="99-999-9999"
                    maskChar={null}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    className="form-control"
                    value={formData.phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>

                {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
                {formData.phoneNumber && !validationError && (
                  <p style={{ color: 'green' }}>✓</p>
                )}

                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

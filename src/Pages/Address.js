import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAddressForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: '',
    fullName: '',
    mobileNumber1: '',
    mobileNumber2: '',
    street: '',
    pinCode: '',
    city: '',
    state: '',
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/address";
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData),
    };

    try {
      const resp = await fetch(url, option);
      if (!resp.ok) {
        if (resp.status === 400) {
          // Handle client-side error appropriately
          console.error('Client-side error:', resp.statusText);
          navigate("/address");
        } else {
          throw new Error(`HTTP error: ${resp.status}`);
        }
      } else {
        navigate('/account');
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add a new address</h2>
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          className="w-full bg-blue-100 text-blue-600 py-2 rounded mb-4 flex items-center justify-center"
        >
          Save time. Autofill your current location.
          <span className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Autofill</span>
        </button>

        <label className="block mb-2">
          <span className="text-gray-700">Country/Region *</span>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Full name (First and Last name) *</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Mobile number 1 *</span>
          <input
            type="text"
            name="mobileNumber1"
            value={formData.mobileNumber1}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Mobile number 2 *</span>
          <input
            type="text"
            name="mobileNumber2"
            value={formData.mobileNumber2}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Pincode *</span>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Area, Street, Sector, Village</span>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <label className="block">
            <span className="text-gray-700">Town/City *</span>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">State *</span>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Choose a state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>
          </label>
        </div>

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isDefault"
            checked={formData.isDefault}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700">Make this my default address</span>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded mt-4"
        >
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;

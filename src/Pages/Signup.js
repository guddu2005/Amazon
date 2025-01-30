import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [user_name, setUser_name] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:5000/user";
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        password,
        user_name,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setSuccessMessage("Account registered successfully!");
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message);
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full">
        {/* Amazon logo */}
        <div className="flex justify-center mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="h-12" />
        </div>

        {/* Create Account form */}
        <h2 className="text-xl font-bold mb-4">Create account</h2>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="first_name">Your First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="last_name">Your Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="user_name">Your user Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">Enter Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="phone_number">Mobile Number</label>
            <input
              id="phone_number"
              type="text"
              name="phone_number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <small className="text-xs text-gray-600 mt-1">Passwords must be at least 6 characters.</small>
          </div>

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200">
            Continue
          </button>
        </form>

        {/* Conditions of Use and Privacy Notice */}
        <p className="text-xs text-center text-gray-600 mt-4">
          By creating an account, you agree to Amazon's <a href="#" className="text-blue-600">Conditions of Use</a> and <a href="#" className="text-blue-600">Privacy Notice</a>.
        </p>

        {/* Sign-In and Business account links */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-gray-600">
            Already have an account? <a href="#" className="text-blue-600">Sign-In</a>
          </Link>
          <p className="text-sm text-gray-600">
            Buying for work? <a href="#" className="text-blue-600">Create a free business account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

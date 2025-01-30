import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000/user/login";
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    try {
      const resp = await fetch(url, options);
      const data = await resp.json();
      // console.log('resp',resp);
      localStorage.setItem('userid' ,data.user._id)
      // localStorage.setItem('user' ,data.user)
      // localStorage.setItem('authToken', data.token);
      console.log('Login successful, token stored in localStorage');
      if (!resp.ok) {
        throw new Error(data.message || `HTTP error! status: ${resp.status}`);
      }

      if (resp.status === 400) {
        setSuccessMessage("Invalid username and Password");
        setError(null);
        navigate('/login');
      }
        setSuccessMessage("Login successfully");
        setError(null);
        navigate('/product');

    } catch (err) {
      setError(err.message);
      setSuccessMessage('');
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-sm w-full">
        {/* Amazon logo */}
        <div className="flex justify-center mb-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="h-12" />
        </div>

        {/* Login form */}
        <h2 className="text-lg font-bold mb-4">Sign in or create account</h2>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Enter mobile number or email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder='Enter Mobile / Email'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">
              Enter Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder='Enter Password'
              required
            />
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200" type="submit">
            Continue
          </button>
        </form>
        <Link to="/signup" className='text-sm text-teal-600 ml-2'>Don't have an Account</Link>
        {/* Conditions of Use and Privacy Notice */}
        <p className="text-xs text-center text-gray-600 mt-4">
          By continuing, you agree to Amazon's <a href="#" className="text-blue-600">Conditions of Use</a> and <a href="#" className="text-blue-600">Privacy Notice</a>.
        </p>

        {/* Shop on Amazon Business link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600">Shop on Amazon Business</a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-600">
        <p>Conditions of Use &nbsp; | &nbsp; Privacy Notice &nbsp; | &nbsp; Help</p>
        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;

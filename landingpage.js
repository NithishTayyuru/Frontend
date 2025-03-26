import React from 'react';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Event Hub</h1>
        <p className="mb-6 text-gray-600">
          Discover and register for exciting events near you!
        </p>
        <button 
          onClick={login}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
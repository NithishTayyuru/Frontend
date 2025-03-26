import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check login status on initial load
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login/success', {
        withCredentials: true
      });
      setUser(response.data.user);
      setIsAuthenticated(!!response.data.user);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const login = () => {
    window.open('http://localhost:3000/google/callback', '_self');
  };

  const logout = () => {
    window.open('http://localhost:3000/logout', '_self');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout, 
      checkLoginStatus 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
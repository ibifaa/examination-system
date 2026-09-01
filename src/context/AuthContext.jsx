import React, { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api/apiClient";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load persisted session on boot
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user session", e);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await apiClient.post("/auth/login", { email, password });
    
    // Check if 2FA is required
    if (response.data.twoFactorRequired) {
      return { twoFactorRequired: true, tempToken: response.data.tempToken };
    }
    
    // Regular login
    const { token, user: userData } = response.data;
    localStorage.setItem("token", token);
    // Note: If server does not return user details in the login response, we fallback to a default or decode JWT
    const userSession = userData || { email, role: "user" }; 
    localStorage.setItem("user", JSON.stringify(userSession));
    setUser(userSession);
    return { success: true };
  };

  const loginWith2FA = async (tempToken, code) => {
    const response = await apiClient.post("/auth/login/2fa", { tempToken, code });
    const { token, user: userData } = response.data;
    localStorage.setItem("token", token);
    const userSession = userData || { role: "user" };
    localStorage.setItem("user", JSON.stringify(userSession));
    setUser(userSession);
    return { success: true };
  };

  const logout = async () => {
    try {
      await apiClient.post("/auth/logout");
    } catch (e) {
      console.error("Logout request failed", e);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, loginWith2FA, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

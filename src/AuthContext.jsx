{/* */}
{/* Import necessary libraries, components etc */}
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiBaseURL } from "./lib/api";
import { login as apiLogin, signup as apiSignup, logout as apiLogout } from "./lib/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // try to recover session
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) { setLoading(false); return; }
    axios.get(`${apiBaseURL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setUser(res.data))
    .catch(() => { localStorage.removeItem("jwt"); setUser(null); })
    .finally(() => setLoading(false));
  }, []);

  const login  = async (identifier, password) => setUser(await apiLogin(identifier, password));
  const signup = async (username, email, password) => setUser(await apiSignup(username, email, password));
  const logout = () => { apiLogout(); setUser(null); };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

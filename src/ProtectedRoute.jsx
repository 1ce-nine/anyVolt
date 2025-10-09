import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div style={{ padding: 24 }}>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

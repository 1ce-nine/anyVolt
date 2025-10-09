import axios from "axios";
import { apiBaseURL } from "./api";

// Sign up (creates a Strapi user + returns JWT)
export async function signup(username, email, password) {
  const { data } = await axios.post(`${apiBaseURL}/api/auth/local/register`, {
    username, email, password,
  });
  localStorage.setItem("jwt", data.jwt);
  return data.user;
}

// Log in (email or username via `identifier`)
export async function login(identifier, password) {
  const { data } = await axios.post(`${apiBaseURL}/api/auth/local`, {
    identifier, password,
  });
  localStorage.setItem("jwt", data.jwt);
  return data.user;
}

export function logout() {
  localStorage.removeItem("jwt");
}

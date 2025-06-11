import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/login" }) => {
  const token = localStorage.getItem("access_token");

  return token ? Component : <Navigate to={redirectTo} />;
};

export const PublicRoute = ({ component: Component, redirectTo = "/", restricted = false }) => {
  const token = localStorage.getItem("access_token");

  if (token && restricted) {
    return <Navigate to={redirectTo} />;
  }

  return Component;
};

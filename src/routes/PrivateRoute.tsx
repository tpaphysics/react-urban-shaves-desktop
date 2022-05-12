import { useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
  component: JSX.Element;
}

export default function PrivateRoute({ component }: PrivateRoutesProps) {
  const [valid] = useState(true);
  return valid ? component : <Navigate to="/" />;
}

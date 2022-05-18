import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<Profile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

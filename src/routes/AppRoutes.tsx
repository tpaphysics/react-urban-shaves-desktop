import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import useAuth from '../hooks/Auth';
import { Dashboard } from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import IsLogged from './IsLogged';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsLogged component={<Login />} />} />
        <Route path="/register" element={<IsLogged component={<Register />} />} />
        <Route path="/forgot" element={<IsLogged component={<ForgotPassword />} />} />
        <Route path="/profile" element={<PrivateRoute component={<Profile />} />} />
        <Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

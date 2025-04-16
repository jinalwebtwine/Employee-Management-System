// src/App.js
import React from 'react';
import './assets/scss/themes.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import { authProtectedRoutes, publicRoutes } from './Routes/allRoutes';
import NonAuthLayout from './Layouts/NonAuthLayout';
import AuthLayout from './Layouts/AuthLayout';
import { AuthProtected } from './Routes/AuthProtected';

import fakeBackend from './helpers/AuthType/fakeBackend';
fakeBackend();

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={<NonAuthLayout>{route.element}</NonAuthLayout>}
          key={`public-${idx}`}
        />
      ))}

      {/* AUTH-PROTECTED ROUTES */}
      {authProtectedRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <AuthProtected>
              <AuthLayout>{route.element}</AuthLayout>
            </AuthProtected>
          }
          key={`auth-${idx}`}
        />
      ))}

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

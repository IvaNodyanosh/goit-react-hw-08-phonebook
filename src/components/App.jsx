import { Route, Routes } from 'react-router-dom';

import Header from './headerContainer/headerContainer';
import Home from 'pages/Home/Home';
import ContactsPage from 'pages/Contacts/ContactsPage';
import RegistrationPage from 'pages/Registration/RegistrationPage';
import LoginPage from 'pages/Login/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'store/auth/authOperations';

import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="registration"
          element={
            <PublicRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

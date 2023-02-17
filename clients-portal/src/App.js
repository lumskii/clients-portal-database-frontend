import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Dashboard from './pages/Dashboard';
import ClientSetup from './pages/ClientSetup';
import Login from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  logout,
  selectIsLoaded,
  selectUser,
} from './features/userSlice';
import MainLayout from './components/MainLayout';
import SalesRevenue from './pages/SalesRevenue';
import Distribution from './pages/DistributionRev';
import AddExpenses from './pages/AddExpenses';
import Clients from './pages/client/Clients';
import ClientEdit from './pages/clientEdit/ClientEdit';
import GenerateReports from './pages/GenerateReports';
import Signup from './pages/signup/Signup';

function App() {
  const user = useSelector(selectUser);
  const isLoaded = useSelector(selectIsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  if (!isLoaded) {
    return (
      <CircularProgress
        sx={{
          color: '#ff9900',
          marginLeft: '50vw',
          marginTop: '50vh',
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  }

  return (
    <Router>
      {!user ? (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/:clientsId" element={<ClientEdit />} />
            <Route path="/client-setup" element={<ClientSetup />} />
            <Route path="/reports" element={<GenerateReports />} />
            <Route path="/sales-revenue" element={<SalesRevenue />} />
            <Route path="/distribution-revenue" element={<Distribution />} />
            <Route path="/add-expenses" element={<AddExpenses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      )}
    </Router>
  );
}

export default App;

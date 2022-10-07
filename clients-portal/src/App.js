import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClientSetup from './pages/ClientSetup';
// import Testing from './components/Navbar/Testing';
import Login from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import AddEditSales from './pages/AddEditSales';
import Distribution from './pages/DistributionRev';
import AddExpenses from './pages/AddExpenses';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        dispatch(login({
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

  return (
    <Router>
      {!user ? (
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/forgot-password' element={< ForgotPassword />} />
          <Route exact path='*' element={< NotFound />} />
        </Routes>
      ) : (
        <>
        <Header />
        <div className="container">
          <Navbar />
        <Routes>
          <Route exact path='/' element={< Dashboard />} />
          {/* <Route exact path='/' element={< Testing />} /> */}
          <Route path='/client-setup' element={< ClientSetup />} />
          <Route path='/add-edit-sales' element={< AddEditSales />} />
          <Route path='/distribution-revenue' element={< Distribution />} />
          <Route path='/add-expenses' element={< AddExpenses />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
        </div>
        </>
      )}
    </Router>
  );
}

export default App;

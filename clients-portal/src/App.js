import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


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
        </Routes>
        // <ForgotPassword />
      ) : (
        <Routes>
          <Route exact path='/' element={< Dashboard />} />
          <Route exact path='*' element={< NotFound />} />
      </Routes>
      )}
      
    </Router>
  );
}

export default App;

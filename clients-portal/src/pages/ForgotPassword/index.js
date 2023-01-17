import React, { useRef } from 'react';
import './forgotStyles.css';
import { PageLayout } from './ForgotPasswordElements';
import { auth } from '../../firebase';

const ForgotPassword = () => {
  const emailRef = useRef(null);

  const reset = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(emailRef.current.value)
      .then((authUser) => {
        alert('Reset link was sent to email');
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <PageLayout>
      <div className="row">
        <h1>Forgot Password</h1>
        <h6 className="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div className="form-group">
          <p>
            <label className="username">Email</label>
          </p>
          <input
            ref={emailRef}
            type="email"
            name="user_email"
            id="user_email"
          />

          <button onClick={reset}>Reset Password</button>
        </div>
        <div className="footer">
          <h5>
            New here? <a href="/sign-up">Sign Up.</a>
          </h5>
          <h5>
            Already have an account? <a href="/">Sign In.</a>
          </h5>
        </div>
      </div>
    </PageLayout>
  );
};

export default ForgotPassword;

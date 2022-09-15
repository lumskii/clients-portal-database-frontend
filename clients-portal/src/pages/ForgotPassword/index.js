import React from 'react'
import './forgotStyles.css'
import {
  PageLayout,
} from "./ForgotPasswordElements";


const forgotPassword = () => {
  // const { showUpdatePassForm } = useSelector(state => state.password);

  return (
    <PageLayout>
      <div className="row">
		<h1>Forgot Password</h1>
		<h6 className="information-text">Enter your registered email to reset your password.</h6>
		<div className="form-group">
    <p><label for="username">Email</label></p>
			<input type="email" name="user_email" id="user_email" />
			
			<button onclick="showSpinner()">Reset Password</button>
		</div>
		<div className="footer">
			<h5>New here? <a href="/sign-up">Sign Up.</a></h5>
			<h5>Already have an account? <a href="/">Sign In.</a></h5>
		</div>
	</div>
    </PageLayout>
    
  );
}

export default forgotPassword
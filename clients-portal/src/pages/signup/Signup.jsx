import React, { useRef, useState } from 'react';
import { auth, upload } from '../../firebase';
import './signup.css';
import { PageLayout } from '../ForgotPassword/ForgotPasswordElements';
import { Forgot } from '../LoginPage/LoginElement';
import { RiImageEditFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

export default function Signup() {
  const user = useSelector(selectUser);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, user, setLoading);
  }

  return (
    <PageLayout>
      <div className="row">
        <h1>Sign Up</h1>
        <h6 className="information-text">Please, fill out the form below.</h6>
        <div className="signup_form">
          <form className="form">
            <div className="leftside">
              <label className="info">First Name</label>
              <input className="text_area" type="text" />

              <label className="info">Last Name</label>
              <input className="text_area" type="text" />

              <label className="info">Email</label>
              <input className="text_area" type="email" ref={emailRef} />

              <label className="info">Password</label>
              <input className="text_area" type="password" ref={passwordRef} />

              <label className="info">Profile Picture</label>
              <div className="uploadContent">
                <input type="file" onChange={handleChange} className="upload" />
                <button
                  disabled={loading || !photo}
                  className="uploadBtn"
                  onClick={handleClick}
                >
                  <RiImageEditFill /> Upload
                </button>
              </div>
            </div>

            <input
              to="/signup"
              onClick={register}
              className="textarea"
              type="submit"
              name="send"
              value="Sign up"
            />
            <Forgot to="/">
              Already have an account?{' '}
              <span className="signupButton">Login page</span>
            </Forgot>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}

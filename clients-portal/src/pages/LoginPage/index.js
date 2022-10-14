import React, { useRef } from "react";
import Logo from '../../images/LogoUpdate.svg';
import "./styles.css";
import { LogoBrandTwo } from "../../components/Navbar/NavbarElements";
import { auth } from "../../firebase";
import { Forgot, Signup } from "./LoginElement";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => alert(error.message));
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div className="sct brand">
          <LogoBrandTwo src={Logo} />
        </div>
        <div className="sct login">
          <form className='mainForm'>
            <h2 className='line'>Log In</h2>
            <input ref={emailRef} className="textarea" type="email" name="email" placeholder="Username/Email" />
            <input ref={passwordRef} className="textarea" type="password" name="password" placeholder="Password" />
            <div className="forgot-remember">
              <label className="control control-checkbox">
                Remember me
                <input className="textarea" type="checkbox" />
                <div className="control_indicator"></div>
              </label>
              <div className="forgot">
                <Forgot to='/forgot-password'>Forgot Password?</Forgot>
              </div>
            </div>
            <input onClick={login} className="textarea" type="submit" name="send" value="Login" />

            <p className="text-center">
              Don't have an account?
              <Signup to='/sign-up'><div className="signup">Sign up</div></Signup>
              <br />
              <i className="fa fa-hand-o-down" aria-hidden="true"></i>
            </p>
            <div className="social-sign">
              {/* <a href="#">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a> */}
              {/* <a href="#">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a> */}
              {/* <a href="#">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './signup.css';
import {PageLayout} from '../ForgotPassword/ForgotPasswordElements'
import { RiImageEditFill } from 'react-icons/ri';

export default function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
    
        auth.createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
          alert(error.message)
        });
      };

  return (
    <PageLayout>
        <div className="row">
            <h1>Sign Up</h1>
            <h6 className="information-text">Please, fill out the form below.</h6>
            <form className="form">
                <div className="rightside">
                    <label className="info">First Name</label>
                    <input className='text_area' type='text' />

                    <label className="info">Last Name</label>
                    <input className='text_area' type='text' />

                    <label className="info">Email</label>
                    <input className='text_area' type='email' ref={emailRef} />

                    <label className="info">Password</label>
                    <input className='text_area' type='password' ref={passwordRef} />
                </div>
                <div className="leftside">
                        <div className="clientUpdateUpload">
                            <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="clientUpdateImg" />
                            <label for="file"><RiImageEditFill className="clientUpdateIcon" /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="clientUpdateButton">Update</button>
                </div>

                <input to='/signup' onClick={register} className="textarea" type="submit" name="send" value="Sign up" />
            </form>
        </div>
    </PageLayout>
  )
}

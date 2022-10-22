import React, { useEffect, useState } from 'react';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

export default function Profile() {
    const user = useSelector(selectUser);
    const [photoURL, setPhotoURL] = useState("https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png");



    useEffect(() => {
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
        }
    }, [user])

  return (
    <div className='profilePic'>
        
        <img className="avatarImg2" src={photoURL} alt="Avatar" />
        
    </div>
  )
}

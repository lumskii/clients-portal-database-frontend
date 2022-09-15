import React from 'react'
import { BsEmojiDizzy } from 'react-icons/bs';
import './404.css'

const NotFound = () => {
  return (
    <div className="page">
      <div className="bodyLayout">
          <BsEmojiDizzy className='sad' />
        <h1 className='headerItem'>Page Not Found</h1>
        <p className='textItem'>Sorry, but the page you were trying to view does not exist.</p>
        <a href='/' className='button'>Return to DashBoard</a>
      </div>
    </div>
  );
}

export default NotFound
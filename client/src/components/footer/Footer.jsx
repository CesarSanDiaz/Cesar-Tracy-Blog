import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='bottomLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
      </div>
      <div className='bottomCenter'>
        &copy;CesarTracy.blog | All Rights Reserved
      </div>
      <div className='bottomRight'>Private Policy | Terms of Service</div>
    </div>
  );
}

import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='bottomLeft'>
        <IconBrandYoutube className='topIcon youtube' size={28} />
        <IconBrandInstagram className='topIcon instagram' size={28} />
        <IconBrandTwitter className='topIcon twitter' size={28} />
        <IconBrandPinterest className='topIcon pinterest' size={28} />
      </div>
      <div className='bottomCenter'>
        &copy;CesarTracy.blog | All Rights Reserved
      </div>
      <div className='bottomRight'>Private Policy | Terms of Service</div>
    </div>
  );
}

import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './footer.scss';

export default function Footer() {
  const { user } = useContext(Context);
  const PF = 'http://localhost:5000/images/';

  return (
    <div className='footerContainer'>
      <div className='bottomLeft'>
        <IconBrandYoutube className='topIcon youtube' size={28} />
        <IconBrandInstagram className='topIcon instagram' size={28} />
        <IconBrandTwitter className='topIcon twitter' size={28} />
        <IconBrandPinterest className='topIcon pinterest' size={28} />
      </div>
      <div className='bottomCenter'>
        CesarTracy.blog | &copy; All Rights Reserved
      </div>
      <div className='bottomLinks'>
        {user ? (
          <Link className='link' to='/settings'>
            <img className='topImg' src={PF + user.profilePic} alt='Avatar' />
          </Link>
        ) : (
          <ul className='bottomList'>
            <li className='bottomListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            &nbsp;|&nbsp;
            <li className='bottomListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* <div className='bottomRight'>Private Policy | Terms of Service</div> */}
    </div>
  );
}
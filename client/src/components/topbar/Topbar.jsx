import { MediaQuery } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import LightDark from '../lightDarkMode/LightDark';
import MenuNavbar from '../menuNavbar/MenuNavbar';
import './topbar.scss';

export default function Topbar() {
  const { user } = useContext(Context);
  // const PF = 'http://localhost:5000/images/';

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };
  return (
    <>
      <div className='top'>
        {/* using a media query to display none of the icons when screen size gets past 40em. */}
        <MediaQuery query='(max-width:40em)' styles={{ display: 'none' }}>
          <div className='topLeft'>
            <IconBrandYoutube className='topIcon youtube' size={28} />
            <IconBrandInstagram className='topIcon instagram' size={28} />
            <IconBrandTwitter className='topIcon twitter' size={28} />
            <IconBrandPinterest className='topIcon pinterest' size={28} />
          </div>
        </MediaQuery>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </li>
            <li
              style={user ? { display: 'block' } : { display: 'none' }}
              className='topListItem'
            >
              <Link className='link' to='/write'>
                Write
              </Link>
            </li>
            {/* <li
              style={user ? { display: 'block' } : { display: 'none' }}
              className='topListItem test'
              onClick={handleLogout}
            >
              {user && 'LOGOUT'}
            </li> */}
          </ul>
        </div>
        <div className='navMenu'>
          <MenuNavbar />
        </div>
        <div className='logo'>
          <LightDark />
          <div>
            CesarTracy<span>.</span>Blog
          </div>
        </div>
      </div>
    </>
  );
}

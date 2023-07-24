// import { MediaQuery } from '@mantine/core';
// import { MediaQuery } from '@mantine/core';
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
import MenuNavbar from '../menuNavbar/MenuNavbar';
import './topbar.scss';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  // const PF = 'http://localhost:5000/images/';

  if (user) return;

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='top'>
      <div className='topLeft'>
        {/* using a media query to display none of the icons when screen size gets past 40em. Have to individually wrap each component :/ */}
        <MediaQuery query='(max-width:40em)' styles={{ display: 'none' }}>
          <IconBrandYoutube className='topIcon youtube' size={28} />
        </MediaQuery>
        <MediaQuery query='(max-width:40em)' styles={{ display: 'none' }}>
          <IconBrandInstagram className='topIcon instagram' size={28} />
        </MediaQuery>
        <MediaQuery query='(max-width:40em)' styles={{ display: 'none' }}>
          <IconBrandTwitter className='topIcon twitter' size={28} />
        </MediaQuery>
        <MediaQuery query='(max-width:40em)' styles={{ display: 'none' }}>
          <IconBrandPinterest className='topIcon pinterest' size={28} />
        </MediaQuery>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
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
          <li
            style={user ? { display: 'block' } : { display: 'none' }}
            className='topListItem test'
            onClick={handleLogout}
          >
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className='navMenu'>
        <MenuNavbar />
      </div>
      <div className='logo'>
        CesarTracy<span>.</span>Blog
      </div>
      {/* <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img className='topImg' src={PF + user.profilePic} alt='Avatar' />
          </Link>
        ) : (
          <ul className='topRightList'>
            <li className='topRightListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li className='topRightListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}
      </div> */}
    </div>
  );
}

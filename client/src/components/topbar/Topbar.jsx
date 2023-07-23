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

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='top'>
      <div className='topLeft'>
        <IconBrandYoutube className='topIcon youtube' size={28} />
        <IconBrandInstagram className='topIcon instagram' size={28} />
        <IconBrandTwitter className='topIcon twitter' size={28} />
        <IconBrandPinterest className='topIcon pinterest' size={28} />
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
          <li className='topListItem'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </li>
          <li className='topListItem test' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <MenuNavbar />
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

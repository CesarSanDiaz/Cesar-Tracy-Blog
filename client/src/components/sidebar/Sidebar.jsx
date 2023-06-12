import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    try {
      const getCats = async () => {
        const res = await axios.get('/categories');
        setCat(res.data);
      };
      getCats();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT US</span>
        <img
          src='https://images.unsplash.com/photo-1582880421648-a7154a8c99c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          alt='sidebar img'
        />
        <p>
          Welcome to our travel blog! We're a couple who shares a love for
          exploring new places and experiencing different cultures. Our passion
          for travel has taken us to some incredible destinations around the
          United States, and we're excited to share our experiences with you.
          check out some of our latest posts to see some of the wonderful places
          we have been!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => {
            return (
              <Link className='link' to={`/?cat=${c.name}`} key={c.name}>
                <li className='sidebarListItem' key={c.name.type}>
                  {c.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
        </div>
      </div>
    </div>
  );
}

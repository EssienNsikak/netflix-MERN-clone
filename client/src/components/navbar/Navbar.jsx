import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='navbarmainLinks'>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='navbarmainLinks'>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img
            src='https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/135815391_2983224828571970_6606666135698533333_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFIWqJHvJq21rb-ohAV9rpZ3L1TkB07m7ncvVOQHTubuS36nYBaMmnY2jHp0wx2nQ4WGLknf17AIw-BAmi2OigA&_nc_ohc=EU7PiXjjuk4AX9RY_qw&_nc_ht=scontent.flos1-1.fna&oh=7d72cc8fd52781991d9ccdb1c81eb850&oe=60F6F41E'
            alt=''
          />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Navbar as Nav, Button, Menu } from 'react-daisyui';
import { FaBars, FaCartPlus, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, NavLink } from 'react-router-dom';
import useScrollDirection from './ScrollDirection';
import Sidebar from './Sidebar';
const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const direction = useScrollDirection();
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const amount = useSelector((store) => store.cart?.amount);
  return (
    <div
      className={`sticky h-16 ${
        direction === 'show' ? 'top-0 backdrop-blur' : '-top-[67]'
      } z-50 transition-all duration-1000`}
    >
      {isSideBar && <Sidebar setIsSideBar={setIsSideBar} />}
      <Nav
        className={`justify-around navbar  items-center shadow-md shadow-black`}
      >
        <Button
          className='md:hidden btn-sm'
          onClick={() => setIsSideBar(!isSideBar)}
        >
          <FaBars />
        </Button>
        <Nav.Start className='p-3'>
          <Link to='/' className='h-full'>
            <img
              src='20220926_120858_0001.png'
              // width={150}
              // height={10}
              className='w-20  md:w-36 md:h-14 '
              alt='logo'
            />
            <img
              src='20220926_120858_0001.png'
              // width={150}
              // height={10}
              className='w-20  hidden'
              alt='logo'
            />
          </Link>
        </Nav.Start>
        <Nav.Center>
          <Menu className='p-[0px] hidden  md:flex'>
            <div className='menu-horizontal space-x-3'>
              <Menu.Item>
                <NavLink
                  className={({ isActive }) =>
                    !isActive
                      ? 'border-inherit'
                      : 'border-b-[3px] border-b-blue-500'
                  }
                  to='/'
                >
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  className={({ isActive }) =>
                    !isActive
                      ? 'border-inherit'
                      : 'border-b-[3px] border-b-blue-500'
                  }
                  to='/products/category/all'
                >
                  Products
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    !isActive
                      ? 'border-inherit'
                      : 'border-b-[3px] border-b-blue-500'
                  }
                >
                  About
                </NavLink>
              </Menu.Item>
              {user && (
                <Menu.Item>
                  <NavLink
                    to='/checkout'
                    className={({ isActive }) =>
                      !isActive
                        ? 'border-inherit'
                        : 'border-b-[3px] border-b-blue-500'
                    }
                  >
                    Checkout
                  </NavLink>
                </Menu.Item>
              )}
            </div>
          </Menu>
        </Nav.Center>
        <Nav.End className='lg:space-x-5 space-x-3 '>
          <Link to='/cart'>
            <Button className='relative space-x-1'>
              <FaCartPlus className='text-xl ' />
              <span className='hidden lg:inline-block'>Cart</span>
              <div className=' btn absolute -top-2 left-8 lg:-left-5 bg-orange-600 text-white btn-xs lg:btn-sm'>
                {amount || 0}
              </div>
            </Button>
          </Link>

          {isAuthenticated ? (
            <Button
              className='text-base'
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <FaSignOutAlt /> &nbsp;
              <span className='hidden md:inline-block'>Sign Out</span>
            </Button>
          ) : (
            <Button className='text-base' onClick={() => loginWithRedirect()}>
              <FaUserPlus /> &nbsp;
              <span className='hidden md:inline-block'>Sign In</span>
            </Button>
          )}
        </Nav.End>
      </Nav>
    </div>
  );
};

export default Navbar;

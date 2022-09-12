import React, { useState, useRef, useEffect } from 'react';
import { Navbar as Nav, Button, Menu } from 'react-daisyui';
import { FaBars, FaCartPlus, FaSignInAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useScrollDirection from './ScrollDirection';
import Sidebar from './Sidebar';
const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const direction = useScrollDirection();

  return (
    <div
      className={`sticky h-16 ${
        direction === 'show' ? 'top-0 backdrop-blur-sm' : '-top-[67]'
      } z-20 transition-all duration-1000`}
    >
      {isSideBar && <Sidebar setIsSideBar={setIsSideBar} />}
      <Nav
        className={`justify-around navbar  items-center shadow-md shadow-black`}
      >
        <Button className='md:hidden' onClick={() => setIsSideBar(!isSideBar)}>
          <FaBars />
        </Button>
        <Nav.Start className='p-3'>
          <Link to='/' className='whitespace-nowrap'>
            <h2>THE STORE</h2>
          </Link>
        </Nav.Start>{' '}
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
                  to='/products'
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
              <Menu.Item>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    !isActive
                      ? 'border-inherit'
                      : 'border-b-[3px] border-b-blue-500'
                  }
                >
                  Contact
                </NavLink>
              </Menu.Item>
            </div>
          </Menu>
        </Nav.Center>
        <Nav.End className='lg:space-x-5 space-x-3 '>
          <Link to='/cart'>
            <Button className='relative space-x-1'>
              <FaCartPlus className='text-xl ' />
              <span className='hidden md:inline-block'>Cart</span>
              <div className=' btn absolute -top-2 -left-6 bg-orange-600 text-white btn-sm'>
                0
              </div>
            </Button>
          </Link>
          <Link to='/auth'>
            <Button>
              <FaSignInAlt /> &nbsp; Sign In
            </Button>
          </Link>
        </Nav.End>
      </Nav>
    </div>
  );
};

export default Navbar;

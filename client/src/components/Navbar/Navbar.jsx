import React from 'react';
import { Navbar as Nav, Button, Menu } from 'react-daisyui';
import { FaBars, FaCartPlus, FaSignInAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <Nav className='justify-around  items-center shadow-md shadow-black'>
        <Button className='md:hidden'>
          <FaBars />
        </Button>
        <Nav.Start className='p-3'>
          <Link to='/' className='whitespace-nowrap'>
            <h2>THE STORE</h2>
          </Link>
        </Nav.Start>{' '}
        <Nav.Center>
          <Menu className='p-2 '>
            <div className='hidden md:menu-horizontal space-x-3'>
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
              <Button className='absolute -top-2 -left-6 bg-orange-600 text-white btn-sm'>
                0
              </Button>
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

import React from 'react';
import { Menu, Button } from 'react-daisyui';
import { FaHome, FaLandmark, FaStore, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Sidebar = ({ setIsSideBar }) => {
  return (
    <div
      className={
        'fixed py-10 bg-slate-600 min-h-screen w-2/4 top-0 left-0 z-10'
      }
    >
      <Menu className='h-full menu text-white items-center space-y-7 p-5 '>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              !isActive ? 'border-inherit' : 'border-b-[3px] border-b-blue-500'
            }
            to='/'
          >
            <FaHome />
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              !isActive ? 'border-inherit' : 'border-b-[3px] border-b-blue-500'
            }
            to='/products'
          >
            <FaStore />
            Products
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              !isActive ? 'border-inherit' : 'border-b-[3px] border-b-blue-500'
            }
          >
            <FaLandmark />
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              !isActive ? 'border-inherit' : 'border-b-[3px] border-b-blue-500'
            }
          >
            <FaUser />
            Contact
          </NavLink>
        </Menu.Item>
      </Menu>
      <Button
        onClick={() => setIsSideBar(false)}
        className='absolute top-2 p-2 bg-transparent text-red-600 right-2 text-xl'
      >
        <FaTimes />
      </Button>
    </div>
  );
};

export default Sidebar;

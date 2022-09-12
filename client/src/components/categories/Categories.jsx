import React from 'react';
import { Menu } from 'react-daisyui';
import { FaBox } from 'react-icons/fa';
import category from './category';
const Categories = () => {
  return (
    <div>
      <Menu>
        <Menu.Title>
          <FaBox /> Categories
        </Menu.Title>
        {category?.map((cat, i) => (
          <Menu.Item key={i} className='flex flex-row items-center'>
            <span className=' '>{<cat.icon />}</span>
            {cat.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Categories;

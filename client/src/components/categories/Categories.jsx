import React from 'react';
import { Menu } from 'react-daisyui';
import category from './category';
const Categories = () => {
  return (
    <div>
      <Menu className=''>
        <Menu.Title className='text-center font-bold border-b-2 pb-1 mb-3 border-b-[#8070d4]'>
          Categories
        </Menu.Title>

        {category?.map((cat, i) => (
          <Menu.Item
            key={i}
            className='flex btn justify-start my-1 flex-row items-center'
          >
            <span className='text-lg '>{<cat.icon />}</span>
            {cat.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Categories;

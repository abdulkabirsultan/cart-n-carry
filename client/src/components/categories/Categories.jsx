import React from 'react';
import { Menu } from 'react-daisyui';
import { useNavigate, useParams } from 'react-router-dom';
import category from './category';
const Categories = () => {
  const navigate = useNavigate();
  const categoryParam = useParams()?.category;
  const catName = categoryParam?.split('-').join(' ');
  const categoryHandler = (category) => {
    const catName = category.split(' ').join('-');
    navigate(`/products/category/${catName}`);
  };
  return (
    <div>
      <div className='menu menu-horizontal  md:block '>
        <Menu.Title className='hidden md:block text-center font-bold border-b-2 pb-1 mb-3 border-b-[#8070d4]'>
          Categories
        </Menu.Title>

        {category?.map((cat, i) => (
          <Menu.Item
            key={i}
            className={`${
              (catName === cat.name || categoryParam === cat.name) &&
              'bg-[#3B82F6] hover:bg-[#3B82F6]'
            } flex mr-3 md:mr-0 btn btn-xs md:btn-md justify-center md:justify-start my-1 flex-row items-center`}
            onClick={() => categoryHandler(cat.name)}
          >
            <span className='md:text-lg p-1 md:p-3'>{<cat.icon />}</span>
            {cat.name}
          </Menu.Item>
        ))}
      </div>
    </div>
  );
};

export default Categories;

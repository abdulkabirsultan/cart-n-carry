import React, { useState } from 'react';
import { Menu } from 'react-daisyui';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getAllProducts,
  getProductsByCategory,
} from '../../API-Actions/productActions';
import category from './category';
const Categories = () => {
  const dispatch = useDispatch();
  const [catName, setCatName] = useState('all');
  const navigate = useNavigate();
  const categoryHandler = (category) => {
    setCatName(category);
    if (category.toLowerCase() === 'all') {
      dispatch(getAllProducts());
      navigate(`/products/category/all?page=1`);
    } else {
      const catName = category.split(' ').join('-');
      dispatch(getProductsByCategory(category));
      navigate(`/products/category/${catName}`);
    }
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
              catName === cat.name && 'bg-[#3B82F6] hover:bg-[#3B82F6]'
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

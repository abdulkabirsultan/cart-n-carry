import React from 'react';
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
  const navigate = useNavigate();
  const categoryHandler = (category) => {
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
      <Menu className=''>
        <Menu.Title className='text-center font-bold border-b-2 pb-1 mb-3 border-b-[#8070d4]'>
          Categories
        </Menu.Title>

        {category?.map((cat, i) => (
          <Menu.Item
            key={i}
            className='flex btn justify-start my-1 flex-row items-center'
            onClick={() => categoryHandler(cat.name)}
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

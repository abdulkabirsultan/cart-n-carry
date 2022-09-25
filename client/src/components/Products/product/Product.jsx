import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from 'react-daisyui';
import { FaPlus, FaSearch, FaStar, FaStarHalf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProduct } from '../../../Features/cartSlice';
import { getProductsByCategory } from '../../../API-Actions/productActions';
const Product = ({ title, _id, price, rating, category, thumbnail }) => {
  const rate = parseInt(rating.toString().split('.')[1]?.split('')[0]) < 5;
  const { isLoading } = useSelector((store) => store?.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (_id) => {
    navigate(`/products/${category}/${_id}`);
    dispatch(getProductsByCategory(category));
  };
  const handleAdd = (e, id) => {
    e.stopPropagation();
    dispatch(toggleProduct({ id, operation: 'add' }));
  };
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <div>
        <Card
          className='relative card-compact h-full cursor-pointer shadow-lg px-3 md:shadow-xl'
          onClick={() => handleClick(_id)}
        >
          <div className='relative   group before:bg-[rgba(29,29,29,0.42)] before:opacity-100  before:h-0 before:left-0 before:bottom-0 before:w-full before:absolute hover:before:h-full before:transition-all '>
            <button className='btn btn-sm absolute w-0 transition-all group-hover:w-8 top-2/4 left-2/4 z-30 btn-circle invisible group-hover:visible text-white bg-[#5f4dbd] -translate-x-2/4'>
              <FaSearch />
            </button>
            {isLoading ? (
              <Skeleton className='h-60 w-full' />
            ) : (
              <Card.Image
                src={thumbnail}
                className='md:w-80 w-full h-40 md:h-48 '
                alt={title}
              />
            )}
          </div>
          <Card.Body className='cursor-default'>
            {isLoading ? (
              <Skeleton />
            ) : (
              <Card.Title
                tag='h2'
                className='text-sm font-bold md:text-base lg:text-lg'
              >
                {title}
              </Card.Title>
            )}
            {isLoading ? (
              <Skeleton />
            ) : (
              <p className='flex items-center'>
                <span
                  className={`inline-flex text-orange-400 ${
                    rate ? 'mr-[2px]' : 'mr-2'
                  } `}
                >
                  {Array.from({ length: rating - 1 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                  {rate ? <FaStarHalf /> : <FaStar />}
                </span>
                {rating}
              </p>
            )}
            <p className='text-base text-info lg:text-lg font-bold'>
              {isLoading ? <Skeleton /> : ` $${price}`}
            </p>
            <Card.Actions
              className='card-actions cursor-default justify-end'
              onClick={(e) => e.stopPropagation()}
            >
              <button className='btn btn-sm' onClick={(e) => handleAdd(e, _id)}>
                <FaPlus />
              </button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </SkeletonTheme>
  );
};

export default Product;

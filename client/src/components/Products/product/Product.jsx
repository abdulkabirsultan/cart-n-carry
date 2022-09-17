import React from 'react';
import { Card } from 'react-daisyui';
import { FaPlus, FaSearch, FaStar, FaStarHalf } from 'react-icons/fa';

const Product = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {
  const rate = parseInt(rating.toString().split('.')[1]?.split('')[0]) < 5;
  return (
    <div>
      <Card className='relative group card-compact h-full shadow-lg px-3 md:shadow-xl'>
        <div className='relative cursor-pointer  before:bg-[rgba(29,29,29,0.42)] before:opacity-100  before:h-0 before:left-0 before:bottom-0 before:w-full before:absolute group-hover:before:h-full before:transition-all '>
          <button className='btn btn-sm absolute w-0 transition-all group-hover:w-8 top-2/4 left-2/4 z-30 btn-circle invisible group-hover:visible text-white bg-[#5f4dbd] -translate-x-2/4'>
            <FaSearch />
          </button>
          <Card.Image
            src={thumbnail}
            className='md:w-80 w-full h-40 md:h-48 '
            alt={title}
          />
        </div>
        <Card.Body>
          <Card.Title tag='h2'>{title}</Card.Title>
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
          <p>${price}</p>
          <Card.Actions className='card-actions justify-end'>
            <button className='btn btn-sm '>
              <FaPlus />
            </button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

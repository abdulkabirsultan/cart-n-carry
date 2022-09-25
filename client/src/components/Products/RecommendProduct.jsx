import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RecommendProduct = ({ products, id }) => {
  const navigate = useNavigate();
  const product = products.products;
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-10 mt-5 gap-5'>
      {product
        .filter((p) => p._id !== id)
        .map((p, i) => {
          const rate =
            parseInt(p.rating.toString().split('.')[1]?.split('')[0]) < 5;
          return (
            <div key={i}>
              <div
                className='lg:w-[80%] h-36 cursor-pointer md:h-44 lg:h-44'
                onClick={() => navigate(`/products/${p.category}/${p._id}`)}
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-sm mt-2'>{p.title}</p>
              <p className='flex items-center text-sm'>
                <span
                  className={`inline-flex text-orange-400 ${
                    rate ? 'mr-[2px]' : 'mr-2'
                  } `}
                >
                  {Array.from({ length: p.rating - 1 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                  {rate ? <FaStarHalf /> : <FaStar />}
                </span>
                <span>{p.rating}</span>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default RecommendProduct;

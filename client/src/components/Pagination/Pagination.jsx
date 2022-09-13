import React, { useState } from 'react';
import { Button } from 'react-daisyui';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import paginateFunc from './toArray';
const Pagination = () => {
  const { products } = useSelector((store) => store.products);
  const paginateCount = paginateFunc(products);
  const [index, setIndex] = useState(1);
  return (
    <div className='flex justify-center flex-wrap relative items-center my-6'>
      <span
        className='btn absolute md:static left-3 btn-xs btn-circle mr-6'
        onClick={() => setIndex(index <= 1 ? paginateCount.length : index - 1)}
      >
        <FaChevronLeft />
      </span>
      <div className='mx-9 md:mx-0 flex flex-wrap justify-center'>
        {paginateCount.map((p, i) => {
          const num = ++i;
          return (
            <Button
              key={num}
              className={`mr-2 mb-3 md:mb-0 btn-sm ${
                num === index && 'bg-[#33abdf] hover:bg-[#3ABFF8]'
              }`}
              onClick={() => setIndex(num)}
            >
              {p + 1}
            </Button>
          );
        })}
      </div>
      <span
        className='btn absolute md:static right-3 btn-xs btn-circle ml-4'
        onClick={() => setIndex(index >= paginateCount.length ? 1 : index + 1)}
      >
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagination;

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
    <div className='flex justify-center items-center my-6'>
      <span
        className='btn btn-xs btn-circle mr-5'
        onClick={() => setIndex(index <= 1 ? paginateCount.length : index - 1)}
      >
        <FaChevronLeft />
      </span>
      {paginateCount.map((p, i) => {
        const num = ++i;
        return (
          <Button
            key={num}
            className={`mr-2 btn-sm ${
              num === index && 'bg-[#33abdf] hover:bg-[#3ABFF8]'
            }`}
            onClick={() => setIndex(num)}
          >
            {p + 1}
          </Button>
        );
      })}
      <span
        className='btn btn-xs btn-circle ml-3'
        onClick={() => setIndex(index >= paginateCount.length ? 1 : index + 1)}
      >
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagination;

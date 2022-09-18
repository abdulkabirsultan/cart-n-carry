/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../../API-Actions/productActions';
import paginateFunc from './toArray';

const Pagination = () => {
  const [searchParams] = useSearchParams();
  //? When 'all' category is clicked, change the index in pagination to index 1 if the index is currently on different number say index 8;
  const firstPage = searchParams.get('page') === '1' && 1; //* Good approach
  // const firstPage = useLocation().search?.split('=')[1]; //! Bad approach
  const { products } = useSelector((store) => store.products);
  const paginateCount = paginateFunc(products);
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts(page));
    navigate(`/products/category/all?page=${page}`);
  }, [page]);

  //* when category is set to all
  useEffect(() => {
    if (firstPage) {
      setIndex(parseInt(firstPage));
      return;
    }
  }, [firstPage]);

  useEffect(() => {
    setPage(index);
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [index]);

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
                num === page && 'bg-[#33abdf] hover:bg-[#3ABFF8]'
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

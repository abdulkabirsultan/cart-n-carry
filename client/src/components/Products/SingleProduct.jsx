/* eslint-disable react-hooks/exhaustive-deps  */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-daisyui';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleProduct } from '../../API-Actions/productActions';
import { toggleProduct } from '../../Features/cartSlice';
import RecommendProduct from './RecommendProduct';
const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [id]);
  const { singleProduct, products, isLoading } = useSelector(
    (store) => store?.products
  );
  const [src, setSrc] = useState('');
  return (
    <div className='pt-5 mb-5 px-5'>
      <Link to={-1}>
        <button className='btn btn-sm md:btn-md btn-secondary ml-3 md:ml-5 mb-5'>
          Back to Products
        </button>
      </Link>
      {singleProduct.map((product, i) => {
        const {
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
          _id,
        } = product;
        const rate =
          parseInt(rating.toString().split('.')[1]?.split('')[0]) < 5;

        return (
          <div key={i}>
            <SkeletonTheme baseColor='#202020' highlightColor='#444'>
              <section className='grid gap-8 h-full grid-cols-1 mb-5 md:grid-cols-2 '>
                <div>
                  <Card className='md:p-3'>
                    {isLoading ? (
                      <Skeleton className='h-60 w-full' />
                    ) : (
                      <Card.Image
                        src={src || thumbnail}
                        alt={title}
                        className='w-full h-96 object-contain'
                      />
                    )}
                  </Card>

                  <Card.Actions>
                    <div className='flex space-x-5 my-2 md:my-3 justify-evenly w-full'>
                      {images?.map((im, i) => (
                        <div
                          className={`w-24 rounded-lg hover:scale-105 ${
                            src === im && 'border-2 border-yellow-600'
                          }`}
                          key={i}
                          onClick={() => setSrc(im)}
                        >
                          <img
                            src={im}
                            alt={title}
                            className='rounded-lg object-cover w-full h-full cursor-pointer'
                          />
                        </div>
                      ))}
                    </div>
                  </Card.Actions>
                </div>
                <div className=''>
                  <h5 className=' lg:tracking-wide mb-3'>
                    <span className='text-primary bold'>Category:</span>{' '}
                    {category.toUpperCase()}
                  </h5>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl mb-3 md:pr-12 lg:pr-20 tracking-wide whitespace-normal capitalize'>
                    {isLoading ? <Skeleton /> : title}
                  </h1>
                  {isLoading ? (
                    <Skeleton count={2} />
                  ) : (
                    <>
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
                        <span className='text-lg'>{rating}</span>
                      </p>
                      <p>
                        <span className='text-primary bold'>Brand:</span>{' '}
                        {brand}
                      </p>
                    </>
                  )}
                  {isLoading ? (
                    <Skeleton height={50} />
                  ) : (
                    <div className='space-x-1 flex'>
                      <h1 className='text-4xl md:text-5xl lg:text-6xl my-2 font-bold'>
                        ${price}
                      </h1>
                      <span className='font-bold text-red-600'>
                        {discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                  {isLoading ? (
                    <Skeleton className='mt-3' count={3} height={25} />
                  ) : (
                    <>
                      <p className='text-xl mb-3 font-bold'>Stock: {stock}</p>
                      <p className='md:text-xl'>{description}</p>
                      <button
                        className='btn mt-3 btn-info btn-sm'
                        onClick={() =>
                          dispatch(toggleProduct({ id: _id, operation: 'add' }))
                        }
                      >
                        add to cart
                      </button>
                    </>
                  )}
                </div>
              </section>
            </SkeletonTheme>
          </div>
        );
      })}
      {products.products && (
        <aside>
          <h1>Similar Products:</h1>
          <hr />
          <RecommendProduct products={products} id={id} />
        </aside>
      )}
    </div>
  );
};

export default SingleProduct;

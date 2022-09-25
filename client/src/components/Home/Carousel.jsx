import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaPlus, FaSearch, FaStar, FaStarHalf } from 'react-icons/fa';
import heroCarousel, { flashSale } from './hero';
import { Card } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleProduct } from '../../Features/cartSlice';
import { getProductsByCategory } from '../../API-Actions/productActions';
const Carousel = () => {
  const navigate = useNavigate();
  return (
    <CarouselProvider
      className='w-full '
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={heroCarousel.length}
      isPlaying={true}
      interval={3000}
      infinite={true}
    >
      <Slider>
        {heroCarousel.map((car, i) => {
          return (
            <Slide index={i} key={i} className='h-full'>
              <div className='w-full gap-5 flex p-10 py-5 h-full'>
                <div className=''>
                  <h1 className='font-bold text-4xl tracking-wider leading-normal uppercase mb-5'>
                    50% OFF for your first shopping
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem error doloribus, fuga deserunt praesentium
                    velit eos at excepturi dignissimos ducimus.
                  </p>
                  <button
                    className='btn btn-wide bg-red-600 mt-7 text-slate-200'
                    onClick={() =>
                      navigate(`/products/category/${car.category}`)
                    }
                  >
                    view collections
                  </button>
                </div>

                <img
                  src={car.src}
                  alt={car.alt}
                  className={`w-[42%] ${
                    car.rotate && 'rotate-12'
                  } object-contain h-full`}
                />
              </div>
            </Slide>
          );
        })}
      </Slider>
      <div className='flex justify-center items-center space-x-5'>
        {heroCarousel.map((_, i) => (
          <Dot
            slide={i}
            key={i}
            className={`w-4 inline-block h-4 rounded-full bg-gray-600`}
          />
        ))}
      </div>
    </CarouselProvider>
  );
};
export default Carousel;

export const FlashCarousel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (_id, category) => {
    navigate(`/products/${category}/${_id}`);
    dispatch(getProductsByCategory(category));
  };
  const handleAdd = (e, id) => {
    e.stopPropagation();
    dispatch(toggleProduct({ id, operation: 'add' }));
  };
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 h-full p-5 place-items-center'>
        {flashSale.map((flash, i) => {
          const { thumbnail, title, rating, price, category, _id } = flash;
          const rate =
            parseInt(rating.toString().split('.')[1]?.split('')[0]) < 5;

          return (
            <Card
              key={i}
              className='relative card-compact h-full cursor-pointer shadow-lg w-[100%] md:shadow-xl'
              onClick={() => handleClick(_id, category)}
            >
              <div className='relative   group before:bg-[rgba(29,29,29,0.42)] before:opacity-100  before:h-0 before:left-0 before:bottom-0 before:w-full before:absolute hover:before:h-full before:transition-all '>
                <button className='btn btn-sm absolute w-0 transition-all group-hover:w-8 top-2/4 left-2/4 z-30 btn-circle invisible group-hover:visible text-white bg-[#5f4dbd] -translate-x-2/4'>
                  <FaSearch />
                </button>
                <Card.Image
                  src={thumbnail}
                  className='h-40 md:h-36 object-cover w-full'
                  alt={title}
                />
              </div>
              <Card.Body className='cursor-default -space-y-2'>
                <Card.Title tag='h2' className='text-sm font-bold '>
                  {title}
                </Card.Title>
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
                <p className='text-base text-error-content font-bold'>
                  ${price}
                </p>
                <Card.Actions
                  className='card-actions cursor-default justify-end'
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className='btn btn-xs'
                    onClick={(e) => handleAdd(e, _id)}
                  >
                    <FaPlus />
                  </button>
                </Card.Actions>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export const SmCarousel = () => {
  const navigate = useNavigate();
  return (
    <CarouselProvider
      className='w-full h-full'
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={heroCarousel.length}
      isPlaying={true}
      interval={4000}
      infinite={true}
    >
      <Slider className='pb-28 h-full'>
        {heroCarousel.map((car, i) => {
          return (
            <Slide index={i} key={i} className='h-full'>
              <div className='w-full justify-center items-center gap-5 flex-col-reverse flex p-3 py-5 h-full'>
                <div className=' px-5'>
                  <h1 className='font-bold text-xl md:text-3xl tracking-wide leading-normal uppercase mb-2'>
                    50% OFF for your first shopping
                  </h1>
                  <p className='text-sm md:text-xl pr-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem error doloribus, fuga deserunt praesentium
                    velit eos at excepturi dignissimos ducimus.
                  </p>
                  <button
                    className='btn btn-sm md:btn-md btn-wide bg-red-600 mt-5 md:mt-8 text-slate-200'
                    onClick={() =>
                      navigate(`/products/category/${car.category}`)
                    }
                  >
                    view collections
                  </button>
                </div>

                <img
                  src={car.src}
                  alt={car.alt}
                  className={`w-[90%] h-full md:h-[80%] object-cover`}
                />
              </div>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};

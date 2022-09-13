import React from 'react';
import { Card } from 'react-daisyui';
import { FaPlus } from 'react-icons/fa';

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
  return (
    <div>
      <Card className='card-compact h-full shadow-lg px-3 md:shadow-xl'>
        <Card.Image
          src={thumbnail}
          className='md:w-80 h-40 md:h-48'
          alt={title}
        />
        <Card.Body>
          <Card.Title tag='h2'>{title}</Card.Title>
          <p>{rating}</p>
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

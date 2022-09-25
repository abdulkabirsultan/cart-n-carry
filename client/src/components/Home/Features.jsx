import React from 'react';

const Features = ({
  icon,
  title,
  description = 'we offer competitive prices on our 100 million plus products of any range',
}) => {
  return (
    <div className='card card-bordered md:w-[46%] lg:w-auto dark:border-green-900 text-center shadow-2xl'>
      <div className='card-body'>
        <div className='mx-auto p-5 bg-[#c3c4ce] rounded-full text-2xl text-black'>
          {icon}
        </div>
        <h1 className='text-xl font-bold capitalize'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Features;

import React from 'react';

const About = () => {
  return (
    <section className='h-screen grid content-center gap-2 grid-cols-1 px-5 lg:px-10 pt-28 mb-20 lg:grid-cols-2'>
      <div>
        <img src='bb359c40-d4f1-4179-b4a9-6e6a762373f9.jpg-output.png' alt='' />
      </div>
      <div>
        <h1 className='text-2xl font-bold text-info uppercase lg:text-4xl mb-2'>
          Our Story
        </h1>
        <div className='h-1 w-10 lg:w-20 bg-secondary mb-5'></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus quis commodi blanditiis impedit aliquid saepe ducimus
          culpa mollitia tempore debitis quasi quibusdam doloribus aliquam
          adipisci, magni quam accusamus consequuntur nihil voluptatem itaque,
          asperiores perferendis laudantium natus. Quo repudiandae, rem, labore
          repellat dolorem nisi a iusto, eos inventore doloribus dolorum
          eveniet.
        </p>
      </div>
    </section>
  );
};

export default About;

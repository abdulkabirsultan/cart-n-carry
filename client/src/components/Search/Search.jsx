import React, { useState } from 'react';
import { Button, Form } from 'react-daisyui';

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      console.log(search);
    }
    setSearch('');
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className='w-[90%] flex space-x-2 mt-5  mx-auto'
    >
      <input
        type='search'
        className='input w-full input-bordered border-4'
        name=''
        id=''
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='e.g phones, jewelry, watch etc..'
      />
      <Button className='md:btn-wide'>Search</Button>
    </Form>
  );
};

export default Search;

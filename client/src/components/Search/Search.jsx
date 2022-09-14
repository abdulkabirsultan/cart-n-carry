import React, { useState } from 'react';
import { Button, Form } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/products/search?search=${search}`);
    }
    setSearch('');
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className='w-[90%] lg:max-w-[70%] flex space-x-2 mt-5 mx-auto'
    >
      <input
        type='search'
        className='input w-full input-bordered border-4'
        name=''
        id=''
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='e.g Ring'
        onKeyDown={(e) => e.key === 'enter' && handleSubmit()}
      />
      <Button className='md:btn-wide'>Search</Button>
    </Form>
  );
};

export default Search;

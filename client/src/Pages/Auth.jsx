import React, { useState } from 'react';
import { loginUser, registerUser } from '../API-Actions/userAction';

const Auth = () => {
  const [isSignin, setIsSignin] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const initialValue = {
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };
  const [fields, setFields] = useState(initialValue);
  const handleChange = (e) => {
    setErrMsg('');
    const name = e.target.name;
    setFields({ ...fields, [name]: e.target.value });
  };
  const { password, firstName, lastName, email } = fields;
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = '';
    setFields({ ...fields, name: `${fields.firstName} ${fields.lastName}` });
    if (!isSignin) {
      if (fields.email && fields.firstName) {
        const name = `${fields.firstName} ${fields.lastName}`;
        err = registerUser({ name, ...fields }).then((msg) => {
          setErrMsg('Email already registered');
          return msg;
        });
      }
    } else {
      if (fields.email) {
        err = loginUser(fields).then((msg) => {
          setErrMsg(msg);
          return msg;
        });
      }
    }
    setFields(initialValue);
    err.then((msg) => {
      if (!msg) {
        window.history.back(1);
      }
    });
  };
  return (
    <div className='font-mono grid content-center h-full bg-gray-400'>
      {/* <!-- Container --> */}
      <div className='container mx-auto  h-full'>
        <div className='flex justify-center px-6 my-12'>
          {/* <!-- Row --> */}
          <div className='w-full justify-center max-w-3xl flex'>
            <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pt-4 text-2xl text-center whitespace-nowrap font-bold text-black'>
                {isSignin ? 'Login' : 'Create an Account!'}
              </h3>
              <form
                className='px-8 pt-6 pb-8 mb-4 bg-white rounded'
                onSubmit={handleSubmit}
              >
                {!isSignin && (
                  <div className='mb-4 md:flex md:justify-between'>
                    <div className='mb-4 md:mr-2 md:mb-0'>
                      <label
                        className='block mb-2 text-sm font-bold text-gray-700'
                        htmlFor='firstName'
                      >
                        First Name
                      </label>
                      <input
                        className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id='firstName'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='md:ml-2'>
                      <label
                        className='block mb-2 text-sm font-bold text-gray-700'
                        htmlFor='lastName'
                      >
                        Last Name
                      </label>
                      <input
                        className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                        id='lastName'
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-sm font-bold text-gray-700'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                    required
                    name='email'
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className=' md:flex md:justify-between'>
                  <div className={`mb-4 md:mr-2 md:mb-0 w-full`}>
                    <label
                      className='block mb-2 text-sm font-bold text-gray-700'
                      htmlFor='password'
                    >
                      Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='******************'
                      required
                      name='password'
                      value={password}
                      onChange={handleChange}
                      autoComplete='true'
                    />
                  </div>
                </div>
                <p className='text-red-700 tracking-normal text-sm text-center mb-2'>
                  {errMsg}
                </p>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    {isSignin ? 'Login' : 'Register Account'}
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <button
                    type='button'
                    className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                    onClick={() => setIsSignin(!isSignin)}
                  >
                    {isSignin
                      ? 'Dont have an account? Sign up!'
                      : ' Already have an account? Login!'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

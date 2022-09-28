import axios from 'axios';

export const registerUser = async (userDetails) => {
  try {
    const { data } = await axios.post(
      'http://localhost:5000/auth/register',
      userDetails
    );
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.log(error.response);
    return error.response.data;
  }
};
export const loginUser = async (userDetails) => {
  try {
    const { data } = await axios.post(
      'http://localhost:5000/auth/login',
      userDetails
    );
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.log(error.response);
    return error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/';
};

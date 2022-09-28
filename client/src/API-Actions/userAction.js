import axios from 'axios';

export const registerUser = async (userDetails) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_AUTH}/register`,
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
      `${process.env.REACT_APP_SERVER_AUTH}/login`,
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

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:7000/admin/employelogin', values);
      const {token } = result.data; 
      localStorage.setItem('employetoken', token); 
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:max-w-xl">
        <img src="https://t3.ftcdn.net/jpg/02/49/05/82/360_F_249058233_0MIaTy9WXtKHF0eacUSg9c3hkV9ehIbX.jpg" className="w-60 h-auto  mx-auto" alt="Logo" />
        <h1 className="text-3xl text-center text-gray-900 font-bold">Welcome To Teamwork, Login Here!</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md"
              onChange={handleChange}
              required
            />
          </div>
          {error && <h5 className="text-red-500 text-sm mt-2">{error}</h5>}
          <div className="mt-6 flex justify-center">
            <button className="w-3/4 items-end px-4 py-2 text-white bg-[#6643b5] rounded-md" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;



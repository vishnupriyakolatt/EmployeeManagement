import React, { useState } from 'react';
import AdminNavbar from '../../Components/Adminnavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Employeadd() {
  const [selectedValue, setSelectedValue] = useState('');
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    empcode: "",
    email: "",
    contactno: "",
    empimage: "",
    department: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleclick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/admin/addemploye', employee);
      navigate('/admin/home');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-white flex">
    
      <div className="min-w-screen min-h-screen bg-white flex justify-center items-center">
        <div className="w-full lg:max-w-lg">
          <form onSubmit={handleclick} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col items-center">
         
          <h1 className="text-3xl text-center text-gray-900 font-bold mb-2">Adding employees</h1>
          <div className="flex flex-col gap-4 items-center">
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">First Name</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="firstname" onChange={handleChange} placeholder="Jane Doe" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Last Name</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"onChange={handleChange}  name="lastname"placeholder="Doe" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Empcode</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={handleChange}  name="empcode" placeholder="1234" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Email</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" name="email" onChange={handleChange}  placeholder="jane.doe@example.com" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Contact No</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="contactno" onChange={handleChange} placeholder="123-456-7890" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="countries">Choose a Department</label>
              </div>
              <div className="md:w-2/3">
                <select id="countries" name='department' value={selectedValue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected disabled>Choose a Department</option>
                  <option value="FS">Full stack developer</option>
                  <option value="BD">Backend developer</option>
                  <option value="FD">Frontend developer</option>
                  <option value="UX">UI/UX designer</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-2">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Image</label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="empimage" onChange={handleChange} placeholder="123-456-7890" />
              </div>
            </div>
            <div className="relative">
              <label title="Click to upload" htmlFor="button2" className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <div className="w-max relative">
                  <img className="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512" />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">Upload a file</span>
                  <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
                </div>
              </label>
              <input hidden type="file" name="button2" id="button2" />
            </div>
            <button type="submit" className="btn border-black rounded-md px-6 py-3 bg-gray-900 text-white font-bold text-lg">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Employeadd;

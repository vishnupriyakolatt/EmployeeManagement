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
    department: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      department: event.target.value,
    }));
  };

  

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/admin/addemploye', employee);
      console.log(response.data); 
      navigate('/admin/home');
    } catch (error) {
      console.error(error);
     
    }
  };


  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <AdminNavbar />
      <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto mt-0 text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center mt-10">
                <form onSubmit={handleclick} className="bg-white px-8 pt-6 pb-8 flex flex-col items-center">
                  <h1 className="text-3xl text-center text-gray-900 font-bold mb-4">Add Employee Details</h1>

                
                    <img className="rounded-full w-36 h-auto mb-3" src="https://cdn.vectorstock.com/i/500p/81/63/default-avatar-photo-placeholder-icon-grey-vector-38508163.jpg" alt="default logo" />
                 


                

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input className="border border-black rounded-md px-4 py-2 mb-2 text-black" name="firstname" type="text" value={employee.firstname} onChange={handleChange} placeholder="Enter your First name" />
                    </div>
                    <div className="flex items-center">
                      <input className="border border-black rounded-md px-4 py-2 mb-2 text-black" name="lastname" type="text" value={employee.lastname} onChange={handleChange} placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input className="border border-black rounded-md px-4 py-2 mb-2 text-black" name="empcode" type="text" value={employee.empcode} onChange={handleChange} placeholder="Enter your empcode" />
                    </div>
                    <div className="flex items-center">
                      <input className="border border-black rounded-md px-4 py-2 mb-2 text-black" name="email" type="email" value={employee.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input className="border border-black rounded-md px-4 py-2 mb-2 text-black mr-2" name="contactno" type="tel" value={employee.contactno} onChange={handleChange} placeholder="Enter your mobileno" />
                  </div>

                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="department" value={selectedValue} onChange={handleSelectChange}>
                  <option selected >Choose a Department</option>
                  <option disabled>Choose a Department</option>
                    <option value="Full stack developer">Full stack developer</option>
                    <option value="Backend developer">Backend developer</option>
                    <option value="Frontend developer">Frontend developer</option>
                    <option value="UI/UX designer">UI/UX designer</option>
                </select>

                  <button type="submit" className="btn border-black rounded-md px-6 py-3 mb-2 bg-gray-900 text-white font-bold text-lg mt-4" >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeadd;

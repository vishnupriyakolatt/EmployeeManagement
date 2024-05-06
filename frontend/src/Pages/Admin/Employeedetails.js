import React, { useEffect, useState } from "react";
import axios from 'axios';
import AdminNavbar from "../../Components/Adminnavbar";
import { Link } from "react-router-dom";

function Employeedetails() {
  const [employees, setEmployees] = useState([]);
  const fetchAllEmployees = async () => {
    console.log("fetching")
    try {
      const res = await axios.get('http://localhost:7000/admin/allemploye'); 
      setEmployees(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   
    fetchAllEmployees();
  }, []);

  const handleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:7000/admin/employe/${id}`).then((res)=>{
        console.log(res)
        fetchAllEmployees()
      })
 

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <AdminNavbar/>
      <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Employees</h2>
          <Link to='/admin/add'>
             <button>ADD</button>
          </Link>
            </header>
            <div className="p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Empcode</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Profile</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">First Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Department</div>
                    </th>
                    <th className="p-2 whitespace-nowrap"></th>
                    <th className="p-2 whitespace-nowrap"></th>
                    <th className="p-2 whitespace-nowrap"></th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td className="p-2 whitespace-nowrap">{employee.empcode}</td>
                      <td className="p-2 whitespace-nowrap">{employee.empimage}</td>
                      <td className="p-2 whitespace-nowrap">{employee.firstname}</td>
                      <td className="p-2 whitespace-nowrap">{employee.department}</td>
                      <td className="text-right px-6 ">
                        <Link to={`/admin/employview/${employee.empid}`}>
                          <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                            VIEW
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(employee.empid)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeedetails;

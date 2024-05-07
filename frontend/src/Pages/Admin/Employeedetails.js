import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminNavbar from "../../Components/Adminnavbar";

function Employeedetails() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const fetchAllEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:7000/admin/allemploye'); 
      setEmployees(res.data);
      setFilteredEmployees(res.data); // Initialize filtered employees with all employees
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7000/admin/employe/${id}`);
      console.log(response);
      await fetchAllEmployees(); 
      window.location.reload(); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = employees.filter(employee =>
      employee.department.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <AdminNavbar/>
      <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto mt-0 text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center mt-10">
                <input
                  type="search"
                  name="search"
                  placeholder="Search by Department"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border mr-2 border-gray-300"
                  onChange={handleSearch}
                  value={searchQuery}
                />
              <Link to='/admin/add'> <button
        class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       ADD
      </button></Link> 
              </div>
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
                    {filteredEmployees.map((employee) => (
                      <tr key={employee.id}>
                        <td className="p-2 whitespace-nowrap">{employee.empcode}</td>
                        <td className="p-2 whitespace-nowrap">
                          <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5v5WuE2377LUfhQYhItHf1nMPUdKISGVeKz_rp6FaA&s'}
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                          />
                        </td>
                        <td className="p-2 whitespace-nowrap">{employee.firstname}</td>
                        <td className="p-2 whitespace-nowrap">{employee.department}</td>
                        <td className="text-right px-6">
                          <Link to={`/admin/employview/${employee.empid}`}>
                            <button className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md mr-2" type="button">
                              View
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(employee.empid)}
                            className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                          >
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
    </div>
  );
}

export default Employeedetails;

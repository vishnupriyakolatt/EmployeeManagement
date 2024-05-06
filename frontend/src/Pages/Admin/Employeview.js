import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Employeview() {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    empcode: '',
    email: '',
    contactno: '',
    department: '',
    empimage: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/admin/employe/${id}`);
      console.log('Response:', response.data); 
      setFormData(response.data); 
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:7000/admin/employe/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data); // Log the response data
      console.log('Employee updated');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); 

  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <div>
        <div>
          <h1>Updating employees</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>
          
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employeview;

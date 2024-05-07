import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';


import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    empcode: '',
    contactno: '',
    department: '',
    password: '',
    empimage: '',
    email: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('employetoken');
        if (!token) {
          console.error('Token not found in localStorage.');
          return;
        }

        
        const response = await axios.get(`http://localhost:7000/admin/profile/${token}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setFormData({ ...response.data });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
  
    fetchProfile();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <Fragment> {/* Use Fragment */}
        {/* Your existing JSX code */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <p>First Name: {formData.firstname}</p>
          </div>
          <div className="flex items-center">
            <p>Last Name: {formData.lastname}</p>
          </div>
          {/* Display other profile fields similarly */}
        </div>
        {/* Your existing JSX code */}
      </Fragment>
    </div>
  );
}

export default Profile;

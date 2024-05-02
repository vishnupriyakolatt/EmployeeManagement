import React from 'react';
import {Routes,Route} from "react-router-dom";

import AdminNavbar from '../Components/Adminnavbar';
import Login from '../Pages/Admin/Login';
import Employeedetails from '../Pages/Admin/Employeedetails';
import Departmentdetails from '../Pages/Admin/Departmentdetails';


function adminRoutes() {
  return (
    <frgment>
<Routes>

    <Route path='/' element={<AdminNavbar />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/empdetails' element={<Employeedetails />} />
    <Route path='/depdetails' element={<Departmentdetails/>} />
  </Routes>
    </frgment>
    
  )
}

export default adminRoutes
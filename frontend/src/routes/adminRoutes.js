import React from 'react';
import {Routes,Route} from "react-router-dom";

import Login from '../Pages/Admin/Login';
import Employeedetails from '../Pages/Admin/Employeedetails';

import Home from '../Pages/Admin/Home'
import Employeadd from '../Pages/Admin/Employeadd';
import Employeupdate from '../Pages/Admin/Employeupdate';
import Employeview from '../Pages/Admin/Employeview';

function adminRoutes() {
  return (
    // <fragment>
<Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/add' element={<Employeadd />} />
    <Route path='/empdetails' element={<Employeedetails/>} />
    <Route path='/update' element={<Employeupdate/>} />
    <Route path='/employview/:id' element={<Employeview/>} />

  </Routes>
    // </fragment>
    
  )
}

export default adminRoutes
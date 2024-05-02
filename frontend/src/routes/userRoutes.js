import React from 'react';
import {Routes,Route} from "react-router-dom";

import Employenavbar from '../Components/Employenavbar';
import Employelogin from '../Pages/Employe/Employelogin';
import Profile from '../Pages/Employe/Profile';


function userRpoutes() {
  return (
    <frgment>
<Routes>
    <Route path='/' element={<Employenavbar />} />
    <Route path='/login' element={<Employelogin />} />
    <Route path='/profile' element={<Profile/>} />
  </Routes>
    </frgment>
    
  )
}

export default userRpoutes
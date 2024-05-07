import React from 'react';
import {Routes,Route} from "react-router-dom";
import Employenavbar from '../Components/Employenavbar';
import Employelogin from '../Pages/Employe/Employelogin';
import Profile from '../Pages/Employe/Profile';

import Home from '../Pages/Employe/Home';


function userRpoutes() {
  return (
    <fragment>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Employelogin/>} />

    <Route path='/profile' element={<Profile/>} />
  </Routes>
    </fragment>
    
  )
}

export default userRpoutes
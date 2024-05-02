import React from 'react'

function Login() {
  return (

    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
             <img src='https://www.cutehr.io/wp-content/uploads/2020/04/Employee-Management-affilate-page-1184x800.png' className='w-60 h-60 mx-auto'/>
         <h1 className="text-3xl  text-center text-gray-900 font-bold ">
                Welcome, Login Here!
             </h1>
             <form className="mt-6"  >
                 <div className="mb-2">
                     <label
                         for="email"
                         className="block text-sm font-semibold text-gray-900"
                     >
                         Email
                     </label>
                     <input
                         type="email"
                         name="email"
                         className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                         
                     />
                 </div>
                 <div className="mb-2">
                     <label
                         for="password"
                         className="block text-sm font-semibold text-gray-800"
                     
                     >
                         Password
                     </label>
                     <input
                         type="password"
                         className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                         
                         name="password"
                     />
                 </div>
                 <div className="mt-6">
                     <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md" type="submit">Login
                       
                     </button>
                   
                 </div>
             </form>
         </div>
     </div> 
 

  )
}

export default Login
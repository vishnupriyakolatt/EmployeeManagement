import React from 'react';
import AdminNavbar from '../../Components/Adminnavbar';
import logo from '../../image/logo.png'

function Home() {
  return (


    <div className="min-w-screen min-h-screen bg-white flex">
    <AdminNavbar/>
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img src={logo} className="w-full relative z-10" alt="" />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">HELLO, ADMIN</h1>
              <p className="font-bold  text-2xl mb-5">Welcome to Teamworker pvt solutions</p>
            </div>
            <div>
            <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://veloxsoftech.com/blog/wp-content/uploads/2021/04/Software-developer.jpg" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">SOFTWARE DEVELOPMENT</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Developer vs UI/UX design vs Web sesign</div>
</div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
 
  );
}

export default Home;

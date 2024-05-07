import React from 'react';
import { Link } from 'react-router-dom'; 
import Employenavbar from '../../Components/Employenavbar';

function Home() {
  return (
    <div>
      <Employenavbar />
      <div className="flex h-screen w-full justify-center items-center">
        <main className="flex flex-col flex-1 p-4">
          <section id="introPage" className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
            <div className="relative shadow-2xl grid place-items-center justify-items-start">
              <img src="https://www.paymentsjournal.com/wp-content/uploads/2022/08/4921280-scaled.jpg" alt="Cover Image" />
            </div>
            <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
              <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! vishnupriya <br />
                <span className="poppin text-2xl">Welcome to Teamwork Employement</span>{' '}
                <span className="poppins text-2xl">Platform</span>
              </h2>
            </div>
          </section>
        </main>
      </div>
     
    </div>
  );
}

export default Home;

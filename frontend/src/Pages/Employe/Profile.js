import React from 'react';

function Profile() {
  return (
    <div className="h-screen  bg-white pt-12">
      <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
        
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <button
              className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Follow
            </button>
            <button
              className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
              Message
            </button>
          </div>
        </div>
        
      </div>
    

    </div>
  );
}

export default Profile;

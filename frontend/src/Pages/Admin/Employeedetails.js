import React, { useState } from "react";

function Employeedetails() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  return (
 

    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="mt-3 md:mt-0">
            <button
              onClick={toggleAddModal}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add member
            </button>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          {/* Table content */}
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Employee Id</th>
                <th className="py-3 px-6">First Name</th>
                <th className="py-3 px-6">Last Name</th>
                <th className="py-3 px-6">Employee code</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Contact</th>
                <th className="py-3 px-6">Department</th>
                <th className="py-3 px-6"></th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              <tr>
               
                <td className="px-6 py-4 whitespace-nowrap">101</td>
                <td className="px-6 py-4 whitespace-nowrap">Anjana</td>
                <td className="px-6 py-4 whitespace-nowrap">Sasi</td>
                <td className="px-6 py-4 whitespace-nowrap">Emp001</td>
                <td className="px-6 py-4 whitespace-nowrap">Anju@gmail.com</td>
                <td className="px-6 py-4 whitespace-nowrap">987762345</td>
                <td className="px-6 py-4 whitespace-nowrap">Devel</td>
         
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={toggleEditModal}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </button>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Edit Member
                </h3>
                <button
                  onClick={closeModals}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div class="flex justify-center">
                <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col items-center">
                  <h6 class="text-3xl text-center text-gray-900 font-bold mb-4">
                    Book Your Parking Area
                  </h6>

                  <div class="flex flex-col gap-4">
                    <label class="label">
                      <input
                        class="input border-black rounded-md text-black"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </label>

                    <label class="label">
                      <input
                        class="input border-black rounded-md text-black"
                        type="text"
                        placeholder="Enter your car number"
                      />
                    </label>
                    <button
                      type="submit"
                      class="btn border-black rounded-md px-6 py-3 bg-gray-900 text-white font-bold text-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Add New Member
                </h3>
                <button
                  onClick={closeModals}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div class="flex justify-center">
                <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col items-center">
                  <h6 class="text-3xl text-center text-gray-900 font-bold mb-4">
                    Book Your Parking Area
                  </h6>

                  <div class="flex flex-col gap-4">
                    <label class="label">
                      <input
                        class="input border-black rounded-md text-black"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </label>

                    <label class="label">
                      <input
                        class="input border-black rounded-md text-black"
                        type="text"
                        placeholder="Enter your car number"
                      />
                    </label>
                    <button
                      type="submit"
                      class="btn border-black rounded-md px-6 py-3 bg-gray-900 text-white font-bold text-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default Employeedetails;

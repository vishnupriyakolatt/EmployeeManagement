import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Employenavbar from "../../Components/Employenavbar";

import axios from "axios";
import UploadWidget from "../../Components/UploadWidget.js";

function Profile() {
  const { id } = useParams();
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    empcode: "",
    contactno: "",
    department: "",
    password: "",
    empimage: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("employetoken");
      if (!token) {
        console.error("Token not found in localStorage.");
        return;
      }

      const response = await axios.get(
        `http://localhost:7000/admin/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
console.log(response.data)
      setFormData({ ...response.data });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const token = localStorage.getItem("employetoken");
      if (!token) {
        console.error("Token not found in localStorage.");
        return;
      }
      const response = await axios.put(
        "http://localhost:7000/admin/updateprofile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
      console.log("Employee updated");
      setEditable(false);
      fetchProfile()
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-white flex">
      <Employenavbar />
      <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto mt-0 text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="flex flex-col gap-2 text-center">
              <div className="flex justify-center mt-10">
                <form
                  className="bg-white px-8 pt-6 pb-8 flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-3xl text-center text-gray-900 font-bold mb-4">
                    Update Employee Details
                  </h1>
                  <img
                    className="rounded-full w-36 h-auto mb-2"
                    src={formData.empimage}alt="image description" 
                alt="userprofile"
                  />

                  {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4 p-4" id="file_input" type="file"/> */}

                  <UploadWidget setData={setFormData} edit={editable}/>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="firstname"
                        type="text"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="Enter your First name"
                        disabled={!editable}
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="lastname"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        disabled={!editable}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="empcode"
                        type="text"
                        value={formData.empcode}
                        onChange={handleChange}
                        placeholder="Enter your empcode"
                        disabled={!editable}
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        disabled={!editable}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="contactno"
                        type="text"
                        value={formData.contactno}
                        onChange={handleChange}
                        placeholder="Enter your contactno"
                        disabled={!editable}
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        className={`border border-black rounded-md px-4 py-2 mb-2 text-black ${
                          editable ? "" : "pointer-events-none bg-gray-200"
                        }`}
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        disabled={!editable}
                      />
                    </div>
                  </div>
                  <select
                    id="countries"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      editable ? "" : "pointer-events-none bg-gray-200"
                    }`}
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    disabled={!editable}
                  >
                    <option disabled>Choose a Department</option>
                    <option value="Full stack developer">
                      Full stack developer
                    </option>
                    <option value="Backend developer">Backend developer</option>
                    <option value="Frontend developer">
                      Frontend developer
                    </option>
                    <option value="UI/UX designer">UI/UX designer</option>
                  </select>
                  {!editable && (
                    <button
                      type="button"
                      onClick={() => setEditable(true)}
                      className="btn border-black rounded-md px-6 py-3 mb-2 bg-gray-900 text-white font-bold text-lg mt-4"
                    >
                      Update
                    </button>
                  )}
                  {editable && (
                    <button
                      type="submit"
                      className="btn border-black rounded-md px-6 py-3 mb-2 bg-gray-900 text-white font-bold text-lg mt-4"
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

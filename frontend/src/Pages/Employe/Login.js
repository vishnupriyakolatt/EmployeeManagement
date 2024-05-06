import React from 'react'

function Login() {
  return (
    <div><form>
<div className="mb-2 border border-gray-300 rounded-md">
  <input
    type="email"
    name="email"
    className="block w-full px-4 py-2 text-gray-900 bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"

  />
</div>
<div className="mb-2 border border-gray-300 rounded-md">
  <input
    type="password"
    name="password"
    className="block w-full px-4 py-2 text-gray-800 bg-white rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
 
  />
</div>
<div className="mt-6">
  <button
    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md"
    type="submit"
  >
    Login
  </button>
</div>


      
    </form>


    </div>
  )
}

export default Login
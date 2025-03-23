import React from 'react'
import { useNavigate } from 'react-router-dom';
const Landingpage = () => {
  const navigate = useNavigate(); 
    return (
        <div className="flex items-center lg:justify-center h-screen bg-gray-100 flex-col-reverse">
          <div className="w-full max-w-sm p-6 text-center bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-6 space-y-3">
              <button 
              onClick={()=>navigate('/signup')}
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700" >
                Create Account
              </button>
              <button 
              onClick={()=>navigate('/login')}
              className="w-full px-4 py-2 text-purple-700 bg-purple-200 rounded-lg hover:bg-purple-300">
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      );
    };


export default Landingpage
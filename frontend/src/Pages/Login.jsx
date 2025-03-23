import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore';

import toast from "react-hot-toast";
const Login = () => {
    const [formdata, setformData] = useState({
      email: "",
      password: "",
    });
  
    const { login} = useAuthStore();
  
    const validateForm = () => {
      if (!formdata.email.trim()) return toast.error("Email is required");
      if (!/\S+@\S+\.\S+/.test(formdata.email)) return toast.error("Invalid email format");
      if (!formdata.password) return toast.error("Password is required");
      if (formdata.password.length < 6) return toast.error("Password must be at least 6 characters");
      return true;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm() === true) login(formdata);
    };
    
    return (
        <div className="flex lg:items-center lg:justify-center h-screen bg-gray-100">
          <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
    
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={formdata.email}
                onChange={(e) => setformData({ ...formdata, email: e.target.value })}
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-purple-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={formdata.password}
                onChange={(e) => setformData({ ...formdata, password: e.target.value })}
                />
              </div>
    
              <button 
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-white bg-gray-400 rounded-lg cursor-not-allowed">
                Login
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Login
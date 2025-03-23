import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore';
import toast from "react-hot-toast";

const SignupPage = () => {
    const [isAgency, setIsAgency] = useState("yes");
    const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
    });
  
    const { signup} = useAuthStore();
    
    const validateForm = () => { 
      if (!form.name.trim()) return toast.error("Full name is required");
      if (!form.email.trim()) return toast.error("Email is required");
      if (!/\S+@\S+\.\S+/.test(form.email)) return toast.error("Invalid email format");
      if (!form.password) return toast.error("Password is required");
      if (form.password.length < 6) return toast.error("Password must be at least 6 characters");
      return true;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm() === true) signup(form);
    };
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="grid lg:grid-cols-2 gap-4  items-end">
            <div className="col-span-1 space-y-4">
          <div className="w-full max-w-xs p-6 bg-white shadow-lg rounded-lg">
            <h1 className="lg-text-2xl sm:text-lg font-bold text-gray-900">Create your PopX account</h1>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
            <div className="mt-6 space-y-4">
              
              <div>
                <label className="block lg:text-sm text-xs font-medium text-purple-700">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
    
              
              <div>
                <label className="block lg:text-sm text-xs font-medium text-purple-700">Phone Number *</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
    
             
              <div>
                <label className="block lg:text-sm text-xs font-medium text-purple-700">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
    
              
              <div>
                <label className="block lg:text-sm text-xs font-medium text-purple-700">Password *</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
    
              
              <div>
                <label className="block lg:text-sm text-xs font-medium text-purple-700">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
    
              
              <div>
                <label className="block lg:text-sm text-xs font-medium text-gray-700">Are you an Agency? *</label>
                <div className="flex items-center mt-1 space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      checked={isAgency === "yes"}
                      onChange={() => setIsAgency("yes")}
                      className="text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
    
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no"
                      checked={isAgency === "no"}
                      onChange={() => setIsAgency("no")}
                      className="text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>
    <div></div>
    </div>
              
              <div className="col-span-1 flex items-end">
      <button 
       onClick={handleSubmit}
      className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition">
        Create Account
      </button>
      <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
    </div>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default SignupPage
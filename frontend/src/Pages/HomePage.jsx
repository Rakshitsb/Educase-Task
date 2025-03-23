import React from 'react'
import { useAuthStore } from '../../store/authStore';

const HomePage = () => {
  const{authUser} =useAuthStore()
    return (
        <div className="flex lg:justify-center lg:items-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Account Settings
            </h2>
    
            
            <div className="flex items-center space-x-4 border-b pb-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold">{authUser?.name}</p>
                <p className="text-sm text-gray-500">{authUser?.email}</p>
              </div>
            </div>
    
            
            <p className="text-sm text-gray-600 mt-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
              Sed Diam.
            </p>
          </div>
        </div>
      );
    };

export default HomePage
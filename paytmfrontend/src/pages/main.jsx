import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
          navigate('/dashboard');
        }
      }, [navigate]);
    
    

    

  return (
    
    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-8 text-gray-100">Hello, welcome to PayTM</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
            navigate('/signIn')
        }}>
          Sign In
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
            navigate('/SignUp')
        }}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;

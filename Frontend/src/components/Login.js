import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from './Navbar1';

function Login() {

    const [phonenumber, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here (e.g., API call to authenticate the user)
      console.log('Login submitted:', { phonenumber, password });
    };
  return (
    <>
    <Navbar1/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        

        <div className="text-center">
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" class="rounded" alt="Image" width={300} height={200} />
       </div>



        <form onSubmit={handleLogin}>
          <div className="mb-4 text-center">
          <h5 className="text-2xl font-bold text-center mb-6">Sign Up to view your profile</h5>
            <label className="block text-gray-700 mb-2" htmlFor="number">
              Phone Number
            </label>
            <input
             
              id="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phonenumber}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 text-center">
            <label className="block text-gray-700 mb-2" htmlFor="password" style={{marginRight:30}}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
          >
            Login
          </button> */}




          <div className='btn btn-primary ' style={{display: "flex", justifyContent: "center", alignItems: "center",width:200, marginLeft:50}}>
            Continue
            </div> 





        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  
    </>
  )
}

export default Login

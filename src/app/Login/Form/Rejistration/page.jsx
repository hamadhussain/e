// // pages/register.js
"use client";
// import { useState } from 'react';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         alert('Registration successful');
//       } else {
//         throw new Error('Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//       <button
//         type="submit"
//         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         Register
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { RegistrationAction } from "../Action/page";
import F from "../../../Components/Footer/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "bottom-right",
    });
  };

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation here
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      setError("Please fill in all fields");
    } else {
      // Submit registration data to server or perform user registration
      console.log("Registration data:", registerData);
      await RegistrationAction(registerData);
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="flex justify-center items-center h-full shadow-2xl">
        <div
          className="bg-gray-
      100 bg-opacity-50 p-8 rounded-lg shadow-md w-96"
        >
          <h1 className=" uppercase text-3xl font-bold mb-1 tex-black text-center">
            Register Form
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className=" py-6">
            <div className="mb-8">
              {/* <label className="block text-gray-700">Username:</label> */}
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full border border-gray-300 bgwhite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-8">
              {/* <label className="block text-gray-700">Email:</label> */}
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-8">
              {/* <label className="block text-gray-700">Password:</label> */}
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
            onClick={()=>showToastMessage()}
            type="submit"
              className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      {/* <F /> */}
    </>
  );
};

export default Register;

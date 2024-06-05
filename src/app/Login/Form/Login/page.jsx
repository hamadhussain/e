// "use client";
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         alert('Login successful');
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       alert('Login failed');
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
//         Login
//       </button>
//       <p>
//         Don&apos;t have an account?
//         <Link href="/Form/Rejistration">Register</Link>
//       </p>
//     </form>
//   );
// }

// pages/login.js
"use client";
import Link from "next/link";
import { loginAction } from "../Action/page";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
    });
  };
const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation here
    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields");
    } else {
      // Submit login data to server or perform authentication
      console.log("Login data:", loginData);

      let p = "hello";
      // if (
      loginAction(loginData);
      //   ) {
      //   console.log("working");
      // }
    }
  };
  // useEffect(() => {
  //   // Effect code here
  // }, [loginData]);

  return (
    <div className="flex justify-center items-center shadow-2xl ">
      <div className="bg-gry-100 bg-opacity-50 p-8 rounded-lg shadow-md w-96 ">
        <h1 className="text-3xl uppercase text-blck font-bold mb-4 text-center">
          Login Form
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className=" py-6">
          <div className="mb-8">
            {/* <label className="block text-gray-700">Name:</label> */}
            <input
              type="text"
              name="text"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border border-gray-300 bg-wite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-8">
            {/* <label className="block text-gray-700">Password:</label> */}
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <Link 
          // href=""
          href="/Components/Dashboard">
            <button
            onClick={()=>showToastMessage()}
            type="submit"
              className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </Link>
          <ToastContainer />

        </form>
      </div>
    </div>
  );
};

export default Login;

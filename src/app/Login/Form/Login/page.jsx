// // // "use client";
// // // import Link from 'next/link';
// // // import { useState } from 'react';

// // // export default function Login() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch('/api/login', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });
// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         alert('Login successful');
// // //       } else {
// // //         throw new Error('Login failed');
// // //       }
// // //     } catch (error) {
// // //       alert('Login failed');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <input
// // //         type="email"
// // //         value={email}
// // //         onChange={(e) => setEmail(e.target.value)}
// // //         placeholder="Email"
// // //         className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //       />
// // //       <input
// // //         type="password"
// // //         value={password}
// // //         onChange={(e) => setPassword(e.target.value)}
// // //         placeholder="Password"
// // //         className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //       />
// // //       <button
// // //         type="submit"
// // //         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// // //       >
// // //         Login
// // //       </button>
// // //       <p>
// // //         Don&apos;t have an account?
// // //         <Link href="/Form/Rejistration">Register</Link>
// // //       </p>
// // //     </form>
// // //   );
// // // }

// // // pages/login.js
// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// // import { loginAction } from "../Action/page";
// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import  Loginn  from "@/app/Api/LoginStudent/route";

//   const showToastMessage = () => {
//     toast.success("Success Notification !", {
//       position: "top-right",
//     });
//   };
// const Login = () => {
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const router=useRouter();
//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   // Perform form validation here
//   //   if (!loginData.email || !loginData.password) {
//   //     setError("Please fill in all fields");
//   //   } else {
//   //     // Submit login data to server or perform authentication
//   //     Login(loginData.email,loginData.password)
//   //     console.log("Login data:", loginData);

//   //     // if (
//   //     // loginAction(loginData);
//   //     //   ) {
//   //     //   console.log("working");
//   //     // }
//   //   }
//   // };
//   // useEffect(() => {
//   //   // Effect code here
//   // }, [loginData]);
//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("/Api/LoginStudent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData.email,loginData.password),
//       });

//       if (response.ok) {
//         // Handle success
//         console.log("Post request successful");
//         const data =response.json();
//         console.log(data.message);
//         router.push("/Components/Dashboard")
//       } else {
//         // Handle error
//         console.error("Post request failed");
//         setError("The Error is occur due to invalid Email or password")
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("The Error is occur due to invalid action")

//     }
//   };

//   return (
//     <div className="flex justify-center items-center shadow-2xl ">
//       <div className="bg-gry-100 bg-opacity-50 p-8 rounded-lg shadow-md w-96 ">
//         <h1 className="text-3xl uppercase text-blck font-bold mb-4 text-center">
//           Login Form
//         </h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} action="login" className=" py-6">
//           <div className="mb-8">
//             {/* <label className="block text-gray-700">Name:</label> */}
//             <input
//               type="text"
//               name="text"
//               value={loginData.email}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               className="w-full border border-gray-300 bg-wite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-8">
//             {/* <label className="block text-gray-700">Password:</label> */}
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           {/* <Link
//           // href=""
//          href="/Components/Dashboard"> */}
//             <button
//             onClick={()=>showToastMessage()}
//             type="submit"
//               className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Login
//             </button>
//           {/* </Link> */}
//           <ToastContainer />

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // "use client";
// // // import Link from "next/link";
// // import React, { useState } from "react";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { Loginn } from "@/app/Api/LoginStudent/route"; // Importing Loginn function
// // import { useRouter } from "next/navigation";

// // const showToastMessage = () => {
// //   toast.success("Success Notification !", {
// //     position: "top-right",
// //   });
// // };

// // const Login = () => {
// //   const router = useRouter();
// //   const [loginData, setLoginData] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");

// //   const handleChange = (e) => {
// //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
// //   };
// //   // const router = useRouter();

// //   // const handleSubmit = async (e) => {
// //   //   // e.preventDefault();
// //   //   // // Perform form validation here
// //   //   // if (!loginData.email || !loginData.password) {
// //   //   //   setError("Please fill in all fields");
// //   //   // } else {
// //   //   //   try {
// //   //   //     // Call the Loginn function with email and password
// //   //   //     const response = await Loginn(loginData.email, loginData.password);
// //   //   //     // Check response for success
// //   //   //     if (response.status === 201) {
// //   //   //       showToastMessage(); // Display success toast
// //   //   //       console.log("Login successful");
// //   //   //       // Redirect user to dashboard or another page
// //   //   //     } else {
// //   //   //       setError("Invalid email or password"); // Display error message
// //   //   //       console.error("Login failed");
// //   //   //     }
// //   //   //   } catch (error) {
// //   //   //     setError("An error occurred. Please try again."); // Display error message
// //   //   //     console.error("Login error:", error);

// //   //   //   }
// //   //   // }
// //   //   router.push("/Components/Dashboard");
// //   // };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Perform form validation here
// //     if (!loginData.email || !loginData.password) {
// //       setError("Please fill in all fields");
// //     } else {
// //       try {
// //         // Call the Loginn function with email and password
// //         const response = await Loginn(loginData.email, loginData.password);
// //         // Check response for success
// //         if (response.status === 201) {
// //           showToastMessage(); // Display success toast
// //           console.log("Login successful");
// //           // Redirect user to dashboard or another page
// //           router.push("/Components/Dashboard");
// //         } else {
// //           setError("Invalid email or password"); // Display error message
// //           console.error("Login failed");
// //         }
// //       } catch (error) {
// //         setError("An error occurred. Please try again."); // Display error message
// //         console.error("Login error:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center shadow-2xl ">
// //       <div className="bg-gry-100 bg-opacity-50 p-8 rounded-lg shadow-md w-96 ">
// //         <h1 className="text-3xl uppercase text-blck font-bold mb-4 text-center">
// //           Login Form
// //         </h1>
// //         {error && <p className="text-red-500 mb-4">{error}</p>}
// //         <form onSubmit={handleSubmit} className=" py-6">
// //           <div className="mb-8">
// //             <input
// //               type="text"
// //               name="email"
// //               value={loginData.email}
// //               onChange={handleChange}
// //               placeholder="Enter Email"
// //               className="w-full border border-gray-300 bg-wite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
// //             />
// //           </div>
// //           <div className="mb-8">
// //             <input
// //               type="password"
// //               name="password"
// //               value={loginData.password}
// //               onChange={handleChange}
// //               placeholder="Enter Password"
// //               className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
// //           >
// //             Login
// //           </button>
// //           <ToastContainer />
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

"use client";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!loginData.email) {

    // }
    try {
      const response = await fetch("/Api/LoginStudent/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
          action: "login",
        }),
      });

      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        // console.log(loginData.email + loginData.password);
        router.push("/Components/Dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center shadow-2xl ">
      <div className="bg-gry-100 bg-opacity-50 p-8 rounded-lg shaow-md w-96 ">
        <h1 className="text-3xl uppercase txt-black font-bold mb-4 text-center">
          Login Form
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} action="login" className="py-6">
          <div className="mb-8">
            <input
              type="text"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              // className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              // className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              className="w-full border border-gray-300 bg-hite rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;

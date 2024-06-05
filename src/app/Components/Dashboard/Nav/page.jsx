"use client";
import React, { useState, useEffect } from "react";
import Dash from "./DashNav/page";
import Sheet from "./Sheet/page";
import { useTheme } from "next-themes";

const Page = () => {
  const [navbar, setSelectedNav] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setSelectedNav(!navbar);
  };

  return (
    <div>
      {isMobile ? <Sheet /> : <Dash />}
    </div>
  );
};

export default Page;

// 'use client'
// import React, { useState } from 'react'
// import Dash from './DashNav/page'
// import Sheet from './Sheet/page'
// import { useTheme } from "next-themes";

// const page = () => {
//   const [navbar, setSelectednav] = useState(true);
//   const { theme, setTheme } = useTheme();

//   const toggleNavbar = () => {
//     setSelectednav(!navbar);
//   }

//   return (
//     <div className={`md:hidden`?navbar==true:navbar==false}>
//       <button onClick={toggleNavbar}>Toggle Navbar</button>
//       {navbar?(<Dash/>):(<Sheet/>)}
//       {/* <Sheet/> */}
//     </div>
//   )
// }

// export default page

// 'use client'
// import React, { useState } from 'react'
// import Dah from './DashNav/page'
// import Sheet from './Sheet/page'

// const page = () => {
//   const [navbar, setSelectednav] = useState(true);

//   return (
//     <div className={`md:hidden`?navbar===true:navbar===false}>
//       {navbar?(<Dah/>):(<Sheet/>)}
//     </div>
//   )
// }

// export default page

// // "use client"
// // import Link from "next/link";
// // import { useState } from "react";
// // import { GiBookAura } from "react-icons/gi";
// // import M from '../../../Theme/Mode/page'
// // const Navbar = () => {
// //   const [nav, setNav] = useState(true);

// //   const navItems = [
// //     { label: 'Home', href: '/' },
// //     { label: 'Exam Details', href: '/exam-details' },
// //     { label: 'Quiz', href: '/quiz' },
// //     { label: 'All Students Roll Numbers', href: '/all-students-roll-numbers' },
// //     { label: 'Exam Result', href: '/exam-result' },
// //     { label: 'Logout', href: '/' },
// //   ];

// //   return (
// //     <>

// //       {/* bg-gradient-to-b from-black to-gray-800 */}
// //       <div className="flex  flex-col p-8   h-screen  gap-10   bg-bl2ack">
// //         {/* <div className="flex justify-between items-center w-full h-20"> */}
// //         <div className="">      <M/>

// //           <Link href="/">
// //             {" "}
// //             <h1 className="text-3xl  font-signature ml- flex ga-1 md:static md:py-6 cursor-pointer hover:text-slate-900">
// //             Admin Portal<GiBookAura className=" text-7xl"/>

// //             </h1>
// //           </Link>
// //         </div>
// //         <ol
// //           className={`flex flex-col items-start  gap-9 left-0 w-full h-full  md:static md:w-auto md:h-auto md:bg-transparent md:flex-col `}
// //         >
// //          {navItems.map((item, index) => (
// //           <li key={index} className="mr-6">
// //             <Link href={item.href}>
// //               <p className=" ">{item.label}</p>
// //             </Link>
// //           </li>
// //         ))}
// //         </ol>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;

// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FcReadingEbook } from "react-icons/fc";
// import M from "../../../Theme/Mode/page";
// import { IoIosArrowForward } from "react-icons/io";

// const Navbar = () => {
//   const navItems = [
//     // { label: "Home", href: "/" },
//     { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
//     { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
//     { label: "All Students Roll Numbers", href: "/Components/Dashboard/ExamQuiz"},
//     { label: "Exam Result", href: "/Components/Dashboard/Results" },
//     { label: "Logout", href: "/" },
//   ];

//   return (
//     <div className="flex flex-col p-4 gap-10 h-screen bg-blac sticky top-0 border-x-4">
//       <div>
//         <M />
//         <Link href="/">
//           <h1 className="text-3xl font-signature flex items-center gap-1 md:static md:py-6 cursor-pointer hover:text-slate-900">
//              Portal
//             <FcReadingEbook className="text-3xl " />
//           </h1>
//         </Link>
//       </div>
//       <ol className="flex flex-col items-start gap-9 w-full">
//         {navItems.map((item, index) => (
//           <li key={index} className="flex mr-6">
//             <Link href={`${item.href}`}>
//               <p className="relative hover:left-1 flex items-center gap-2"><IoIosArrowForward/>{item.label}</p>
//             </Link>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Navbar;

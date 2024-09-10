"use client";
import Link from "next/link";
import { useState } from "react";
import { FcReadingEbook } from "react-icons/fc";
import M from "../../../../Theme/Mode/page";
import { IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  // const navItems = [
  //   { label: "Home", href: "/" },
  //   { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
  //   { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
  //   {
  //     label: "Admin Dashboard",
  //     href: "/Components/Dashboard/AdminDashboard",
  //   },
  //   { label: "Exam Result", href: "/Components/Dashboard/Results" },
  //   { label: "Logout", href: "/Login/Form" },
  // ];
  const search = useSearchParams();
  let k = search.get("teacher");
  let navItems;
  if (k) {
    navItems = [
      { label: "Home", href: "/" },
      // { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
      // { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
      // {
      //   // label: "Admin Dashboard",
      //   href: "/Components/Dashboard/AdminDashboard",
      // },
      { label: "Exam Result", href: "/Components/Dashboard/Results" },
      { label: "About", href: "/Components/Dashboard/About" },

      { label: "Logout", href: "/Login/AdminLogin" },
    ];
  }
  else{
    navItems = [
      { label: "Home", href: "/" },
      { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
      { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
      // {
      //   label: "Admin Dashboard",
      //   href: "/Components/Dashboard/AdminDashboard",
      // },
      // { label: "Exam Result", href: "/Components/Dashboard/Results" },
      { label: "About", href: "/Components/Dashboard/About" },
      { label: "Logout", href: "/Login/Form" },

    ];
  }


  return (
    <div className="flex flex-col p-4 px-14 gap-10 h-screen bg-blac sticky top-0 border-x-4">
      <div>
        <M />
        <Link href="/">
          <h1 className="text-3xl font-signature flex items-center gap-1 md:static md:py-6 cursor-pointer hover:text-slate-900">
            Portal
            <FcReadingEbook className="text-3xl " />
          </h1>
        </Link>
      </div>
      <ol className="flex flex-col items-start gap-9 w-full">
        {navItems.map((item, index) => (
          <li key={index} className="flex mr-6">
            <Link href={`${item.href}`}>
              <p className="relative hover:left-1 flex items-center gap-2">
                <IoIosArrowForward />
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Navbar;

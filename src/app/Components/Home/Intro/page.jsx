"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Page = () => {
  return (
    <div className=" ">
      <div className=" b-white flex flex-co items-center justify-center gap-24 relative bottom-10  h-screen">
        <div className="max-w-2xl p-8 py-20 bg-whit md:shadow-lg rounded-lg flex">
          <Image
            src="/3D.png"
            width={200}
            height={100}
            className=" md:h-72 h-36 immg"
          />
          <div className=" flex flex-col justify-center text-center items-center">
            <h1 className="text-2xl font-bold mb-4">Exam Management System</h1>
            <p className="text-lg">
              Streamline your exam process with efficiency and accuracy using
              our advanced system.
            </p>
            <br />
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={3000}
            >
              <button class="button-48" role="button">
                <span class="text"> Login Portal</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

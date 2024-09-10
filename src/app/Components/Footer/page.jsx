import Link from "next/link";
import React from "react";

const Footer = ({whitee,blackk}) => {
  return (
    <footer className={`bg-gra-800 text-wite py-8 bg-${whitee} text-${blackk} w-full bottom-0 border-t-2`}>
        
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold">Exam Management System</h2> */}
        {/* <br /> */}
        <div className="flex flex-wrap items-start -mb-2">
          <div className="w-full md:w-1/4 md:mb-0 mb-2">
            <h3 className="text-2xl font-bold mb-2">Links</h3>
            <ul className="list-unstyled">
              <li>
                <Link
                  href="/exams"
                  className="tex-gray-400 hover:text-slate-600"
                >
                  Exams
                </Link>
              </li>
              <li>
                <Link
                  href="/students"
                  className="tet-gray-400 hover:text-slate-600"
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="tet-gray-400 hover:text-slate-600"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:mb-0 mb-2">
            <h3 className="text-2xl font-bold mb-2 ">Contact</h3>
            <ul className="list-unstyled">
              <li>Email: hammad31012004@gmail.com</li>
              <li>Phone: 035464565541</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:mb-0 mb-2">
            <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="tex-gray-400 hover:text-gray-200">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="textgray-400 hover:text-gray-200">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="tet-gray-400 hover:text-gray-200">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 m:mb-0 mb-">
            &copy; {new Date().getFullYear()} Exam Management System. All Rights
            Reserved.
            <br />
            Made by <strong>Hammad Hussain</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

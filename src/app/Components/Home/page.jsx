import React from "react";
import Nav from "./Nav/page";
import Intro from "./Intro/page";
import F from '../Footer/page'
import Services from './Services/page'
import Login from './LoginBtn/page'

const Page = () => {
  return (
    <div className="home h-screen bd">
      <Nav />
      <Intro />
      <Services/>
      <Login/>
      <F whitee="whiete" blackk="blaeck"/>
    </div>
  );
};

export default Page;

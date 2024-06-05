import React from 'react'
import { GiBookCover } from "react-icons/gi";
import M from "./../../../Theme/Mode/page";

const Page = () => {
  return (
    <div class="flex justify-between px-10 items-center py-3 border-b-2 sm:px-5 md:px-10 lg:px-15 xl:px-20">
    <h1 class="font-bold text-2xl flex text-center items-center gap-2 uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
    <GiBookCover className=" hidden sm:block"/>
      Exam Management System
    </h1>
    <span className=" hidden sm:block"><M /></span>
  </div>
  )
}

export default Page

import Login from "./Login/page";
import F from "./../../Components/Footer/page";
import M from "../../Theme/Mode/page";
import { GiBookCover } from "react-icons/gi";

const Page = () => {
 
  return (
    <>
      <div class="flex justify-between px-10 items-center py-3 border-b-2 sm:px-5 md:px-10 lg:px-15 xl:px-20">
        <h1 class="font-bold text-2xl flex text-center items-center gap-2 uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <GiBookCover className=" hidden sm:block"/>
          Exam Management System
        </h1>
        <span className=" hidden sm:block"><M /></span>
      </div>
     
      <div className="h-full py-16 boody">
        <div className="flex flex-col justify-center items-center relative top-0 gap-8">
          <h1 className="text-center uppercase text-whit relative text-4xl font-extrabold">
            Teacher Portal
          </h1>

          <div className=" flex flex-col justify-center items-center body ">
          <Login /> 
          </div>
        </div>
      </div>
      <F />
    </>
  );
};

export default Page;

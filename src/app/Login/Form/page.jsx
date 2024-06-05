"use client";
import React, { useState } from "react";
import Login from "./Login/page";
import Rejistration from "./Rejistration/page";
import { Switch, FormControlLabel } from "@mui/material";
import F from "./../../Components/Footer/page";
import { styled } from "@mui/material/styles";
import M from "./../../Theme/Mode/page";
import { GiBookCover } from "react-icons/gi";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Page = () => {
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);

  const switchh = () => {
    if (toggle) {
      setToggle(false);
    }
    if (!toggle) {
      setToggle(true);
    }
  };
  return (
    <>
      <div class="flex justify-between px-10 items-center py-3 border-b-2 sm:px-5 md:px-10 lg:px-15 xl:px-20">
        <h1 class="font-bold text-2xl flex text-center items-center gap-2 uppercase sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <GiBookCover className=" hidden sm:block"/>
          Exam Management System
        </h1>
        <span className=" hidden sm:block"><M /></span>
      </div>
      {/* <div className=" flex justify-between  px-10 items-center py-3 border-b-2">
        <h1 className=" font-bold text-2xl flex items-center gap-2 uppercase">
          <GiBookCover />
          Exam Management System
        </h1>{" "}
        <M />
      </div> */}
      <div className="h-full py-16 boody">
        <div className="flex flex-col justify-center items-center relative top-0 gap-8">
          <h1 className="text-center uppercase text-whit relative text-4xl font-extrabold">
            Student Portal
          </h1>

          <div className=" flex flex-col justify-center items-center body ">
            {/* <button className={`toggle-button ${toggle ? 'active' : ''}`} onClick={ switchh }>
        {toggle ? 'Switch to Registration' : 'Switch to Login'}
      </button> */}
            {/* <button onClick={ switchh }>ddfs</button> */}

            <FormControlLabel
              // control={<Switch checked={toggle} onChange={switchh} name="jason" />}
              control={
                <IOSSwitch sx={{ m: 1 }} defaultChecked onChange={switchh} />
              }
              className=" text-black font-extrabold text-3xl py-2 relative left-4"
            />
            {toggle ? <Login /> : <Rejistration />}
            {/* {!toggle && } */}
            {/* {loading?<Login/>:<Rejistration/>} */}
          </div>
        </div>
      </div>
      <F />
    </>
  );
};

export default Page;

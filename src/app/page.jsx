"use client";
import Image from "next/image";
import Form from "./Components/Home/page";
export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`/Api/Result`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <p onClick={()=>callAPI()}>sasa</p> */}
      <Form />
    </>
  );
}

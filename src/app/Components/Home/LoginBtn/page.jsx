// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// function Home() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center">
//       <div className="max-w-md p-4  h-96 flex justify-center items-center flex-col bg-white rounded shadow-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Choose Your Desire
//         </h1>
//         <div className="flex  justify-around items-center -mx-4">
//           <Link href="">
//             <div className="w-full relative md:w-1/2 cursor-pointer hover:-top-1 xl:w-1/2 p-4">
//               <div className="bg-white rounded shadow-md p-4">
//                 <Image src="/student.png" width={100} height={100} />
//                 <hr />
//                 <p className="text-lg">Check your exam update</p>
//                 {/* <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
//                 Login
//               </button> */}
//               </div>
//             </div>
//           </Link>
//           <Link href="">
//             <div className="w-full relative md:w-1/2 cursor-pointer hover:-top-1 xl:w-1/2 p-4">
//               <div className="bg-white rounded shadow-md p-4">
//                 <Image src="/teacher.png" width={100} height={100} />
//                 <hr />
//                 <p className="text-lg">Check student information</p>
//                 {/* <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
//                 Login
//               </button> */}
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


function Home() {
  return (
    <div id='home' className="h-screen flex justify-center items-center">
     
      <div  className="max-w-md  p-4 bg-wite rounded shado-md h-screen flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center ">
          Choose Your Desire
        </h1> <br /><br />
        <div className="flex -mx-36 space-x-12 text-black uppercase ">
          <Link href="/Login/Form">
            <div className=" flex text-center shadow-2xl bg-white relative hover:bottom-1 cursor-pointer w-fit flex-col ">
              <Image src="/student2.png" width={400} height={100} />
              <p className="text-lg p-10">Check your exam update</p>
            </div>
          </Link>
          <Link href="/Login/AdminLogin">
            <div className=" flex text-center shadow-2xl bg-white relative hover:bottom-1 ease-in cursor-pointer w-fit flex-col ">
              <Image src="/teacher2.jpg" width={400} height={100} />
              <p className="text-lg p-10">Check student info</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

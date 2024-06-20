// import { PrismaClient } from "@prisma/client";
// import { useRouter } from "next/navigation";
// import { NextResponse } from "next/server";
// const prisma = new PrismaClient();
// export async function Loginn(email,password) {
//   try {
//     const login =await prisma.user.findUnique({
//       where: {
//         email: email,
//         password: password,
//       },
//     });
//     console.log("successful login" + login);
//     return NextResponse.json({ message: "good" }, { status: 201 });

//   } catch (error) {
//     console.log("error" + error);
//     return NextResponse.json({ message: "not" }, { status: 500 });

//   }
// }

// export async function Registration(name, email, password) {
//   try {
//     if (name || email || password) {
//       const exist = await prisma.user.findUnique({
//         select: {
//           name: true,
//           email: true,
//           password: true,
//         },
//       });
//       console.log("successful Registration" + exist);
//       return NextResponse.json({ message: "exist" }, { status: 500 });
//     } else {
//       const reg = await prisma.user.create({
//         data: {
//           username: name,
//           email: email,
//           password: password,
//         },
//       });
//       console.log("successful Registration" + reg);
//       return NextResponse.json({ message: "good" }, { status: 201 });
//     }
//   } catch (error) {
//     console.log("error" + error);
//     return NextResponse.json({ message: "bad" }, { status: 500 });
//   }
// }



// pages/api/auth.js

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  // if (req.method === 'POST') {
    // const {  email, password } = req.body;
    const body = await req.json();
    const {action,name, email, password } = body;
// console.log(email+password);
    try {

      // if (email) {
      //   return NextResponse.json({ message: `${email} + ${password}` });

      // } else {
      //   return NextResponse.json({ message: "Internal error" });

      // }
      if (action == 'login') {
        const login = await prisma.user.findUnique({
          where: {
            email: 'hammad@gmail.com',
            password: 'password',
          },
        });

        if (login) {
          return NextResponse.status(201).json({ message: "Login successful", user: login });
        } else {
          return NextResponse.status(401).json({ message: "Invalid email or password" });
        }
      } else if (action === 'register') {
        const exist = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (exist) {
          return NextResponse.status(409).json({ message: "User already exists with this email" });
        } else {
          const newUser = await prisma.user.create({
            data: {
              name: name,
              email: email,
              password: password,
            },
          });
          return NextResponse.status(201).json({ message: "Registration successful", user: newUser });
        }
      } else {
        return NextResponse.status(400).json({ message: "Invalid action" });
      }
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ message: "Internal server error" });
    }
  // } else {
  //   return NextResponse.json({ message: "Method not allowed" });
  // }
}

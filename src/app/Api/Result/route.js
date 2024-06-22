import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const login = await prisma.user.findMany({
      select: {
        username: true,
        score: true,
      },
    });
    console.log("successful login", login);
    return NextResponse.json(login);  // Returning the actual data
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}


// // import type { NextApiRequest, NextApiResponse } from 'next'

// export async function handler(req, res) {
//   if (req.method === 'POST') {
//     // Process a POST request
//     return await Response.json("kjnkasn")
//     console.log("sasas");
//   } else {
//     // Handle any other HTTP method
//     return Response.json("kjnkasasassasn")

//     console.log("saasassas");

//   }

// // return await Response.json("kjnkasasassasn")

// }
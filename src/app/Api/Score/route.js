import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  // if (req.method === 'POST') {
  // const {  email, password } = req.body;
  const body = await req.json();
  const { score, email } = body;
  const newUsers = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      score: score,
    },
  });
  console.log(`updated score of your ${email} is ${score}`);
  console.log(newUsers);
  return NextResponse.json("score updated");
}

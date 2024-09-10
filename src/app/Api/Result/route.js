import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("Starting to fetch user..."); // Log before fetching user
    const login = await prisma.user.findMany(
    );

    console.log("Fetched user", login); // Log after fetching user

    if (!login) {
      console.log("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ login });
  } catch (error) {
    console.error("Detailed error:", error); // Log the error details
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

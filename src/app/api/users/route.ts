import { prisma } from "../../../../prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const user = await prisma.user.create({
      data,
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

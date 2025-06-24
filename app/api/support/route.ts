import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  const ticket = await prisma.ticket.create({
    data: { name, email, subject, message },
  });
  return NextResponse.json({ message: "ส่งคำขอสำเร็จ", ticket });
}

export async function GET() {
  const tickets = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(tickets);
}
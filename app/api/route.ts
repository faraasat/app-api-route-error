import { NextResponse } from "next/server";

export async function GET(request: Request) {
  NextResponse.json({ message: "This Worked", success: true });
}

export async function POST(request: Request) {
  try {
    NextResponse.json({ message: "This Worked", success: true });
  } catch (err) {
    console.log(err);
    NextResponse.json({ message: err, success: false });
  }
}

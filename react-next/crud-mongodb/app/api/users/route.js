import db from "@/app/api/models/db";
import Users from "../models/usersSC";
import { NextResponse } from "next/server";

//get users
export async function GET() {
  await db
  const users = await Users.find({})
  return NextResponse.json({ users });
}

//add user
export async function POST(req) {
  const {username, password} = await req.json()
  await db
  const newUser = new Users({
    username: username,
    password: password
  })
  await newUser.save()
  return NextResponse.json({ message:'New User Added' });
}

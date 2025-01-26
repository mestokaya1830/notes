import { NextResponse } from 'next/server'
import db from '../../models/db'
import Users from '../../models/userSC'


//get users
export async function GET() {
  const result = await Users.find({})
  return NextResponse.json(result)
}

//add users
export async function POST(req) {
  const {username, password} = await req.json()
  const newUser = new Users({
    username: username,
    password: password
  })
  await newUser.save()
  return NextResponse.json({message:'New User Added'})
}

//aupdate user
export async function PUT(req) {
  const {password} = await req.json()
  const id = req.nextUrl.searchParams.get("id")
  await Users.updateOne({_id: id}, {$set:{password: password}})
  return NextResponse.json({message:'User Updated'})
}

//delete user
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id")
  await Users.deleteOne({_id: id})
  return NextResponse.json({message:'User Deleted'})
}
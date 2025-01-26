import { NextResponse } from 'next/server'
import db from '../../../models/db'
import Users from '../../../models/userSC'


//get users
export async function GET(req, {params}) {
  const {id} = await params
  const result = await Users.find({_id:id})
  return NextResponse.json(result)
}

import deta from "../../../middleware/deta";
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query
  let new_user=null;
  const session = await getServerSession(req, res, authOptions)
  console.log(session);
  
if (session || true){
  if(req.method==="POST" ){
  try{
   new_user=await deta.Base('users').insert(req.body,id)
  }catch(err){console.log(err);new_user={'error':"user already exists" }} 
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  
}
else{
  new_user={'error':"user either already exist or method is not post"}
}}
else{
  new_user={'error':"user not authenticated"}
}

res.send(JSON.stringify(new_user))
}

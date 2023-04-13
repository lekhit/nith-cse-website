import deta from '../../../middleware/deta'
import type { NextApiRequest, NextApiResponse } from "next"




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query
let new_user;


  try{
  //   new_user = await prisma.user.findFirst({
  //  where:{
  //   email:email
  //  },
  // })
new_user=await deta.Base('users').delete(id)
}catch(err){console.log(err)} 
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`

res.send(JSON.stringify(new_user))
}

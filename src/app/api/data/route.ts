import { createNewResponse, getAllResponses } from "@/helper/responses";
import { NextRequest } from "next/server";

export async function GET(
  req: Request | NextRequest,
) {
  const responses = await getAllResponses()
  console.log(responses)
  return Response.json(responses)
}

export async function POST(
  req: any,
) {
  // @ts-ignore
  const data = await req.json();

  const dataToStorage = {
    coop_id: data.id,
    result_: data.result_,
    associated: data.associated,
    responses: JSON.stringify(data.data)
  }

  const create_response = await createNewResponse(dataToStorage)
  
  // need to be handler
  console.log(create_response)
  
  return Response.json({
    sucess: true,
    message: 'Hello from Next.js!'
  })
}




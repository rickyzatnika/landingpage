import { NextResponse } from "next/server";
import Services from "../../../../models/service"
import connect from "../../../../utils/db"

async function getServiceById(_id: string) {

    await connect();

     try {
    const service = await Services.findById(_id);
    return service;

  } catch (error) {
    return NextResponse.json(error);
  }
}


export async function GET(req: Request, {params}: {params: {_id: string}}){
    try {
        const id = params._id
        const services = await getServiceById(id);

        return NextResponse.json({services});
    } catch (error) {
        return NextResponse.json({error: "failed to get service by id"}, {status: 500});
    }
}
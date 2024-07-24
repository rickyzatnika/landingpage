import Services from "../../../models/service"
import connect from "../../../utils/db"
import { NextResponse } from "next/server"


export async function GET() {
  await connect();

  try {
    const service = await Services.find({});
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  await connect();

  try {
    const body = await request.json();
    const newServices = await Services.create(body);

    return NextResponse.json(newServices);
  } catch (error) {
    return NextResponse.json(error);
  }
}
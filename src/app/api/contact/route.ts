import Contact from "../../../models/contact";
import connect from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const contact = await Contact.find({});
    return NextResponse.json({contact});
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  await connect();

  try {
    const body = await request.json();
    const newContact = await Contact.create(body);

    return new NextResponse(JSON.stringify(newContact));
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
}

import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { productTags } = await req.json();

    if (!productTags) {
      return NextResponse.json("No orders", { status: 400 });
    }

    const order = await prismadb.order.create({
      data: {
        products: productTags,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

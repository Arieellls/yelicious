// app/api/recipes/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); // Gets the dynamic [id] from the URL

  if (!id) {
    return NextResponse.json({ error: "Recipe ID is required" }, { status: 400 });
  }

  const endpoint = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Recipe not found." }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data.data.recipe);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

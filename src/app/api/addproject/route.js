//db connectin
import dbConnect from "@/lib/dbConnect";
import FormData from "@/model/FormData";

import { NextResponse } from 'next/server';

// import getAllData from "@/js/project_retrieve";

export const POST = async (req) => {
  try {
    await dbConnect(); // Ensure database connection is established
    const data = await req.json();
    console.log('Received data:', data);

    // Process the data here (e.g., save to a database, etc.)
    // Save to MongoDB
    await FormData.create(data);

    // await getAllData()

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export async function GET() {
  await dbConnect(); // Connect to MongoDB

  try {
    const documents = await FormData.find(); // Retrieve all documents
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    console.error('Error retrieving documents:', error);
    return NextResponse.json({ message: 'Failed to fetch data' }, { status: 500 });
  }
}


export async function DELETE(req, res) {

  try {
    await dbConnect()
    const data = await req.json();
    const delet=data.delete
    console.log("deleteed data", delet)
    // Perform the deletion in MongoDB
    const result = await FormData.deleteMany({ title:delet });
    console.log("result count",result)

    if (result.deletedCount === 1) {
      return new Response(JSON.stringify({ message: 'Record deleted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'Record not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.log("Error:", error)
    return new Response(JSON.stringify({ message: 'Backend Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

}
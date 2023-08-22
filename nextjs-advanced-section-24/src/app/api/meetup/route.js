import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request) {
  const data = await request.json();

  const client = await MongoClient.connect(
    'mongodb+srv://catiaraminhos:TSgGZzbiMpvt6Bof@cluster0.xosxk6m.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  return NextResponse.json(result, { status: 201 });
}

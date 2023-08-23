import { MongoClient } from 'mongodb';

export const getMeetups = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://catiaraminhos:TSgGZzbiMpvt6Bof@cluster0.xosxk6m.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return meetups;
};

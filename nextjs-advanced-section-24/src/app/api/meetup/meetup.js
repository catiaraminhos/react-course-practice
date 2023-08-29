import { MongoClient, ObjectId } from 'mongodb';

export const getMeetup = async (id) => {
  const client = await MongoClient.connect(
    'mongodb+srv://catiaraminhos:TSgGZzbiMpvt6Bof@cluster0.xosxk6m.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  console.log('id', id);

  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(id) });

  console.log('meetup', meetup);

  client.close();

  return {
    ...meetup,
    id: meetup._id.toJSON()
  };
};

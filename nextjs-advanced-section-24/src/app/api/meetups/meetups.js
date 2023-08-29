import { MongoClient } from 'mongodb';

export const getMeetups = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://catiaraminhos:TSgGZzbiMpvt6Bof@cluster0.xosxk6m.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = (await meetupsCollection.find().toArray()).map((meetup) => ({
    ...meetup,
    id: meetup._id.toJSON()
  }));

  client.close();

  return meetups;
};

export const getMeetupsIds = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://catiaraminhos:TSgGZzbiMpvt6Bof@cluster0.xosxk6m.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = (await meetupsCollection.find({}, { _id: 1 }).toArray()).map(
    (meetup) => ({
      meetupId: meetup._id.toJSON()
    })
  );

  client.close();

  return meetups;
};

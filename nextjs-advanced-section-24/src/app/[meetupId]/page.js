import MeetupDetails from '@/components/meetups/MeetupDetails';
import { getMeetupsIds } from '../api/meetups/meetups';

const MEETUP = {
  title: 'A First Meetup',
  image: 'https://blog.euvou.events/wp-content/uploads/2021/06/meetup.png',
  address: 'Some address 5, 12345 Some City',
  description: 'This is a first meetup!'
};

export async function generateStaticParams() {
  return getMeetupsIds();
}

const getMeetup = async (id) => {
  console.log('meetup id', id);

  return { ...MEETUP, id };
};

const MeetupDetailsPage = async ({ params }) => {
  const meetup = await getMeetup(params.meetupId);

  return <MeetupDetails {...meetup} />;
};

export default MeetupDetailsPage;

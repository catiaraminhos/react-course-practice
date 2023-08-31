import MeetupDetails from '@/components/meetups/MeetupDetails';
import { getMeetupsIds } from '../api/meetups/meetups';
import { getMeetup } from '../api/meetup/meetup';

export async function generateStaticParams() {
  return getMeetupsIds();
}

const getMeetupForId = async (id) => {
  return getMeetup(id);
};

const MeetupDetailsPage = async ({ params }) => {
  const meetup = await getMeetupForId(params.meetupId);

  return <MeetupDetails {...meetup} />;
};

export default MeetupDetailsPage;

export async function generateMetadata({ params }) {
  const meetup = await getMeetupForId(params.meetupId);

  return {
    title: meetup.title,
    description: meetup.description
  };
}

import { getMeetups } from './api/meetups/meetups';

import MeetupList from '@/components/meetups/MeetupList';

const HomePage = async () => {
  const meetups = await getMeetups();

  return <MeetupList meetups={meetups} />;
};

export default HomePage;

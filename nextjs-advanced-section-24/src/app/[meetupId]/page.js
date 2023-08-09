import MeetupDetails from '@/components/meetups/MeetupDetails';

const MeetupDetailsPage = () => {
  const meetup = {
    title: 'A First Meetup',
    image: 'https://blog.euvou.events/wp-content/uploads/2021/06/meetup.png',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  };

  return <MeetupDetails {...meetup} />;
};

export default MeetupDetailsPage;

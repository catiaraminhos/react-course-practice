'use client';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = (meetup) => {
    console.log('meetup to add', meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;

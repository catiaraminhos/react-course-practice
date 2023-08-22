'use client';

import { useRouter } from 'next/navigation';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup) => {
    const response = await fetch('/api/meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;

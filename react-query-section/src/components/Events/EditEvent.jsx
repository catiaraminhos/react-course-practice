import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id })
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async ({ event }) => {
      const queryKey = ['events', { id }];

      await queryClient.cancelQueries({ queryKey });
      const previousEvent = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, event);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', { id }], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', { id }]);
    }
  });

  function handleSubmit(formData) {
    mutate({
      id,
      event: formData
    });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || 'Failed to load event.'}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

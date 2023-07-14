import { useState } from 'react';

import Modal from './../components/Modal';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onNewPost }) {
  const [postAuthor, setPostAuthor] = useState('');
  const [postText, setPostText] = useState('');

  const changeNameHandler = (event) => {
    setPostAuthor(event.target.value);
  };

  const changeBodyHandler = (event) => {
    setPostText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      author: postAuthor,
      text: postText
    };

    onNewPost(postData);
    onCancel();
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p></p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNameHandler} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
import { useState } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [firstPostAuthor, setFirstPostAuthor] = useState('');
  const [firstPostText, setFirstPostText] = useState('');

  const changeNameHandler = (name) => {
    setFirstPostAuthor(name);
  };

  const changeBodyHandler = (body) => {
    setFirstPostText(body);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onChangeName={changeNameHandler}
            onChangeBody={changeBodyHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={firstPostAuthor} text={firstPostText} />
        <Post author="Manuel" text="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostsList;

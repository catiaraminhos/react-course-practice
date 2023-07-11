import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = () => {
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
      <NewPost
        onChangeName={changeNameHandler}
        onChangeBody={changeBodyHandler}
      />

      <ul className={styles.posts}>
        <Post author={firstPostAuthor} text={firstPostText} />
        <Post author="Manuel" text="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostsList;

import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = () => {
  return (
    <>
      <NewPost />

      <ul className={styles.posts}>
        <Post author="Maximilian" text="React.js is awesome!" />
        <Post author="Manuel" text="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostsList;

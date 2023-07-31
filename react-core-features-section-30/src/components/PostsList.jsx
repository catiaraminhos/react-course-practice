import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} text={post.text} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div className={styles['without-posts']}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;

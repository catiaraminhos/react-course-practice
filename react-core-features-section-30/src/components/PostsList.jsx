import { useEffect, useState } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      const response = await fetch('http://localhost:8080/posts');

      if (!response.ok) {
        setErrorMessage('Something went wrong!');
        setIsLoading(false);
        return;
      }

      const responseData = await response.json();

      setPosts(responseData.posts || []);
      setIsLoading(false);
      setErrorMessage('');
    };

    fetchPosts();
  }, []);

  const newPostHandler = (post) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' }
    });

    setPosts((currentPosts) => {
      return [post, ...currentPosts];
    });
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onNewPost={newPostHandler} />
        </Modal>
      )}

      {!isLoading && !errorMessage && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} text={post.text} />
          ))}
        </ul>
      )}

      {!isLoading && !errorMessage && posts.length === 0 && (
        <div className={styles['without-posts']}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isLoading && (
        <div className={styles.loading}>
          <p>Loading posts...</p>
        </div>
      )}

      {errorMessage && (
        <div className={styles.error}>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default PostsList;

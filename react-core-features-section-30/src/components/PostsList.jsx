import { useEffect, useState } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:8080/posts');
      const responseData = await response.json();
      setPosts(responseData.posts || []);
    };

    fetchPosts();
  }, []);

  const newPostHandler = (post) => {
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

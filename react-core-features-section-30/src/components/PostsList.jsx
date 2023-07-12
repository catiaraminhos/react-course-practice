import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import styles from './PostsList.module.css';

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Manuel" text="Checkout the full course!" />
      </ul>
    </>
  );
};

export default PostsList;

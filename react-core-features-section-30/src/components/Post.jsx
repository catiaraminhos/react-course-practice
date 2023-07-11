import styles from './Post.module.css';

const Post = ({ author, text }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default Post;

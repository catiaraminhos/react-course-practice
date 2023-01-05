import { useLoaderData } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const loadedPost = useLoaderData();

  console.log(loadedPost);

  return (
      <BlogPost title={loadedPost.title} text={loadedPost.body} />
  );
}

export default PostDetailPage;

export const loader = ({params}) => {
  const postId = params.id;
  return getPost(postId);
};
import { useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loadedPosts = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loadedPosts} />
    </>
  );
}

export default BlogPostsPage;

export const loader = () => {
  return getPosts();
};
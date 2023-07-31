import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {
  return (
    <>
      <main>
        <PostsList />
        <Outlet />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const responseData = await response.json();
  return responseData.posts;
};

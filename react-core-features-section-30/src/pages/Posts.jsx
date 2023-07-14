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

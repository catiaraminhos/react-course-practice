import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />

      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;

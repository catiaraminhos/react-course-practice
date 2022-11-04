import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://react-course-http-4ee76-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      {!showCart && <Products />}
    </Layout>
  );
}

export default App;

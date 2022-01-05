import React, { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);

    const onCartButtonClickHandler = () => {
        setIsCartDisplayed(true);
    };

    return (
        <Fragment>
            {isCartDisplayed && <Cart />}
            <Header onCartButtonClick={onCartButtonClickHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
};

export default App;

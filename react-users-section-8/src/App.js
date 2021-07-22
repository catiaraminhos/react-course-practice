import React from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
    const dummyUsers = [
        {
            id: 1,
            name: 'Cátia',
            age: 28,
        },
        {
            id: 2,
            name: 'Miguel',
            age: 35
        },
    ];

    return <div>
        <AddUser />
        <UsersList users={dummyUsers} />
    </div>;
};

export default App;

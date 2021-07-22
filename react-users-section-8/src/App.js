import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        setUsers((previousUsers) => previousUsers.concat(user));
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
};

export default App;

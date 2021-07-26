import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
    const [users, setUsers] = useState([]);

    const addUserHandler = (user) => {
        setUsers((previousUsers) => previousUsers.concat(user));
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </Fragment>
    );
};

export default App;

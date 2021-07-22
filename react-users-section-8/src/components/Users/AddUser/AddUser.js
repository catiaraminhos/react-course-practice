import React from 'react';

import Card from '../../UI/Card';

import AddUserForm from './AddUserForm';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    return <Card className={styles['add-user']}>
        <AddUserForm onAddUser={props.onAddUser} />
    </Card>;
}

export default AddUser;

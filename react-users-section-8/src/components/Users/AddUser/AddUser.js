import React from 'react';

import Card from '../../UI/Card';

import AddUserForm from './AddUserForm';
import styles from './AddUser.module.css';

const AddUser = () => {
    return <Card className={styles['add-user']}>
        <AddUserForm />
    </Card>;
}

export default AddUser;

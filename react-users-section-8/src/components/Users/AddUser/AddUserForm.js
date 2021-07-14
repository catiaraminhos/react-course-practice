import React from 'react';
import Button from '../../UI/Button';

import styles from './AddUserForm.module.css';

const AddUserForm = () => {
    return (
        <form>
            <div className={styles.input}>
                <label>Username</label>
                <input type="text" name="username" />
            </div>

            <div className={styles.input}>
                <label>Age (Years)</label>
                <input type="number" name="years" />
            </div>

            <Button type='submit'>Add User</Button>
        </form>
    );
};

export default AddUserForm;

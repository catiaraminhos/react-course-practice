import React, { useState } from 'react';
import Button from '../../UI/Button';

import styles from './AddUserForm.module.css';

const AddUserForm = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
    const [isAgeInvalid, setIsAgeInvalid] = useState(false);

    const isEnteredUsernameValid = (username) => {
        return username.trim().length > 0;
    };

    const isEnteredAgeValid = (age) => {
        const parsedAge = parseInt(age, 10);
        return Number.isInteger(parsedAge) && parsedAge >= 0;
    };

    const usernameChangeHandler = (event) => {
        const enteredUsername = event.target.value;

        if (isEnteredUsernameValid(enteredUsername)) {
            setIsUsernameInvalid(false);
        }

        setEnteredUsername(enteredUsername);
    };

    const ageChangeHandler = (event) => {
        const enteredAge = event.target.value;

        if (isEnteredAgeValid(enteredAge)) {
            setIsAgeInvalid(false);
        }

        setEnteredAge(enteredAge);
    };

    const submitUserHandler = (event) => {
        event.preventDefault();
        const isUsernameValid = isEnteredUsernameValid(enteredUsername);
        const isAgeValid = isEnteredAgeValid(enteredAge);

        if (!isUsernameValid) {
            setIsUsernameInvalid(true);
        }

        if (!isAgeValid) {
            setIsAgeInvalid(true);
        }

        if (isUsernameValid && isAgeValid) {
            console.log('entered username', enteredUsername);
            console.log('entered age', enteredAge);
        }
    };

    return (
        <form onSubmit={submitUserHandler} noValidate={true}>
            <div
                className={`${styles.input} ${
                    isUsernameInvalid && styles.invalid
                }`}
            >
                <label>Username</label>
                <input type="text" name="username" onChange={usernameChangeHandler} />
            </div>

            <div
                className={`${styles.input} ${isAgeInvalid && styles.invalid}`}
            >
                <label>Age (Years)</label>
                <input type="number" min="0" name="years" onChange={ageChangeHandler} />
            </div>

            <Button type="submit">Add User</Button>
        </form>
    );
};

export default AddUserForm;

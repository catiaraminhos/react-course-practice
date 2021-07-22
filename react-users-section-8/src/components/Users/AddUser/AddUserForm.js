import React, { useState } from 'react';
import Button from '../../UI/Button';

import styles from './AddUserForm.module.css';

const AddUserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isEnteredUsernameValid = (username) => {
        return username.trim().length > 0;
    };

    const isEnteredAgeValid = (age) => {
        const parsedAge = parseInt(age, 10);
        return Number.isInteger(parsedAge) && parsedAge >= 0;
    };

    const getFormErrorMessage = () => {
        let errorMessage = '';
        const isUsernameValid = isEnteredUsernameValid(enteredUsername);
        const isAgeValid = isEnteredAgeValid(enteredAge);

        if (!isUsernameValid && !isAgeValid) {
            errorMessage = 'Please enter a valid name and age (non empty values).';
        } else if (!isAgeValid) {
            errorMessage = 'Please enter a valid age (> 0).';
        } else if (!isUsernameValid) {
            errorMessage = 'Please enter a valid name (non empty value).';
        }

        return errorMessage;
    };

    const usernameChangeHandler = (event) => {
        const enteredUsername = event.target.value;
        setEnteredUsername(enteredUsername);
    };

    const ageChangeHandler = (event) => {
        const enteredAge = event.target.value;
        setEnteredAge(enteredAge);
    };

    const submitUserHandler = (event) => {
        event.preventDefault();
        const isUsernameValid = isEnteredUsernameValid(enteredUsername);
        const isAgeValid = isEnteredAgeValid(enteredAge);

        if (isUsernameValid && isAgeValid) {
            props.onAddUser({
                id: Math.random(),
                name: enteredUsername,
                age: enteredAge
            });

            setEnteredUsername('');
            setEnteredAge('');
        } else {
            setErrorMessage(getFormErrorMessage());
        }
    };

    return (
        <form onSubmit={submitUserHandler} noValidate={true}>
            <div
                className={styles.input}
            >
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
            </div>

            <div
                className={styles.input}
            >
                <label>Age (Years)</label>
                <input
                    type="number"
                    min="0"
                    name="years"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
            </div>

            <Button type="submit">Add User</Button>
        </form>
    );
};

export default AddUserForm;

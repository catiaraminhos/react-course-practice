import React, { useState } from 'react';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal';
import Wrapper from '../../Helpers/Wrapper';

import styles from './AddUserForm.module.css';

const AddUserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const isEnteredUsernameValid = (username) => {
        return username.trim().length > 0;
    };

    const isEnteredAgeValid = (age) => {
        const parsedAge = parseInt(age, 10);
        return Number.isInteger(parsedAge) && parsedAge >= 0;
    };

    const getFormError = () => {
        let error = null;
        const isUsernameValid = isEnteredUsernameValid(enteredUsername);
        const isAgeValid = isEnteredAgeValid(enteredAge);

        if (!isUsernameValid && !isAgeValid) {
            error = {
                title: 'Invalid input',
                content: 'Please enter a valid name and age (non empty values).'
            };
        } else if (!isAgeValid) {
            error = {
                title: 'Invalid age',
                content: 'Please enter a valid age (> 0).'
            };
        } else if (!isUsernameValid) {
            error = {
                title: 'Invalid input',
                content: 'Please enter a valid name (non empty value).'
            };
        }

        return error;
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
                age: enteredAge,
            });

            setEnteredUsername('');
            setEnteredAge('');
        } else {
            setError(getFormError());
        }
    };

    const errorModalConfirmClickHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            <form onSubmit={submitUserHandler} noValidate={true}>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        min="0"
                        id="age"
                        name="age"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                </div>

                <Button type="submit">Add User</Button>
            </form>

            {error && (
                <ErrorModal
                    title={error.title}
                    content={error.content}
                    onConfirm={errorModalConfirmClickHandler}
                />
            )}
        </Wrapper>
    );
};

export default AddUserForm;

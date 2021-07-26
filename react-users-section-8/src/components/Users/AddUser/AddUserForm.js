import React, { useState, useRef } from 'react';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal';
import Wrapper from '../../Helpers/Wrapper';

import styles from './AddUserForm.module.css';

const AddUserForm = (props) => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState('');

    const isEnteredUsernameValid = (username) => {
        return username.trim().length > 0;
    };

    const isEnteredAgeValid = (age) => {
        const parsedAge = parseInt(age, 10);
        return Number.isInteger(parsedAge) && parsedAge >= 0;
    };

    const getFormError = (enteredUsername, enteredAge) => {
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

    const submitUserHandler = (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const isUsernameValid = isEnteredUsernameValid(enteredUsername);
        const isAgeValid = isEnteredAgeValid(enteredAge);

        if (isUsernameValid && isAgeValid) {
            props.onAddUser({
                id: Math.random(),
                name: enteredUsername,
                age: enteredAge,
            });

            usernameInputRef.current.value = '';
            ageInputRef.current.value = '';
        } else {
            setError(getFormError(enteredUsername, enteredAge));
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
                        ref={usernameInputRef}
                    />
                </div>

                <div className={styles.input}>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        min="0"
                        id="age"
                        name="age"
                        ref={ageInputRef}
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

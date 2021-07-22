import React from 'react';

import Card from '../../UI/Card';

import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <div>
            {props.users && props.users.length > 0 && (
                <Card className={styles.users}>
                    <ul>
                        {props.users.map((user) => (
                            <li key={user.id}>
                                {user.name} ({user.age} years old)
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>
    );
};

export default UsersList;

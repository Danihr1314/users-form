import React from 'react';

const UsersList = ({usersList,selectUser, deleteUser}) => {
  return (
    <div className='list'>
      <ul>
        {usersList.map(user => (
          <li key={user.id}>
            <div className='user-data'>
              <h3>{user.first_name} {user.last_name}</h3>
              <div>{user.email}</div>
              <div><i className="fa-solid fa-cake-candles"></i>{' '}{user.birthday}</div>
            </div>
            <div className='options'>
              <button onClick={() => selectUser(user)}><i className="fa-solid fa-pencil"></i></button>
              <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
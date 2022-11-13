import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import { get } from 'react-hook-form';

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res=> setUsersList(res.data))
  },[])

  const  getUsers = ()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res=> setUsersList(res.data));
  }

  const selectUser = (car)=> {
    setUserSelected(car)
  }

  const deselectUser = () => {
    setUserSelected(null)
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
  }

  console.log(usersList);

  return (
    <div className="App">
      <UsersForm 
        userSelected={userSelected}
        getUsers={getUsers}
        deselectUser={deselectUser}
      />
      <UsersList 
        selectUser={selectUser}
        usersList={usersList}
        deleteUser={deleteUser}
      />
    </div>
  )
}

export default App

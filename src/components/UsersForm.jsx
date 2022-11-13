import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const initialvalues = {
  email:"",
  password:"",
  first_name:"",
  last_name:"",
  birthday:""
}

  const UsersForm = ({getUsers, userSelected, deselectUser}) => {

  const {handleSubmit, register, reset} = useForm();

  const submit = (data) => {
    console.log(data);
    if (userSelected){
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
      .then(() => {
        getUsers()
        deselectUser()
      })
      .catch(error=>console.log(error.respone?.data));
    }else{
      axios.post('https://users-crud1.herokuapp.com/users/', data)
      .then(() => getUsers())
      .catch(error=>console.log(error.respone?.data));
    }
  };

  useEffect(() => {
    if (userSelected){
      reset(userSelected)
    }else{
      reset(initialvalues)
    }
  },[userSelected])

  return (
    <div className='form'>
      <form className='users-form' onSubmit={handleSubmit(submit)}>
        <h1>Create User</h1>
        <div className='input-container'>
          <label htmlFor="first_name"><i className="fa-solid fa-user-large"></i></label>
          <input 
            {...register("first_name")} 
            type="text" 
            id='first_name'
            placeholder='first name'
          />
          <label htmlFor="last_name"></label>
          <input 
            {...register("last_name")} 
              type="text" 
              id='last_name'
              placeholder='last name'
            />
        </div>
        <div className='input-container'>
          <label htmlFor="email"><i className="fa-solid fa-at"></i></label>
          <input 
            {...register("email")} 
            type="text" 
            id='email'
            placeholder='email'
          />
        </div>
        <div className='input-container'>
          <label htmlFor="password"><i className="fa-solid fa-key"></i></label>
          <input 
            {...register("password")} 
            type="password" 
            id='password'
            placeholder='password'
          />
        </div>
        <div className='input-container'>
          <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
          <input 
            {...register("birthday")} 
            type="date" 
            id='birthday'
          />
        </div>
        <button>Upload</button>
      </form>
    </div>
  );
};

export default UsersForm;
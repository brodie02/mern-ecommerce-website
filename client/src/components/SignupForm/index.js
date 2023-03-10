import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'

import Auth from '../../utils/auth'

export default function SignupForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="form">
      <div>
          <h3>Sign Up</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formState.name} onChange={handleChange}/>
          <label>Email:</label>
          <input type="text" name="email" value={formState.email} onChange={handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={formState.password} onChange={handleChange}/><br/>
          <button className='button' type='submit'>Sign Up</button>
      </form> 
    </section>
  )
}
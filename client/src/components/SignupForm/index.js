import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <section class="card">
      <div>
          <h3>Sign Up</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
          <label for="name">Name:</label><br/>
          <input type="text" name="name" id="name" value={formState.name} onChange={handleChange}/><br/>
          <label for="email">Email:</label><br/>
          <input type="text" name="email" id="email" value={formState.email} onChange={handleChange}/><br/>
          <label for="pass">Password:</label><br/>
          <input type="password" name="password" id="pass" value={formState.password} onChange={handleChange}/><br/>
          <p class="none" id="pass-err"></p><br/>
          <button class="button" type='submit'>Sign Up</button>
      </form> 
    </section>
  )
}
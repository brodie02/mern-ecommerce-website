import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { LOGIN } from '../../utils/mutations'

import Auth from '../../utils/auth'

export default function LoginForm() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login, { error, data }] = useMutation(LOGIN);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="form">
      <div>
          <h3>Login</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={formState.email} onChange={handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={formState.password} onChange={handleChange}/><br/>
          <button className='button' type='submit'>Login</button>
      </form> 
    </section>
  )
}
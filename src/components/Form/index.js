/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="text"
        {...register('email', {
          required: 'this is required',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="lastName">Password</label>
      <input
        placeholder="Enter your password"
        {...register('password', {
          required: 'this is required',
          minLength: {
            value: 8,
            message: 'Min length is 8 characters',
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default Form;

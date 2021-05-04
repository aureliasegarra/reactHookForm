/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (values) => {
    // Log the object values if form is valid
    console.log(values);
  };

  return (
    <div className="container">
      <h1 className="title">Login form</h1>
      <h2 className="subtitle">with react-hook-form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email"
            type="text"
            name="email"
            className={`field ${errors.email ? 'is-invalid' : ''}`}
            // register the input into the hook by calling the register function
            {...register('email', {
              required: '🙏🏻 Please your email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: '🚨 Sorry, invalid email address format',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your best password"
            type="password"
            className={`field ${errors.password ? 'is-invalid' : ''}`}
            name="password"
             // register the input into the hook by calling the register function
            {...register('password', {
              required: '🙏🏻 Please your password is required',
              minLength: {
                value: 8,
                message: '😢 Sorry, Password must be 8 characters at minimum',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;

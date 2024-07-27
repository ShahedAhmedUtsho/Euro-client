import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {}
  });

  const [loginError, setLoginError] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const pinRef = useRef();

  const handleLogin = async (data) => {
    try {
      let res = await axios.post(`${import.meta.env.VITE_SITE_URL}/login`, data);
      console.log(res);
      // Handle successful login here
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError('Incorrect email or PIN.');
      } else {
        setLoginError('An error occurred. Please try again.');
      }
    }

    console.log("connected", data);
    reset();
  };

  const handleKeyDown = (e, ref) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ref.current.focus();
    }
  };

  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col mt-[10vh] items-center w-full'>
      <br />
      <div className='border border-zinc-500 backdrop-blur-md p-3 rounded-md min-w-96'>
        <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-3'>
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="key"
              label="Number or email"
              name="key"
              autoComplete="Number or email"
              className='text-zinc-100'
              autoFocus
              error={Boolean(errors.key?.message)}
              helperText={errors.key?.message}
              {...register("key", {
                required: "Give email or number",
              })}
              inputRef={nameRef}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='number'
              id="pin"
              label="5 Digit PIN"
              name="pin"
              autoComplete="pin"
              className='text-zinc-100'
              error={Boolean(errors.pin?.message)}
              helperText={errors.pin?.message}
              {...register("pin", {
                required: "PIN is required",
                pattern: { value: /^\d{5}$/, message: "PIN should have exactly 5 digits" }
              })}
              inputRef={pinRef}
            />
          </Grid>
          <button className='border border-blue-400 transition-all active:scale-95 hover:scale-105 rounded-sm p-2 uppercase bg-blue-500 text-white' type='submit'>
            Login
          </button>
        </form>
        <Link className='text-sm text-blue-500 inline-block mt-2' to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;

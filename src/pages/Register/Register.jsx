import { Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {}
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const pinRef = useRef();
  const roleRef = useRef();

  const handleRegister = (data) => {





    const RegistrationDate = new Date().toISOString() ;
const save = {...data,status:"pending",RegistrationDate} ;

if(data.role ==="agent"){

axios.post('http://localhost:3000/')



  console.log("connected",save, );
    // reset();
  console.log("its agent")

}else{
  console.log("connected",save, );
    // reset();
  console.log("its user")
}



    
  };

  const handleKeyDown = (e, ref) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ref.current.focus();
    }
  };

  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col  items-center w-full'>
      <br />
      <div className='border mt-[10vh] border-zinc-500 backdrop-blur-md p-3 rounded-md min-w-96'>
        
        <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col gap-3'>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              className='text-zinc-100'
              autoFocus
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 6, message: "Name should be at least 6 characters" }
              })}
              inputRef={nameRef}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
            />
          </Grid>
          <Grid item xs={12} className='!text-red-100 placeholder:!text-red-800'>
            <TextField
              fullWidth
              id="email"
              type='email'
              label="Email Address"
              name="email"
              autoComplete="email"
              className='!text-red-100 placeholder:!text-red-800'
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
              onKeyDown={(e) => handleKeyDown(e, phoneRef)}
              inputRef={emailRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='number'
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              className='text-zinc-100'
              error={Boolean(errors.phone?.message)}
              helperText={errors.phone?.message}
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 6, message: "Phone number should be valid" }
              })}
              inputRef={phoneRef}
              onKeyDown={(e) => handleKeyDown(e, pinRef)}
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
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Role</FormLabel>
              <RadioGroup row aria-label="role" name="role">
                <FormControlLabel value="user" control={<Radio />} label="User" {...register("role", { required: "Role is required" })} />
                <FormControlLabel value="agent" control={<Radio />} label="Agent" {...register("role", { required: "Role is required" })} />
              </RadioGroup>
              {errors.role && <p style={{ color: 'red' }}>{errors.role.message}</p>}
            </FormControl>
          </Grid>
          <button className='border border-blue-400 transition-all active:scale-95 hover:scale-105 rounded-sm p-2 uppercase bg-blue-500 text-white' type='submit'>Register</button>
        </form>
        <Link className='text-sm text-blue-500 inline-block mt-2' to="/login">login</Link>
       
      </div>
    </div>
  );
};

export default Register;

import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { post } from '../../utils/api';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const SignUpForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
});

const SignUp = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const data = {
      user: {
        email: 'test2@yopmail.com',
        full_name: 'Test user',
        phone_number: '212121212',
        password: 'password',
      },
    };

    post('/users/sign_up', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => alert(err));
  };

  return (
    <FormContainer>
      <h2>Signup</h2>
      <SignUpForm>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button variant="outlined" onClick={handleSignup}>
          Signup
        </Button>
      </SignUpForm>
    </FormContainer>
  );
};

export default SignUp;

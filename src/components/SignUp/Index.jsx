import React from 'react';
import { post } from '../../utils/api';
import Banner from '../../Assets/Images/banner.jpg';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone_number: Yup.string()
    .min(10, 'Phone number is invalid')
    .required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

export default function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      full_name: '',
      phone_number: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const finalData = {
        user: {
          email: values.email,
          full_name: values.full_name,
          phone_number: values.phone_number,
          password: values.password,
        },
      };
      post('/users/sign_up', finalData)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate('/');
          }, 3000);
        })
        .catch((err) =>
          toast.error(err.response.data.errors[0], {
            position: toast.POSITION.TOP_RIGHT,
          }),
        );
    },
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <ToastContainer />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'start',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="full_name"
                label="Full Name"
                name="full_name"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.full_name && Boolean(formik.errors.full_name)
                }
                helperText={formik.touched.full_name && formik.errors.full_name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                error={
                  formik.touched.phone_number &&
                  Boolean(formik.errors.phone_number)
                }
                helperText={
                  formik.touched.phone_number && formik.errors.phone_number
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </form>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {'Already have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

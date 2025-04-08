import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/Holidaze.svg';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Please enter a valid email address.')
        .matches(
          /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
          'Email must be from stud.noroff.no domain.'
        )
        .required('Email is required'),
      password: yup.string().required('Password is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const navigate = useNavigate();

  async function onSubmit(data) {
    const body = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    const url = 'https://v2.api.noroff.dev/auth/login';

    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.data.accessToken);
        localStorage.setItem('username', result.data.name);
      } else {
        setIsError(result.errors[0].message);
      }
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  }

  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Holidaze logo" />
      </Link>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        {isError && <p style={{ color: 'red' }}>{isError}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sign in...' : 'Sign in'}
        </button>
      </form>
      <p>Don’t have an account yet?</p>
      <Link to="/register">Sign up now</Link>
    </div>
  );
}

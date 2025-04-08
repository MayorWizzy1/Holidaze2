import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('Username is required'),
      email: yup
        .string()
        .email('Please enter a valid email address.')
        .matches(
          /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
          'Email must be from stud.noroff.no domain.'
        )
        .required('Email is required'),
      password: yup
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password is required'),
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
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const url = 'https://v2.api.noroff.dev/auth/register';

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

      if (!response.ok) {
        setIsError(result.errors[0].message);
      }
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
      navigate('/login');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>

        {isError && <p style={{ color: 'red' }}>{isError}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sign up...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
}

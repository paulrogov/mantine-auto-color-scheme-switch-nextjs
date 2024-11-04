import { Container } from '@mantine/core';
import { Metadata } from 'next';
import RegisterForm from './page';

export const metadata: Metadata = {
  title: 'Create new account',
  description: 'Sign up here',
};

export default function Layout() {
  return (
    <RegisterForm />
  )
}

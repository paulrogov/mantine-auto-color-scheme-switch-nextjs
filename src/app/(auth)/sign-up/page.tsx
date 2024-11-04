'use client';

import { useRouter } from 'next/navigation';
import { useForm, hasLength } from '@mantine/form';
import { Box, TextInput, PasswordInput, Text, Paper, Group, Container, PaperProps, Button, Divider, Checkbox, Anchor, Stack } from '@mantine/core';
import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import styles from './styles.module.css';

export default function RegisterForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      first_name: '',
      username: '',
      password1: '',
      password2: '',
    },
  });

  const router = useRouter();

  return (
    <Container size={420} mt={40} mb={40} className={styles.additionalTopPaddingOnDesktop}>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" fw={500} mb={10}>
          Create account
        </Text>

        <form>
          <Stack>
            <TextInput
              {...form.getInputProps('first_name')} // uncontrolled mode
              key={form.key('first_name')} // uncontrolled mode
              required
              label="First and last name"
              placeholder="Your first and last name"
              radius="md"
            />

            <TextInput
              {...form.getInputProps('username')} // uncontrolled mode
              key={form.key('username')} // uncontrolled mode
              required
              label="Email"
              placeholder="user@gmail.com"
              radius="md"
            />

            <PasswordInput
              {...form.getInputProps('password1')} // uncontrolled mode
              key={form.key('password1')} // uncontrolled mode
              required
              label="Password"
              placeholder="your password"
              radius="md"
            />

            <PasswordInput
              {...form.getInputProps('password2')} // uncontrolled mode
              key={form.key('password2')} // uncontrolled mode
              required
              label="Repeat your password"
              placeholder="type your password once more"
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component={Link} href="/" type="button" c="dimmed" size="xs">
              {'Already have an account? Sign in'}
            </Anchor>
            <Button type="submit" radius="xl">Create</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

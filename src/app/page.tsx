'use client';

import Link from 'next/link';
import { useForm, hasLength } from '@mantine/form';
import { TextInput, PasswordInput, Text, Paper, Group, Container, Button, Anchor, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function AuthenticationForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Container size={420} mt={40} mb={40} className={styles.additionalTopPaddingOnDesktop}>
      <Paper radius="md" p="xl" withBorder>

        <Group mb={10}>
          <Text size="lg" fw={500} style={{ "textAlign": "center" }}>
            Sign into your account
          </Text>
        </Group>

        <form>
          <Stack>
            <TextInput
              {...form.getInputProps('username')} // uncontrolled mode
              key={form.key('username')} // uncontrolled mode
              required
              label="Email"
              placeholder="email"
              radius="md"
            />

            <PasswordInput
              {...form.getInputProps('password')} // uncontrolled mode
              key={form.key('password')} // uncontrolled mode
              required
              label="Password"
              placeholder="your password"
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component={Link} href="/sign-up" type="button" c="dimmed" size="xs">
              {"No account? Create one"}
            </Anchor>
            <Button type="submit" radius="xl">Sign in</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

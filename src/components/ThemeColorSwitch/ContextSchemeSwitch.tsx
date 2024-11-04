import React, { useContext } from 'react'
import SchemeContext from '@/store/ColorSchemeContext';
import { ActionIcon } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classes from './styles.module.css';
import { cx } from '@/utils/functions';

export default function ContextSchemeSwitch() {
  const colorSchemeContext = useContext(SchemeContext);

  // Ensure the context exists (not null)
  if (!colorSchemeContext) {
    throw new Error("ContextSchemeSwitch must be used within a SchemeContext provider.");
  }

  const { colorScheme, onChange } = colorSchemeContext;

  const toggleColorScheme = () => {
    onChange((prevScheme : "light" | "dark") => (prevScheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ActionIcon
      // onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      onClick={toggleColorScheme}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

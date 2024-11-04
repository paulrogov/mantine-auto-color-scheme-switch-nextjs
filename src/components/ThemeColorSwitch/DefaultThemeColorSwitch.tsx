"use client";

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { cx } from '@/utils/functions';
import classes from './styles.module.css';
import { useColorScheme } from '@mantine/hooks';

export default function DefaultThemeColorSwitch() {
  const { setColorScheme } = useMantineColorScheme(); // set mantine theme
  const preferredColorScheme = useColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  console.log("preferredColorScheme:", preferredColorScheme); // set by user's OS and browser
  console.log("computedColorScheme:" , computedColorScheme); // mantine current theme

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

"use client";

import { useMantineColorScheme } from '@mantine/core';
import React, { useEffect } from 'react'

type props = {
  color: "dark" | "light"
}

export default function AutoSwitchHook({ color }: props) {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorScheme(color);
  }, [color, setColorScheme]);

  return (
    <></>
  )
}

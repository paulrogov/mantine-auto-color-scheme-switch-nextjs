"use client";

import { MantineProvider, ColorSchemeScript, useMantineColorScheme } from '@mantine/core';
import { theme, resolver } from '@/utils/theme';
import ColorSchemeContext from "@/store/ColorSchemeContext";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import AutoSwitchHook from '@/components/ThemeColorSwitch/AutoSwitchHook';

export default function MantineProviderWithSchemeColor({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorSchemeState] = useState<"dark" | "light">(preferredColorScheme);

  useEffect(() => {
    // Sync color scheme with system preference whenever it changes
    setColorSchemeState(preferredColorScheme);
    console.log("user preferred scheme (client-component):", preferredColorScheme);
  }, [preferredColorScheme]);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorSchemeState }}>
      <ColorSchemeScript defaultColorScheme={colorScheme} />
      <MantineProvider theme={theme} cssVariablesResolver={resolver} defaultColorScheme={colorScheme}>
        <AutoSwitchHook color={colorScheme} />

        {/* works, but does not allow to change with button */}
        {/* <ColorSchemeScript defaultColorScheme="auto" /> */}
        {/* <MantineProvider theme={theme} forceColorScheme={colorScheme} cssVariablesResolver={resolver}> */}

        {children}
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

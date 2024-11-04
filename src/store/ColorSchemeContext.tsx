// https://v1.mantine.dev/guides/dark-theme/#color-scheme-toggle
// import { createContext } from 'react';
// export default createContext(null);

import { createContext, Dispatch, SetStateAction } from 'react';

type ColorSchemeContextType = {
  colorScheme: "dark" | "light";
  onChange: Dispatch<SetStateAction<"dark" | "light">>;
};

const SchemeContext = createContext<ColorSchemeContextType | null>(null);
export default SchemeContext

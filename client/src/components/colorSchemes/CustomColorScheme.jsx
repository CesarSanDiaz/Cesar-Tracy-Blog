import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';

export default function CustomColorScheme() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        ></MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

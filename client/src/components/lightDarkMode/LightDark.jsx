import { Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function LightDark() {
  const { toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === 'dark';
  const theme = useMantineTheme();

  return (
    <Switch
      // color={theme.colorScheme === 'dark' ? 'gray' : 'blue'}
      onChange={() => toggleColorScheme()}
      size='sm'
      onLabel={
        <IconSun size='1rem' stroke={2.5} color={theme.colors.yellow[4]} />
      }
      offLabel={
        <IconMoonStars size='1rem' stroke={2.5} color={theme.colors.blue[6]} />
      }
    />
  );
}

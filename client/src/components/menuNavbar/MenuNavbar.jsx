import {
  Burger,
  Divider,
  Group,
  MediaQuery,
  Navbar,
  Stack,
  Text,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
  IconHome,
  IconMail,
  IconTrees,
  IconUsers,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
  nav: {
    position: 'absolute',
    top: '50px',
    left: '0',
    height: 'fit-content',
    borderBottom: '1px solid black',
  },
}));

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger
          styles={{ display: 'none' }}
          opened={opened}
          onClick={toggle}
          aria-label={label}
          size='sm'
          color={theme.colorScheme === 'dark' ? 'white' : 'black'}
        />
      </MediaQuery>
      <Navbar className={classes.nav} hidden={!opened} p='sm'>
        <Navbar.Section pb='sm'>
          <Stack>
            <Link className='link' to='/' onClick={toggle}>
              <Group spacing='sm'>
                <IconHome color='#228be6' />
                <Text>Home</Text>
              </Group>
            </Link>
            <Link className='link' to='/blog' onClick={toggle}>
              <Group spacing='sm'>
                <IconTrees color='#228be6' />
                <Text>Blog</Text>
              </Group>
            </Link>
            <Link className='link' to='/about' onClick={toggle}>
              <Group spacing='sm'>
                <IconUsers color='#228be6' />
                <Text>About</Text>
              </Group>
            </Link>
            <Link className='link' to='/contact' onClick={toggle}>
              <Group spacing='sm'>
                <IconMail color='#228be6' />
                <Text>Contact</Text>
              </Group>
            </Link>
          </Stack>
        </Navbar.Section>
        <Divider size='lg' color='blue' pb='sm' />
        <Navbar.Section className='navIconSection'>
          <Group position='left'>
            <IconBrandYoutube color='#ff0000' size={24} />
            <IconBrandInstagram color='#e1306c' size={24} />
            <IconBrandTwitter color='#1da1f2' size={24} />
            <IconBrandPinterest color='#E60023' size={24} />
          </Group>
        </Navbar.Section>
      </Navbar>
    </>
  );
}

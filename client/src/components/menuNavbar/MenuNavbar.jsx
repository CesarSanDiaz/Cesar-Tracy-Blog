import {
  Burger,
  Divider,
  Group,
  MediaQuery,
  Navbar,
  Stack,
  Text,
  createStyles,
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

const useStyles = createStyles((theme) => ({
  nav: {
    position: 'absolute',
    top: '50px',
    left: '0',
    height: 'fit-content',
    borderBottom: '1px solid black',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
  },
  icons: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  divider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const { classes } = useStyles();

  return (
    <>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger opened={opened} onClick={toggle} aria-label={label} size='sm' />
      </MediaQuery>
      <Navbar className={classes.nav} hidden={!opened} p='sm'>
        <Navbar.Section pb='sm'>
          <Stack>
            <Link className='link' to='/' onClick={toggle}>
              <Group spacing='sm'>
                <IconHome className={classes.icons} />
                <Text>Home</Text>
              </Group>
            </Link>
            <Link className='link' to='/blog' onClick={toggle}>
              <Group spacing='sm'>
                <IconTrees className={classes.icons} />
                <Text>Blog</Text>
              </Group>
            </Link>
            <Link className='link' to='/about' onClick={toggle}>
              <Group spacing='sm'>
                <IconUsers className={classes.icons} />
                <Text>About</Text>
              </Group>
            </Link>
            <Link className='link' to='/contact' onClick={toggle}>
              <Group spacing='sm'>
                <IconMail className={classes.icons} />
                <Text>Contact</Text>
              </Group>
            </Link>
          </Stack>
        </Navbar.Section>
        <Divider size='xs' p='1.5px' mb='sm' className={classes.divider} />
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

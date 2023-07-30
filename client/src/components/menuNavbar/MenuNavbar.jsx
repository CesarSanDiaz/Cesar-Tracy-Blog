import {
  Burger,
  Divider,
  Group,
  MediaQuery,
  Navbar,
  Paper,
  Text,
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
import './menuNavbar.scss';

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const theme = useMantineTheme();

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
      <Navbar className='nav' hidden={!opened} p='sm'>
        <Paper>
          <Navbar.Section className='navLinkSection'>
            <Link className='link' to='/' onClick={toggle}>
              <IconHome className='linkIcon' />
              <Text>Home</Text>
            </Link>
            <Link className='link' to='/blog' onClick={toggle}>
              <IconTrees className='linkIcon' />
              <Text>Blog</Text>
            </Link>
            <Link className='link' to='/about' onClick={toggle}>
              <IconUsers className='linkIcon' />
              <Text>About</Text>
            </Link>
            <Link className='link' to='/contact' onClick={toggle}>
              <IconMail className='linkIcon' />
              <Text>Contact</Text>
            </Link>
          </Navbar.Section>
          <Divider size='lg' color='blue' />
          <Navbar.Section className='navIconSection'>
            <Group position='left'>
              <IconBrandYoutube className='Icon youtube' size={24} />
              <IconBrandInstagram className='Icon instagram' size={24} />
              <IconBrandTwitter className='Icon twitter' size={24} />
              <IconBrandPinterest className='Icon pinterest' size={24} />
            </Group>
          </Navbar.Section>
        </Paper>
      </Navbar>
    </>
  );
}

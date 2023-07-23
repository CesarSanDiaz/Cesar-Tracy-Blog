import { Burger, Group, Navbar, Paper, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
  IconHome,
  IconMail,
  IconUsers,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './menuNavbar.scss';

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label={label}
        size='sm'
        color='#fff'
        mr='xl'
        className='burger'
      />
      <Paper>
        <Navbar className='nav' hidden={!opened} p='sm'>
          <Navbar.Section className='navTopSection' fw={300}>
            <Text className='topText' size={22}>
              Cesar & Tracy
            </Text>
          </Navbar.Section>
          <Navbar.Section className='navLinkSection'>
            <Link className='link' to='/' onClick={toggle}>
              <IconHome className='linkIcon' size={26} />
              <span>Home</span>
            </Link>
            <Link className='link' to='/about' onClick={toggle}>
              <IconUsers className='linkIcon' size={26} />
              <span>About</span>
            </Link>
            <Link className='link' to='/contact' onClick={toggle}>
              <IconMail className='linkIcon' size={26} />
              <span>Contact</span>
            </Link>
          </Navbar.Section>
          <Navbar.Section className='navIconSection'>
            <Group position='left'>
              <IconBrandYoutube className='Icon youtube' size={24} />
              <IconBrandInstagram className='Icon instagram' size={24} />
              <IconBrandTwitter className='Icon twitter' size={24} />
              <IconBrandPinterest className='Icon pinterest' size={24} />
            </Group>
          </Navbar.Section>
        </Navbar>
      </Paper>
    </>
  );
}

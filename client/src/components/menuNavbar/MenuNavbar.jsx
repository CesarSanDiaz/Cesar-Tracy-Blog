import {
  Burger,
  Divider,
  Drawer,
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
  IconLogin,
  IconMail,
  IconTrees,
  IconUserPlus,
  IconUsers,
} from '@tabler/icons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import MenuNavbarUser from './MenuNavbarUser';

const useStyles = createStyles((theme) => ({
  nav: {
    position: 'absolute',
    top: '50px',
    left: '0',
    height: 'fit-content',
    borderBottom: '1px solid black',
    color:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
  },
  icons: {
    width: '1.25rem',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  divider: {
    borderTopColor:
      theme.colorScheme === 'dark' ? theme.colors.myYellow[7] : theme.blue,
  },
  header: {
    padding: '12px',
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: 'Pacifico',
  },
  body: {
    padding: '12px',
  },
}));

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const { classes } = useStyles();
  const { user } = useContext(Context);

  return (
    <>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger opened={opened} onClick={toggle} aria-label={label} size='sm' />
      </MediaQuery>
      <Drawer
        hidden={!opened}
        opened={opened}
        onClose={toggle}
        size='fitContent'
        position='top'
        overlayProps={{ opacity: 0.5, blur: 4 }}
        title='CesarTracy.Blog'
        classNames={{
          header: classes.header,
          body: classes.body,
          title: classes.title,
        }}
        transitionProps={{
          transition: 'slide-down',
          duration: 200,
          timingFunction: 'linear',
        }}
      >
        <Divider mb='sm' className={classes.divider} />
        <Navbar.Section>
          <Stack pb='sm'>
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

            <Divider className={classes.divider} />

            {user ? (
              <MenuNavbarUser toggle={toggle} />
            ) : (
              <Stack>
                <Link className='link' to='/login' onClick={toggle}>
                  <Group spacing='sm'>
                    <IconLogin className={classes.icons} />
                    <Text>Login</Text>
                  </Group>
                </Link>

                <Link className='link' to='/register' onClick={toggle}>
                  <Group spacing='sm'>
                    <IconUserPlus className={classes.icons} />
                    <Text>Register</Text>
                  </Group>
                </Link>
              </Stack>
            )}

            <Divider className={classes.divider} />
          </Stack>
        </Navbar.Section>

        <Navbar.Section className='navIconSection'>
          <Group position='left'>
            <IconBrandYoutube size={24} />
            <IconBrandInstagram size={24} />
            <IconBrandTwitter size={24} />
            <IconBrandPinterest size={24} />
          </Group>
        </Navbar.Section>
      </Drawer>
    </>
  );
}

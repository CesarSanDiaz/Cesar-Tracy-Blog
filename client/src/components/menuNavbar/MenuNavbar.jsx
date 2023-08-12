import {
  Burger,
  Button,
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
  IconMail,
  IconPencil,
  IconTrees,
  IconUsers,
} from '@tabler/icons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

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
  loginBtn: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
  },
}));

export default function MenuNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const { classes } = useStyles();
  const user = useContext(Context);

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
        <Divider size='xs' p='1.5px' mb='sm' className={classes.divider} />
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
            <Link className='link' to='/write' onClick={toggle}>
              {user && (
                <Button
                  variant='filled'
                  fullWidth
                  leftIcon={<IconPencil size='1rem' />}
                  className={classes.loginBtn}
                >
                  Create Post
                </Button>
              )}
            </Link>
          </Stack>
        </Navbar.Section>
        <Divider
          style={user ? { display: 'none' } : { display: 'block' }}
          size='xs'
          p='1.5px'
          mb='sm'
          className={classes.divider}
        />
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

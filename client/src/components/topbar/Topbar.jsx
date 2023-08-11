import {
  Button,
  Group,
  MediaQuery,
  Paper,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import LightDark from '../lightDarkMode/LightDark';
import MenuNavbar from '../menuNavbar/MenuNavbar';

const useStyles = createStyles((theme) => ({
  paperMain: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '99',
    position: 'sticky',
    top: '-1px',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[8] : theme.dark,
    borderBottom:
      theme.colorScheme === 'dark'
        ? '0.0625rem solid #373A40'
        : '0.0625rem solid #dee2e6',
    // backgroundColor:
    //   theme.colorScheme === 'dark'
    //     ? theme.colors.myBlue[4]
    //     : theme.colors.myYellow[4],
  },
  navLinks: {
    cursor: 'pointer',
    ':hover': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.myYellow[7]
          : theme.colors.blue[6],
    },
  },
  media: {
    flexWrap: 'nowrap',
  },
  logo: {
    fontFamily: 'pacifico',
    display: 'flex',
    alignItems: 'center',
  },
  topbarButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
        : theme.colors.white,
  },
}));

export default function Topbar() {
  const { classes } = useStyles();
  const { user } = useContext(Context);
  // const PF = 'http://localhost:5000/images/';

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };
  return (
    <>
      <Paper
        className={classes.paperMain}
        classNames='paperMain'
        h={50}
        p='sm'
        radius={0}
        shadow='sm'
      >
        <MediaQuery
          className={classes.media}
          query='(max-width: 30em)'
          styles={{ display: 'none' }}
        >
          <Group position='right' spacing='md'>
            <Title order={5} className={classes.navLinks}>
              <Link className='link' to='/'>
                Home
              </Link>
            </Title>
            <Title order={5} className={classes.navLinks}>
              <Link className='link' to='/blog'>
                Blog
              </Link>
            </Title>
            <Title order={5} className={classes.navLinks}>
              <Link className='link' to='/about'>
                About
              </Link>
            </Title>
            <Title order={5} className={classes.navLinks}>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </Title>
            <Title
              style={user ? { display: 'block' } : { display: 'none' }}
              order={5}
              className={classes.navLinks}
            >
              <Link className='link' to='/write'>
                <Button variant='filled' className={classes.topbarButton}>
                  Create Post
                </Button>
              </Link>
            </Title>
            {/* <Title order={5}
              style={user ? { display: 'block' } : { display: 'none' }}
              className={classes.navLinks}
              onClick={handleLogout}
              >
              {user && 'LOGOUT'}
            </Title> */}
          </Group>
        </MediaQuery>
        <MediaQuery query='(min-width: 30em)' styles={{ display: 'none' }}>
          <div>
            <MenuNavbar />
          </div>
        </MediaQuery>
        <Group position='left' spacing='md' className={classes.media}>
          <LightDark />
          <Link className='link' to='/'>
            <Text className={classes.logo}>
              CesarTracy
              <Text
                span
                sx={(theme) => ({
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.myYellow[7]
                      : theme.colors.blue[6],
                })}
                size={24}
              >
                .
              </Text>
              Blog
            </Text>
          </Link>
        </Group>
      </Paper>
    </>
  );
}

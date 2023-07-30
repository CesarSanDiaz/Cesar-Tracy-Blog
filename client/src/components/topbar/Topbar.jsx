import {
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
  main: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '99',
    position: 'sticky',
    top: '-1px',
    backgroundColor: '',
  },
  topListItem: {
    cursor: 'pointer',
    color: theme.colorScheme === 'dark' ? 'white' : 'dark',
    ':hover': {
      color: '#228be6',
    },
  },
  media: {
    flexWrap: 'nowrap',
  },
  logo: {
    color: theme.colorScheme === 'dark' ? 'white' : 'dark',
    fontFamily: 'pacifico',
    display: 'flex',
    alignItems: 'center',
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
      <Paper className={classes.main} h={50} p='sm' radius={0} shadow='sm'>
        <MediaQuery
          className={classes.media}
          query='(max-width: 30em)'
          styles={{ display: 'none' }}
        >
          <Group position='right' spacing='md'>
            <Title order={5} className={classes.topListItem}>
              <Link className='link' to='/'>
                Home
              </Link>
            </Title>
            <Title order={5} className={classes.topListItem}>
              <Link className='link' to='/blog'>
                Blog
              </Link>
            </Title>
            <Title order={5} className={classes.topListItem}>
              <Link className='link' to='/about'>
                About
              </Link>
            </Title>
            <Title order={5} className={classes.topListItem}>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </Title>
            <Title
              style={user ? { display: 'block' } : { display: 'none' }}
              order={5}
              className={classes.topListItem}
            >
              <Link className='link' to='/write'>
                Write
              </Link>
            </Title>
            {/* <Title order={5}
              style={user ? { display: 'block' } : { display: 'none' }}
              className={classes.topListItem}
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
              <Text span c='#228be6' size={30}>
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

import {
  Container,
  Group,
  MediaQuery,
  Text,
  Title,
  createStyles,
  useMantineTheme,
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
}));

export default function Topbar() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { user } = useContext(Context);
  // const PF = 'http://localhost:5000/images/';

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };
  return (
    <>
      <Container
        className={classes.main}
        w='100%'
        h={50}
        m={0}
        p='sm'
        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
      >
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
          <Text
            sx={{
              fontFamily: theme.fontFamily[2],
            }}
            color={theme.colorScheme === 'dark' ? 'white' : 'dark'}
          >
            CesarTracy
            <Text span c='#228be6'>
              .
            </Text>
            Blog
          </Text>
        </Group>
      </Container>
    </>
  );
}

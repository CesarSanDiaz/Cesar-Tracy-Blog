import { Button, Paper, Stack, Text, createStyles } from '@mantine/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderTop:
      theme.colorScheme === 'dark'
        ? '0.0625rem solid #373A40'
        : '0.0625rem solid #dee2e6',
  },
  socialIcons: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomList: {
    display: 'flex',
  },
  text: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default function Footer() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';
  const { classes } = useStyles();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };

  return (
    <Paper p='xs' radius={0} className={classes.wrapper}>
      <Stack spacing={1} align='center'>
        <Text className={classes.text}>
          2023 &copy; Copyright SanDiazDesigns
        </Text>
        <Text className={classes.text}>
          Follow us on{' '}
          <Text component='a' href='#' c='#e1306c'>
            Instagram
          </Text>
          ,{' '}
          <Text component='a' href='#' c='#1da1f2'>
            Twitter
          </Text>
          , and{' '}
          <Text component='a' href='#' c='#e60023'>
            Pinterest
          </Text>
          .
        </Text>
        <div className='bottomLinks'>
          {user ? (
            <div className='options'>
              <Link className='link' to='/settings'>
                <img
                  className='topImg'
                  src={PF + user.profilePic}
                  alt='Avatar'
                />
              </Link>
              <Button size='xs' onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.bottomList}>
              <Text className={classes.text}>
                <Link className='link' to='/login'>
                  Member Login
                </Link>
              </Text>
              &nbsp;|&nbsp;
              <Text className={classes.text}>
                <Link className='link' to='/register'>
                  Register
                </Link>
              </Text>
            </div>
          )}
        </div>
        <Text size={10} className={classes.text}>
          Made with &#128153;
        </Text>
      </Stack>
    </Paper>
  );
}

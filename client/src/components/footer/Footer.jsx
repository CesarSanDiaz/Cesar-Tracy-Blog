import { Button, Group, Paper, Stack, Text, createStyles } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  footerPaper: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[8] : theme.dark,
    borderTop:
      theme.colorScheme === 'dark'
        ? '0.0625rem solid #373A40'
        : '0.0625rem solid #dee2e6',
  },
  youtubeIcon: {
    ':hover': {
      color: '#ff0000',
      cursor: 'pointer',
    },
  },
  instagramIcon: {
    ':hover': {
      color: '#e1306c',
      cursor: 'pointer',
    },
  },
  twitterIcon: {
    ':hover': {
      color: '#1da1f2',
      cursor: 'pointer',
    },
  },
  pinterestIcon: {
    ':hover': {
      color: '#e60023',
      cursor: 'pointer',
    },
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
  footerButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
        : theme.colors.white,
  },
}));

export default function Footer() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';
  // const PF = 'https://cesar-tracy-blog.vercel.app/images/';
  const { classes } = useStyles();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };

  return (
    <Paper p='xs' radius={0} shadow='xl' className={classes.footerPaper}>
      <Stack spacing={1} align='center'>
        <Text>2023 &copy; Copyright SanDiazDesigns</Text>
        <Group position='center'>
          <Text>Follow us on:</Text>
          <Group>
            <IconBrandYoutube className={classes.youtubeIcon} size='1.5rem' />
            <IconBrandInstagram
              className={classes.instagramIcon}
              size='1.5rem'
            />
            <IconBrandTwitter className={classes.twitterIcon} size='1.5rem' />
            <IconBrandPinterest
              className={classes.pinterestIcon}
              size='1.5rem'
            />
          </Group>
        </Group>
        <div>
          {user ? (
            <Group position='center'>
              <Link className='link' to='/settings'>
                <img
                  src={PF + user.profilePic}
                  alt='Avatar'
                  style={{
                    width: '25px',
                    borderRadius: '50%',
                    height: '25px',
                  }}
                />
              </Link>
              <Button
                variant='filled'
                onClick={handleLogout}
                className={classes.footerButton}
              >
                Logout
              </Button>
            </Group>
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

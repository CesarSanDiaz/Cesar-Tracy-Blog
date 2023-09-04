import { Group, Paper, Stack, Text, createStyles } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footerPaper: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[8] : theme.dark,
    borderTop:
      theme.colorScheme === 'dark'
        ? '0.0625rem solid #373A40'
        : '0.0625rem solid #dee2e6',
    boxShadow:
      'rgba(67, 71, 85, 0.3) 0px 0px 0.25em, rgba(90, 125, 188, 0.1) 0px 0.25em 1em',
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
}));

export default function Footer() {
  // const PF = 'http://localhost:5000/images/';
  const { classes } = useStyles();

  return (
    <Paper p='xs' radius={0} className={classes.footerPaper}>
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
        <Text size={10}>Made with &#128153;</Text>
      </Stack>
    </Paper>
  );
}

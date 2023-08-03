import {
  BackgroundImage,
  Box,
  Divider,
  Paper,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../data/QuickLinks';
import quickLinks from '../../data/QuickLinks';

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor: 'transparent',
  },
  box: {
    textAlign: 'center',
    padding: '6px',
    color: theme.white,
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
  },
  socialIcons: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  youtubeIcon: {
    ':hover': {
      color: '#ff0000',
    },
  },
  instagramIcon: {
    ':hover': {
      color: '#e1306c',
    },
  },
  twitterIcon: {
    ':hover': {
      color: '#1da1f2',
    },
  },
  pinterestIcon: {
    ':hover': {
      color: '#e60023',
    },
  },
  sidebarDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function Sidebar() {
  // const [cats, setCat] = useState([]);
  const { classes } = useStyles();

  // useEffect(() => {
  //   try {
  //     const getCats = async () => {
  //       const res = await axios.get('/categories');
  //       setCat(res.data);
  //     };
  //     getCats();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, []);

  const images = quickLinks.map((pic) => {
    return (
      <BackgroundImage
        className={classes.bgImage}
        key={pic.id}
        src={pic.img}
        alt={pic.title}
        component='a'
        href='#'
      >
        <Box className={classes.box}>{pic.title}</Box>
      </BackgroundImage>
    );
  });

  return (
    <Paper radius={0} p='sm' className={classes.paper}>
      <Title className='sidebarTitle' order={2} align='center' p='xs'>
        Categories
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.sidebarDivider}
        m='auto'
        w='25%'
      />
      <div>
        <SimpleGrid cols={2} spacing={0} h={500} className={classes.grid}>
          {images}
        </SimpleGrid>
      </div>
      <Title order={2} align='center' p='xs' pt='md'>
        About Us
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.sidebarDivider}
        m='auto'
        w='25%'
      />
      <Text size='lg'>
        Welcome to our blog! We are excited to share our traveling journeys and
        experiences with you. We love to explore new places and experience
        different landscapes. Our passion for traveling has taken us to some
        incredible destinations around the United States. Join us to experience
        all these wonderful locations!
      </Text>
      <Title order={2} align='center' p='xs' pt='md'>
        Follow Us!
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.sidebarDivider}
        m='auto'
        w='25%'
      />
      <div className={classes.socialIcons}>
        <IconBrandYoutube className={classes.youtubeIcon} size={28} />
        <IconBrandInstagram className={classes.instagramIcon} size={28} />
        <IconBrandTwitter className={classes.twitterIcon} size={28} />
        <IconBrandPinterest className={classes.pinterestIcon} size={28} />
      </div>
      {/* <ul className='sidebarList'>
        {cats.map((c) => {
          return (
            <Link className='link' to={`/?cat=${c.name}`} key={c.name}>
              <li className='sidebarListItem' key={c.name.type}>
                {c.name}
              </li>
            </Link>
          );
        })}
      </ul> */}
    </Paper>
  );
}

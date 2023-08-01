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

const useStyles = createStyles(() => ({
  box: {
    textAlign: 'center',
    padding: '6px',
    color: 'white',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
  },
  bgImage: {
    ':hover': {
      border: '1px solid white',
    },
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
    <Paper radius={0} p='sm'>
      <Title className='sidebarTitle' order={2} align='center' p='xs'>
        Categories
      </Title>
      <Divider size='lg' pb='md' color='blue' />
      <div>
        <SimpleGrid cols={3} spacing={0} h={300} className={classes.grid}>
          {images}
        </SimpleGrid>
      </div>
      <Title order={2} align='center' p='xs' pt='md'>
        About Us
      </Title>
      <Divider size='lg' pb='md' color='blue' />
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
      <Divider size='lg' pb='md' color='blue' />
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

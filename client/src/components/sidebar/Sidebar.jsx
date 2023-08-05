import {
  Badge,
  // Box,
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
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../data/QuickLinks';
// import quickLinks from '../../data/QuickLinks';

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor: 'transparent',
  },
  badge: {
    variant: 'light',
    textTransform: 'capitalize',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
    color: theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.blue,
  },
  // box: {
  //   textAlign: 'center',
  //   padding: '6px',
  //   color: theme.white,
  //   backgroundColor: 'rgb(0, 0, 0, 0.5)',
  // },
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
  const [cats, setCat] = useState([]);
  const { classes } = useStyles();

  useEffect(() => {
    try {
      const getCats = async () => {
        const res = await axios.get('/categories');
        setCat(res.data);
      };
      getCats();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  // Looping through categories array stored in state
  const catBadge = cats.map((c) => {
    return (
      <Link className='link' to={`/?cat=${c.title}`} key={c.id}>
        <Badge size='md' className={classes.badge}>
          {c.name}
        </Badge>
      </Link>
    );
  });

  // const images = quickLinks.map((pic) => {
  //   return (
  //     <BackgroundImage
  //       className={classes.bgImage}
  //       key={pic.id}
  //       src={pic.img}
  //       alt={pic.title}
  //     >
  //       <Box className={classes.box}>{pic.title}</Box>
  //     </BackgroundImage>
  //   );
  // });

  return (
    <Paper radius={0} p='sm' className={classes.paper}>
      <Link to='/categories' className='link'>
        <Title order={2} align='center' p='xs'>
          Categories
        </Title>
      </Link>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.sidebarDivider}
        m='auto'
        w='25%'
      />
      <div>
        <SimpleGrid cols={2}>
          {/* {images} */}
          {catBadge}
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
        Welcome to our blog! We are excited to share our traveling experiences
        with you. We love to explore new places and experience different
        landscapes. Our passion for traveling has taken us to some incredible
        destinations around the United States. Join us to experience all these
        wonderful locations!
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
    </Paper>
  );
}

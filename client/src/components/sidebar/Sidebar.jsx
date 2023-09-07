import {
  Badge,
  Divider,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
// import axios from 'axios';

const useStyles = createStyles((theme) => ({
  sidebarTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.myYellow[7]
          : theme.colors.blue[6],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
  paper: {
    backgroundColor: 'transparent',
  },
  sidebarBadge: {
    variant: 'light',
    textTransform: 'capitalize',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
    color: theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.blue,
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

export default function Sidebar() {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { classes } = useStyles();

  useEffect(() => {
    setIsLoading(true);
    const getCategories = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/categories');
        const res = await axiosInstance.get('/categories');
        setCategories(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Paper radius={0} p='sm' className={classes.paper}>
      <Title order={2} align='left' py='sm' className={classes.sidebarTitle}>
        Categories
      </Title>
      <Divider size={0} p='1.5px' mb='md' m='auto' w='25%' />
      <div>
        <SimpleGrid cols={2}>
          {categories &&
            categories.map((cat, i) => (
              <Link to={`/?cat=${cat.name}`} className='link' key={i}>
                <Badge className={classes.sidebarBadge}>{cat.name}</Badge>
              </Link>
            ))}
        </SimpleGrid>
      </div>
      <Title order={2} align='left' py='sm' className={classes.sidebarTitle}>
        About Us
      </Title>
      {isLoading ? (
        <Title order={4} align='center' my={12}>
          Loading...
          <Loader size='xl' variant='dots' my={12} />
        </Title>
      ) : (
        <Text size='lg'>
          Welcome to our blog! We are excited to share our traveling experiences
          with you. We love to explore new places and experience different
          landscapes. Our passion for traveling has taken us to some incredible
          destinations around the United States. Join us to experience all these
          wonderful locations!
        </Text>
      )}

      <Title order={2} align='left' py='sm' className={classes.sidebarTitle}>
        Follow Us!
      </Title>
      <Group position='apart'>
        <IconBrandYoutube className={classes.youtubeIcon} size={28} />
        <IconBrandInstagram className={classes.instagramIcon} size={28} />
        <IconBrandTwitter className={classes.twitterIcon} size={28} />
        <IconBrandPinterest className={classes.pinterestIcon} size={28} />
      </Group>
    </Paper>
  );
}

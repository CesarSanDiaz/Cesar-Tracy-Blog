import { Badge, Group, Title, createStyles, rem } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';

const useStyles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.lg,
  },
  catTitle: {
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
  featuredBadge: {
    variant: 'light',
    textTransform: 'capitalize',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
    color: theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.blue,
    width: '150px',
    height: '85px',

    [theme.fn.smallerThan('xs')]: {
      width: '100px',
      height: '55px',
    },
  },
}));

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { classes } = useStyles();
  useEffect(() => {
    const getCategories = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/categories');
        const res = await axiosInstance.get('/categories');
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className={classes.container}>
      <Title order={2} align='left' py='sm' className={classes.catTitle}>
        Popular Categories
      </Title>
      <Group spacing='lg' position='apart' my='lg'>
        {categories.map((cat, i) => (
          <Link to={`/?cat=${cat.name}`} className='link' key={i}>
            <Badge className={classes.featuredBadge} radius='md'>
              {cat.name}
            </Badge>
          </Link>
        ))}
      </Group>
    </div>
  );
}

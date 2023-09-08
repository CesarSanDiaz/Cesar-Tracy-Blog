import {
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import '../../styles/global.scss';

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
  featuredPaper: {
    textTransform: 'capitalize',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[1],
    width: '150px',
    height: '85px',
    margin: 'auto',

    // [theme.fn.smallerThan('xs')]: {
    //   width: '100px',
    //   height: '55px',
    // },
  },
  text: {
    [theme.fn.smallerThan('xs')]: {
      fontSize: '12px',
    },
  },
  image: {
    width: '25px',
  },
}));

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { classes } = useStyles();
  const assetFolder = 'https://cesar-tracy-blog.vercel.app/images/';
  // const assetFolder = 'http://localhost:5000/images/';
  useEffect(() => {
    const getCategories = async () => {
      try {
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
        {categories.map((cat, index) => (
          <Link to={`/?cat=${cat.name}`} className='link'>
            <Paper
              key={index}
              className={classes.featuredPaper}
              // className={`badge${cat.name}`}
              radius='md'
            >
              <Stack align='center' spacing={0} m='xs'>
                <Image
                  width={50}
                  height={50}
                  src={assetFolder + cat.svg}
                  className={classes.image}
                ></Image>
                <Text
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.colors.myPurple[7]
                        : theme.dark,
                  })}
                  className={classes.text}
                >
                  {cat.name}
                </Text>
              </Stack>
            </Paper>
          </Link>
        ))}
      </Group>
    </div>
  );
}

import { Button, Card, TextInput, Title, createStyles } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import SelectCategories from './SelectCategories';

const useStyles = createStyles((theme) => ({
  catCard: {
    width: '25%',
    margin: 'auto',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
        : theme.colors.white,
  },
}));

export default function Categories() {
  const { classes } = useStyles();
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = { name };

    try {
      const response = await axios.post('/categories', category);
      if (response) {
        // resets name back to an empty field
        setName('');
        setError(null);
        console.log('new category added!', response);
        alert('Category has been added!');
      }
    } catch (error) {
      console.log('catch error: ' + error);
      setError('catch error: ' + error);
    }
  };

  return (
    <>
      <div>
        <Card
          shadow='sm'
          radius='lg'
          withBorder
          p='md'
          mt='lg'
          className={classes.catCard}
        >
          <form onSubmit={handleSubmit}>
            <Title order={3}>Add a Category:</Title>
            <TextInput
              required
              label='Name'
              value={name}
              placeholder='Category Name'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              type='submit'
              mt='sm'
              sx={{ display: 'block', margin: 'auto' }}
            >
              Publish
            </Button>
            {error && <div>{error}</div>}
          </form>
        </Card>
        <SelectCategories />
      </div>
    </>
  );
}

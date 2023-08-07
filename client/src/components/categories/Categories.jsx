import { Button, Card, TextInput, Title } from '@mantine/core';
import axios from 'axios';
// import axios from 'axios';
// import axios from 'axios';
import { useState } from 'react';

export default function Categories() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const res = await axios.get('/categories');
  //       setCategories(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCategories();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = { name };

    try {
      const response = await axios.post('/categories', category);
      if (response) {
        setName('');
        setTitle('');
        setLabel('');
        setError(null);
        console.log('new category added!', response);
      }
    } catch (error) {
      console.log('catch error: ' + error);
      setError('catch error: ' + error);
    }
    //   // removing space if any
    //   let noSpaces = categories.replace(/\s+/g, '');
    //   alert(noSpaces);
    // const data = {
    //   name: categories,
    //   title: noSpaces,
    // };
    // try {
    //   await axios.post('/categories', data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <div>
        <Card p='lg'>
          <form onSubmit={handleSubmit}>
            <Title order={3}>Add a Category:</Title>
            <TextInput
              label='Name'
              value={name}
              placeholder='Name'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              label='Title'
              placeholder='Title'
              value={title}
              type='text'
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextInput
              label='Label'
              value={label}
              placeholder='Label'
              type='text'
              onChange={(e) => setLabel(e.target.value)}
            />
            <Button type='submit'>Publish</Button>
            {error && <div>{error}</div>}
          </form>
        </Card>
      </div>
    </>
  );
}

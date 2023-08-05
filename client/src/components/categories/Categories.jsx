import { Button, TextInput, Title } from '@mantine/core';
// import axios from 'axios';
import { useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  const handleSubmit = async (e) => {
    //   e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <Title>Helooooooo!</Title>
          <TextInput
            placeholder='Category'
            type='text'
            onChange={(e) => setCategories(e.target.value)}
            py='sm'
          />
          cat: {categories}
          <Button type='submit'>Publish</Button>
        </form>
      </div>
    </>
  );
}

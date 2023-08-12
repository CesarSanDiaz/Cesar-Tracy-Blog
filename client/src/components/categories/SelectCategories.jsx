import { MultiSelect } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

export default function SelectCategories() {
  // const [value, setValue] = useState(null);
  const [categories, setCategories] = useState(null);
  // const { search } = useLocation();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get('/categories');
        const namesToArray = Array.from(res.data.map((cat) => cat.name));
        setCategories(namesToArray);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  // const catArray = Array.from(catData.map((c) => c.name));

  return (
    <>
      <MultiSelect
        label='Select Category'
        dropdownPosition='top'
        variant='filled'
        placeholder='select categories'
        data={categories || []}
        categories={categories}
      />
    </>
  );
}

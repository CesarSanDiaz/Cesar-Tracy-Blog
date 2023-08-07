import { Badge, MultiSelect, Text } from '@mantine/core';
import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
const catData = [
  { _id: '64d10101a313ac10f72463d4', name: 'Tracy' },
  { _id: '64d100fea313ac10f72463d2', name: 'Cesar' },
  { _id: '64d0fe5fa313ac10f72463c8', name: 'Travel' },
  { _id: '64d0fdaea313ac10f72463bc', name: 'Unique?' },
];

export default function Categories() {
  // const [categories, setCategories] = useState(null);
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

  const catArray = Array.from(catData.map((c) => c.name));

  return (
    <>
      <div>
        <MultiSelect data={catArray} placeholder='select categories' />
      </div>
    </>
  );
}

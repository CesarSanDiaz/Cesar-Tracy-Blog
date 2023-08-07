import {
  BackgroundImage,
  Button,
  Card,
  Divider,
  FileButton,
  // MultiSelect,
  Stack,
  TextInput,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconCamera } from '@tabler/icons-react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

// const catData = [
//   'Travel',
//   'Hiking',
//   'Road Trips',
//   'Guides',
//   'Views',
//   'National Parks',
//   'Waterfalls',
//   'Camping',
//   'State Parks',
// ];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
        : theme.colors.blue[1],
  },
  uploadImg: {
    width: '500px',
    height: '300px',
    backgroundSize: 'contain',
    position: 'center',
    backgroundRepeat: 'no-repeat',
  },
  writeDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const { classes } = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // removing space if any
    let noSpaces = categories.replace(/\s+/g, '');
    const newCat = {
      name: categories,
      title: noSpaces,
      label: '',
    };

    const newPost = {
      username: user.username,
      title,
      desc,
      // categories,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err.message);
      }
    }
    // sending posts to backend
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err.message);
    }
    // sending Categories to backend
    try {
      await axios.post('/categories', newCat);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: '12px' }}>
      <Title order={2} align='center'>
        Create a Post
      </Title>
      <Divider
        size='xs'
        p='1.5px'
        mb='sm'
        className={classes.writeDivider}
        m='auto'
        w='25%'
      />
      <Card
        shadow='sm'
        padding='sm'
        radius='md'
        withBorder
        className={classes.card}
      >
        {file && (
          <Stack align='center'>
            <BackgroundImage
              src={URL.createObjectURL(file)}
              alt=''
              className={classes.uploadImg}
            />
          </Stack>
        )}
        {file ? (
          <div style={{ paddingTop: '12px' }}>
            <Button
              display='block'
              m='auto'
              onClick={() => {
                setFile(null);
              }}
            >
              Remove
            </Button>
          </div>
        ) : (
          <FileButton onChange={setFile}>
            {(props) => (
              <Button
                {...props}
                leftIcon={<IconCamera size='1rem' />}
                display='block'
                m='auto'
              >
                Upload
              </Button>
            )}
          </FileButton>
        )}
        <form onSubmit={handleSubmit} style={{ padding: '12px 0' }}>
          <TextInput
            required
            placeholder='Title'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <textarea
              placeholder='Tell your story...'
              type='text'
              onChange={(e) => setDesc(e.target.value)}
              style={{ width: rem(400), height: rem(120) }}
            />
          </div>
          {/* <MultiSelect
            data={catData}
            placeholder='select categories'
            onChange={(e) => setCat(e[0])}
          /> */}
          <TextInput
            placeholder='Category'
            type='text'
            onChange={(e) => setCategories(e.target.value)}
            py='sm'
          />
          cat: {categories}
          {/* <TextInput
            placeholder='Enter post category'
            label='Category'
            variant='filled'
            onChange={(e) => setCat(e.target.value)}
          /> */}
          <Button type='submit'>Publish</Button>
        </form>
      </Card>
    </div>
  );
}

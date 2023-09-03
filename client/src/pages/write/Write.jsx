import {
  BackgroundImage,
  Button,
  Card,
  Divider,
  FileButton,
  Group,
  MultiSelect,
  Paper,
  Stack,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { IconCamera } from '@tabler/icons-react';
import { useContext, useEffect, useState } from 'react';
// import TipTap from '../../components/tiptap/TipTap';
import RtfMantine from '../../components/tiptap/RtfMantine';
import { axiosInstance } from '../../config';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  card: {
    height: 'fitContent',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[8]
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
  buttons: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[6]
        : theme.colors.white,
  },
}));

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  // used for getting all the categories
  const [categories, setCategories] = useState([]);
  //used for storing only the selected category
  const [selectedCat, setSelectedCat] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const { classes } = useStyles();

  // useEffect to GET call categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axiosInstance.get('/categories');
        // categories into array form so that the multiselect can use that data
        const namesToArray = Array.from(res.data.map((cat) => cat.name));
        setCategories(namesToArray);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      categories: selectedCat,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axiosInstance.post('/upload', data);
      } catch (err) {
        console.log(err.message);
      }
    }
    // sending posts to backend
    try {
      const res = await axiosInstance.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err.message);
    }
    // sending Categories to backend
    try {
      await axiosInstance.post('/categories', [selectedCat]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper style={{ padding: '12px' }}>
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
              variant='filled'
              m='auto'
              className={classes.buttons}
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
                className={classes.buttons}
                variant='filled'
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
        <form onSubmit={handleSubmit} className={classes.writeForm}>
          <TextInput
            required
            label='Title'
            placeholder='Post Title'
            type='text'
            variant='filled'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Title order={6} mt='sm'>
            Description
          </Title>
          <RtfMantine setDesc={setDesc} />
          <Group align='apart'>
            <MultiSelect
              mt='sm'
              label='Select Category'
              dropdownPosition='top'
              variant='filled'
              onChange={setSelectedCat}
              placeholder='select categories'
              data={categories || []}
            />
          </Group>
          <Button
            className={classes.buttons}
            variant='filled'
            type='submit'
            sx={{ display: 'block', marginLeft: 'auto' }}
            my='sm'
          >
            Publish
          </Button>
        </form>
      </Card>
    </Paper>
  );
}

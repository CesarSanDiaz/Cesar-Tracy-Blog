import {
  BackgroundImage,
  Button,
  Divider,
  FileButton,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './write.css';

const useStyles = createStyles((theme) => ({
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
  const [cat, setCat] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const { classes } = useStyles();

  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      cat,
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
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div style={{ padding: '12px' }}>
      <Title order={2} align='center'>
        New Post
      </Title>
      <Divider
        size='xs'
        p='1.5px'
        mb='sm'
        className={classes.writeDivider}
        m='auto'
        w='25%'
      />
      {file && (
        <div>
          <BackgroundImage
            src={URL.createObjectURL(file)}
            alt=''
            className={classes.uploadImg}
          />
          <Button
            onClick={() => {
              setFile(null);
            }}
          >
            Cancel
          </Button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <FileButton onChange={setFile}>
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
          <input
            className='writeInput'
            placeholder='Title'
            type='text'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            className='writeInput writeText'
            placeholder='Tell your story...'
            type='text'
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <TextInput
          placeholder='Enter post category'
          label='Category'
          variant='filled'
          onChange={(e) => setCat(e.target.value)}
        />
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
}

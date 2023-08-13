import {
  Button,
  Card,
  Divider,
  // FileButton,
  FileInput,
  Group,
  Image,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconExclamationMark,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';
import { useContext, useState } from 'react';
import CreateCategory from '../../components/categories/CreateCategory';
import { axiosInstance } from '../../config';
// import axios from 'axios';
import { LoginSuccess } from '../../context/Actions';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  settingsDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));
export default function Settings() {
  const { classes } = useStyles();
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';

  // working when connected to local host
  // const PF = 'http://localhost:5000/images/';
  const [editButtonText, setEditButtonText] = useState('Edit');
  const [isDisabled, setIsDisabled] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = () => {
    if (isDisabled) {
      setIsDisabled(false);
      setEditButtonText('Cancel');
    } else if (!isDisabled) {
      setIsDisabled(true);
      setEditButtonText('Edit Profile');
    }
  };

  // const handleDelete = () => {
  //   console.log(user);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post('/api/upload', data);
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      const res = await axiosInstance.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch(LoginSuccess(res.data));
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <>
      <Title align='center'>Hello {user.username}</Title>
      <Divider
        size='xs'
        p='1.5px'
        mb='sm'
        className={classes.settingsDivider}
        m='auto'
        w='25%'
      />
      <Card
        radius='md'
        withBorder
        m='auto'
        w='80%'
        p='lg'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.myPurple[8]
              : theme.white,
        })}
      >
        <Group position='apart'>
          <Button leftIcon={<IconPencil size='1rem' />} onClick={handleClick}>
            {editButtonText}
          </Button>
          <Button
            onClick={open}
            variant='filled'
            sx={{ backgroundColor: 'red' }}
            leftIcon={<IconTrash size='1rem' />}
          >
            Delete
          </Button>
        </Group>
        <form onSubmit={handleSubmit}>
          <Stack align='center' spacing='sm'>
            <Text>Profile Picture</Text>
            <Image
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt='With default placeholder'
              withPlaceholder
              width={70}
              height={70}
              fit='cover'
              radius={20}
            />
            {file ? (
              <Button
                display='block'
                m='auto'
                onClick={() => {
                  setFile(null);
                }}
              >
                Remove
              </Button>
            ) : (
              <FileInput onChange={setFile} placeholder='pick file'>
                {/* {(props) => (
                  <Button {...props} disabled={isDisabled}>
                    Upload image
                  </Button>
                )} */}
              </FileInput>
            )}
          </Stack>
          <TextInput
            mt='sm'
            label='Username'
            placeholder={user.username}
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            disabled={isDisabled}
          />
          <TextInput
            type='email'
            mt='sm'
            label='Email'
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
          />
          <PasswordInput
            mt='sm'
            label='Password'
            placeholder='******'
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisabled}
          />
          <Button mt='sm' type='submit' disabled={isDisabled}>
            Update
          </Button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', margin: '10px' }}
            >
              Profile has been updated
            </span>
          )}
        </form>
      </Card>
      <Modal opened={opened} onClose={close} title='Delete Account'>
        <Stack align='center' spacing='xs'>
          <IconExclamationMark size='5rem' color='red' />
          <Title order={4}>Are you sure?</Title>
          <Text>This process cannot be undone.</Text>
        </Stack>
        <Group position='center' p='sm'>
          <Button onClick={close}>Cancel</Button>
          {/* <Button variant='filled' color='red' onClick={handleDelete}>
            Delete
          </Button> */}
        </Group>
      </Modal>
      <CreateCategory />
    </>
  );
}

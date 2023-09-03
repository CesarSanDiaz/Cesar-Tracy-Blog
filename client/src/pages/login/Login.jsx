import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Loader,
  Paper,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
// import axios from 'axios';
// import { useDisclosure } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import { Context } from '../../context/Context';
// import './login.css';

const useStyles = createStyles((theme) => ({
  loginPaper: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[8]
        : theme.colors.white,
  },
  anchor: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  buttonText: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.myPurple[7] : theme.white,
  },
}));

// const LoginFailed = () => {
//   return (

//   );
// };

export default function Login() {
  const { classes } = useStyles();
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
      setError(true);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align='center' sx={(theme) => ({ fontWeight: 900 })}>
        Welcome!
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Do not have an account yet?{' '}
        <Anchor size='sm' component='button' className={classes.anchor}>
          <Link className='link' to='/register'>
            Register
          </Link>
        </Anchor>
      </Text>
      <Paper
        withBorder
        shadow='xl'
        p='lg'
        mt='lg'
        radius='md'
        className={classes.loginPaper}
      >
        <form onSubmit={handleSubmit}>
          {error && (
            <Alert
              my='sm'
              icon={<IconAlertCircle size='1rem' />}
              color='red'
              variant='filled'
            >
              Sorry, we can't find an account with this email address and
              password. Please try again or create a new account.
            </Alert>
          )}
          <TextInput
            required
            error={error}
            label='Username'
            type='text'
            placeholder='Your username'
            ref={userRef}
          />
          <TextInput
            required
            error={error}
            mt='sm'
            label='Password'
            type='password'
            placeholder='Your password'
            ref={passwordRef}
          />
          <Group position='apart' mt='lg'>
            <Checkbox label='Remember me' />
            <Anchor component='button' size='sm'>
              Forgot password?
            </Anchor>
          </Group>
          <Button
            fullWidth
            mt='md'
            type='submit'
            variant='filled'
            disabled={isFetching}
          >
            <Text className={classes.buttonText}>
              {isFetching ? <Loader size='sm' /> : 'Login'}
            </Text>
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

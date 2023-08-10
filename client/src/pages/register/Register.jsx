import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
// import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  RegisterPaper: {
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

export default function Register() {
  const { classes } = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    // if (username !== username) {
    //   setError(true);
    // }
    console.log({ username, email, password });
    // try {
    //   const res = await axios.post('/auth/register', {
    //     username,
    //     email,
    //     password,
    //   });
    //   res.data && window.location.replace('/login');
    // } catch (err) {
    //   setError(true);
    // }
  };

  return (
    <Container size={420} my={40}>
      <Title align='center' sx={(theme) => ({ fontWeight: 900 })}>
        Register
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Already have an account?{' '}
        <Anchor size='sm' component='button' className={classes.anchor}>
          <Link className='link' to='/login'>
            Login
          </Link>
        </Anchor>
      </Text>
      <Paper
        withBorder
        shadow='xl'
        p='lg'
        mt='lg'
        radius='md'
        className={classes.RegisterPaper}
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            required
            label='Username'
            type='text'
            placeholder='Enter username'
            onChange={(e) => setUsername(e.target.value)}
            pattern='^[A-Za-z0-9]{3,16}$'
            error={
              error &&
              'username should include at lease 6 characters and no special characters'
            }
          />
          <TextInput
            mt='sm'
            required
            label='Email'
            type='text'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            mt='sm'
            required
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput mt='sm' label='Confirm password' />
          <Button
            mt='md'
            variant='filled'
            fullWidth
            className={classes.buttonText}
            type='submit'
          >
            Register
          </Button>
        </form>
        {error && (
          <span style={{ color: 'red', marginTop: '10px' }}>
            Something went wrong!
          </span>
        )}
      </Paper>
    </Container>
  );
}

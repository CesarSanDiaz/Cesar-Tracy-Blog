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
import { useForm } from '@mantine/form';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';

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

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      // confirmPassword: '',
    },

    validate: {
      username: (value) =>
        value.length < 3 ? 'username must have at least 2 letters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(value)
          ? null
          : 'Password must contain: Minimum five characters, at least one letter and one number',
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.post('/auth/register', form.values);
      res.data && window.location.replace('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align='center' sx={{ fontWeight: 900 }}>
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
      <Text c='red' size='sm' align='center' m='sm'>
        Our apologies, We are not taking new members at the moment
      </Text>
      <Paper
        withBorder
        shadow='xl'
        p='lg'
        mt='lg'
        radius='md'
        className={classes.RegisterPaper}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            disabled
            withAsterisk
            label='Username'
            placeholder='Enter username'
            {...form.getInputProps('username')}
          />
          <TextInput
            disabled
            mt='sm'
            withAsterisk
            label='Email'
            placeholder='Enter email'
            {...form.getInputProps('email')}
          />
          <PasswordInput
            disabled
            mt='sm'
            withAsterisk
            label='Password'
            placeholder='Password'
            {...form.getInputProps('password')}
          />
          <PasswordInput
            disabled
            withAsterisk
            mt='sm'
            label='Confirm password'
            placeholder='Confirm password'
            {...form.getInputProps('confirmPassword')}
          />
          <Button
            disabled
            mt='md'
            variant='filled'
            fullWidth
            className={classes.buttonText}
            type='submit'
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

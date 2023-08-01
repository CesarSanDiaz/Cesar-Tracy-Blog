import {
  Button,
  Card,
  Divider,
  Group,
  MediaQuery,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  Title,
  createStyles,
} from '@mantine/core';
import { IconMail } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  contactTopIcon: {
    display: 'block',
    margin: 'auto',
  },
}));

export default function ContactSection() {
  const { classes } = useStyles();

  return (
    <>
      <Paper p='sm' radius={0}>
        <IconMail
          color='#228be6'
          size={50}
          className={classes.contactTopIcon}
        />
        <Title
          className='contactSectionFormTitle'
          order={2}
          align='center'
          pb='sm'
        >
          Contact us
        </Title>
        <Divider size='lg' pb='md' color='blue' />
        <Text p='md' align='center' fz='lg'>
          Need to get in touch with us? Please fill out the form with your
          inquiry or email us at{' '}
          <Text span underline>
            email@email.com
          </Text>
          .
        </Text>
        <MediaQuery largerThan='md' styles={{ width: '80%', margin: 'auto' }}>
          <Card withBorder shadow='md' radius='md'>
            <form>
              <SimpleGrid
                cols={2}
                mt='xl'
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
              >
                <TextInput
                  label='Name'
                  placeholder='Your name'
                  name='name'
                  size='sm'
                  variant='filled'
                />
                <TextInput
                  label='Email'
                  placeholder='Your email'
                  size='sm'
                  name='email'
                  variant='filled'
                />
              </SimpleGrid>
              <TextInput
                label='Subject'
                placeholder='Subject'
                mt='md'
                name='subject'
                size='sm'
                variant='filled'
              />
              <Textarea
                mt='md'
                label='Message'
                placeholder='Your message'
                maxRows={10}
                minRows={5}
                autosize
                name='message'
                variant='filled'
              />
              <Group position='center' mt='xl'>
                <Button
                  type='submit'
                  size='md'
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.colors.myYellow[4]
                        : 'dark',
                  })}
                >
                  Send Message
                </Button>
              </Group>
            </form>
          </Card>
        </MediaQuery>
      </Paper>
    </>
  );
}

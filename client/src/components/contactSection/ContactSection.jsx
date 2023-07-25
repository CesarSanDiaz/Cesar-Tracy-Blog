import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import './contactSection.scss';

export default function ContactSection() {
  return (
    <Paper p='sm' radius={0}>
      <Title
        className='contactSectionFormTitle'
        order={2}
        align='center'
        pb='sm'
      >
        Get in Touch
      </Title>
      <form className='contactSectionForm'>
        <SimpleGrid
          cols={2}
          mt='xl'
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <TextInput
            label='Name'
            placeholder='Your name'
            name='name'
            size='xs'
            variant='filled'
          />
          <TextInput
            label='Email'
            placeholder='Your email'
            size='xs'
            name='email'
            variant='filled'
          />
        </SimpleGrid>
        <TextInput
          label='Subject'
          placeholder='Subject'
          mt='md'
          name='subject'
          size='xs'
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
          <Button type='submit' size='md'>
            Send message
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

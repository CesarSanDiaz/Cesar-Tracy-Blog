import { Card, Text, Title } from '@mantine/core';
import './aboutCard.scss';

export default function AboutSection({ card }) {
  return (
    <>
      <Title order={2} align='center' transform='capitalize' p='sm'>
        {card.title}
      </Title>
      <Card
        className='container'
        shadow='md'
        radius='lg'
        withBorder
        style={card.style}
        m='auto'
        padding={0}
      >
        {/* <Paper
          style={{
            backgroundColor: (theme) =>
              theme.colorscheme === 'dark'
                ? theme.colors.myPurple[8]
                : theme.colors.light,
          }}
        > */}
        <img src={card.img} alt='img' />
        <Text align='center' p='sm'>
          {card.text}
        </Text>
        {/* </Paper> */}
      </Card>
    </>
  );
}

import { Card } from '@mantine/core';

import './aboutCard.scss';

export default function AboutSection({ card }) {
  return (
    <>
      <div className='aboutSectionTitle'>{card.title}</div>
      <Card className='container' radius='lg' withBorder style={card.style}>
        <img classNames='aboutSectionImg' src={card.img} alt='img' />
        <div className='aboutSectionText'>{card.text}</div>
      </Card>
    </>
  );
}

import { Card } from '@mantine/core';

import './aboutCard.scss';

export default function AboutSection({ card }) {
  return (
    <>
      <div className='aboutSectionTitle'>{card.title}</div>
      <Card className='test' radius='lg' withBorder>
        <div className='container'>
          <img classNames='aboutSectionImg' src={card.img} alt='img' />

          <div className='aboutSectionText'>{card.text}</div>
        </div>
      </Card>
    </>
  );
}

import { Paper } from '@mantine/core';
import AboutCard from '../../components/aboutCard/AboutCard';
import aboutCards from '../../data/AboutDataCards';

export default function AboutSection({ cards }) {
  return (
    <>
      <Paper radius={0} pb='sm'>
        {aboutCards.map((card) => {
          return (
            <div key={card.id}>
              <AboutCard card={card} />
            </div>
          );
        })}
      </Paper>
    </>
  );
}

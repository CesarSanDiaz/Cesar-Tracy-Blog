import AboutCard from '../../components/aboutCard/AboutCard';
import aboutCards from '../../data/AboutDataCards';

export default function AboutSection({ cards }) {
  return (
    <>
      <div className='aboutCard'>
        {aboutCards.map((card) => {
          return (
            <div key={card.id}>
              <AboutCard card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}

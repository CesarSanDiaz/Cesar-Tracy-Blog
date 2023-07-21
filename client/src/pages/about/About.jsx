import AboutHeader from '../../components/aboutHeader/AboutHeader';
import AboutSection from '../../components/aboutSection/AboutSection';
import './about.scss';

export default function About(props) {
  return (
    <>
      <div className='about'>
        <div className='aboutHeader'>
          <AboutHeader />
        </div>
        <div className='aboutSection'>
          <AboutSection />
        </div>
      </div>
    </>
  );
}

import ContactHeader from '../../components/contactHeader/ContactHeader';
import ContactSection from '../../components/contactSection/ContactSection';
import './contact.scss';

export default function Contact() {
  return (
    <>
      <div className='contactContainerPage'>
        <div className='contactHeader'>
          <ContactHeader />
        </div>
        <div className='contactContent'>
          <ContactSection />
        </div>
      </div>
    </>
  );
}

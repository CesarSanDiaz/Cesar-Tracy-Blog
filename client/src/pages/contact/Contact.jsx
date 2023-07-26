// import ContactHeader from '../../components/contactHeader/ContactHeader';
import { Paper } from '@mantine/core';
import ContactSection from '../../components/contactSection/ContactSection';
import './contact.scss';

export default function Contact() {
  return (
    <>
      <Paper h='100vh' radius={0} className='contactContainerPage'>
        {/* <div className='contactHeader'>
          <ContactHeader />
        </div> */}
        <div className='contactContent'>
          <ContactSection />
        </div>
      </Paper>
    </>
  );
}

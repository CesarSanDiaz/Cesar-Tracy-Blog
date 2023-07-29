import { Paper } from '@mantine/core';
import ContactSection from '../../components/contactSection/ContactSection';

export default function Contact() {
  return (
    <>
      <Paper radius={0}>
        <div>
          <ContactSection />
        </div>
      </Paper>
    </>
  );
}

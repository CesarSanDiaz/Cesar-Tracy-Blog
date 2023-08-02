import { createStyles } from '@mantine/styles';
import AboutSection from '../../components/aboutSection/AboutSection';

const useStyles = createStyles((theme) => ({
  aboutSectionPaper: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.myYellow[7] : theme.white,
  },
}));
export default function About() {
  const { classes } = useStyles();

  return (
    <>
      <AboutSection className={classes.aboutSectionPaper} />
    </>
  );
}

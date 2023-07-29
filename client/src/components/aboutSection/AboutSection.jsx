import { Divider, Paper, Title, createStyles } from '@mantine/core';
import { IconFriends } from '@tabler/icons-react';
import AboutCard from '../../components/aboutCard/AboutCard';
import aboutCards from '../../data/AboutDataCards';

const useStyles = createStyles(() => ({
  aboutTopIcon: {
    display: 'block',
    margin: 'auto',
  },
}));

export default function AboutSection({ cards }) {
  const { classes } = useStyles();

  return (
    <>
      <Paper radius={0} p='sm'>
        <IconFriends
          color='#228be6'
          size={50}
          className={classes.aboutTopIcon}
        />
        <Title order={2} align='center' p='xs'>
          About Us
        </Title>
        <Divider size='lg' pb='md' color='blue' />

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

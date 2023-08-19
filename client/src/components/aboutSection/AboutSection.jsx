import { Divider, Paper, Title, createStyles } from '@mantine/core';
import { IconFriends } from '@tabler/icons-react';
import AboutCard from '../../components/aboutCard/AboutCard';
import aboutCards from '../../data/AboutDataCards';

const useStyles = createStyles((theme) => ({
  aboutPaper: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myPurple[7]
        : theme.colors.white,
  },
  aboutTopIcon: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  aboutDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function AboutSection() {
  const { classes } = useStyles();

  return (
    <>
      <Paper radius={0} p='sm' className={classes.aboutPaper}>
        <IconFriends size={50} className={classes.aboutTopIcon} />
        <Title order={2} align='center' p='xs'>
          About Us
        </Title>
        <Divider
          size={0}
          p='1.5px'
          mb='md'
          className={classes.aboutDivider}
          m='auto'
          w='25%'
        />

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

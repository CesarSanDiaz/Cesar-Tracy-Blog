import { Box, Title, createStyles, rem } from '@mantine/core';
import Background from '../../assets/Bridge.JPG';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'moving 60s alternate infinite',
    '@keyframes moving': {
      '0%': {
        backgroundPosition: '30%',
      },
      '100%': {
        backgroundPosition: '70%',
      },
    },
  },
  title: {
    position: 'relative',
    top: '15%',
    fontWeight: 800,
    fontSize: '50px',
    letterSpacing: rem(2),
    color: theme.black,
    textAlign: 'center',
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <Box h='65vh'>
          <Title className={classes.title} order={1}>
            Living for Experiences
          </Title>
        </Box>
      </div>
    </>
  );
}

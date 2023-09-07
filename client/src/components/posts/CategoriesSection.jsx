import { Title, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.sm,
  },
  catTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.myYellow[7]
          : theme.colors.blue[6],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Categories() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Title order={2} align='left' py='sm' className={classes.catTitle}>
        Categories
      </Title>
    </div>
  );
}

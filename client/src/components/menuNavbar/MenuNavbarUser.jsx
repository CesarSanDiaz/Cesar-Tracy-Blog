import { Divider, Group, Text, createStyles } from '@mantine/core';
import { IconLogout, IconPencil, IconSettings } from '@tabler/icons-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  icons: {
    width: '1.25rem',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: 'Pacifico',
  },
  divider: {
    borderTopColor:
      theme.colorScheme === 'dark' ? theme.colors.myYellow[7] : theme.blue,
  },
}));

const MenuNavbarUser = ({ toggle }) => {
  const { classes } = useStyles();
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };

  return (
    <>
      <Link className='link' to='/write' onClick={toggle}>
        <Group spacing='sm'>
          <IconPencil className={classes.icons} />
          <Text>Create Post</Text>
        </Group>
      </Link>
      <Link className='link' to='/settings' onClick={toggle}>
        <Group spacing='sm'>
          <IconSettings className={classes.icons} />
          <Text>Profile Settings</Text>
        </Group>
      </Link>
      <Divider className={classes.divider} />

      <Link onClick={handleLogout} className='link'>
        <Group spacing='sm'>
          <IconLogout className={classes.icons} />
          <Text>Logout</Text>
        </Group>
      </Link>
    </>
  );
};
export default MenuNavbarUser;

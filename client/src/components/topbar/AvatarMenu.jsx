import {
  Avatar,
  Group,
  Menu,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import {
  IconChevronDown,
  IconLogout,
  IconPencil,
  IconSettings,
} from '@tabler/icons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const useStyles = createStyles((theme) => ({
  divider: {
    borderTopColor:
      theme.colorScheme === 'dark' ? theme.colors.myYellow[7] : theme.blue,
  },
}));

export default function AvatarMenu() {
  const PF = 'https://cesar-tracy-blog.vercel.app/images/';
  const { user, dispatch } = useContext(Context);
  const { classes } = useStyles();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };

  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton>
          <Group spacing={6}>
            <Avatar size='sm' radius='xl' src={PF + user.profilePic} />
            <IconChevronDown size='1rem' />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown p='sm'>
        <Stack spacing={6} align='center'>
          <Text>{user.username}</Text>
          <Text size='xs'>{user.email}</Text>
        </Stack>

        <Menu.Divider className={classes.divider} />

        <Menu.Item icon={<IconPencil size='1rem' />}>
          <Link className='link' to='/write'>
            <Text size='md'>Create Post</Text>
          </Link>
        </Menu.Item>

        <Menu.Divider className={classes.divider} />

        <Menu.Item icon={<IconSettings size='1rem' />}>
          <Group>
            <Link to='/settings' className='link'>
              <Text size='md'>Settings</Text>
            </Link>
          </Group>
        </Menu.Item>

        <Menu.Item icon={<IconLogout size='1rem' />}>
          <UnstyledButton onClick={handleLogout}>
            <Text size='md'>Logout</Text>
          </UnstyledButton>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

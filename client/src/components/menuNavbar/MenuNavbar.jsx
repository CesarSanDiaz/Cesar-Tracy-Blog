import { Burger, Navbar } from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import { useState } from 'react';
import './menuNavbar.scss';

export default function MenuNavbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Navbar className='nav' hidden={!opened} hiddenBreakpoint='sm'>
        <a href='www.google.com' className='link'>
          <IconBrandYoutube className='linkIcon' size={28} />
          <span>Youtube</span>
        </a>
      </Navbar>

      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        size='sm'
        color='#fff'
        mr='xl'
        className='burger'
      />
    </>
  );
}

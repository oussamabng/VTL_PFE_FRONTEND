import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
  Code,
  ActionIcon,
  Badge,
  Indicator,
  Menu,
} from '@mantine/core';
import {
  IconBell,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSearch,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
  IconHeart,
  IconStar,
  IconAlarm,
  IconCheck,
} from '@tabler/icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export default function HeaderWithSearch() {
  const { classes } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group
          className={classes.header}
          position="apart"
          sx={{ padding: '10px' }}
        >
          LOGO
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              'React',
              'Angular',
              'Vue',
              'Next.js',
              'Riot.js',
              'Svelte',
              'Blitz.js',
            ]}
          />
          <Menu>
            <Menu.Target>
              <ActionIcon>
                <Indicator color="red">
                  <IconBell size="1.125rem" />
                </Indicator>
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={<IconAlarm size="0.9rem" stroke={1.5} color="red" />}
              >
                Reminder
              </Menu.Item>
              <Menu.Item
                icon={<IconCheck size="0.9rem" stroke={1.5} color="green" />}
              >
                Success
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
    </Header>
  );
}

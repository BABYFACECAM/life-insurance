import React from "react";
import Image from "next/image";
import { HeaderActionProps } from "@/data/navigationData";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronIcon as IconChevronDown } from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";
import { useRouter } from "next/router";

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "2rem",

    [theme.fn.smallerThan("sm")]: {
      marginLeft: "0.5rem",
    },
  },
  navLogo: {
    marginTop: "2rem",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const defaultNavigationData: HeaderActionProps = {
  links: [],
};

export default function Navbar({ links }: HeaderActionProps) {
  const router = useRouter();
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleClick = () => {
    preventDefault();
  };

  const items = links.map((link, links?) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} onClick={() => router.push(`/${link.link}`)}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={() => router.push(`/${link.link}`)}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 120 }} mb={20} mt={10}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <div className="logo">
            <Image
              src="/bll-logo.png"
              alt="Barnett Legacy Life Insurance"
              height={120}
              width={120}
              className="navLogo"
              onClick={() => router.push("/")}
            />
          </div>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={3}>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={"1.1rem"} /> : <Moon size={"1.1rem"} />}
          </ActionIcon>
          <Button radius="xs" h={30} m={10} variant={"outline"} uppercase>
            Get free quote
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
function preventDefault() {
  throw new Error("Function not implemented.");
}

import { createStyles, Container, Group, Anchor, rem } from "@mantine/core";
import Image from "next/image";
import { Router, useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

const footerLinks = [
  {
    link: "#",
    label: "Contact",
  },
  {
    link: "#",
    label: "Privacy",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Careers",
  },
];

export default function Footer({ links }: FooterProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const items = footerLinks.map((fl) => (
    <Anchor<"a">
      color="dimmed"
      key={fl.label}
      href={fl.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {fl.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          src="/bll-logo.png"
          height={160}
          width={160}
          alt="Barnett Legacy Life Insurance"
          onClick={() => router.push("/")}
        />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

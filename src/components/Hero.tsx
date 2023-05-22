import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(50),
    backgroundImage: "url()",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(50),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "center",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
    fontSize: rem(30),
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",
    fontWeight: 700,
    fontSize: rem(25),

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "center",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function Hero() {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const heroTitle = `We're all going to die`;
  const heroSubtitle = `and 50% of Americans don't have health insurance.`;
  const heroCTA = `Which side are you on?`;

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {heroTitle}
          <br />
          <Text component="span" inherit className={classes.highlight}>
            {heroSubtitle}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {heroCTA}
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            color={"yellow"}
            variant="filled"
            className={classes.control}
            size="lg"
            onClick={() => router.push("/my-price")}
          >
            Get My Price
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
            variant="outline"
          >
            Get Our Plans
          </Button>
        </div>
      </div>
    </div>
  );
}

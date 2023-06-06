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
    paddingTop: rem(250),
    paddingBottom: rem(180),
    backgroundImage:
      "url(https://bll-hero-header.s3.us-east-1.amazonaws.com/bll-header.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMiJHMEUCIQDiHn5rdgU0q45xKh8Z8CU7QerVSTOUEcOn6Hm2%2FQ2v7wIgQ7V8QCVE9kOm68fUUN37fZ5W3JnA6Y0uhAyuol6c9rUq%2BwIITBAAGgw3MTYzNDA4ODkzMTAiDMBGq2djsv5ZX%2FexNSrYAhkuBGuSAbMZ%2BVQSFd7hV%2BSmbtsq60Y35MhG6q3gXvOIB4ZQRoF41FPshDO1TlACz0XUxnIlrUcgjumxyypBwYIKD7GKHIIu3TGs0HpnTy0f7gZe6Gbbj9ReSyy6Y2mHsrf8X44XPYYlUncFH%2By3pcRVgVOrrgnpOapmaPr4enL6pLs6pY%2BeTi9pOkJnAjme3RO%2B5HW%2B1hqktjRbni4f5mnc5fgG7z9ZZm99UJQBw8m4KKnikH7e%2B%2Ff6QLTZxsI0BvMhWZsvGBHjnqgP7PqPU2vZxp%2FxC76BC0xp%2FV58t8pCs1tArEEaew9gfXhyaaVP2QbKONCSljyseLWbMQo%2F1H03NjcylyFBrdGOHealZJPlVABLrZnLyIIuxWGnk7TwReebcq02W7i5%2FjoRJmV3uMMGpumgeQqVlWpjZDqjFvCqxTKK%2FE0h%2Fw%2BjDdklKXEajQogZKpyxEkYMO7%2B%2FaMGOrMCw%2Byiqw1ScQOU6TJ%2F7J0DLv%2BTZAU2Ex37n3Ta0bd%2BYb3wgpM5rh9pQKyqJb4u6aQcDDIy1FTeTC5T3fRPpE7FgDqN3YD69ng3K36aTi5NhpugAfM%2F5M7%2B4N4%2Fpzh9BIkx13YuIplbSYjLVcdjpY5d5lCHcDeAD9mUEBgaOG9zDaf0stIlz1HpDYVo5aZ3%2FGhe%2FzmDSsqSnGlRC%2B4N9n%2Bf%2FSMPCNI2WLlPb%2FsVhRW%2FGlbdz4G9WkgCpR5N8%2FdxaQ3EtUrxvLb0uFvurdKFHnfn9sanXSFUfz3PH1O8dVewrmS6ORURu%2Fin%2FB7r90MV6%2FsJoAfbJtQ0t4Y2boSFRqiCAakd14UsCWpTzwKZXmKcY5SNFXEIIo70DCxG%2BWnx1yYAiLG6ULI7bndz9phG0qmkcFZ3og%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230606T185501Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2NSJ6Q3PPST3PEVZ%2F20230606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86c4896498a2dbb45ffd5ce46595af3da5c57a39366adf8d2383c99280fb364d)",
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
    fontSize: rem(60),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(38),
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
      backgroundColor: "rgba(0, 128, 0, 1) !important",
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

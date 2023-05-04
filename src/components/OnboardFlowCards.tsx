import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Button,
  Center,
} from "@mantine/core";
import { onboardFlowProps, onboardFlowData } from "@/data/onboardFlowData";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontsize: rem(24),
    },

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  icon: {
    height: rem(60),
    width: rem(60),
    stroke: "2",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.dark[9],
  },

  cta: {
    marginTop: theme.spacing.xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {},
  },
}));

export function OnboardFlowCards() {
  const { classes } = useStyles();
  const cf = onboardFlowData.map((cf) => (
    <Card
      key={cf.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <cf.icon className={classes.icon} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {cf.title}
      </Text>
      <Text fz="md" c="dimmed" mt="sm">
        {cf.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <Container size="lg" py={"xl"}>
        <Group position="center">
          <Badge variant="filled" size="lg">
            Just 4 easy steps
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta={"center"} mt="md">
          Heres the process:
        </Title>

        <SimpleGrid
          cols={4}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {cf}
        </SimpleGrid>
        <Center>
          <Button
            className={classes.cta}
            variant={"filled"}
            radius={"md"}
            size="lg"
          >
            Get My Price
          </Button>
        </Center>
      </Container>
    </>
  );
}

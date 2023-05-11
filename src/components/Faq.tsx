import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";

import image from "../../public/next.svg";
import { title } from "process";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

interface FaqProps {
  id: string;
  title: string;
  item: string;
}

const faqData: FaqProps[] = [
  {
    id: "1",
    title: "Financial Education Is Our #1 Priority",
    item: "Our goal is to ensure you walk away educated about your life insurance policy and overall financial picture. We don’t do sales. We do financial education. And through the education, it gives you the confidence to know we are the right company for your insurance needs.",
  },
  {
    id: "2",
    title: "We Are Independent",
    item: "We are not tied to any one insurance company. We are independent and work with over 100 of the top rated insurance companies in the country. This allows us to shop the market for you and find the best policy at the best price.",
  },
  {
    id: "3",
    title: "We Value Relationships",
    item: "We don’t just handle your life insurance needs. We want to understand how we can strengthen your personal finances, protect your family with life insurance options or help with your retirement goals. Our goal is to build a life-long financial relationship with you.",
  },
  {
    id: "4",
    title: "Educated Professionals",
    item: "We have financial professionals with different levels of experience ranging from one to ten years in this business. Each licensed professional goes through weeks of training to understand our policies, underwriting guidelines, and financial strategies. You’re in good hands.",
  },
  {
    id: "5",
    title: "We've Got Your Back",
    item: "We don’t just handle your life insurance needs. We want to understand how we can strengthen your personal finances, protect your family with life insurance options or help with your retirement goals. Our goal is to build a life-long financial relationship with you.",
  },
];

export function Faq() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg" mt={"md"}>
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" mt={"xl"} className={classes.title}>
              Why OptiLife Insurance Is Right For You
            </Title>
            <Accordion
              chevronPosition="right"
              defaultValue={faqData[0]?.id}
              variant="separated"
            >
              {faqData.map(({ id, title, item }) => (
                <Accordion.Item key={id} className={classes.item} value={id}>
                  <Accordion.Control>{title}</Accordion.Control>
                  <Accordion.Panel>{item}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

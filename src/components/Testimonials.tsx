import {
  createStyles,
  Text,
  Avatar,
  Group,
  rem,
  useMantineTheme,
  Container,
  Skeleton,
  SimpleGrid,
  Grid,
  Paper,
  Col,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
  },
}));

const testimonials: Testimonial[] = [
  {
    id: 1,
    platform: "Twitter",
    content:
      "OptiLife Insurance helped me find the best policy for my family. The process was quick and easy",
    name: "BABYFACECAM",
    image:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  },
  {
    id: 2,
    platform: "Twitter",
    content:
      "OptiLife Insurance helped me find the best policy for my family. The process was quick and easy",
    name: "BABYFACECAM",
    image:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  },
];

interface Testimonial {
  id: number;
  name: string;
  image: string;
  platform: string;
  content: string;
}

export default function Testimonial() {
  return (
    <Container size="lg" mt={"lg"}>
      <Grid gutter={40}>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} span={12} md={6} lg={4}>
            <Paper p={"md"} shadow="xs">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  size="md"
                  radius="xl"
                  style={{ marginRight: "0.5rem" }}
                />
                <Text size="sm" weight={500}>
                  {testimonial.name}
                </Text>
                <span style={{ marginLeft: "auto" }}>
                  {testimonial.platform}
                </span>
              </div>
              <Text size="sm">{testimonial.content}</Text>
            </Paper>
          </Col>
        ))}
      </Grid>
    </Container>
  );
}

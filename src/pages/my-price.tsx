import {
  Paper,
  Textarea,
  TextInput,
  Checkbox,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Title,
  NativeSelect,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import bg from "../../public/bg.svg";
import { useState } from "react";
import { serviceStates, ServiceStates } from "@/data/serviceStates";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadisu: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc{$theme.spacing.xl} * 2)`,
      borderLeft: 0,
      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,
        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },
    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

interface StateOption {
  value: string;
  label: string;
}

const stateOptions: StateOption[] = Object.entries(serviceStates).map(
  ([value, label]) => ({ value, label })
);

export default function MyPrice() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      state: "",
    },
    validate: {
      firstName: (value) =>
        value.trim().length < 2
          ? "First name must be at least 2 characters long"
          : null,
      lastName: (value) =>
        value.trim().length < 2
          ? "Last name must be at least 2 characters long"
          : null,
      phoneNumber: (value) =>
        value.trim().length < 10
          ? "Phone number must be at least 10 characters long"
          : null,
      email: (value) =>
        !/^\S+@\S+$/.test(value) ? "Email address is not valid" : null,
    },
    validateInputOnChange: true,
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <Paper className={classes.wrapper}>
      <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
          className={classes.title}
        >
          Get My Price
        </Title>
        <SimpleGrid
          cols={2}
          mt={"xl"}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          className={classes.fields}
        >
          <TextInput
            label="First Name"
            placeholder="Your first name"
            {...form.getInputProps("firstName")}
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Your last name"
            {...form.getInputProps("lastName")}
            required
          />

          <SimpleGrid cols={2}>
            <TextInput
              label="Phone Number"
              placeholder="10 digit phone number"
              {...form.getInputProps("phoneNumber")}
              required
            />
            <TextInput
              label="Email"
              placeholder="Your email address"
              required
              {...form.getInputProps("email")}
            />
          </SimpleGrid>
          <NativeSelect
            data={stateOptions}
            label="Select your state"
            required
            {...form.getInputProps("state")}
          />
        </SimpleGrid>
      </form>{" "}
    </Paper>
  );
}

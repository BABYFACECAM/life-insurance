export interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export const navigationData: HeaderActionProps = {
  links: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/plans",
      label: "Our Plans",
      links: [
        {
          link: "/term-life",
          label: "Term Life Insurance",
        },
        {
          link: "/whole-life",
          label: "Whole Life Insurance",
        },
        {
          link: "/final-expense",
          label: "Final Expense Insurance",
        },
      ],
    },
    {
      link: "/why-us",
      label: "Why Choose Us",
    },
    {
      link: "/contact-us",
      label: "Contact Us",
    },
  ],
};

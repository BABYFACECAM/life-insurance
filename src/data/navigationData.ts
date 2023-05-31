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
          link: "/docs",
          label: "Documentation",
        },
        {
          link: "/resources",
          label: "Resources",
        },
        {
          link: "/community",
          label: "Community",
        },
        {
          link: "/blog",
          label: "Blog",
        },
      ],
    },
    {
      link: "/whyus",
      label: "Why Choose Us",
    },
    {
      link: "/contact-us",
      label: "Contact Us",
    },
  ],
};

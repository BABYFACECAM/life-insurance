import { User, CalendarEvent, PigMoney, ThumbUp } from "tabler-icons-react";

export interface onboardFlowProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const onboardFlowData: onboardFlowProps[] = [
  {
    title: "Step 1",
    description: `Click "Get My Price" and fill out your information.`,
    icon: User,
  },
  {
    title: "Step 2",
    description: `You'll get a quick phone call from one of our Reps to set up an appointment with our agent on the same day or next day.`,
    icon: CalendarEvent,
  },
  {
    title: "Step 3",
    description: `You'll speak with our expert Agent to get the best price and policy for you.`,
    icon: PigMoney,
  },
  {
    title: "Step 4",
    description: `In most cases, you'll get approved for coverage on the same day.`,
    icon: ThumbUp,
  },
];

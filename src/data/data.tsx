import {
  Wordpress,
  DCardimg2,
  DCardimg3,
  DCardimg4,
  DCardimg5,
  DCardimg6,
  GitHubIcon,
  linkedicon,
  Fbicon,
  insaicon,
  youtubeicon,
  tweetIcon,
} from "@/images/image";
import { DCardType, PricingCardType, SkyLineType } from "@/types/types";

export const DiscoverData: DCardType[] = [
  {
    icon: Wordpress,
    title: "Wordpress Hosting",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    icon: DCardimg2,
    title: "Cloud Hosting",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    icon: DCardimg3,
    title: "Website Hosting",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    icon: DCardimg4,
    title: "Free Domain",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    icon: DCardimg5,
    title: "SSL Services",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
  {
    icon: DCardimg6,
    title: "Cloud VPS ",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
  },
];

export const SkyLineData: SkyLineType[] = [
  {
    icon: Wordpress,
    title: "Wordpress",
  },
  {
    icon: GitHubIcon,
    title: "GitHub",
  },
  {
    icon: DCardimg2,
    title: "Laravel",
  },
  {
    icon: DCardimg3,
    title: "Elementer",
  },
];

export const PriceCardData: PricingCardType[] = [
  {
    title: "Hatchling Plan",
    price: 2.75,
    off: 60,
    detils: [
      "Single Website",
      "One click Wordpress Install ",
      "Free WordPress/cPanel website transfer",
      "Unmetered bandwidth ",
      "Free SSL certificate ",
      "Free domain included ",
    ],
  },
  {
    title: "Hatchling Plan",
    price: 2.75,
    off: 60,
    detils: [
      "Unlimited websites",
      "One click Wordpress Install ",
      "Free WordPress/cPanel website transfer",
      "Unmetered bandwidth ",
      "Free SSL certificate ",
      "Free domain included ",
    ],
  },
  {
    title: "Baby Plan",
    price: 5.25,
    off: 60,
    detils: [
      "Unlimited websites",
      "One click Wordpress Install ",
      "Free WordPress/cPanel website transfer",
      "Unmetered bandwidth ",
      "Free SSL certificate ",
      "Free upgrade to Positive SSL ",
      "Free SCO  Tools ",
      "Free domain included ",
    ],
  },
];

export const FooterSocialIconData = [
  tweetIcon,
  Fbicon,
  linkedicon,
  insaicon,
  youtubeicon,
];

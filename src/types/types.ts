import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface TheemButton {
  content: string;
  bg_color: string;
  border_color: string;
  border: string;
}

export interface HomeIconSecType {
  Icon: ReactElement;
  boldLine: string;
  paraLine: string;
  bg_color: string;
}
export interface DCardType {
  icon: StaticImageData;
  title: string;
  dis: string;
}

export interface SkyLineType {
  icon: StaticImageData;
  title: string;
}

export interface PricingCardType {
  title: string;
  off: number;
  detils: string[];
  price: number;
}

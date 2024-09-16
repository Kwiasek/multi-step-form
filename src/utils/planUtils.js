import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const addonsTemplate = [
  {
    text: "Online service",
    subtext: "Access to multiplayer games",
    priceMo: 1,
    priceYr: 10,
  },
  {
    text: "Larger storage",
    subtext: "Extra 1TB of cloud save",
    priceMo: 2,
    priceYr: 20,
  },
  {
    text: "Customizable profile",
    subtext: "Custom theme on your profile",
    priceMo: 2,
    priceYr: 20,
  },
];

export const plans = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    priceMo: 9,
    priceYr: 90,
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    priceMo: 12,
    priceYr: 120,
  },
  {
    name: "Pro",
    icon: proIcon,
    priceMo: 15,
    priceYr: 150,
  },
];

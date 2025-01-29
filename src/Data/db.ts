export type CarCategory = {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
};

const categories: CarCategory[] = [
  {
    title: "SEDANS",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on you next road trip.",
    bgColor: "Bright-orange",
    icon: "/images/icon-sedans.svg",
  },
  {
    title: "SUVS",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perdect for your next family vacation and off-road adventures.",
    bgColor: "Dark-cyan",
    icon: "/images/icon-suvs.svg",
  },
  {
    title: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: "Very-dark-cyan",
    icon: "/images/icon-luxury.svg",
  },
];

export default categories;

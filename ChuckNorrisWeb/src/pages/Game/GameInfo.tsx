import bruceLee from "../../assets/bruceLee.png";
interface MovesInterface {
  name: string;
  power: number;
  accuracy: number;
}
interface PersonInterface {
  name: string;
  health: number;
  img?: string;
}

export const Moves: MovesInterface[] = [
  {
    name: "SHOT",
    power: 2,
    accuracy: 95,
  },
  {
    name: "PUNCH",
    power: 4,
    accuracy: 50,
  },
  {
    name: "KICK",
    power: 3,
    accuracy: 75,
  },
  {
    name: "RUN",
    power: 0,
    accuracy: 100,
  },
];

export const Hero: PersonInterface = {
  name: "CHUCK NORRIS",
  health: 200,
};

export const Badass: PersonInterface[] = [
  {
    name: "YAKUZA",
    health: 100,
    img: "../../assets/bruceLee.png",
  },
  {
    name: "SKIPPER MULLINS",
    health: 150,
    img: "../../assets/bruceLee.png",
  },
  {
    name: "BRUCE LEE",
    health: 200,
    img: "../../assets/bruceLee.png",
  },
];

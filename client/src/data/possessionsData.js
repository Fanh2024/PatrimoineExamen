import Argent from "../models/possessions/Argent";
import BienMateriel from "../models/possessions/BienMateriel";
import Flux from "../models/possessions/Flux";
import Personne from "../models/Personne";

const Ilo = new Personne("Ilo");

const possessionsData = [
  new Argent(Ilo, "Espèces", 400000, new Date("2024-05-13"), null, 0, "Espece"),
  new Argent(
    Ilo,
    "Compte épargne",
    200000,
    new Date("2024-05-13"),
    null,
    5,
    "Epargne"
  ),
  new Argent(
    Ilo,
    "Compte courant",
    600000,
    new Date("2024-05-13"),
    null,
    0,
    "Courant"
  ),
  new BienMateriel(
    Ilo,
    "Ordinateur",
    2000000,
    new Date("2021-10-26"),
    null,
    10
  ),
  new BienMateriel(
    Ilo,
    "Effets vestimentaires",
    1000000,
    new Date("2024-01-01"),
    null,
    20
  ),
  new Flux(Ilo, "Train de vie", -500000, new Date("2024-05-13"), null, 0, 1),
];

export default possessionsData;

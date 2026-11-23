import { input, select } from "@inquirer/prompts";
import {hitungWaterIntake} from "./libs/intake-math";

const inputBeratBadan = await input({message: "Masukkan berat badan (kg)" });
console.log(`Berat badan kamu ${inputBeratBadan} kg`);
const berat = Number(inputBeratBadan);

const intensitas = await select({
  message: "Pilih tingkat aktivitas anda sehari-hari",
  choices: [
    { name: "Ringan", value: "ringan" },
    { name: "Sedang", value: "sedang" },
    { name: "Berat", value: "berat" },
  ],
});

const rekomendasiIntake = hitungWaterIntake(berat, intensitas);
console.log(`Rekomendasi konsumsi air kamu ${rekomendasiIntake} ml per hari`);

import { input } from "@inquirer/prompts";
import { hitungPace, kategoriPace } from "./libs/pace-math";

const inputJarak = await input({ message: "Masukkan jarak kamu berlari (km)" });
console.log(`Jarak kamu berlari ${inputJarak} km`);
const jarak = Number(inputJarak);

const inputWaktu = await input({ message: "Masukkan durasi kamu berlari (menit)" });
console.log(`Durasi kamu berlari  ${inputWaktu} menit`);
const waktu = Number(inputWaktu);

const pace = hitungPace(jarak, waktu);
console.log(`Pace kamu adalah ${pace}`);

const kategori = kategoriPace(pace);
console.log(`Kamu termasuk dalam pelari kategori ${kategori}`);

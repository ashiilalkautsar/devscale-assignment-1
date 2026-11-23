import { input } from "@inquirer/prompts";
import { hitungBMI, kategoriBMI } from "./libs/bmi-math";

const inputBeratBadan = await input({ message: "Masukkan berat badan (kg)" });
console.log(`Berat badan kamu ${inputBeratBadan} kg`);
const berat = Number(inputBeratBadan);

const inputTinggiBadan = await input({ message: "Masukkan tinggi badan (cm)" });
console.log(`Tinggi badan kamu ${inputTinggiBadan} cm`);
const tinggi = Number(inputTinggiBadan);

const bmi = hitungBMI(berat, tinggi);
console.log(`BMI kamu: ${bmi}`);

const kategori = kategoriBMI(bmi);
console.log(`Kategori kamu: ${kategori}`);

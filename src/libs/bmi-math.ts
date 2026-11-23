export function hitungBMI(berat: number, tinggi: number): number {
  const tinggiMeter = tinggi / 100;
  return berat / (tinggiMeter * tinggiMeter);
}

export function kategoriBMI(bmi: number): string {
  if (bmi < 18.5) {
    return "Kurang berat badan";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Kelebihan berat badan";
  } else {
    return "Obesitas";
  }
}

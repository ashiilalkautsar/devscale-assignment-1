export function hitungWaterIntake (berat: number, intensitas: string): number {
  const dasar = berat * 30;
  if (intensitas === "ringan") {
    return dasar + 0;
  } else if (intensitas === "sedang") {
    return dasar + 350;
  } else if (intensitas === "berat") {
    return dasar + 700
  } else {
     return dasar;
   }
}

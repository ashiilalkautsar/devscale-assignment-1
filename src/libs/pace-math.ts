export function hitungPace(jarak: number, waktu: number): number {
  return waktu / jarak;
}

export function kategoriPace (pace: number): string {
  if (pace < 5) {
    return "Kencang";
  } else if (pace < 8) {
    return "Normal";
  } else {
    return "Pelan";
  }
}

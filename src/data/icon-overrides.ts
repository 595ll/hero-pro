const augmentIconOverrides: Record<string, string> = {
  "205": "/icons/augments/205.webp",
  "113": "/icons/augments/113.webp",
  "51": "/icons/augments/51.webp",
  "64": "/icons/augments/64.webp",
  "141": "/icons/augments/141.webp",
  "180": "/icons/augments/180.webp",
  "87": "/icons/augments/87.webp",
  "48": "/icons/augments/48.webp",
  "138": "/icons/augments/138.webp",
  "103": "/icons/augments/103.webp",
  "84": "/icons/augments/84.webp",
  "46": "/icons/augments/46.webp",
  "60": "/icons/augments/60.webp",
  "206": "/icons/augments/206.webp",
  "97": "/icons/augments/97.webp",
  "76": "/icons/augments/76.webp",
  "136": "/icons/augments/136.webp",
  "58": "/icons/augments/58.webp",
  "54": "/icons/augments/54.webp",
  "214": "/icons/augments/214.webp",
};

export function getChampionIconPath(
  championId: string,
  fallbackIconPath?: string,
) {
  return fallbackIconPath ?? `/icons/champions/${championId}.png`;
}

export function getAugmentIconPath(augmentId: string, fallbackIconPath?: string) {
  return augmentIconOverrides[augmentId] ?? fallbackIconPath;
}

import { augmentProfiles } from "@/data/augments";
import { championProfiles } from "@/data/champions";
import { scoreChampionAugment } from "./rules";

export function listChampions() {
  return championProfiles;
}

export function listAugments() {
  return augmentProfiles;
}

export function findChampionById(championId: string) {
  return championProfiles.find((item) => item.id === championId);
}

export function findAugmentById(augmentId: string) {
  return augmentProfiles.find((item) => item.id === augmentId);
}

export function recommendForAugmentCandidates(
  championId: string,
  augmentIds: string[],
) {
  const champion = findChampionById(championId);

  if (!champion) {
    return [];
  }

  return augmentIds
    .map((augmentId) => {
      const augment = findAugmentById(augmentId);

      if (!augment) {
        return null;
      }

      return scoreChampionAugment(champion, augment);
    })
    .filter((item) => item !== null)
    .sort((left, right) => right.totalScore - left.totalScore);
}

import { createAugmentDraft, createChampionDraft } from "./templates";

export const sampleChampionDraft = createChampionDraft(
  "champion-id",
  "0",
  "英雄名称",
);

export const sampleAugmentDraft = createAugmentDraft(
  "augment-id",
  "Augment Name",
  "海克斯名称",
);

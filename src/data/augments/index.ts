import type { AugmentProfile } from "@/lib/recommendation/types";
import { arenaProductionAllowlistIds } from "./allowlist";
import { sixthBatchAugmentProfiles } from "./sixth-batch";
import { fifthBatchAugmentProfiles } from "./fifth-batch";
import { firstBatchAugmentProfiles } from "./first-batch";
import { fourthBatchAugmentProfiles } from "./fourth-batch";
import { secondBatchAugmentProfiles } from "./second-batch";
import { thirdBatchAugmentProfiles } from "./third-batch";

const allowedAugmentIds = new Set(arenaProductionAllowlistIds);

export const augmentProfiles: AugmentProfile[] = [
  ...sixthBatchAugmentProfiles,
  ...fifthBatchAugmentProfiles,
  ...firstBatchAugmentProfiles,
  ...fourthBatchAugmentProfiles,
  ...secondBatchAugmentProfiles,
  ...thirdBatchAugmentProfiles,
].filter((profile) => allowedAugmentIds.has(profile.id));

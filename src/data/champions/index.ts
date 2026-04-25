import type { ChampionProfile } from "@/lib/recommendation/types";
import { eleventhBatchChampionProfiles } from "./eleventh-batch";
import { tenthBatchChampionProfiles } from "./tenth-batch";
import { ninthBatchChampionProfiles } from "./ninth-batch";
import { eighthBatchChampionProfiles } from "./eighth-batch";
import { seventhBatchChampionProfiles } from "./seventh-batch";
import { sixthBatchChampionProfiles } from "./sixth-batch";
import { fifthBatchChampionProfiles } from "./fifth-batch";
import { firstBatchChampionProfiles } from "./first-batch";
import { fourthBatchChampionProfiles } from "./fourth-batch";
import { secondBatchChampionProfiles } from "./second-batch";
import { thirdBatchChampionProfiles } from "./third-batch";

export const championProfiles: ChampionProfile[] = [
  ...eleventhBatchChampionProfiles,
  ...tenthBatchChampionProfiles,
  ...ninthBatchChampionProfiles,
  ...eighthBatchChampionProfiles,
  ...seventhBatchChampionProfiles,
  ...sixthBatchChampionProfiles,
  ...fifthBatchChampionProfiles,
  ...firstBatchChampionProfiles,
  ...fourthBatchChampionProfiles,
  ...secondBatchChampionProfiles,
  ...thirdBatchChampionProfiles,
];

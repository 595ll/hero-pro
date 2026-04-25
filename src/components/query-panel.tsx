"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { augmentProfiles } from "@/data/augments";
import { championProfiles } from "@/data/champions";
import { getAugmentIconPath, getChampionIconPath } from "@/data/icon-overrides";
import { recommendForAugmentCandidates } from "@/lib/recommendation/catalog";
import type { AugmentRarity } from "@/lib/recommendation/types";
import { canScoreInProduction } from "@/lib/recommendation/validation";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const rarityFilterOptions: Array<{ value: AugmentRarity; label: string }> = [
  { value: "prismatic", label: "棱彩" },
  { value: "gold", label: "黄金" },
  { value: "silver", label: "白银" },
];

function getVerdictLabel(verdict: string) {
  switch (verdict) {
    case "strong_pick":
      return "强烈推荐";
    case "good_pick":
      return "推荐";
    case "situational":
      return "可看阵容拿";
    default:
      return "不优先";
  }
}

function getDeltaLabel(delta: number) {
  if (delta <= 0) {
    return "当前最优";
  }

  return `比当前最优低 ${delta} 分`;
}

function getAssetSrc(iconPath?: string) {
  return iconPath ? `${publicBasePath}${iconPath}` : undefined;
}

function normalizeSearchTerm(value: string) {
  return value.trim().toLowerCase();
}

type QueryPanelProps = {
  headingLevel?: 2 | 3;
};

export function QueryPanel({ headingLevel = 2 }: QueryPanelProps) {
  const SectionHeading = headingLevel === 3 ? "h3" : "h2";
  const [selectedChampionId, setSelectedChampionId] = useState("");
  const [selectedAugmentIds, setSelectedAugmentIds] = useState<string[]>([]);
  const [championSearchTerm, setChampionSearchTerm] = useState("");
  const [augmentSearchTerm, setAugmentSearchTerm] = useState("");
  const [activeRarities, setActiveRarities] = useState<AugmentRarity[]>(
    rarityFilterOptions.map((item) => item.value),
  );

  const selectedChampion = useMemo(
    () => championProfiles.find((item) => item.id === selectedChampionId),
    [selectedChampionId],
  );

  const displayedChampion = useMemo(() => {
    if (!selectedChampion) {
      return null;
    }
    return selectedChampion;
  }, [selectedChampion]);

  const recommendations = useMemo(() => {
    if (!selectedChampionId || selectedAugmentIds.length === 0) {
      return [];
    }

    return recommendForAugmentCandidates(selectedChampionId, selectedAugmentIds);
  }, [selectedAugmentIds, selectedChampionId]);

  const filteredChampions = useMemo(() => {
    const query = normalizeSearchTerm(championSearchTerm);

    if (!query) {
      return championProfiles;
    }

    return championProfiles.filter((champion) =>
      [champion.name, champion.title, champion.id]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(query)),
    );
  }, [championSearchTerm]);

  const filteredAugments = useMemo(() => {
    const query = normalizeSearchTerm(augmentSearchTerm);
    const activeRaritySet = new Set(activeRarities);

    return augmentProfiles.filter((augment) => {
      const matchesQuery =
        !query ||
        [augment.localizedName, augment.name, augment.summary]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(query));

      const matchesRarity = activeRaritySet.has(augment.rarity);

      return matchesQuery && matchesRarity;
    });
  }, [activeRarities, augmentSearchTerm]);

  const selectedResults = useMemo(() => {
    return selectedAugmentIds
      .map((augmentId) => {
        const augment = augmentProfiles.find((item) => item.id === augmentId);

        if (!augment || !selectedChampion) {
          return null;
        }

        const recommendation = recommendations.find(
          (item) => item.augmentId === augmentId,
        );

        return {
          augment,
          recommendation,
          ready: canScoreInProduction(selectedChampion, augment),
        };
      })
      .filter(
        (
          item,
        ): item is {
          augment: (typeof augmentProfiles)[number];
          recommendation: (typeof recommendations)[number] | undefined;
          ready: boolean;
        } => item !== null,
      )
      .sort((left, right) => {
        const leftScore = left.recommendation?.totalScore ?? -1;
        const rightScore = right.recommendation?.totalScore ?? -1;
        return rightScore - leftScore;
      });
  }, [recommendations, selectedAugmentIds, selectedChampion]);

  const topRecommendation = selectedResults[0];
  const displayedChampionIconSrc = displayedChampion
    ? getAssetSrc(getChampionIconPath(displayedChampion.id, displayedChampion.iconPath))
    : undefined;
  const topRecommendationIconSrc = topRecommendation
    ? getAssetSrc(
        getAugmentIconPath(topRecommendation.augment.id, topRecommendation.augment.iconPath),
      )
    : undefined;

  function toggleAugment(augmentId: string) {
    setSelectedAugmentIds((current) =>
      current.includes(augmentId)
        ? current.filter((item) => item !== augmentId)
        : [...current, augmentId],
    );
  }

  function toggleRarity(rarity: AugmentRarity) {
    setActiveRarities((current) =>
      current.includes(rarity)
        ? current.filter((item) => item !== rarity)
        : rarityFilterOptions
            .map((item) => item.value)
            .filter((item) => current.includes(item) || item === rarity),
    );
  }

  return (
    <section className="query-card">
      <div className="section-head">
        <div>
          <p className="eyebrow">首批真实数据查询</p>
          <SectionHeading>先跑通最短查询路径</SectionHeading>
        </div>
        <p className="section-note">
          当前已接入 {championProfiles.length} 个英雄和 {augmentProfiles.length} 个海克斯条目，已录入的海克斯都能进入正式评分。
        </p>
      </div>

      <div className="query-grid">
        <div className="panel-card">
          <div className="field-head">
            <p className="field-label">1. 选择英雄</p>
            <button
              type="button"
              className="secondary-action-button"
              onClick={() => setSelectedChampionId("")}
            >
              重置英雄
            </button>
          </div>
          <div className="panel-controls">
            <input
              type="search"
              className="search-input"
              value={championSearchTerm}
              onChange={(event) => setChampionSearchTerm(event.target.value)}
              placeholder="搜索英雄名、称号或英文 ID"
              aria-label="搜索英雄"
            />
          </div>
          <div className="champion-scroll-area" role="list" aria-label="英雄列表">
            <div className="champion-list">
              {filteredChampions.map((champion) => {
                const checked = champion.id === selectedChampionId;
                const championIconSrc = getAssetSrc(
                  getChampionIconPath(champion.id, champion.iconPath),
                );

                return (
                  <button
                    key={champion.id}
                    type="button"
                    className={`champion-item ${checked ? "champion-item-active" : ""}`}
                    aria-pressed={checked}
                    onClick={() => setSelectedChampionId(champion.id)}
                  >
                    {championIconSrc ? (
                      <Image
                        src={championIconSrc}
                        alt={`${champion.name} 图标`}
                        width={44}
                        height={44}
                        className="entity-icon entity-icon-champion-list"
                        unoptimized
                      />
                    ) : (
                      <span className="entity-icon entity-icon-fallback" aria-hidden="true">
                        {champion.name.slice(0, 1)}
                      </span>
                    )}
                    <span className="champion-item-copy">
                      <strong>{champion.name}</strong>
                      {champion.title ? <span className="sub-label">{champion.title}</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
            {filteredChampions.length === 0 ? (
              <p className="list-empty-state">当前搜索条件下没有匹配的英雄。</p>
            ) : null}
          </div>

          {displayedChampion ? (
            <div className="detail-block">
              <div className="entity-heading">
                {displayedChampionIconSrc ? (
                  <Image
                    src={displayedChampionIconSrc}
                    alt={`${displayedChampion.name} 图标`}
                    width={72}
                    height={72}
                    className="entity-icon entity-icon-champion-detail"
                    unoptimized
                  />
                ) : null}
                <div>
                  <h3>{displayedChampion.name}</h3>
                  <p>{displayedChampion.title}</p>
                </div>
              </div>
              <div className="tag-row">
                {displayedChampion.combatTempos.map((item) => (
                  <span key={item} className="mini-tag">
                    {item}
                  </span>
                ))}
                {displayedChampion.damagePatterns.map((item) => (
                  <span key={item} className="mini-tag mini-tag-soft">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="compact-list">
                {displayedChampion.coreMechanics.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="panel-card">
          <div className="field-head">
            <p className="field-label">2. 选择候选海克斯</p>
            <button
              type="button"
              className="secondary-action-button"
              onClick={() => setSelectedAugmentIds([])}
            >
              重置海克斯符文
            </button>
          </div>
          <div className="panel-controls">
            <input
              type="search"
              className="search-input"
              value={augmentSearchTerm}
              onChange={(event) => setAugmentSearchTerm(event.target.value)}
              placeholder="搜索海克斯名、英文名或效果摘要"
              aria-label="搜索海克斯"
            />
            <div className="filter-toolbar" aria-label="海克斯等级筛选">
              {rarityFilterOptions.map((option) => {
                const active = activeRarities.includes(option.value);

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`filter-chip ${active ? "filter-chip-active" : ""}`}
                    aria-pressed={active}
                    onClick={() => toggleRarity(option.value)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="augment-scroll-area">
            <div className="augment-list">
              {filteredAugments.map((augment) => {
                const checked = selectedAugmentIds.includes(augment.id);
                const displayLocalizedName = augment.localizedName ?? augment.name;
                const augmentIconSrc = getAssetSrc(
                  getAugmentIconPath(augment.id, augment.iconPath),
                );

                return (
                  <button
                    key={augment.id}
                    type="button"
                    className={`augment-item ${checked ? "augment-item-active" : ""}`}
                    onClick={() => toggleAugment(augment.id)}
                  >
                    <div className="augment-item-top">
                      <div className="augment-item-name">
                        {augmentIconSrc ? (
                          <Image
                            src={augmentIconSrc}
                            alt={`${displayLocalizedName} 图标`}
                            width={40}
                            height={40}
                            className="entity-icon entity-icon-augment"
                            unoptimized
                          />
                        ) : null}
                        <strong>{displayLocalizedName}</strong>
                      </div>
                      <span className="mini-tag">{augment.rarity}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            {filteredAugments.length === 0 ? (
              <p className="list-empty-state">当前搜索和等级筛选下没有匹配的海克斯。</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="results-card">
        <div className="section-head">
          <div>
            <p className="eyebrow">当前结果</p>
            <SectionHeading>推荐与资料状态</SectionHeading>
          </div>
          <p className="section-note">
            这一步优先保证“看得懂”和“知道为什么这样推荐”，再继续扩更多英雄和海克斯。
          </p>
        </div>

        {selectedAugmentIds.length === 0 ? (
          <p className="empty-state">先选择 1 个或多个候选海克斯。</p>
        ) : (
          <div className="result-list">
            {topRecommendation?.ready && topRecommendation.recommendation ? (
              <article className="top-pick-card">
                <p className="eyebrow">当前优先级最高</p>
                <div className="entity-heading entity-heading-top-pick">
                  {topRecommendationIconSrc ? (
                    <Image
                      src={topRecommendationIconSrc}
                      alt={`${topRecommendation.augment.localizedName ?? topRecommendation.augment.name} 图标`}
                      width={60}
                      height={60}
                      className="entity-icon entity-icon-top-pick"
                      unoptimized
                    />
                  ) : null}
                  <div>
                    <h3>{topRecommendation.augment.localizedName ?? topRecommendation.augment.name}</h3>
                    {topRecommendation.augment.localizedName ? (
                      <p className="sub-label">{topRecommendation.augment.name}</p>
                    ) : null}
                  </div>
                </div>
                <p className="top-pick-summary">
                  {displayedChampion?.name ?? selectedChampion?.name} 当前更适合先看这个海克斯，结论为
                  <strong> {getVerdictLabel(topRecommendation.recommendation.verdict)}</strong>，
                  分数 <strong>{topRecommendation.recommendation.totalScore}</strong>。
                </p>
              </article>
            ) : null}

            {selectedResults.map(({ augment, recommendation, ready }) => {
              const delta =
                topRecommendation?.recommendation && recommendation
                  ? topRecommendation.recommendation.totalScore -
                    recommendation.totalScore
                  : 0;
              const primaryReasons =
                recommendation?.breakdown
                  .flatMap((item) => item.reasons)
                  .filter((item) => item.impact > 0)
                  .slice(0, 2) ?? [];
              const primaryRisk =
                recommendation?.warnings[0] ?? augment.trapSignals[0];
              const augmentIconSrc = getAssetSrc(
                getAugmentIconPath(augment.id, augment.iconPath),
              );

              return (
                <article key={augment.id} className="result-item">
                  <div className="result-top">
                    <div className="entity-heading entity-heading-top">
                      {augmentIconSrc ? (
                        <Image
                          src={augmentIconSrc}
                          alt={`${augment.localizedName ?? augment.name} 图标`}
                          width={52}
                          height={52}
                          className="entity-icon entity-icon-result"
                          unoptimized
                        />
                      ) : null}
                      <div>
                        <h3>{augment.localizedName ?? augment.name}</h3>
                        {augment.localizedName ? (
                          <p className="sub-label">{augment.name}</p>
                        ) : null}
                        <p>{augment.summary}</p>
                      </div>
                    </div>
                    <span
                      className={`status-badge ${
                        ready ? "status-badge-ready" : "status-badge-waiting"
                      }`}
                    >
                      {ready ? "可正式评分" : "待补官方效果文本"}
                    </span>
                  </div>

                  <div className="tag-row">
                    {augment.rewardTypes.map((item) => (
                      <span key={item} className="mini-tag">
                        {item}
                      </span>
                    ))}
                    {augment.triggerTypes.map((item) => (
                      <span key={item} className="mini-tag mini-tag-soft">
                        {item}
                      </span>
                    ))}
                  </div>

                  {ready && recommendation ? (
                    <div className="detail-block">
                      <p className="score-line">
                        推荐结论：<strong>{getVerdictLabel(recommendation.verdict)}</strong> / 分数{" "}
                        <strong>{recommendation.totalScore}</strong>
                      </p>
                      <p className="delta-line">{getDeltaLabel(delta)}</p>
                      <div className="compare-grid">
                        <div className="compare-card">
                          <p className="compare-title">主要优势</p>
                          <ul className="compact-list compact-list-tight">
                            {primaryReasons.map((item) => (
                              <li key={`${augment.id}-${item.label}`}>{item.detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="compare-card compare-card-warning">
                          <p className="compare-title">主要风险</p>
                          <p className="compare-copy">
                            {primaryRisk ?? "暂无明显风险提示。"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="detail-block">
                      <p className="score-line">
                        当前只展示已核对的基础资料，不输出正式推荐分。
                      </p>
                      <ul className="compact-list">
                        {augment.positiveSignals.slice(0, 2).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

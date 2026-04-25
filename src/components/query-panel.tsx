"use client";

import { useMemo, useState } from "react";
import { augmentProfiles } from "@/data/augments";
import { championProfiles } from "@/data/champions";
import { recommendForAugmentCandidates } from "@/lib/recommendation/catalog";
import { canScoreInProduction } from "@/lib/recommendation/validation";

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

export function QueryPanel() {
  const [selectedChampionId, setSelectedChampionId] = useState("");
  const [selectedAugmentIds, setSelectedAugmentIds] = useState<string[]>([]);

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

  function toggleAugment(augmentId: string) {
    setSelectedAugmentIds((current) =>
      current.includes(augmentId)
        ? current.filter((item) => item !== augmentId)
        : [...current, augmentId],
    );
  }

  return (
    <section className="query-card">
      <div className="section-head">
        <div>
          <p className="eyebrow">首批真实数据查询</p>
          <h2>先跑通最短查询路径</h2>
        </div>
        <p className="section-note">
          当前已接入 {championProfiles.length} 个英雄和 {augmentProfiles.length} 个海克斯条目，已录入的海克斯都能进入正式评分。
        </p>
      </div>

      <div className="query-grid">
        <div className="panel-card">
          <div className="field-head">
            <label className="field-label" htmlFor="champion-select">
              1. 选择英雄
            </label>
            <button
              type="button"
              className="secondary-action-button"
              onClick={() => setSelectedChampionId("")}
            >
              重置英雄
            </button>
          </div>
          <select
            id="champion-select"
            className="select-input"
            value={selectedChampionId}
            onChange={(event) => setSelectedChampionId(event.target.value)}
          >
            <option value="">请选择英雄</option>
            {championProfiles.map((champion) => (
              <option key={champion.id} value={champion.id}>
                {champion.name}
              </option>
            ))}
          </select>

          {displayedChampion ? (
            <div className="detail-block">
              <h3>{displayedChampion.name}</h3>
              <p>{displayedChampion.title}</p>
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
            <label className="field-label">2. 选择候选海克斯</label>
            <button
              type="button"
              className="secondary-action-button"
              onClick={() => setSelectedAugmentIds([])}
            >
              重置海克斯符文
            </button>
          </div>
          <div className="augment-scroll-area">
            <div className="augment-list">
              {augmentProfiles.map((augment) => {
                const checked = selectedAugmentIds.includes(augment.id);
                const displayLocalizedName = augment.localizedName ?? augment.name;
                const displaySummary = augment.summary;

                return (
                  <button
                    key={augment.id}
                    type="button"
                    className={`augment-item ${checked ? "augment-item-active" : ""}`}
                    onClick={() => toggleAugment(augment.id)}
                  >
                    <div>
                      <strong>{displayLocalizedName}</strong>
                      {augment.localizedName ? (
                        <p className="sub-label">{augment.name}</p>
                      ) : null}
                      <p>{displaySummary}</p>
                    </div>
                    <span className="mini-tag">{augment.rarity}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="results-card">
        <div className="section-head">
          <div>
            <p className="eyebrow">当前结果</p>
            <h2>推荐与资料状态</h2>
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
                <h3>{topRecommendation.augment.localizedName ?? topRecommendation.augment.name}</h3>
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

              return (
                <article key={augment.id} className="result-item">
                  <div className="result-top">
                    <div>
                      <h3>{augment.localizedName ?? augment.name}</h3>
                      {augment.localizedName ? (
                        <p className="sub-label">{augment.name}</p>
                      ) : null}
                      <p>{augment.summary}</p>
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

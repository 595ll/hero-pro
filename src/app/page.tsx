"use client";

import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { QueryPanel } from "@/components/query-panel";

const INTRO_CONTENT_REVEAL_SECONDS = 3;
const QUERY_REVEAL_PROGRESS_DISTANCE_RATIO = 0.82;
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type VideoStage = "intro" | "fading" | "background" | "fallback";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const revealRegionRef = useRef<HTMLElement>(null);
  const [videoStage, setVideoStage] = useState<VideoStage>("intro");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [queryRevealProgress, setQueryRevealProgress] = useState(0);
  const activeVideoStage: VideoStage = prefersReducedMotion ? "fallback" : videoStage;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return undefined;
    }

    if (prefersReducedMotion) {
      videoElement.pause();
      return undefined;
    }

    let cancelled = false;

    const startPlayback = async () => {
      videoElement.loop = false;
      videoElement.currentTime = 0;

      try {
        await videoElement.play();
        if (!cancelled) {
          setVideoStage("intro");
        }
      } catch {
        if (!cancelled) {
          setVideoStage("fallback");
        }
      }
    };

    void startPlayback();

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  const showContent = useMemo(
    () =>
      activeVideoStage === "fading" ||
      activeVideoStage === "background" ||
      activeVideoStage === "fallback",
    [activeVideoStage],
  );
  const hasMotionReveal = showContent && !prefersReducedMotion;
  const effectiveRevealProgress = hasMotionReveal ? queryRevealProgress : 0;

  useEffect(() => {
    if (typeof window === "undefined" || !showContent || prefersReducedMotion) {
      return undefined;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const revealRegion = revealRegionRef.current;
      if (!revealRegion) {
        return;
      }

      const viewportHeight = Math.max(window.innerHeight, 1);
      const totalDistance = Math.max(revealRegion.offsetHeight - viewportHeight, 1);
      const effectiveDistance = Math.max(
        totalDistance * QUERY_REVEAL_PROGRESS_DISTANCE_RATIO,
        1,
      );
      const revealTop = revealRegion.getBoundingClientRect().top;
      const nextProgress = Math.min(
        Math.max((viewportHeight - revealTop) / effectiveDistance, 0),
        1,
      );

      setQueryRevealProgress((current) =>
        Math.abs(current - nextProgress) < 0.01 ? current : nextProgress,
      );
    };

    const requestProgressUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    requestProgressUpdate();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
    };
  }, [prefersReducedMotion, showContent]);

  const revealStyle = hasMotionReveal
    ? ({
        "--query-reveal-progress": effectiveRevealProgress.toFixed(3),
      } as CSSProperties)
    : undefined;

  function handleTimeUpdate() {
    const videoElement = videoRef.current;

    if (!videoElement || activeVideoStage !== "intro") {
      return;
    }

    if (videoElement.currentTime >= INTRO_CONTENT_REVEAL_SECONDS) {
      setVideoStage("fading");
    }
  }

  function handleVideoError() {
    const videoElement = videoRef.current;
    videoElement?.pause();
    setVideoStage("fallback");
  }

  async function handleVideoEnded() {
    const videoElement = videoRef.current;
    if (!videoElement) {
      setVideoStage("background");
      return;
    }

    setVideoStage("background");
    videoElement.currentTime = 0;
    videoElement.loop = true;

    try {
      await videoElement.play();
    } catch {
      videoElement.pause();
      setVideoStage("fallback");
    }
  }

  return (
    <div className={`home-stage home-stage-${activeVideoStage}`}>
      <div className="video-stage" aria-hidden="true">
        <video
          ref={videoRef}
          className="home-video"
          src={`${publicBasePath}/background-videos/bg-p.mp4`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => void handleVideoEnded()}
          onError={handleVideoError}
        />
        <div className="video-stage-overlay" />
        <div
          className={`intro-brand ${
            activeVideoStage === "intro" || activeVideoStage === "fading"
              ? "intro-brand-visible"
              : "intro-brand-hidden"
          }`}
        >
          <p className="intro-brand-kicker">Hero Pro</p>
          <p className="intro-brand-title">海克斯大乱斗候选强化推荐</p>
        </div>
      </div>

      <main
        className={`page-shell ${showContent ? "page-shell-visible" : "page-shell-hidden"}`}
        style={revealStyle}
      >
        <section className="home-first-region" aria-labelledby="home-title">
          <div className="section-shell section-shell-first">
            <div className="hero-card">
              <div className="hero-badge">海克斯大乱斗候选强化推荐</div>
              <h1 id="home-title">Hero Pro</h1>
              <p className="hero-lead">
                帮助玩家在海克斯大乱斗里，面对陌生候选强化时快速看懂优先级、适配原因和风险点。
              </p>

              <div className="hero-actions">
                <span className="status-pill status-pill-active">当前阶段：数据底座搭建</span>
                <span className="status-pill">只允许已验证资料进入正式推荐</span>
              </div>
            </div>

            <section className="grid-section" aria-label="使用流程与可信原则">
              <article className="info-card">
                <h2>用户只做三步</h2>
                <ol>
                  <li>选择当前英雄</li>
                  <li>勾选本局出现的候选强化</li>
                  <li>直接查看排序、理由和避坑提示</li>
                </ol>
              </article>

              <article className="info-card">
                <h2>推荐必须可信</h2>
                <ul>
                  <li>英雄机制画像优先使用 Riot 权威静态数据</li>
                  <li>强化符文机制需要官方说明与客户端文本交叉验证</li>
                  <li>未验证完成的条目不会进入生产推荐</li>
                </ul>
              </article>
            </section>

            <section className="grid-section" aria-label="建设重点与产品原则">
              <article className="info-card">
                <h2>当前建设重点</h2>
                <ul>
                  <li>建立全量英雄机制画像字段</li>
                  <li>建立全量强化符文机制画像字段</li>
                  <li>完成可解释推荐规则和证据校验</li>
                </ul>
              </article>

              <article className="info-card">
                <h2>产品原则</h2>
                <ul>
                  <li>不瞎编机制</li>
                  <li>不堆砌无关信息</li>
                  <li>不做看不懂的黑盒结论</li>
                </ul>
              </article>
            </section>

            <div className="section-transition" aria-hidden="true">
              <div className="section-transition-shadow" />
              <div className="section-transition-arrow-wrap">
                <span className="section-transition-arrow">
                  <span className="section-transition-arrow-line" />
                  <span className="section-transition-arrow-head" />
                </span>
              </div>
              <p className="scroll-hint">继续下滑，进入英雄与海克斯符文查询大区。</p>
            </div>
          </div>
        </section>

        <section
          ref={revealRegionRef}
          className={`query-reveal-region ${
            hasMotionReveal ? "query-reveal-region-animated" : "query-reveal-region-static"
          }`}
          aria-labelledby="query-region-title"
        >
          <div className="query-reveal-sticky">
            <div className="section-shell query-reveal-shell">
              <div className="query-reveal-intro">
                <p className="eyebrow">第二大区</p>
                <h2 id="query-region-title">选择英雄和海克斯符文</h2>
                <p className="query-reveal-copy">
                  查询区会在下滑过程中平滑进入视野；动效结束后，英雄与海克斯交互会成为当前主内容。
                </p>
              </div>

              <div className="query-reveal-panel">
                <QueryPanel headingLevel={3} />
              </div>
            </div>
          </div>
        </section>

        <section className="home-declaration-region" aria-labelledby="notice-title">
          <div className="section-shell section-shell-notice">
            <section className="notice-card">
              <h2 id="notice-title">非官方声明</h2>
              <p>
                Hero Pro is not endorsed by Riot Games and does not reflect the views
                or opinions of Riot Games or anyone officially involved in producing
                or managing Riot Games properties. Riot Games and all associated
                properties are trademarks or registered trademarks of Riot Games, Inc.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { QueryPanel } from "@/components/query-panel";

const INTRO_CONTENT_REVEAL_SECONDS = 3;

type VideoStage = "intro" | "fading" | "background" | "fallback";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStage, setVideoStage] = useState<VideoStage>("intro");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
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
          src="/background-videos/bg-p.mp4"
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

      <main className={`page-shell ${showContent ? "page-shell-visible" : "page-shell-hidden"}`}>
        <section className="hero-card">
          <div className="hero-badge">海克斯大乱斗候选强化推荐</div>
          <h1>Hero Pro</h1>
          <p className="hero-lead">
            帮助玩家在海克斯大乱斗里，面对陌生候选强化时快速看懂优先级、适配原因和风险点。
          </p>

          <div className="hero-actions">
            <span className="status-pill status-pill-active">当前阶段：数据底座搭建</span>
            <span className="status-pill">只允许已验证资料进入正式推荐</span>
          </div>
        </section>

        <section className="grid-section">
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

        <section className="grid-section">
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

        <QueryPanel />

        <section className="notice-card">
          <h2>非官方声明</h2>
          <p>
            Hero Pro is not endorsed by Riot Games and does not reflect the views
            or opinions of Riot Games or anyone officially involved in producing
            or managing Riot Games properties. Riot Games and all associated
            properties are trademarks or registered trademarks of Riot Games, Inc.
          </p>
        </section>
      </main>
    </div>
  );
}

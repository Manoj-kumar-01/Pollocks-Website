"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function EntryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const router = useRouter();

  const handleEnter = useCallback(() => {
    setOverlayVisible(false);
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play();
      });
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <>
      <style jsx>{`
        body,
        html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background-color: #fdfdfb;
          overflow: hidden;
          font-family: "Lexend", sans-serif;
        }

        .entry-video {
          width: 100vw;
          height: 100vh;
          height: 100svh;
          object-fit: cover;
          object-position: center;
          transform: scale(0.92);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(5px);
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease-in-out;
        }

        .overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .enter-btn {
          background: rgba(14, 165, 233, 0.9);
          color: white;
          font-size: 1.25rem;
          padding: 1rem 3rem;
          border-radius: 9999px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.4s;
          border: 2px solid transparent;
          margin-top: 2rem;
          box-shadow: 0 10px 25px rgba(14, 165, 233, 0.4);
        }

        .enter-btn:hover {
          background: transparent;
          border-color: #0ea5e9;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(14, 165, 233, 0.6);
        }

        .controls {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          z-index: 40;
          display: flex;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        body:hover .controls,
        .controls:hover {
          opacity: 1;
        }

        .skip-btn {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }

        .skip-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Video Element */}
      <video
        ref={videoRef}
        className="entry-video"
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source src="/Entry_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Initial Overlay */}
      <div className={`overlay ${!overlayVisible ? "fade-out" : ""}`}>
        <div className="text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-2">
            Pollocks
          </h1>
          <h2 className="text-sky-400 text-xl tracking-[0.4em] uppercase font-bold mb-8">
            School of Excellence
          </h2>
          <button onClick={handleEnter} className="enter-btn">
            Experience Pollocks
          </button>
        </div>
      </div>

      {/* On-screen controls during video */}
      <div className="controls">
        <button onClick={toggleMute} className="skip-btn">
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <a href="/dashboard" className="skip-btn">
          Skip Intro
        </a>
      </div>
    </>
  );
}

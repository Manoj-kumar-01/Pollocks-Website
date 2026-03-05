"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function EntryPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const handleVideoEnd = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

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
        autoPlay
        muted
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source src="/Entry_Video.mp4?v=1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}

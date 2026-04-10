"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

/* ─── SVG Icon Components ─── */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function MuteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

/* ─── Quick Links Data ─── */

const quickLinks = [
  {
    id: "link-instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    id: "link-github",
    label: "GitHub",
    href: "https://github.com/aryndraa",
    icon: GitHubIcon,
  },
  {
    id: "link-tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@karyasite",
    icon: TikTokIcon,
  },
  {
    id: "link-modernization",
    label: "Modernization Website",
    href: "https://sbxonestudio.com/en",
    icon: GlobeIcon,
  },
  {
    id: "link-marketing",
    label: "Landing Page Marketing",
    href: "https://lp.cupsiteproject.com/",
    icon: RocketIcon,
  },
];

/* ─── Particle Background Component ─── */

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      angle: number = 0;
      distance: number = 0;
      speed: number = 0;
      color: string = "";

      constructor() {
        this.reset();
      }

      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * (Math.max(window.innerWidth, window.innerHeight) / 2);
        this.radius = Math.random() * 2 + 0.5;
        this.speed = (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1);
        this.color = Math.random() > 0.5 ? "rgba(94, 44, 209, 0.2)" : "rgba(91, 141, 255, 0.2)";
      }

      update() {
        this.angle += this.speed;
        this.x = canvas!.width / 2 + Math.cos(this.angle) * this.distance;
        this.y = canvas!.height / 2 + Math.sin(this.angle) * this.distance;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

/* ─── Page Component ─── */

export default function ComingSoonPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Audio initialization - using absolute path for reliability
    audioRef.current = new Audio("/song.mpeg");
    audioRef.current.loop = true;

    // Attempt to play immediately (often blocked by browsers)
    const playAttempt = audioRef.current.play();
    if (playAttempt !== undefined) {
      playAttempt
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.log("Autoplay blocked. Waiting for user interaction...");
        });
    }

    // Global listener to trigger play on first interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
          })
          .catch(err => console.log("Still blocked:", err));
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "back.out(1.7)", duration: 0.8 },
      });

      /* Avatar entrance - pop in with extra scale */
      tl.fromTo(
        ".avatar-container",
        { opacity: 0, scale: 0.5, rotate: -15 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
      );

      /* Brand label pop */
      tl.fromTo(
        ".brand-label",
        { scale: 0.8, opacity: 0, rotateX: 90 },
        { scale: 1, opacity: 1, rotateX: 0, duration: 0.6 },
        "-=0.6"
      );

      /* Heading words stagger */
      tl.fromTo(
        ".heading-word",
        { opacity: 0, y: 40, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1 },
        "-=0.4"
      );

      /* Subtitle fade in */
      tl.fromTo(
        ".subtitle-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      );

      /* Divider expansion */
      tl.fromTo(
        ".divider",
        { opacity: 0, width: 0 },
        { opacity: 1, width: 60, duration: 0.8, ease: "power4.out" },
        "-=0.4"
      );

      /* Links section container */
      tl.to(".links-section", { opacity: 1, duration: 0.3 }, "-=0.3");

      /* Individual link stagger with a 3D flip effect */
      tl.fromTo(
        ".quick-link",
        { opacity: 0, y: 30, rotateX: -30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.5"
      );

      /* Music Player entrance */
      tl.fromTo(
        ".music-player",
        { opacity: 0, scale: 0, rotate: 180 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" },
        "-=0.3"
      );

      /* Footer */
      tl.fromTo(
        ".footer-section",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 overflow-hidden bg-grid"
    >
      <ParticleBackground />
      <div className="content-wrapper relative z-10 flex flex-col items-center gap-8 sm:gap-10 w-full max-w-[560px]">
        {/* ── Avatar ── */}
        <div className="avatar-container relative opacity-0">
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full p-2 border-2 border-black/20  ">
            <Image
              src="/aavatar.jpeg"
              alt="Profile photo"
              width={120}
              height={120}
              priority
              className="w-full h-full rounded-full object-cover border-1 border-[#FAFAFA]"
            />
          </div>
        </div>

        {/* ── Text Content ── */}
        <div className="text-section flex flex-col items-center gap-3 text-center px-4">
          <span className="brand-label opacity-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/20 text-[13px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Mahendra Arya | Web Developer
          </span>

          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-medium leading-[1.1] tracking-tighter text-[#0A0A0A] perspective-1000">
            <span className="heading-word opacity-0 inline-block mr-2">Coming</span>
            <span className="heading-word opacity-0 inline-block bg-[linear-gradient(135deg,#5E2CD1_0%,#5B8DFF_100%)] bg-clip-text text-transparent">
              Soon!
            </span>
          </h1>

          <p className="subtitle-text opacity-0 text-[15px] sm:text-[16px] leading-relaxed text-text-muted max-w-[400px]">
            Yo! I&apos;m Mahendra Arya, a Web Developer based in Indonesia. I&apos;m currently working on my personal portfolio website to showcase my skills and projects.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="divider opacity-0 w-[60px] h-0.5 rounded-full bg-[linear-gradient(135deg,#5E2CD1_0%,#5B8DFF_100%)]" />

        {/* ── Quick Links ── */}
        <div className="links-section opacity-0 flex flex-col items-center gap-4 w-full">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-light">
            Quick Links
          </span>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 w-full">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link opacity-0 inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4.5 sm:py-2.5 rounded-full bg-white border border-border text-[13px] sm:text-sm font-medium text-[#0A0A0A] transition-all duration-300 shadow-sm hover:border-primary/30 hover:bg-[linear-gradient(135deg,rgba(94,44,209,0.06)_0%,rgba(91,141,255,0.06)_100%)] hover:shadow-md hover:-translate-y-0.5 group"
              >
                <link.icon className="w-4 h-4 text-text-muted transition-colors group-hover:text-primary shrink-0" />
                {link.label}
                <ArrowIcon className="w-3 h-3 text-text-light transition-all group-hover:text-primary group-hover:translate-x-0.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="footer-section opacity-0 flex flex-col items-center gap-2">
          <p className="text-[13px] text-text-light font-regular">
            © 2026 karyasite. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Music Player Button ── */}
      <button
        onClick={toggleMusic}
        className="music-player opacity-0 fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <MusicIcon className="w-5 h-5 text-primary animate-pulse" />
        ) : (
          <MuteIcon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
        )}
      </button>
    </div>
  );
}

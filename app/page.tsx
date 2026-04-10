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

/* ─── Projects Data ─── */

const latestProjects = [
  {
    title: "Glonotes - Sistem Poin & Cetak Surat",
    image: "/Group 4130.png",
    category: "Web App | PHP MVCSR",
    link: "https://glonotes.karyasite.com/"
  },
  {
    title: "Restaurant POS",
    image: "/Group 4132.png",
    category: "Web App | Laravel Inertia",
    link: "https://github.com/aryndraa/pos-application"
  },
  {
    title: "Cupsite - Pricing Page",
    image: "/Group 4129.png",
    category: "Landing Page Conversion | Next Js",
    link: "https://cupsite-project.vercel.app/"
  },
  {
    title: "Luxury Surya Nitya",
    image: "/Group 4131.png",
    category: "Company Profile | Next Js",
    link: "https://luxury-surya-nitya.vercel.app/"
  },
];

/* ─── Page Component ─── */

export default function ComingSoonPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const wasPlayingBeforeHide = useRef(false);

  useEffect(() => {
    // Audio initialization - only once
    const audio = new Audio("/song.mpeg");
    audio.loop = true;
    audioRef.current = audio;

    // Handle Tab Visibility Changes
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.visibilityState === "hidden") {
        if (!audioRef.current.paused) {
          wasPlayingBeforeHide.current = true;
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          wasPlayingBeforeHide.current = false;
        }
      } else if (document.visibilityState === "visible") {
        if (wasPlayingBeforeHide.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(err => console.log("Auto-resume blocked:", err));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleStart = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play failed:", err));
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play blocked:", err));
    }
  };

  useEffect(() => {
    if (!isStarted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      /* 1. Avatar reveal with orbiting elements */
      tl.fromTo(
        ".avatar-container",
        { opacity: 0, scale: 0, rotate: -45 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.6)" },
        "+=0.2"
      );

      // Dash ring and dot fly in via their wrappers to avoid CSS spin conflict
      tl.fromTo(
        ".orbit-entrance",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" },
        "-=1.2"
      );

      /* 2. Brand Label */
      tl.fromTo(
        ".brand-label",
        { opacity: 0, y: -20, rotateX: 90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8 },
        "-=0.6"
      );

      /* 3. Heading - Word by word staggered reveal */
      tl.fromTo(
        ".heading-word",
        { opacity: 0, y: 30, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" },
        "-=0.4"
      );

      /* 4. Subtitle and other elements */
      tl.fromTo(".subtitle-text", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      tl.fromTo(".divider", { opacity: 0, width: 0 }, { opacity: 1, width: 60, duration: 0.8, ease: "power4.inOut" }, "-=0.6");
      tl.to(".links-section", { opacity: 1, duration: 0.3 }, "-=0.4");
      
      tl.fromTo(".quick-link",
        { opacity: 0, y: 20, rotateX: -45, scale: 0.9 },
        { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.5)" },
        "-=0.2"
      );

      tl.fromTo(".music-player", { opacity: 0, scale: 0, rotate: 90 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "back.out(2)" }, "-=0.5");
      tl.fromTo(".footer-section", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

    }, containerRef);

    return () => ctx.revert();
  }, [isStarted]);

  /* ─── Projects Marquee & Entrance ─── */
  useEffect(() => {
    if (!isProjectsOpen) return;

    const ctx = gsap.context(() => {
      const marqueeInner = document.querySelector(".marquee-inner");
      if (!marqueeInner) return;

      const totalWidth = marqueeInner.scrollWidth / 3;

      // ── Entrance Animation for Cards ──
      gsap.fromTo(".project-card", 
        { 
          opacity: 0, 
          y: 40, 
          rotateX: -20,
          scale: 0.9 
        },
        {
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)",
          delay: 0.4 // Wait for panel to start rolling up
        }
      );

      // ── Continuous Marquee ──
      gsap.to(".marquee-inner", {
        x: -totalWidth,
        duration: 20, // Slower for better readability
        ease: "none",
        repeat: -1,
        delay: 1.5, // Start moving after entrance finishes
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isProjectsOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 py-10 overflow-hidden bg-grid transition-all duration-700 ${isProjectsOpen ? "pb-[55vh]" : ""}`}
    >
      {/* ── Entrance Shield (Splash Screen) ── */}
      <div 
        className={`fixed inset-0 z-100 flex items-center justify-center bg-white transition-all duration-800 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isStarted ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center animate-pulse">
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MusicIcon className="w-6 h-6" />
             </div>
          </div>
          <button
            onClick={handleStart}
            className="group relative px-8 py-3 rounded-full bg-black text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <span className="relative z-10 font-medium tracking-wide">Enter Karyasite</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          <p className="text-[11px] uppercase tracking-widest text-[#0A0A0A]/40 font-bold">Experience with Music</p>
        </div>
      </div>
      <ParticleBackground />
      <div className="content-wrapper relative z-10 flex flex-col items-center gap-8 sm:gap-10 w-full max-w-[560px]">

        {/* ── Avatar ── */}
        <div className="avatar-container relative opacity-0">
          {/* Entrance Wrapper for Ring */}
          <div className="orbit-entrance absolute inset-0 opacity-0">
             <div className="dashed-ring absolute -inset-3.75 rounded-full border border-dashed border-primary/30 animate-[spin_10s_linear_infinite]" />
          </div>
          
          {/* Entrance Wrapper for Dot */}
          <div className="orbit-entrance absolute inset-0 opacity-0">
             <div className="orbit-dot absolute -inset-3.75 animate-[spin_4s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#5E2CD1]" />
             </div>
          </div>

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
            Yo! I&apos;m Mahendra Arya, a Web Developer based in Indonesia. I&apos;m currently working on my portfolio website to showcase my projects.
          </p>
        </div>

          {/* ── Latest Projects Button (Cta) ── */}
        <button
          onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          className="brand-label opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5E2CD1]/10 text-primary border border-primary/20 text-[12px] font-bold tracking-tight hover:bg-primary hover:text-white transition-all duration-300"
        >
          {isProjectsOpen ? "Close Projects" : "See Latest Projects"}
          <RocketIcon className="w-3.5 h-3.5" />
        </button>

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

      {/* ── Background Blur Overlay ── */}
      <div 
        onClick={() => setIsProjectsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/5 backdrop-blur-md transition-opacity duration-700 ${
          isProjectsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Projects Bottom Sheet ── */}
      <div 
        className={`fixed bottom-0 left-0 lg:left-1/2 right-0 lg:-translate-x-1/2  z-60 mx-4 mb-4 rounded-xl bg-white border-2 border-primary shadow-xl lg:max-w-[50%]  transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isProjectsOpen ? "translate-y-0" : "translate-y-120"
        }`}
        style={{ height: '58vh' }}
      >
        <div className="flex flex-col h-full">
           <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
              <h2 className="text-lg font-bold tracking-tight text-[#0A0A0A]">Latest Projects</h2>
              <button 
                onClick={() => setIsProjectsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <span className="text-xl leading-none">×</span>
              </button>
           </div>
           
           {/* Carousel - Infinite Loop */}
           <div 
             className="flex-1 overflow-hidden py-6"
             onMouseEnter={() => gsap.to(".marquee-inner", { timeScale: 0, duration: 0.5 })}
             onMouseLeave={() => gsap.to(".marquee-inner", { timeScale: 1, duration: 0.5 })}
           >
              <div className="marquee-inner flex gap-4 min-w-max px-6">
                 {/* Duplicate projects to ensure seamless loop */}
                 {[...latestProjects, ...latestProjects, ...latestProjects].map((project, idx) => (
                    <div key={idx} className="project-card opacity-0 w-70 sm:w-80 group cursor-pointer">
                       <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="relative aspect-video rounded-2xl overflow-hidden block border border-border/50 shadow-sm transition-transform group-hover:scale-[1.02]"
                       >
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                             <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <ArrowIcon className="w-6 h-6 text-white rotate-45" />
                             </div>
                             <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                               View Demo
                             </span>
                          </div>
                       </a>
                       <div className="mt-3">
                          <p className="font-medium text-sm text-[#0A0A0A]">{project.title}</p>
                          <p className="text-xs text-text-muted">{project.category}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="p-6 border-t border-border/50 bg-gray-50/50">
              <a 
                href="https://github.com/aryndraa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#0A0A0A] text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <GitHubIcon className="w-5 h-5" />
                Explore More on GitHub
                <ArrowIcon className="w-4 h-4" />
              </a>
           </div>
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

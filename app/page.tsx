"use client";

import { useEffect, useRef } from "react";
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

/* ─── Page Component ─── */

export default function ComingSoonPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      /* Ambient orbs fade in */
      tl.to(".ambient-orb", {
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
      });

      /* Avatar entrance */
      tl.fromTo(
        ".avatar-container",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.8"
      );

      /* Text section */
      tl.fromTo(
        ".text-section",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      /* Brand label pop */
      tl.fromTo(
        ".brand-label",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4 },
        "-=0.5"
      );

      /* Divider */
      tl.fromTo(
        ".divider",
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5 },
        "-=0.2"
      );

      /* Links section */
      tl.fromTo(
        ".links-section",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

      /* Individual link stagger */
      tl.fromTo(
        ".quick-link",
        { opacity: 0, y: 12, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
        },
        "-=0.3"
      );

      /* Footer */
      tl.fromTo(
        ".footer-section",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      );

      /* Floating animation for ambient orbs */
      gsap.to(".ambient-orb-1", {
        y: 20,
        x: -10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-orb-2", {
        y: -15,
        x: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-orb-3", {
        y: 12,
        x: -8,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 overflow-hidden bg-grid"
    >
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
        <div className="text-section flex flex-col items-center gap-3 text-center opacity-0 px-4">
          <span className="brand-label inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/20 text-[13px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Mahendra Arya | Web Developer
          </span>

          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-medium leading-[1.1] tracking-tighter text-[#0A0A0A]">
            Coming <span className="bg-[linear-gradient(135deg,#5E2CD1_0%,#5B8DFF_100%)] bg-clip-text text-transparent">Soon!</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-text-muted max-w-[400px]">
            Yo! I'm Mahendra Arya, a Web Developer based in Indonesia. I'm currently working on my personal portfolio website to showcase my skills and projects.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="divider opacity-0 w-[60px] h-0.5 rounded-full bg-[linear-gradient(135deg,#5E2CD1_0%,#5B8DFF_100%)]" />

        {/* ── Quick Links ── */}
        <div className="links-section flex flex-col items-center gap-4 w-full opacity-0">
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
                className="quick-link inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4.5 sm:py-2.5 rounded-full bg-white border border-border text-[13px] sm:text-sm font-medium text-[#0A0A0A] transition-all duration-300 shadow-sm hover:border-primary/30 hover:bg-[linear-gradient(135deg,rgba(94,44,209,0.06)_0%,rgba(91,141,255,0.06)_100%)] hover:shadow-md hover:-translate-y-0.5 group"
              >
                <link.icon className="w-4 h-4 text-text-muted transition-colors group-hover:text-primary shrink-0" />
                {link.label}
                <ArrowIcon className="w-3 h-3 text-text-light transition-all group-hover:text-primary group-hover:translate-x-0.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="footer-section flex flex-col items-center gap-2 opacity-0">
          <p className="text-[13px] text-text-light font-regular">
            © 2026{" "}
              karyasite. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

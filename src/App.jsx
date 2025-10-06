import React, { useState } from "react";

/**
 * NexGenix — Navbar & Hero replica (v3, responsive)
 * -------------------------------------------------
 * Updates:
 *  - Mobile-first responsive layout (stacks hero, adjusts paddings, fluid type).
 *  - Accessible mobile menu (hamburger) with focus styles.
 *  - Logo uploader kept; shows placeholder until you pick an image.
 *  - Media section: YouTube embed with autoplay (muted) + anchor wrapper.
 *
 * To replace the video: put your YouTube share link's ID in `YOUTUBE_ID`.
 */

// Navbar Section //

import myLogo from "./assets/logo.jpg"; // 👈 points to src/assets/logo.jpg

function Nav() {
  const logoPath = myLogo;
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#about" },
    { label: "Our services", href: "#services" },
    { label: "Our works", href: "#works" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Glass bar */}
        <div className="mt-3 rounded-2xl border border-[#eadff4] bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-[0_8px_28px_rgba(95,46,143,0.10)]">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* LOGO + NAME */}
            <a href="#" className="flex items-center gap-3 select-none">
              <img
                src={logoPath}
                alt="Company Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded"
              />
              <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
                NexGenix
              </span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {links.map((l) => (
                  <li key={l.label} className="relative group">
                    <a
                      href={l.href}
                      className="text-sm font-medium text-[#2b0a3a] transition-colors hover:text-[#6F2CCB]"
                    >
                      {l.label}
                    </a>
                    {/* animated underline */}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-transform duration-300 group-hover:scale-x-100" />
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="hidden md:block ml-4">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                           bg-gradient-to-r from-[#6F2CCB] via-[#7D4FDF] to-[#C084FC]
                           shadow-[0_8px_20px_rgba(109,40,217,0.35)]
                           hover:-translate-y-0.5 transition"
              >
                {/* tiny sparkle */}
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />
                Contact us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-[#eadff4] hover:bg-white/60"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 text-[#2b0a3a]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className={`md:hidden ${open ? "block" : "hidden"} px-4 pb-4`}>
            <ul className="space-y-2 rounded-xl border border-[#eadff4] bg-white/70 backdrop-blur p-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#2b0a3a] hover:bg-gradient-to-r hover:from-[#f5ecff] hover:to-[#fde8f3]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-1 block rounded-lg bg-gradient-to-r from-[#6F2CCB] via-[#7D4FDF] to-[#C084FC] px-3 py-2 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* gradient divider at bottom */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#eadff4] to-transparent" />
        </div>
      </div>
    </header>
  );
}


// ========= HeroSection (with background design)
// ========= HeroSection (with visible background curves + glow)
// ========= HeroSection (gradient heading like Services) =========
function Hero() {
  const YOUTUBE_ID = "JBraSNVrueA";
  const params = "?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1";
  const videoLink = `https://www.youtube.com/embed/${YOUTUBE_ID}${params}`;

  return (
    <section className="relative overflow-hidden bg-[#fbf7fb]">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Right pink glow */}
        <div className="absolute right-[-7rem] top-10 h-[26rem] w-[26rem] rounded-full bg-fuchsia-300/55 blur-[130px]" />
        <div className="absolute right-[5rem] top-[8rem] h-[16rem] w-[16rem] rounded-full bg-pink-300/45 blur-[100px]" />

        {/* Dotted waves */}
        <svg
          className="absolute left-1/2 top-[64%] h-[260px] w-[150%] -translate-x-1/2"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
        >
          <path
            d="M-60,190 C240,110 560,240 860,160 C1120,110 1320,170 1500,140"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="4"
            strokeDasharray="6 14"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute left-1/2 top-[72%] h-[240px] w-[150%] -translate-x-1/2"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path
            d="M-60,200 C240,130 560,260 860,180 C1120,130 1320,190 1500,160"
            fill="none"
            stroke="#D6C7F2"
            strokeWidth="3"
            strokeDasharray="5 14"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:py-20">
        {/* LEFT — TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
              Social media marketing
            </span>
          </h1>

          {/* gradient underline accent */}
          <div className="mt-3 h-1.5 w-32 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] shadow-[0_0_18px_rgba(236,72,153,0.45)]" />

          <p className="mt-4 sm:mt-6 max-w-2xl leading-7 text-[#4d3a56]">
            With our unique blend of creativity, strategy, and dedication, we make your brand
            stand out in a crowded online space. Whether you’re looking to boost brand awareness
            or generate leads, we’re here to make it happen.
          </p>
        </div>

        {/* RIGHT — MEDIA (framed video) */}
        <div className="w-full lg:max-w-[540px] justify-self-center">
          <div className="rounded-3xl border-[6px] border-[#2b0a3a] p-2 sm:p-3 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div aria-hidden className="absolute inset-0 bg-pink-100/25" />
              <a href={videoLink} target="_blank" rel="noopener noreferrer" aria-label="Open video in new tab">
                <iframe
                  className="w-full h-full"
                  src={videoLink}
                  title="Promotional Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ========= Services (What We Offer) — card design updated to match sample =========
// ========= Services (Eye-catchy gradient cards, NO corner icons) =========
function ServicesSection() {
  const services = [
    {
      title: "Social Media Strategy Development",
      img: "https://media.istockphoto.com/id/889477300/photo/it-all-leads-back-to-one-thing.jpg?s=1024x1024&w=is&k=20&c=Gbo0CJqA72vc9vfoN8xi6TULaz5VBLcNlt8S3eBEleY=",
      desc:
        "Create a customized strategy outlining target audience, content themes, posting frequency, and growth tactics for platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      title: "Content Creation",
      img: "https://media.istockphoto.com/id/2196071283/photo/influencer-girl-having-fun-dancing.jpg?s=1024x1024&w=is&k=20&c=EAkgXKEOX81Q1eQbeUTRKeg3iZUOE37UXxMli-ejG9c=",
      desc:
        "Thumb-stopping content: images, short videos, stories, blogs, and infographics—crafted to resonate and convert.",
    },
    {
      title: "Social Media Management",
      img: "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=q6RTyRcP6Lli25bBXmKz3F3sIAVSu5PthcuOiAniHzE=",
      desc:
        "Always-on management: consistent posting, community care, and brand-safe conversations.",
    },
    {
      title: "Paid Ad Campaigns",
      img: "https://media.istockphoto.com/id/2157630131/photo/business-digital-marketing-commerce-online-sale-concept-people-use-laptop-to-advertise-on.jpg?s=1024x1024&w=is&k=20&c=r1OLBhkvJsYoJJ0PGD0iy03RDKZLJxXleI6AfjgckEM=",
      desc:
        "Full-funnel ads: audience targeting, creative testing, conversion tracking—built to scale reach and ROI.",
    },
    {
      title: "Analytics and Reporting",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Clear metrics and insights with iterative optimization based on what’s working.",
    },
    {
      title: "Influencer Marketing",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Creator matching, campaign orchestration, and measurable impact—optimized for brand fit.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      {/* subtle background blobs for the whole section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-fuchsia-200/40 blur-[90px]" />
        <span className="absolute right-[-4rem] bottom-10 h-64 w-64 rounded-full bg-violet-200/40 blur-[100px]" />
      </div>

      {/* Headings */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2b0a3a]">
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
            Next-Gen Social Media
          </span>{" "}
          Marketing for Maximum Impact
        </h2>
        <p className="mt-3 sm:mt-4 text-xl font-semibold text-[#2b0a3a]">
          What We Offer?
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {services.map((s, i) => (
          <article
            key={i}
            className="group relative h-full rounded-[28px] p-[2px]
                       bg-gradient-to-br from-[#C084FC] via-[#7C3AED] to-[#4C1D95]
                       shadow-[0_14px_40px_rgba(100,49,156,0.18)] transition-transform
                       hover:-translate-y-1"
          >
            {/* inner panel */}
            <div className="relative flex h-full flex-col rounded-[26px] bg-white overflow-hidden">
              {/* image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* glossy glare */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                {/* corner glow */}
                <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-fuchsia-400/30 blur-2xl" />
              </div>

              {/* content */}
              <div className="flex flex-col flex-1 p-5">
                {/* title */}
                <h3
                  className="text-lg sm:text-xl font-extrabold text-[#2b0a3a] leading-tight"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {s.title}
                </h3>

                {/* description (clamped) */}
                <p
                  className="mt-2 text-sm leading-6 text-[#4d3a56] flex-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {s.desc}
                </p>

                {/* bottom action row */}
                <div className="mt-4 flex items-center justify-between">
                  {/* gradient chip */}
                  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white
                                    bg-gradient-to-r from-[#7C3AED] to-[#EC4899] shadow">
                    Learn more
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* soft bottom glow under card */}
              <span className="pointer-events-none absolute inset-x-12 -bottom-6 h-10 rounded-full bg-[#7C3AED]/25 blur-xl" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


// ========= Pricing (Find Your Perfect Plan) =========
// ========= Pricing (Find Your Perfect Plan) — gradient heading like Services =========
function PricingSection() {
  const plans = [
    {
      name: "Basic",
      icon: "📅",
      price: "7,000",
      currency: "TK",
      period: "Per Month",
      features: [
        "1 posts per day",
        "Total 30 posts",
        "write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting",
      ],
    },
    {
      name: "Pro",
      icon: "🅿️",
      price: "10,000",
      currency: "TK",
      period: "Per Month",
      features: [
        "2 posts per day",
        "Total 60 posts",
        "write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting (without service charge)",
        "We will work with you for any post customization (only one project)",
      ],
    },
    {
      name: "Business",
      icon: "🏢",
      price: "18,000",
      currency: "TK",
      period: "Per Month",
      features: [
        "3–4 posts per day",
        "Total 80–90 posts",
        "write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting (without service charge)",
        "We will work with you for any post customization",
      ],
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
            Find Your Perfect Plan
          </span>
        </h2>

        {/* gradient underline accent */}
        <div className="mx-auto mt-3 h-1.5 w-40 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] shadow-[0_0_18px_rgba(236,72,153,0.45)]" />

        <p className="mt-3 text-[#6b4a7c]">
          Detailed price for each of our services, with no hidden fees.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((p) => (
          <article
            key={p.name}
            className="relative h-full rounded-[32px] overflow-hidden shadow-[0_18px_60px_rgba(63,24,116,0.18)]"
          >
            {/* Purple gradient base */}
            <div className="relative flex h-full flex-col p-6 text-white bg-gradient-to-br from-[#6F2CCB] to-[#7D4FDF]">
              {/* Curved dark arc (right) */}
              <div className="pointer-events-none absolute -right-28 -top-20 h-[160%] w-[68%] rotate-[18deg] rounded-full bg-[#2C0E55]/70" />
              {/* Lighter arc overlay to mimic double curve */}
              <div className="pointer-events-none absolute -right-40 -top-28 h-[165%] w-[62%] rotate-[18deg] rounded-full bg-[#9A6BEE]/30 mix-blend-overlay" />
              {/* Peach wedge bottom-right */}
              <div className="pointer-events-none absolute right-4 -bottom-6 h-10 w-28 -rotate-12 rounded-[16px] bg-[#F5D5C8]" />

              {/* CONTENT */}
              <div className="relative z-[1] flex h-full flex-col">
                {/* Top icon + name */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/80">
                    <span className="text-lg leading-none">{p.icon}</span>
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold">{p.name}</h3>

                <p className="mt-2 max-w-sm text-sm text-white/85">
                  A simple yet powerful plan to kickstart your journey and lay
                  the foundation for future growth
                </p>

                {/* Price + divider */}
                <div className="mt-6">
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-extrabold tracking-tight">
                      {p.price} <span className="text-lg align-top">{p.currency}</span>
                    </div>
                    <div className="text-xs text-white/90">{p.period}</div>
                  </div>
                  <div className="mt-3 h-px w-full bg-white/35" />
                </div>

                {/* Features (uniform height to keep all cards same) */}
                <ul className="mt-6 space-y-3 text-[14px] leading-6 text-white/95 min-h-[210px]">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/80">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <button className="inline-flex items-center justify-center rounded-xl bg-[#EBDDFB] text-[#4A177D] px-5 py-2 font-semibold shadow hover:shadow-md transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



// ========= Free Session CTA (form section) =========
// ========= Free Session (darker card + centered form content + gradient heading) =========
function FreeSessionSection() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: handle submission
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      {/* Gradient Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
            Get a Free Session For FREE
          </span>
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-44 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] shadow-[0_0_18px_rgba(236,72,153,0.45)]" />
        <p className="mt-2 text-base sm:text-lg font-extrabold text-black tracking-tight">
          Only for limited time
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* deeper offset shadow */}
        <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[24px] bg-[#2a0b4f]/10 blur-[2px]" />

        {/* DARKER card */}
        <div className="relative rounded-[24px] ring-1 ring-white/15 bg-gradient-to-br from-[#3b0f6c] via-[#4d1787] to-[#6a27b7] p-6 sm:p-8 text-white shadow-[0_10px_30px_rgba(40,7,85,0.35)]">
          {/* corner quarter-circles */}
          <span className="pointer-events-none absolute left-0 top-0 h-11 w-11 rounded-br-[18px] bg-white/15" />
          <span className="pointer-events-none absolute right-0 bottom-0 h-11 w-11 rounded-tl-[18px] bg-white/15" />

          {/* CENTER the form block */}
          <form
            onSubmit={onSubmit}
            className="mx-auto w-full max-w-[640px] grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Row 1 */}
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                type="text"
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
                required
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input
                type="text"
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
              />
            </div>

            {/* Row 3 (left only to mimic sample) */}
            <div>
              <label className="block text-sm mb-1">website/Page link</label>
              <input
                type="url"
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
              />
            </div>
            <div className="hidden sm:block" />

            {/* Row 4 (textarea spans two columns) */}
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">Description</label>
              <textarea
                rows={7}
                className="w-full rounded-md border-2 border-white/70 bg-white text-[#2b0a3a] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d2b5ff]"
              />
            </div>

            {/* CTA centered */}
            <div className="sm:col-span-2 flex justify-center pt-2">
              <button
                type="submit"
                className="rounded-md bg-white text-[#3b0f6c] px-6 py-2.5 font-semibold shadow hover:shadow-md transition"
              >
                Claim Now
              </button>
            </div>
          </form>
        </div>

        {/* Back to Homepage pill — eye-catchy */}
        <div className="mt-8 text-center">
          <a
            href="#top"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-2.5
                       text-sm font-semibold text-white transition-all
                       bg-gradient-to-r from-[#6F2CCB] via-[#7D4FDF] to-[#C084FC]
                       shadow-[0_10px_24px_rgba(109,40,217,0.35)]
                       hover:shadow-[0_18px_36px_rgba(192,132,252,0.45)]
                       hover:-translate-y-0.5 active:translate-y-0
                       ring-1 ring-white/20 focus:outline-none focus:ring-4 focus:ring-fuchsia-300/40"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg
              className="h-4 w-4 -ml-1 opacity-95"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M3 12l9-9 9 9" />
              <path d="M9 21V9h6v12" />
            </svg>
            <span className="relative">Back to Homepage</span>
            <svg
              className="h-4 w-4 transition-transform translate-x-0 group-hover:translate-x-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


// ========= Footer Section (matches sample) =========
function FooterSection() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire up to your email service
  };

  return (
    <footer className="mt-20 bg-[#2b0a49] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: updates + big headline */}
          <div>
            <p className="text-sm font-semibold text-white/85">Get Updates</p>
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex items-center gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="h-9 w-56 rounded-full bg-white px-4 text-[13px] text-[#2b0a49] placeholder-[#8c78a6] focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                required
              />
              <button
                type="submit"
                className="h-9 rounded-full bg-black px-4 text-xs font-semibold text-white hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            <h3 className="mt-8 text-[28px] sm:text-4xl font-extrabold uppercase leading-tight tracking-wide text-[#F3CFE0]">
              Let your brand
              <br />
              shine online
            </h3>
          </div>

          {/* Middle: nav links */}
          <nav className="justify-self-center">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-14 text-sm font-semibold">
              <li><a href="#" className="hover:opacity-90">Home</a></li>
              <li><a href="#team" className="hover:opacity-90">Team</a></li>
              <li><a href="#projects" className="hover:opacity-90">Projects</a></li>
              <li><a href="#contact" className="hover:opacity-90">Contact</a></li>
            </ul>
          </nav>

          {/* Right: social */}
          <div className="justify-self-start md:justify-self-end">
            <p className="text-sm text-white/80 mb-3">Get in touch</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0Zm.06 3.5H3.5V20h3.5V10Zm4.5 0H11V20h3.5v-5.2c0-2.74 3-2.96 3 0V20H21v-5.92c0-4.77-5.4-4.59-6.5-2.24V10Z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-white hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 16.8 2.8 2.8 0 0 0 12 10.2ZM18 6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Rakibul Hoque. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf7fb] text-[#1d0b27]">
      <Nav />
      <Hero />
      <ServicesSection />
      <PricingSection />
      <FreeSessionSection />
      <FooterSection />


    </div>
  );
}

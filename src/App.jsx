import React, { useState } from "react";
import logoImg from "./assets/logo.jpg"; // ⬅️ put your logo in src/assets

/* ============================================================
   GLOBAL MEDIA (swap with your own assets)
   ============================================================ */
const HERO_IMG =
  "https://images.unsplash.com/photo-1614064641938-3bbee52942c0?q=80&w=1600&auto=format&fit=crop";

// Keep the original name: YT_URL (so other components don’t break)
const YOUTUBE_ID = "JBraSNVrueA";
const PARAMS =
  "?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1";
const YT_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}${PARAMS}`;

/* ============================================================
   NAVBAR — clean / responsive, same style as your sample
   ============================================================ */
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#about" },
    { label: "Our services", href: "#services" },
    { label: "Our works", href: "#works" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 select-none">
            <img
              src={logoImg}
              alt="NexGenix logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded"
            />
            <span className="text-[#2b0a3a] font-semibold tracking-tight">
              NexGenix
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 text-sm text-[#2b0a3a]">
              {links.map((l) => (
                <li key={l.label}>
                  <a className="hover:opacity-80" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl border border-[#e4cfe2] text-[#2b0a3a] px-4 py-2 text-sm hover:shadow-sm"
            >
              Contact us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-[#eadff0]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-[#2b0a3a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-3">
            <ul className="rounded-xl border border-[#eadff0] bg-white p-2 space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#2b0a3a] hover:bg-[#faf5ff]"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg border border-[#e4cfe2] px-3 py-2 text-center text-sm text-[#2b0a3a]"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* hairline bottom */}
      <div className="h-px w-full bg-[#e9dde7]" />
    </header>
  );
}

/* ============================================================
   HERO — Google Ads (matches your screenshot)
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7fb]">
      {/* dotted background curve */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[250px] w-full"
        viewBox="0 0 1440 250"
        preserveAspectRatio="none"
      >
        <path
          d="M-60,180 C220,120 480,240 750,160 C1040,80 1240,160 1500,120"
          fill="none"
          stroke="#d9cddd"
          strokeWidth="3"
          strokeDasharray="4 11"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Left copy */}
        <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
  <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
    Google
  </span>{" "}
  <span className="text-[#2b0a3a]">Ads</span>
</h1>

          <p className="mt-4 max-w-xl leading-7 text-[#4d3a56]">
            Maximize your online visibility and connect with the right audience
            at the right time. Our expert Google Ads management services ensure
            every dollar of your budget delivers measurable results.
          </p>
        </div>

        {/* Right media card */}
        <div className="justify-self-center w-full max-w-[540px]">
          <div className="rounded-3xl border-[6px] border-[#2b0a3a] p-2 sm:p-3 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              {/* Poster image (shows until iframe paints) */}
              <img
                src={HERO_IMG}
                alt="Google Ads promo"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-pink-100/30" />

              {/* The actual video */}
              <iframe
                key={YOUTUBE_ID} // forces reload if ID changes
                className="relative w-full h-full"
                src={YT_URL}
                title="Promotional Video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* optional: open on YouTube button (doesn't block iframe) */}
              <div className="absolute left-3 top-3">
                <a
                  href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2b0a3a] ring-1 ring-black/10 hover:bg-white"
                >
                  Open on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subheadings under hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
  <h2 className="text-center text-2xl sm:text-3xl font-extrabold">
    <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
      Our Proven Process For
    </span>{" "}
    <span className="text-[#2b0a3a]">Google Ads Success</span>
  </h2>

  {/* underline in same gradient */}
  <div className="mx-auto mt-2 h-1.5 w-40 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899]" />

  <p className="mt-4 text-center text-xl font-extrabold">
    <span className="text-[#2b0a3a]">Why Choose Us for </span>
    <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
      Google Ads?
    </span>
  </p>
</div>

    </section>
  );
}

export { Nav, Hero };


/* ============================================================
   SECTION 1 — 3-Step Process (gradient on heading only)
   ============================================================ */
   function ProcessStepsSection() {
    const items = [
      {
        title: "Step 1: Understanding Your Business Needs",
        desc:
          "We start by conducting a thorough analysis of your business and target audience.",
        icon: (
          <svg viewBox="0 0 64 64" className="h-10 w-10" fill="currentColor">
            <path d="M8 30a22 22 0 1 1 44 0c0 12.15-9.85 22-22 22H12a4 4 0 0 1-4-4v-8a10 10 0 0 1 0-10z" />
            <path d="M33.5 20.2c1.9-1.9 5-1.9 6.9 0 .7.7 1.1 1.6 1.3 2.5.2.9.1 1.8-.2 2.6-.9 2.2-3.3 4.4-7.9 7.4-4.6-3-7-5.2-7.9-7.4-.3-.8-.4-1.7-.2-2.6.2-.9.6-1.8 1.3-2.5 1.9-1.9 5-1.9 6.9 0z" />
          </svg>
        ),
      },
      {
        title: "Step 2: Crafting Targeted Ad Campaigns",
        desc:
          "Our team creates tailored ad campaigns that resonate with your audience.",
        icon: (
          <svg viewBox="0 0 64 64" className="h-10 w-10" fill="currentColor">
            <path d="M14 40h14l6 6h16a4 4 0 0 0 4-4V18a4 4 0 0 0-4-4H34l-6 6H14z" />
            <path d="M30 28a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" />
            <path d="M40 20h10v6H40z" />
          </svg>
        ),
      },
      {
        title: "Step 3: Monitoring and Optimising Performance",
        desc:
          "We continuously track performance metrics to optimise your campaigns for better results.",
        icon: (
          <svg viewBox="0 0 64 64" className="h-10 w-10" fill="currentColor">
            <path d="M12 50h40v4H12z" />
            <path d="M20 42h4v8h-4zM30 34h4v16h-4zM40 26h4v24h-4z" />
            <circle cx="46" cy="18" r="6" />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="bg-gradient-to-r from-[#4C1D95] via-[#5B21B6] to-[#6D28D9] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          {/* Section heading with gradient text + small underline */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
                Our Proven Process
              </span>
            </h2>
            <div className="mx-auto mt-2 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899]" />
          </div>
  
          {/* Steps */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
            {items.map((it, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* pastel icon in a soft capsule */}
                <div className="grid place-items-center h-20 w-20 rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <span className="text-pink-100">{it.icon}</span>
                </div>
  
                {/* titles stay plain white (no gradient) */}
                <h3 className="mt-5 text-[18px] font-extrabold leading-snug text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 max-w-xs">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  
/* ============================================================
   SECTION 2 — Advanced Targeting (minimal + polished)
   ============================================================ */
   function TargetingSection() {
    return (
      <section className="bg-[#fbf7fb]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
          {/* Title + subtitle (gradient + solid) */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              <span className="text-[#2b0a3a]">Unlock Your Business Potential with Our </span>
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
                Advanced Google Ads Targeting
              </span>
            </h2>
            <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899]" />
            <p className="mt-4 text-[#4d3a56]">
              Reach your ideal audience with tailored, data-backed strategies that boost engagement and conversions.
            </p>
          </div>
  
          {/* Content */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: two compact features + CTA */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-[#eadff0]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#6D28D9]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2b0a3a]">Precision Targeting</h3>
                  <p className="mt-1 text-sm text-[#4d3a56] max-w-md">
                    Pinpoint audiences by intent, location, and behavior to show the right ad at the right moment.
                  </p>
                </div>
              </div>
  
              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-[#eadff0]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-[#6D28D9]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 13l3-3 4 4 5-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2b0a3a]">Data-Driven</h3>
                  <p className="mt-1 text-sm text-[#4d3a56] max-w-md">
                    Iterate with clear metrics and experiments to steadily improve CTR and ROAS.
                  </p>
                </div>
              </div>
  
              {/* Minimal CTA */}
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-full bg-[#2b0a3a] px-5 py-2 text-sm font-semibold text-white hover:bg-[#241234] transition"
              >
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
  
            {/* Right: clean image card */}
            <div className="justify-self-center w-full max-w-xl">
              <div className="overflow-hidden rounded-2xl ring-1 ring-[#eadff0] bg-white">
                <img
                  className="w-full h-auto object-cover"
                  src="https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Targeting Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
    
/* ============================================================
   SECTION 3 — Expert Features (3 cards with images + text)
   ============================================================ */
function ExpertFeaturesSection() {
  const items = [
    {
      title:
        "Maximise Your Campaign's Performance with Our Expert Optimisation Techniques",
      desc:
        "We continuously refine your campaigns for optimal results.",
      img:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Gain Insights with Comprehensive Reporting on Your Campaigns",
      desc:
        "Stay informed with actionable insights and performance analytics.",
      img:
        "https://images.unsplash.com/photo-1538688273852-e29027c0c176?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Effortlessly Manage Your Budget for Maximum Advertising Impact",
      desc:
        "Our tools ensure you get the best value for your investment.",
      img:
        "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-[#fbf7fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b0a3a]">
            Unlock the Power of Google Ads with Our{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
              Expert Features
            </span>
          </h2>
          <p className="mt-3 text-[#4d3a56]">
            Our Google Ads service offers comprehensive campaign optimisation to ensure your ads
            reach the right audience at the right time. With detailed reporting, you can track
            performance metrics that matter most to your business—while keeping costs under control.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-white ring-1 ring-[#efe6f7] shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-extrabold text-[#2b0a3a]">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-[#4d3a56]">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 4 — Free Website Audit (form card + back link)
   ============================================================ */
function WebsiteAuditSection() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend, Formspree, etc.
  };

  return (
    <section className="bg-[#fbf7fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Card */}
          <div className="rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#eadff0] overflow-hidden">
            {/* Header bar */}
            <div className="bg-[#3b1663] text-white px-6 py-5">
              <h3 className="text-xl sm:text-2xl font-extrabold">
                Get Free Website Audit
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="bg-white px-6 py-6 space-y-5">
              {[
                { name: "Full Name*", type: "text" },
                { name: "Phone*", type: "tel" },
                { name: "Your Email*", type: "email" },
                { name: "Your Website*", type: "url" },
              ].map((f, i) => (
                <input
                  key={i}
                  type={f.type}
                  placeholder={f.name}
                  className="w-full rounded-md border-2 border-[#3b1663] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d5c3ff]"
                  required
                />
              ))}

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#3b1663] px-6 py-2 text-white font-semibold shadow hover:shadow-md"
                >
                  submit now
                </button>
              </div>
            </form>
          </div>

          {/* Back to Homepage */}
          <div className="mt-6 text-center">
            <a
              href="#top"
              className="inline-flex items-center rounded-full border border-[#dccff0] bg-white px-5 py-2 text-sm font-medium text-[#2b0a3a] shadow hover:shadow-md"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — matches your sample layout
   ============================================================ */
function Footer() {
  const footerLinks = ["Home", "Team", "projects", "contact"];
  return (
    <footer className="bg-[#2b0a57] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Top row: newsletter + big headline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <p className="font-semibold mb-3">Get Updates</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full px-3 py-1.5 text-sm text-[#2b0a3a] outline-none"
              />
              <button className="rounded-full bg-black text-white px-3 py-1.5 text-sm">
                Subscribe
              </button>
            </form>
          </div>

          {/* Big brand headline */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-extrabold text-pink-200 leading-snug">
              LET YOUR BRAND
              <br />
              SHINE ONLINE
            </h3>
          </div>

          {/* Link row (centered) */}
          <div className="md:col-span-2 flex items-center justify-around">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="text-white/95 hover:text-white">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Right-side: socials */}
        <div className="mt-6 flex items-center justify-end gap-4">
          <span className="text-white/80 text-sm mr-2">Get in touch</span>
          {/* social icons */}
          {[
            // facebook
            <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v8h4v-8h3.5l.5-4H11V8a1 1 0 0 1 1-1h3V3z" />,
            // linkedin
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2a5 5 0 0 1 2-1zM2 9h4v14H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
            // instagram
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 0a5 5 0 0 0-5 5m18 0a5 5 0 0 0-5-5M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6-2h.01" />,
          ].map((d, i) => (
            <a
              key={i}
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                {d}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP — glue it all together
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf7fb] text-[#1d0b27]" id="top">
      <Nav />
      <Hero />
      <ProcessStepsSection />
      <TargetingSection />
      <ExpertFeaturesSection />
      <WebsiteAuditSection />
      <Footer />
    </div>
  );
}

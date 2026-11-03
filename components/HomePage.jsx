"use client";

import { useEffect } from 'react';
import { initHomeInteractions } from './interactions';

export default function HomePage() {
  useEffect(initHomeInteractions, []);
  return (
<div className="page-content">
  <section id="top" className="hero-split pt-20">
    <div className="hero-copy reveal">
      <span className="text-xs uppercase tracking-[0.28em] font-semibold text-black/70">Now coaching women worldwide</span>
      <h1 className="hero-title font-display text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.06] mt-6 font-normal">
        <span className="italic text-[#c57291]">Imagine where</span><br /> you could be in <span className="heading-highlight grad-text italic">16
          weeks.</span>
      </h1>
      <p className="mt-7 text-base text-ink/70 max-w-md leading-relaxed">
        Premium online coaching for women ready to stop negotiating with themselves fitness, mindset and lifestyle
        transformations with structure, support and someone actually guiding you.
      </p>
      <div className="hero-actions mt-9">
        <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action px-6 py-3.5 rounded-md bg-black text-white text-sm normal-case tracking-normal font-normal hover:bg-rose hover:text-black transition-colors">Start
          your transformation <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        <a href="#programs" className="px-6 py-3.5 rounded-md border border-black/40 text-black text-sm normal-case tracking-normal font-normal hover:bg-white transition">Explore
          programs</a>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex -space-x-3">
          <img src="/assets/transform-1.jpg" className="w-10 h-10 rounded-full border-2 border-cream object-cover" alt="" />
          <img src="/assets/transform-2.jpg" className="w-10 h-10 rounded-full border-2 border-cream object-cover" alt="" />
          <img src="/assets/transform-3.jpg" className="w-10 h-10 rounded-full border-2 border-cream object-cover" alt="" />
          <div className="w-10 h-10 rounded-full bg-rose/80 text-ink text-xs flex items-center justify-center border-2 border-cream">
            +800</div>
        </div>
        <div className="text-sm">
          <div className="text-amber-500"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /> <span className="text-ink font-medium">4.9/5</span></div>
          <div className="text-ink/60">Loved by 800+ women clients</div>
        </div>
      </div>
    </div>
    <div className="hero-media reveal">
      <img src="/assets/rita-banner-portrait.jpg" alt="Rita in the studio" fetchPriority="high" />
    </div>
  </section>
  <section className="bg-black py-4 marquee-mask overflow-hidden">
    <div className="ticker flex gap-12 whitespace-nowrap text-white font-display text-xs font-semibold uppercase tracking-[0.18em]">
      <span>Strength</span><span className="text-rose">✦</span><span>Confidence</span><span className="text-rose">✦</span>
      <span>Discipline</span><span className="text-rose">✦</span><span>Mindset</span><span className="text-rose">✦</span>
      <span>Transformation</span><span className="text-rose">✦</span><span>Lifestyle</span><span className="text-rose">✦</span>
      <span>Strength</span><span className="text-rose">✦</span><span>Confidence</span><span className="text-rose">✦</span>
      <span>Discipline</span><span className="text-rose">✦</span><span>Mindset</span><span className="text-rose">✦</span>
      <span>Transformation</span><span className="text-rose">✦</span><span>Lifestyle</span><span className="text-rose">✦</span>
    </div>
  </section>
  <section className="py-12 md:py-20 reveal">
    <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="font-display text-5xl md:text-6xl grad-text counter" data-target={800}>0</div>
        <div className="mt-2 text-sm uppercase tracking-widest text-mocha">Women Transformed</div>
      </div>
      <div className="text-center">
        <div className="font-display text-5xl md:text-6xl grad-text counter" data-target={9}>0</div>
        <div className="mt-2 text-sm uppercase tracking-widest text-mocha">Years Coaching</div>
      </div>
      <div className="text-center">
        <div className="font-display text-5xl md:text-6xl grad-text counter" data-target={98}>0</div>
        <div className="mt-2 text-sm uppercase tracking-widest text-mocha">% Success Rate</div>
      </div>
      <div className="text-center">
        <div className="font-display text-5xl md:text-6xl grad-text counter" data-target={500}>0</div>
        <div className="mt-2 text-sm uppercase tracking-widest text-mocha">5-Star Reviews</div>
      </div>
    </div>
  </section>
  <section id="programs" className="py-16 md:py-24 section-soft">
    <div className="max-w-[90rem] mx-auto px-6">
      <div className="programs-heading text-center max-w-3xl mx-auto reveal">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Online Coaching Programs</span>
        <h2 className="programs-title font-display text-4xl md:text-5xl mt-3">Built for women who are<span className="desktop-title-break"><br /></span>{' '}
          <span className="heading-highlight grad-text italic">done waiting</span> for the right time.</h2>
        <p className="mt-4 text-ink/70">You don't need a perfect routine or a child-free life to decide to start. You just
          need a plan, a coach, and a system that fits your real life.</p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-hover program-card glass rounded-lg p-6 sm:p-8 reveal">
          <div className="w-12 h-12 rounded-md bg-ink text-cream flex items-center justify-center"><i className="fa-solid fa-dumbbell" /></div>
          <h3 className="font-display text-2xl mt-5">16-Week Transformation</h3>
          <p className="mt-3 text-ink/70 text-sm">Custom training, nutrition and accountability the flagship program women
            come to me for.</p>
          <ul className="mt-5 text-sm text-ink/80 space-y-2">
            <li><i className="fa-solid fa-check text-rose mr-2" />Personalised training plan</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Flexible nutrition strategy</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Weekly check-ins</li>
          </ul>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 inline-flex items-center text-mocha font-medium hover:text-rose">Apply now <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
        <div className="card-hover program-card glass rounded-lg p-6 sm:p-8 reveal">
          <div className="w-12 h-12 rounded-md bg-rose text-ink flex items-center justify-center"><i className="fa-solid fa-user" /></div>
          <h3 className="font-display text-2xl mt-5">1:1 Premium Coaching</h3>
          <p className="mt-3 text-ink/70 text-sm">High-touch private coaching with direct daily access for women who want
            the fastest, most personal route.</p>
          <ul className="mt-5 text-sm text-ink/80 space-y-2">
            <li><i className="fa-solid fa-check text-rose mr-2" />Daily WhatsApp support</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Bi-weekly video calls</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Fully bespoke programming</li>
          </ul>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 inline-flex items-center text-mocha font-medium hover:text-rose">Apply now <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
        <div className="card-hover program-card glass rounded-lg p-6 sm:p-8 reveal">
          <div className="w-12 h-12 rounded-md bg-clay text-white flex items-center justify-center"><i className="fa-solid fa-brain" /></div>
          <h3 className="font-display text-2xl mt-5">Mindset Coaching</h3>
          <p className="mt-3 text-ink/70 text-sm">Stop negotiating with yourself. Rebuild discipline, confidence and
            identity the work no plan can replace.</p>
          <ul className="mt-5 text-sm text-ink/80 space-y-2">
            <li><i className="fa-solid fa-check text-rose mr-2" />Habit &amp; identity work</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Confidence frameworks</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Weekly mindset audits</li>
          </ul>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 inline-flex items-center text-mocha font-medium hover:text-rose">Apply now <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
        <div className="card-hover program-card glass rounded-lg p-6 sm:p-8 reveal">
          <div className="w-12 h-12 rounded-md bg-mocha text-white flex items-center justify-center"><i className="fa-solid fa-utensils" /></div>
          <h3 className="font-display text-2xl mt-5">Fitness &amp; Nutrition Plans</h3>
          <p className="mt-3 text-ink/70 text-sm">Done-for-you plans built around your goals, schedule, food preferences and
            training level no extremes.</p>
          <ul className="mt-5 text-sm text-ink/80 space-y-2">
            <li><i className="fa-solid fa-check text-rose mr-2" />Macro-based meal plan</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Gym or home options</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Lifetime access</li>
          </ul>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 inline-flex items-center text-mocha font-medium hover:text-rose">Apply now <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
        <div className="card-hover program-card glass rounded-lg p-6 sm:p-8 reveal">
          <div className="w-12 h-12 rounded-md bg-ink text-cream flex items-center justify-center"><i className="fa-solid fa-spa" /></div>
          <h3 className="font-display text-2xl mt-5">Lifestyle Coaching</h3>
          <p className="mt-3 text-ink/70 text-sm">For busy women working +10 hours a day. Build a sustainable lifestyle that
            holds up when life doesn't slow down.</p>
          <ul className="mt-5 text-sm text-ink/80 space-y-2">
            <li><i className="fa-solid fa-check text-rose mr-2" />Energy &amp; sleep protocols</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Stress management</li>
            <li><i className="fa-solid fa-check text-rose mr-2" />Routine architecture</li>
          </ul>
          <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-6 inline-flex items-center text-mocha font-medium hover:text-rose">Apply now <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
        <div className="card-hover program-cta relative rounded-lg p-6 sm:p-8 reveal bg-black text-white overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose/40 blur-3xl" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-rose">Most popular</span>
          <h3 className="font-display text-2xl mt-3">Signature Method</h3>
          <p className="mt-3 text-white/75 text-sm">Training + nutrition + mindset + lifestyle the complete Rita method
            for women who want it all to finally click.</p>
          <a href="https://form.jotform.com/253616429002047" className="arrow-action mt-6 inline-flex items-center px-5 py-3 rounded-md border border-white/70 text-white hover:bg-white hover:text-black transition">Book
            consultation <span className="arrow-icon ml-2" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        </div>
      </div>
    </div>
  </section>
  <section id="coaching" className="py-16 md:py-24">
    <div className="max-w-[90rem] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
      <div className="coach-gallery reveal">
        <img src="/assets/rita-coach-studio.jpg" alt="Rita in the studio" loading="eager" className="coach-gallery-item coach-gallery-item-one" />
        <img src="/assets/rita-coach-portrait.jpg" alt="Rita smiling in the studio" loading="eager" className="coach-gallery-item coach-gallery-item-two" />
        <img src="/assets/rita-coach-strength.jpg" alt="Rita strength training with dumbbells" loading="eager" className="coach-gallery-item coach-gallery-item-three" />
        <img src="/assets/rita-training.jpg" alt="Rita training with a dumbbell" loading="eager" className="coach-gallery-item coach-gallery-item-four" />
        <div className="coach-gallery-pagination" aria-label="Coaching gallery slides">
          <button type="button" className="coach-gallery-dot is-active" data-gallery-index="0" aria-label="Show coaching image 1" aria-current="true" />
          <button type="button" className="coach-gallery-dot" data-gallery-index="1" aria-label="Show coaching image 2" />
          <button type="button" className="coach-gallery-dot" data-gallery-index="2" aria-label="Show coaching image 3" />
          <button type="button" className="coach-gallery-dot" data-gallery-index="3" aria-label="Show coaching image 4" />
        </div>
      </div>
      <div className="reveal">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Meet your coach</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Hi, I'm <span className="heading-highlight grad-text italic">Rita</span> and I
          coach women into the strongest version of themselves.</h2>
        <p className="mt-5 text-ink/70">For nearly a decade I've helped women rebuild their bodies, their confidence and
          their relationship with food and training. My approach is simple: real structure, no extremes, zero shame
          and a coach who actually shows up for you.</p>
        <a href="/about" className="arrow-action mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mocha hover:text-black transition">Read Rita's full story <span className="arrow-icon" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        <div className="coaching-features mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass rounded-md p-5">
            <div className="text-rose"><i className="fa-solid fa-trophy" /></div>
            <div className="font-display text-xl mt-2">Certified</div>
            <div className="text-sm text-ink/60">Personal trainer &amp; nutrition coach</div>
          </div>
          <div className="glass rounded-md p-5">
            <div className="text-rose"><i className="fa-solid fa-globe" /></div>
            <div className="font-display text-xl mt-2">Worldwide</div>
            <div className="text-sm text-ink/60">Clients across 20+ countries</div>
          </div>
          <div className="glass rounded-md p-5">
            <div className="text-rose"><i className="fa-solid fa-heart" /></div>
            <div className="font-display text-xl mt-2">Women only</div>
            <div className="text-sm text-ink/60">Specialised in female transformation</div>
          </div>
          <div className="glass rounded-md p-5">
            <div className="text-rose"><i className="fa-solid fa-bolt" /></div>
            <div className="font-display text-xl mt-2">No fluff</div>
            <div className="text-sm text-ink/60">Honest coaching, real results</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="results" className="py-16 md:py-24 section-soft relative overflow-hidden">
    <div className="max-w-[90rem] mx-auto px-6 relative">
      <div className="text-center max-w-2xl mx-auto reveal">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Real Transformations</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Some of these women are <span className="heading-highlight grad-text italic">working
            +10 hours a day.</span></h2>
        <p className="mt-4 text-ink/70">The difference? They stopped negotiating with themselves and committed to the
          process.</p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        <figure className="card-hover relative rounded-lg overflow-hidden reveal">
          <img src="/assets/transform-1.jpg" className="w-full h-[26.25rem] object-cover" alt="Client transformation 1" />
          <figcaption className="p-5 bg-white">
            <div className="text-mocha text-xs uppercase tracking-widest">14 weeks</div>
            <div className="font-display text-2xl">Sofia busy mum</div>
          </figcaption>
        </figure>
        <figure className="card-hover relative rounded-lg overflow-hidden reveal">
          <img src="/assets/transform-2.jpg" className="w-full h-[26.25rem] object-cover" alt="Client transformation 2" />
          <figcaption className="p-5 bg-white">
            <div className="text-mocha text-xs uppercase tracking-widest">16 weeks</div>
            <div className="font-display text-2xl">Aanya full-time exec</div>
          </figcaption>
        </figure>
        <figure className="card-hover relative rounded-lg overflow-hidden reveal">
          <img src="/assets/transform-3.jpg" className="w-full h-[26.25rem] object-cover" alt="Client transformation 3" />
          <figcaption className="p-5 bg-white">
            <div className="text-mocha text-xs uppercase tracking-widest">20 weeks</div>
            <div className="font-display text-2xl">Hannah mum of two</div>
          </figcaption>
        </figure>
      </div>
      <div className="results-stats mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
        <div className="result-stat glass-soft rounded-md p-6 text-center">
          <div className="result-stat-value font-display text-3xl text-mocha">-12kg</div>
          <div className="result-stat-label text-xs uppercase tracking-widest text-ink/70 mt-1">Average fat loss</div>
        </div>
        <div className="result-stat glass-soft rounded-md p-6 text-center">
          <div className="result-stat-value font-display text-3xl text-mocha">+5kg</div>
          <div className="result-stat-label text-xs uppercase tracking-widest text-ink/70 mt-1">Lean muscle gain</div>
        </div>
        <div className="result-stat glass-soft rounded-md p-6 text-center">
          <div className="result-stat-value font-display text-3xl text-mocha">16wks</div>
          <div className="result-stat-label text-xs uppercase tracking-widest text-ink/70 mt-1">Avg program length</div>
        </div>
        <div className="result-stat glass-soft rounded-md p-6 text-center">
          <div className="result-stat-value font-display text-3xl text-mocha">100%</div>
          <div className="result-stat-label text-xs uppercase tracking-widest text-ink/70 mt-1">Custom to you</div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24">
    <div className="max-w-[90rem] mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 reveal">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">@rita_fitnesscoach</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Inside the <span className="heading-highlight grad-text italic">community</span>
          </h2>
        </div>
        <a href="https://instagram.com/rita_fitnesscoach" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink text-cream hover:bg-rose hover:text-black transition">
          <i className="fa-brands fa-instagram" /> Follow on Instagram
        </a>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
        {[
          ['/assets/video-1.mp4', '/assets/rita-coach-studio.jpg'],
          ['/assets/video-2.mp4', '/assets/rita-coach-portrait.jpg'],
          ['/assets/video-3.mp4', '/assets/rita-coach-strength.jpg'],
          ['/assets/video-4.mp4', '/assets/rita-training.jpg'],
          ['/assets/video-5.mp4', '/assets/transform-1.jpg'],
          ['/assets/video-6.mp4', '/assets/transform-3.jpg']
        ].map(([video, poster], index) => (
          <div className="community-video-card" data-video-src={video} key={video}>
            <video src={video} poster={poster} muted playsInline preload="metadata" aria-label={`Community video ${index + 1}`} className="community-video-poster" />
            <button type="button" className="community-video-play" aria-label={`Play community video ${index + 1}`}>
              <i className="fa-solid fa-play" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section id="testimonials" className="py-16 md:py-24 section-soft">
    <div className="max-w-[90rem] mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Client Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Words from women who <span className="heading-highlight grad-text italic">decided
              to start.</span></h2>
        </div>
        <div className="flex items-center gap-3 shrink-0" aria-label="Testimonial navigation">
          <button type="button" aria-label="Previous review" className="testiBtn testimonial-nav-button w-11 h-11 rounded-md border border-black bg-black text-white hover:border-rose hover:bg-rose hover:text-black transition" data-dir={-1}><i className="fa-solid fa-arrow-left" /></button>
          <button type="button" aria-label="Next review" className="testiBtn testimonial-nav-button w-11 h-11 rounded-md border border-black bg-black text-white hover:border-rose hover:bg-rose hover:text-black transition" data-dir={1}><i className="fa-solid fa-arrow-right" /></button>
        </div>
      </div>
      <div className="mt-10 relative overflow-hidden reveal">
        <div id="testiTrack" className="testi-track flex">
          <div className="min-w-full px-2">
            <div className="glass rounded-lg p-10 text-center max-w-3xl mx-auto">
              <div className="text-amber-500"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
              <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">"Rita didn't give me a diet she gave me a
                structure that fit my real life. Down 11kg, stronger than I've ever been, and finally not obsessing over
                food."</p>
              <div className="mt-6 text-sm uppercase tracking-widest text-mocha">Emma, 34 · London</div>
            </div>
          </div>
          <div className="min-w-full px-2">
            <div className="glass rounded-lg p-10 text-center max-w-3xl mx-auto">
              <div className="text-amber-500"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
              <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">"I work 12-hour days and still managed to
                fully transform in 16 weeks. The mindset coaching is what changed everything for me."</p>
              <div className="mt-6 text-sm uppercase tracking-widest text-mocha">Priya, 29 · Dubai</div>
            </div>
          </div>
          <div className="min-w-full px-2">
            <div className="glass rounded-lg p-10 text-center max-w-3xl mx-auto">
              <div className="text-amber-500"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
              <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">"Two kids, full-time job, no time. Rita
                built a plan around me — not the other way around. I've never felt this confident in my body."</p>
              <div className="mt-6 text-sm uppercase tracking-widest text-mocha">Hannah, 38 · Sydney</div>
            </div>
          </div>
          <div className="min-w-full px-2">
            <div className="glass rounded-lg p-10 text-center max-w-3xl mx-auto">
              <div className="text-amber-500"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
              <p className="font-display text-2xl md:text-3xl mt-5 leading-snug">"The accountability is unmatched. Weekly
                check-ins, real conversations, and a coach who genuinely cares about more than just the scale."</p>
              <div className="mt-6 text-sm uppercase tracking-widest text-mocha">Laura, 41 · Madrid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="faq" className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center reveal">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Questions</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Everything you need to <span className="heading-highlight grad-text italic">know.</span></h2>
      </div>
      <div className="faq-grid mt-12 reveal">
        <details className="glass rounded-md p-6 group">
          <summary className="flex justify-between items-center cursor-pointer font-display text-xl">Do I need a gym to work
            with you?<span className="chev"><i className="fa-solid fa-plus text-sm" /></span></summary>
          <p className="mt-4 text-ink/70">No. Programs are fully built around your situation gym, home, hotel, minimal
            equipment. We design around your real life, not the other way around.</p>
        </details>
        <details className="glass rounded-md p-6">
          <summary className="flex justify-between items-center cursor-pointer font-display text-xl">How long until I see
            results?<span className="chev"><i className="fa-solid fa-plus text-sm" /></span></summary>
          <p className="mt-4 text-ink/70">Most clients see clear physical and mindset changes within the first 4 weeks. The
            full transformation typically lands in the 16-week window.</p>
        </details>
        <details className="glass rounded-md p-6">
          <summary className="flex justify-between items-center cursor-pointer font-display text-xl">I'm a beginner is
            this for me?<span className="chev"><i className="fa-solid fa-plus text-sm" /></span></summary>
          <p className="mt-4 text-ink/70">Absolutely. The majority of my clients start as beginners. You don't need to be
            fit to start you need to start to get fit.</p>
        </details>
        <details className="glass rounded-md p-6">
          <summary className="flex justify-between items-center cursor-pointer font-display text-xl">Is the nutrition plan
            restrictive?<span className="chev"><i className="fa-solid fa-plus text-sm" /></span></summary>
          <p className="mt-4 text-ink/70">Never. No banned foods, no extremes. We build flexible nutrition around your
            preferences, your culture and your schedule.</p>
        </details>
        <details className="glass rounded-md p-6">
          <summary className="flex justify-between items-center cursor-pointer font-display text-xl">How do we
            communicate?<span className="chev"><i className="fa-solid fa-plus text-sm" /></span></summary>
          <p className="mt-4 text-ink/70">Through WhatsApp and a private coaching app, plus video check-ins. You're never
            coaching alone.</p>
        </details>
      </div>
    </div>
  </section>
  <section id="book" className="py-16 md:py-24 section-soft">
    <div className="max-w-[90rem] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-mocha">Book a free consultation</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">Let's design your <span className="heading-highlight grad-text italic">16
            weeks.</span></h2>
        <p className="mt-5 text-ink/70 max-w-md">A 20-minute call to understand your goals, your lifestyle and the right
          program for you. No pressure, just clarity.</p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-rose"><i className="fa-solid fa-check" /></div><span>Personal goal &amp; lifestyle audit</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-rose"><i className="fa-solid fa-check" /></div><span>Honest assessment of where you are</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-rose"><i className="fa-solid fa-check" /></div><span>Custom program recommendation</span>
          </div>
        </div>
      </div>
      <div className="glass rounded-lg p-6 sm:p-10 reveal text-center">
        <div className="w-16 h-16 mx-auto rounded-full glass flex items-center justify-center text-rose text-2xl"><i className="fa-regular fa-calendar-check" /></div>
        <h3 className="font-display text-3xl mt-6">Ready to begin?</h3>
        <p className="mt-4 text-ink/70 max-w-sm mx-auto">Book your free 20-minute consultation. Share a little about your
          goals and I'll personally get back to you within 24 hours.</p>
        <a href="https://form.jotform.com/253616429002047" target="_blank" rel="noopener" className="arrow-action mt-8 inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-md bg-ink text-cream hover:bg-rose hover:text-black transition">
          Book my consultation <span className="arrow-icon" aria-hidden="true"><i className="arrow-current fa-solid fa-arrow-up" /><i className="arrow-next fa-solid fa-arrow-up" /></span></a>
        <p className="mt-4 text-xs uppercase tracking-widest text-mocha">Free · No pressure · Just clarity ✦</p>
      </div>
    </div>
  </section>
  <footer className="bg-black text-white pt-14 md:pt-20 pb-10">
    <div className="max-w-[90rem] mx-auto px-6 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="font-display text-3xl">Rita<span className="text-rose">.</span></div>
        <p className="mt-4 text-white/70 max-w-sm">Online fitness, mindset and women's transformation coaching. Stop
          negotiating with yourself start the version of you that you keep imagining.</p>
        <div className="mt-6 flex gap-3">
          <a href="https://instagram.com/rita_fitnesscoach" target="_blank" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-rose hover:text-black transition"><i className="fa-brands fa-instagram" /></a>
          <a href="https://linktr.ee/rita_fitnesscoach8" target="_blank" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-rose hover:text-black transition"><i className="fa-solid fa-link" /></a>
          <a href="https://wa.me/000" target="_blank" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-rose hover:text-black transition"><i className="fa-brands fa-whatsapp" /></a>
          <a href="https://www.tiktok.com/@rita_fitnesscoach" target="_blank" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-rose hover:text-black transition"><i className="fa-brands fa-tiktok" /></a>
        </div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] font-semibold text-rose">Coaching</div>
        <ul className="mt-4 space-y-2 text-white/80">
          <li><a className="hover:text-rose transition" href="#programs">Programs</a></li>
          <li><a className="hover:text-rose transition" href="#coaching">1:1 Coaching</a></li>
          <li><a className="hover:text-rose transition" href="/about">About Rita</a></li>
          <li><a className="hover:text-rose transition" href="#results">Transformations</a></li>
          <li><a className="hover:text-rose transition" href="#testimonials">Reviews</a></li>
        </ul>
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] font-semibold text-rose">Contact</div>
        <ul className="mt-4 space-y-2 text-white/80">
          <li><a className="hover:text-rose transition" href="#book">Book a call</a></li>
          <li><a className="hover:text-rose transition" href="https://instagram.com/rita_fitnesscoach" target="_blank">DM 'READY'</a></li>
          <li><a className="hover:text-rose transition" href="https://linktr.ee/rita_fitnesscoach8" target="_blank">All links</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-[90rem] mx-auto px-6 mt-14 pt-6 border-t border-white/20 flex flex-wrap justify-between gap-4 text-xs text-white/60">
      <div>© 2026 Rita Fitness Coach. All rights reserved.</div>
      <div>Designed with intention ✦ Built for women who decide to start.</div>
    </div>
  </footer>
  <a href="https://wa.me/000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="social-tab social-tab-whatsapp fixed bottom-6 right-0 z-40 bg-[#25D366] text-white">
    <i className="fa-brands fa-whatsapp social-tab-icon" aria-hidden="true" />
    <span className="social-tab-label">WhatsApp</span>
  </a>
  <a href="https://instagram.com/rita_fitnesscoach" target="_blank" rel="noopener" aria-label="Follow on Instagram" className="social-tab social-tab-instagram fixed bottom-24 right-0 z-40 text-white">
    <i className="fa-brands fa-instagram social-tab-icon" aria-hidden="true" />
    <span className="social-tab-label">Instagram</span>
  </a>
</div>

  );
}

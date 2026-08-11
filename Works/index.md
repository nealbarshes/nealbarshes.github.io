---
layout: single
title: "Works"
permalink: /Works/
author_profile: false
classes: wide
---

<style>
  /* ==========================================================
     WORKS — RESPONSIVE PROJECT INDEX
     Two columns on desktop; one column on mobile.
     ========================================================== */

  .works-index {
    --works-gap-x: clamp(1.5rem, 3vw, 3rem);
    --works-gap-y: clamp(2.75rem, 5vw, 5rem);
    --works-text: #202124;
    --works-muted: #6b6b68;
    --works-rule: #d9d8d3;
    color: var(--works-text);
  }

  .works-index__intro {
    max-width: 44rem;
    margin: 0 0 clamp(2.5rem, 6vw, 5rem);
  }

  .works-index__intro p {
    margin: 0;
    font-size: clamp(1.08rem, 1.5vw, 1.35rem);
    line-height: 1.55;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--works-gap-x);
    row-gap: var(--works-gap-y);
    margin: 0;
    padding: 0;
  }

  .works-card {
    min-width: 0;
  }

  .works-card__link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .works-card__image-frame {
    aspect-ratio: 3 / 2;
    overflow: hidden;
    background: #ecebe7;
  }

  .works-card__image {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
    transition: transform 280ms ease;
  }

  .works-card__body {
    padding-top: 1rem;
    border-top: 1px solid transparent;
  }

  .works-card__title {
    margin: 0;
    color: var(--works-text);
    font-size: clamp(1.18rem, 1.8vw, 1.55rem);
    line-height: 1.18;
  }

  .works-card__meta {
    margin: 0.55rem 0 0;
    color: var(--works-muted);
    font-size: 0.78rem;
    line-height: 1.45;
    letter-spacing: 0.055em;
    text-transform: uppercase;
  }

  .works-card__description {
    margin: 0.65rem 0 0;
    color: var(--works-text);
    font-size: 0.96rem;
    line-height: 1.55;
  }

  .works-card__link:hover .works-card__image,
  .works-card__link:focus-visible .works-card__image {
    transform: scale(1.025);
  }

  .works-card__link:hover .works-card__title,
  .works-card__link:focus-visible .works-card__title {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em;
  }

  .works-card__link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 0.4rem;
  }

  @media (max-width: 700px) {
    .works-grid {
      grid-template-columns: 1fr;
    }

    .works-index__intro {
      margin-bottom: 2.75rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .works-card__image {
      transition: none;
    }
  }
</style>

<div class="works-index">
  <div class="works-index__intro">
    <p>Selected work in limb preservation, clinical systems design, research, and open-access education.</p>
  </div>

  <div class="works-grid">

    <!-- PROJECT CARD 1 — Duplicate this entire article to add another project. -->
    <article class="works-card">
      <a class="works-card__link" href="{{ '/SystemOfCare/' | relative_url }}">
        <div class="works-card__image-frame">
          <img
            class="works-card__image"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"
            alt="Clinician working in a hospital setting"
            width="1800"
            height="1200"
            loading="eager"
            decoding="async"
          >
        </div>
        <div class="works-card__body">
          <h2 class="works-card__title">Houston Limb Preservation System</h2>
          <p class="works-card__meta">Clinical systems design · 2012–present</p>
          <p class="works-card__description">A coordinated, adaptable system of care designed to prevent avoidable major amputations.</p>
        </div>
      </a>
    </article>

    <!-- PROJECT CARD 2 -->
    <article class="works-card">
      <a class="works-card__link" href="{{ '/Tutorials/' | relative_url }}">
        <div class="works-card__image-frame">
          <img
            class="works-card__image"
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"
            alt="Anatomical teaching model in a medical classroom"
            width="1800"
            height="1200"
            loading="lazy"
            decoding="async"
          >
        </div>
        <div class="works-card__body">
          <h2 class="works-card__title">Clinical Tutorials</h2>
          <p class="works-card__meta">Open-access surgical education</p>
          <p class="works-card__description">Practical, evidence-informed teaching resources for clinicians working in limb salvage.</p>
        </div>
      </a>
    </article>

    <!-- Add future project cards here. The grid will create new rows automatically. -->

  </div>
</div>

<!--
  PLACEHOLDER PHOTOGRAPHY
  Images are temporarily loaded from Unsplash. Before publication, replace each
  src with a local site asset, for example:

  src="{{ '/assets/images/works/system-of-care.jpg' | relative_url }}"

  Crop all local thumbnails to 3:2 at 1800 × 1200 px. A minimum of 1200 × 800 px
  is acceptable. Keep the focal subject away from the extreme edges because
  object-fit: cover will trim any image that is not already 3:2.
-->

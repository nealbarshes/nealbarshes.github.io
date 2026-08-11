---
layout: single
title: "Works"
permalink: /Works/
author_profile: false
classes: wide
---

<style>
  /* ==========================================================
     WORKS — VISUAL PROJECT INDEX
     Two columns on desktop; one column on mobile.
     Add either works-card--landscape or works-card--portrait.
     ========================================================== */

  .works-index {
    --works-gap-x: clamp(1.25rem, 2.6vw, 2.75rem);
    --works-gap-y: clamp(2.25rem, 4vw, 4rem);
    --works-text: #202124;
    --works-muted: #6f706d;
    --works-frame: #d8d8d4;
    --works-frame-active: #aaa9a3;
    --works-accent: #a5843f;
    --works-image-ground: #f7f7f4;
    color: var(--works-text);
  }

  .works-index__intro {
    max-width: 37rem;
    margin: 0 0 clamp(2.25rem, 5vw, 4.5rem);
  }

  .works-index__intro p {
    margin: 0;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    line-height: 1.5;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    column-gap: var(--works-gap-x);
    row-gap: var(--works-gap-y);
    margin: 0;
    padding: 0;
  }

  .works-card,
  .works-card__figure {
    min-width: 0;
    margin: 0;
  }

  .works-card__figure {
    overflow: hidden;
    border: 1px solid var(--works-frame);
    background: #fff;
    transition: border-color 220ms ease;
  }

  .works-card__link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .works-card__image-frame {
    overflow: hidden;
    background: var(--works-image-ground);
  }

  .works-card--landscape .works-card__image-frame {
    aspect-ratio: 3 / 2;
  }

  .works-card--portrait .works-card__image-frame {
    aspect-ratio: 4 / 5;
  }

  .works-card__image {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
    transition: transform 280ms ease;
  }

  .works-card__caption {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.62rem 0.7rem 0.68rem;
    background: #fff;
  }

  .works-card__title {
    margin: 0;
    color: var(--works-text);
    font-size: clamp(0.92rem, 1.2vw, 1.05rem);
    font-weight: 600;
    line-height: 1.2;
    transition: color 220ms ease;
  }

  .works-card__description {
    margin: 0.16rem 0 0;
    color: var(--works-muted);
    font-size: clamp(0.68rem, 0.8vw, 0.76rem);
    line-height: 1.35;
  }

  .works-card__link:hover .works-card__image,
  .works-card__link:focus-visible .works-card__image {
    transform: scale(1.018);
  }

  .works-card__link:hover .works-card__figure,
  .works-card__link:focus-visible .works-card__figure {
    border-color: var(--works-frame-active);
  }

  .works-card__link:hover .works-card__title,
  .works-card__link:focus-visible .works-card__title {
    color: var(--works-accent);
  }

  .works-card__link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 0.35rem;
  }

  @media (max-width: 700px) {
    .works-grid {
      grid-template-columns: 1fr;
    }

    .works-index__intro {
      margin-bottom: 2.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .works-card__figure,
    .works-card__image,
    .works-card__title {
      transition: none;
    }
  }
</style>

<div class="works-index">
  <div class="works-index__intro">
    <p>Selected work in limb preservation, clinical systems, research, and education.</p>
  </div>

  <div class="works-grid">

    <!-- LANDSCAPE CARD — recommended source crop: 1800 × 1200 px -->
    <article class="works-card works-card--landscape">
      <a class="works-card__link" href="{{ '/SystemOfCare/' | relative_url }}">
        <figure class="works-card__figure">
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
          <figcaption class="works-card__caption">
            <h2 class="works-card__title">Houston Limb Preservation System</h2>
            <p class="works-card__description">A coordinated system of care for preventing major amputation.</p>
          </figcaption>
        </figure>
      </a>
    </article>

    <!-- PORTRAIT CARD — recommended source crop: 1440 × 1800 px -->
    <article class="works-card works-card--portrait">
      <a class="works-card__link" href="{{ '/Tutorials/' | relative_url }}">
        <figure class="works-card__figure">
          <div class="works-card__image-frame">
            <img
              class="works-card__image"
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&amp;fit=crop&amp;w=1440&amp;h=1800&amp;q=85"
              alt="Anatomical teaching model in a medical classroom"
              width="1440"
              height="1800"
              loading="lazy"
              decoding="async"
            >
          </div>
          <figcaption class="works-card__caption">
            <h2 class="works-card__title">Clinical Tutorials</h2>
            <p class="works-card__description">Open-access teaching for clinicians working in limb salvage.</p>
          </figcaption>
        </figure>
      </a>
    </article>

    <!--
      Add future cards here. Use one orientation class per card:
      works-card--landscape  (3:2; crop to 1800 × 1200 px)
      works-card--portrait   (4:5; crop to 1440 × 1800 px)
    -->

  </div>
</div>

<!--
  Replace each temporary Unsplash URL with a local asset when ready, e.g.:
  src="{{ '/assets/images/works/system-of-care.jpg' | relative_url }}"

  The CSS enforces the selected orientation with object-fit: cover. Preparing
  the source image in the matching ratio gives you exact control of the crop.
-->

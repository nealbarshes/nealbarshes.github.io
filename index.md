---
layout: single
title: ""
permalink: /
author_profile: false
classes: wide home
---

<section class="home-hero-text">
  <h1>
    Developing cost&#x2011;effective strategies to prevent leg&nbsp;amputations.
  </h1>
</section>

<div class="home-index-layout">

  <nav class="home-sections" aria-label="Homepage sections">
    {%- for link in site.data.navigation.main -%}
      {%- unless link.navigation_only -%}
        <h2 class="home-section-item">
          <a class="home-section-link" href="{{ link.url | relative_url }}">
            <span class="home-section-number">{{ link.number }}</span>
            <span class="home-section-divider" aria-hidden="true"></span>
            <span class="home-section-label">{{ link.title }}</span>
          </a>
        </h2>
      {%- endunless -%}
    {%- endfor -%}

  </nav>

  <figure class="home-index-image">
    <img
      src="{{ '/assets/images/brand/footgoldonlynooutline.png' | relative_url }}"
      alt="Keep the Foot emblem"
    >
  </figure>

</div>

---
title: "About"
permalink: /About/
layout: single
author_profile: false
classes: wide
---

<style>
  .about-page {
    --about-text: #242321;
    --about-muted: #6f6a63;
    --about-rule: hsl(35, 10%, 82%);
    max-width: 48rem;
    color: var(--about-text);
  }

  .about-page__introduction {
    max-width: 42rem;
    margin: 0 0 2.25rem;
    font-size: clamp(1.25rem, 1.05rem + 0.65vw, 1.7rem);
    line-height: 1.42;
  }

  .about-page__biography::after {
    display: table;
    clear: both;
    content: "";
  }

  .about-page__biography p {
    margin: 0 0 1.35rem;
  }

  .about-page__portrait {
    float: right;
    width: 31%;
    min-width: 12rem;
    margin: 0.25rem 0 1.25rem 1.75rem;
  }

  .about-page__portrait img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid hsl(35, 10%, 78%);
    border-radius: 1px;
    box-shadow: 0 6px 18px hsla(25, 15%, 20%, 0.10);
  }

  .about-page__current-work {
    clear: both;
    margin-top: 3.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--about-rule);
  }

  .about-page__current-work h2 {
    margin: 0 0 1rem;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .about-page__current-work dl {
    display: grid;
    grid-template-columns: minmax(8rem, 0.8fr) minmax(0, 2fr);
    gap: 0.55rem 1.5rem;
    margin: 0;
  }

  .about-page__current-work dt,
  .about-page__current-work dd {
    margin: 0;
  }

  .about-page__current-work dt {
    color: var(--about-muted);
  }

  @media (max-width: 700px) {
    .about-page__introduction {
      margin-bottom: 1.75rem;
    }

    .about-page__portrait {
      float: none;
      width: min(85%, 22rem);
      min-width: 0;
      margin: 0.35rem 0 1.75rem auto;
    }

    .about-page__current-work {
      margin-top: 2.75rem;
    }

    .about-page__current-work dl {
      grid-template-columns: 1fr;
      gap: 0.15rem;
    }

    .about-page__current-work dd {
      margin-bottom: 0.75rem;
    }
  }
</style>

<div class="about-page">

  <p class="about-page__introduction">
    Vellora imbricata moves quietly through the amber interval, gathering small geometries where the ordinary weather becomes articulate.
  </p>

  <div class="about-page__biography">
    <p>
      Orinthal vespera begins beside the folded meridian, where copper hours and patient stones exchange their unmeasured names. The lantern field turns slowly toward an unnamed harbor, carrying blue distances beneath its cedar grammar. Nothing arrives in sequence, yet every aperture remembers the shape of rain.
    </p>

    <figure class="about-page__portrait">
      <img src="/assets/images/about/neal-barshes-portrait.jpg" alt="Portrait of Neal Barshes">
    </figure>

    <p>
      Caldrin moths assemble along the western syllable while a minor constellation practices its terrestrial arithmetic. Under the glass orchard, seven pale instruments consider whether the river is a question or merely an elegant postponement. Their answer, if one exists, remains inside the green machinery of afternoon.
    </p>

    <p>
      Meanwhile, the ferric garden develops an affection for asymmetry. Its branches negotiate with wind, limestone, and the occasional republic of sparrows. A corridor of quiet engines extends beyond the visible wall, each one tuned to the frequency of unfinished maps and improbable weather.
    </p>

    <p>
      By evening, the provisional atlas has become almost luminous. Vessels, stairways, and borrowed alphabets converge without explanation, then separate into useful fragments. The work continues wherever the black water touches the white margin and discovers another direction.
    </p>
  </div>

  <section class="about-page__current-work" aria-labelledby="current-work-heading">
    <h2 id="current-work-heading">Current work</h2>
    <dl>
      <dt>Field</dt>
      <dd>Comparative lantern systems</dd>

      <dt>Setting</dt>
      <dd>The western archive of provisional rivers</dd>

      <dt>Practice</dt>
      <dd>Applied meridian repair and quiet geometries</dd>

      <dt>Questions</dt>
      <dd>Resilient weather, folded maps, and useful asymmetry</dd>
    </dl>
  </section>

</div>

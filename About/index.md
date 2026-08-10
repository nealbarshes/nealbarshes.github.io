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
    I am an academic vascular surgeon whose work focuses on developing cost-effective, resilient, and equitable strategies to prevent leg amputations..
  </p>

  <div class="about-page__biography">
    <p>
      My clinical practice is based at the Michael E. DeBakey Veterans Affairs Medical Center in Houston, where I care primarily for patients with advanced peripheral artery disease / critical limb-threatening ischemia. Over the course of my career, I have performed nearly 4,000 operations, with a particular emphasis on limb salvage bypass operations
    </p>

    <figure class="about-page__portrait">
      <img src="https://nealbarshes.github.io/assets/profile3.jpg" alt="Neal Ryan Barshes, MD, MPH">
    </figure>

    <p>
      I serve as Service Line Chief for Vascular Surgery at the DeBakey VA Medical Center and as Program Director of Baylor College of Medicine’s vascular surgery fellowship. Much of my work has involved bringing different specialties together, reducing delays and waste, developing practical clinical guidance, and improving the education of students, residents, and fellows.
    </p>

    <p>
      My academic work includes more than 150 peer-reviewed publications spanning limb salvage, vascular outcomes, health economics, clinical trials, and the organization of vascular care. Across these roles, I am most interested in turning evidence into systems that remain effective under the constraints of real clinical practice..
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

---
layout: single
title: ""
permalink: /system-of-care/
description: "A decade of interdisciplinary amputation prevention and health systems improvement."
author_profile: false
classes: wide system-care-page
---

<div class="system-care-mobile-nav" data-system-care-mobile-nav>
  <div class="system-care-mobile-nav__status">
    <span class="system-care-mobile-nav__label" data-system-care-current>Abstract</span>
    <span class="system-care-mobile-nav__count" data-system-care-count>1 of 10</span>
  </div>
  <div class="system-care-mobile-nav__track" aria-hidden="true">
    <span class="system-care-mobile-nav__fill" data-system-care-progress></span>
  </div>
  <div class="system-care-mobile-nav__steps" aria-label="Article sections">
    <a href="#abstract" aria-label="Abstract"></a>
    <a href="#introduction" aria-label="Introduction"></a>
    <a href="#methods" aria-label="Methods"></a>
    <a href="#program-description" aria-label="Program description"></a>
    <a href="#program-design" aria-label="Program design"></a>
    <a href="#program-assessment" aria-label="Program assessment"></a>
    <a href="#challenges" aria-label="Challenges"></a>
    <a href="#discussion" aria-label="Discussion"></a>
    <a href="#conclusions" aria-label="Conclusions"></a>
    <a href="#references" aria-label="References"></a>
  </div>
</div>

<div class="system-care-shell" data-system-care-page>
  <aside class="system-care-rail" aria-label="Article sections">
    <p class="system-care-rail__eyebrow">On this page</p>
    <ol class="system-care-rail__list">
      <li><a class="is-active" href="#abstract"><span>01</span>Abstract</a></li>
      <li><a href="#introduction"><span>02</span>Introduction</a></li>
      <li><a href="#methods"><span>03</span>Methods</a></li>
      <li><a href="#program-description"><span>04</span>Program description</a></li>
      <li><a href="#program-design"><span>05</span>Program design</a></li>
      <li><a href="#program-assessment"><span>06</span>Program assessment</a></li>
      <li><a href="#challenges"><span>07</span>Challenges</a></li>
      <li><a href="#discussion"><span>08</span>Discussion</a></li>
      <li><a href="#conclusions"><span>09</span>Conclusions</a></li>
      <li><a href="#references"><span>10</span>References</a></li>
    </ol>
  </aside>

  <article class="system-care-article" markdown="1">

# Interdisciplinary Amputation Prevention: Our First Decade

<h2 id="abstract" data-system-care-section data-section-label="Abstract">Abstract</h2>
**Background:** In 2011, our Veterans Health Administration (VHA) hospital system undertook multidisciplinary efforts to improve the care for patients with non-healing foot ulcers and reduce leg amputation rates. Herein we examine the impact of these efforts over this 11 year11-year period.

**Methods:** Characterization of our VHA patient population was done using internal registries and non-federal Texas hospital admission data. A centralized VHA data source provided data on national and local frequencies of various amputations and number of patients with diabetes.

**Results:** Compared to sex- and zip code-matched non-Veteran patients, Veterans treated at our VHA hospital were older and more often self-identified as Black. They also had significantly higher rates of diabetes, chronic kidney disease, and systolic heart failure. A 60% reduction was seen in the incidence rate of major (leg) amputations after implementing multidisciplinary care, despite several challenges to a consistent inpatient delivery model. Several evidence-directed practices were implemented during the study period. The proportion of angiograms done for foot ulcers or gangrene increased from 28.9% to 90.9%.

**Conclusions:** Interdisciplinary care can significantly reduce leg amputation rates, and this reduction does not seem dependent on a particular model for providing inpatient care.


<h2 id="introduction" data-system-care-section data-section-label="Introduction">Introduction</h2>
People with diabetes are at risk for the development of foot ulcers, or full-thickness defects in the epithelium of the foot. These defects provide opportunity for bacterial invasion and foot infection, a clinical situation that can lead to leg amputation (Figure 1). Treatment to prevent leg amputation (“limb salvage”) typically requires management across many medical specialties, including podiatry, vascular surgery, infectious diseases. The multidisciplinary team approach to limb salvage was introduced in Boston in 1928{1} and has been the prevailing approach to this cross-specialty medical problem for at least a decade{2}.

<figure>
  <img src="/assets/images/system-of-care/disease-state.svg" alt="Diagram showing the progression from diabetes and peripheral artery disease to foot ulcer, infection, and limb loss" width="2518" height="1842">
  <figcaption><b>Figure 1:</b> Schematic diagram illustrating the disease spectrum of diabetic foot disease. In brief, at-risk persons with diabetes develop foot ulcers. These foot ulcers provide opportunity for foot infections that can result in leg amputation.</figcaption>
</figure>
Within our hospital system, we have an inpatient “limb salvage” program: group of dedicated clinicians who have worked collaboratively together to provide evidence-guided management of patients hospitalized with foot ulcers or foot gangrene and any superimposed infection with the goal of avoiding leg amputations. We have seen a significant and durable reduction in the incidence of leg amputations among our Veteran population, and we associate this with the VHA system fostering a learning health system: a system in which “internal data and experience are systematically integrated with external evidence, and that knowledge is put into practice”.

Herein we describe the evolution and outcomes of our hospital system’s limb salvage program over more than a decade. Included in this description are changes to team structure and workflow, successes, and challenges past and present. A supplement provides narrative summary with examples of how our clinical practice and our research efforts have informed one another and how these findings are applied to our clinical management.


<h2 id="methods" data-system-care-section data-section-label="Methods">Methods</h2>
Veterans Health Administration Support Service Center data was used to obtain numbers of major (leg) and minor (toe and partial foot) amputations at our hospital system at monthly intervals from October 2000 through May 2023. Yearly totals for the number of persons with diabetes and number of foot ulcers at MEDVAMC were also obtained from the Support Service Center. Annual numbers of the patient population size and number of persons with a foot ulcer to provide were converted to monthly estimates using cubic spline interpolation. Rates were calculated as 12 month rolling averages. Trend lines were created with locally weighted running line smoothing that used a span (alpha) of 0.1.

Data from cohorts of Veterans treated for foot ulcers and foot infections at our hospital system were used to characterize our patient population. To compare our contemporary Veteran population with non-Veteran inpatients treated for foot ulcers and foot infection at other hospitals, we created a 2:1 non-Veteran:Veteran cohort matched by sex and zip code using publicly-available hospital admission data from the Texas Department of Health and State Health Services. Veterans used for this cohort comparison consistent of the 100 consecutive patients who underwent angiography for limb salvage during 2022.

This research was done with approval of the Baylor College of Medicine Institutional Review Board (protocol H-34858) and the Michael E. DeBakey Veterans Affairs Medical Center Research Committee (IRBNet protocol 15A12.HB). All analyses were done with de-identified data in the R programming language version 4.2.2 using RStudio version 2022.06.0 Build 421.


<h2 id="program-description" data-system-care-section data-section-label="Program description">Program description</h2>
### Healthcare system, hospital, and care line characteristics
The Michael E. DeBakey Veteran Affairs Medical Center (MEDVAMC) is a 350-bed teaching hospital located in central Houston. Eleven outpatient clinics, ranging from 28 to 126 miles in distance, are part of our hospital system (See Appendix, Supplemental Figure A). Our hospital provides vascular, orthopedic, and podiatric surgery services, as well as many other highly specialized services such as liver and heart transplants, and our hospital’s risk-adjusted rates of operative morbidity and mortality (observed-to-expected ratios) are significantly lower than expected.

Despite this, the leg amputation incidence rate at MEDVAMC in early 2011 was nearly 3-fold higher than the national average within the Veterans’ Health Administration (VHA) system. The inpatient management of Veterans with infected foot ulcers was fragmented, with the general, orthopedic and vascular surgery teams separately providing siloed care. Delays in treatment were common. There was much service- and individual practicionerpractitioner-level practice heterogeneity. No diagnostic or treatment protocols were utilized, and standard treatment components were provided only sporadically.

### Patient population
Characteristics of the MEDVAMC patient population were another challenge. Compared to a 2:1 non-VHA patient cohort matched by diagnosis codes, sex and zip code (Supplemental Table 1), Veterans seen at MEDVAMC for limb salvage at our hospital are older. Nearly half (46%) self-identify as Black race – a characteristic previously associated with a 2-fold higher risk-adjusted rate of leg amputations (see review3). MEDVAMC patients have significantly higher rates of diabetes, chronic kidney disease and systolic heart failure. About one-fifth (22%) travel more than 40 miles for treatment at our hospital (see zip code heatmap, Figure 2), double that of the non-Veteran matched cohort (10.7%). Thirty-five percent currently smoke, and 37% have moderate to severe peripheral artery disease4.

<figure>
  <img src="/assets/images/system-of-care/patient-origin-map.svg" alt="Texas map showing the zip codes of Veterans traveling to Houston for limb salvage care" width="1280" height="720" loading="lazy">
  <figcaption><b>Figure 2:</b> Heatmap of zip code of residence of Veterans seen at MEDVAMC for limb salvage.</figcaption>
</figure>


<h2 id="program-design" data-system-care-section data-section-label="Program design">Program design</h2>
In late 2011, our vascular surgery team took the lead in limb salvage efforts. We initiated a implemented a “single team” model, assuming the primary role in management of all Veterans foot ulcers (uninfected or infected; Appendix, Supplemental Figure B) seen as inpatients, in the emergency department, or in MEDVAMC-associated primary care outpatient clinics. Consults were initiated directed to through a dedicated limb salvage pager. The vascular team provided interdisciplinary limb salvage management across the spectrum of disease, including the surgical treatment of infection, assessment for PAD, open surgical operations and endovascular interventions to treat PAD, and foot reconstruction (debridement, minor or partial foot amputations, and skin grafting). This care was complemented by frequent consultation by the infectious disease, vascular medicine, podiatry and geriatric wound care teams. This approach streamlined delivery of consistent multidisciplinary care.

We also worked to understand what best multidisciplinary care should consist of. This was done through research spanning the spectrum of the diabetic foot infection disease process (see Table 1 and the narrative summary in the Supplement). Some of the most impactful practices have been: (1) a proclivity towards surgical treatment of foot infections, especially osteomyelitis4; (2) improved identification of PAD5,6; (3) early surgical closure of foot wounds following revascularization7,8; (4) and “palliative wound care” as an alternative to leg amputation in Veterans who are not candidates for revascularization and limb salvage7,9.

Throughout the improvement period the vascular surgery team led monthly multidisciplinary limb salvage meetings. Activities at these meetings included: (1) coordinating the management of individual Veterans; (2) identifying ways to streamline care and avoid waste; (3) discussing internal research findings and relevant publications; and (4) reviewing a 12-month rolling average of our Veteran population’s leg amputation incidence rate.

During the study period, our vascular surgery team consisted of 2 to 5 surgeons board-certified in vascular and general surgery, 2 or 3 nurse practicionerspractitioners, and three vascular ultrasound technologists. Associated specialists included: two podiatrists; three geriatricians with with wound care certification; and additional specialists in infectious diseases, vascular medicine, orthopedics and general surgery.

<h2 id="program-assessment" data-system-care-section data-section-label="Program assessment">Program assessment</h2>
We noted a significant and sustained decrease in our system’s leg amputation rate after the implementation of multidisciplinary meetings and single-team model from early 2012 through 2017 (Figure 3). Specifically, the amputation incidence rate decreased steadily over a five yearfive-year period from a maximum of 160 per 100k per year in February 2012 to a nadir of 66 per 100k per year in April 2017 (an overall 60% decrease). As described above, increases were noted in early 2018, after ceasing the single-team model, and in the summer of 2022, following periods of bed shortages after the onset of the COVID-19 pandemic. Tracking this important metric helped our providers make course corrections.


<figure>
  <img src="/assets/images/system-of-care/amputation-rate.jpeg" alt="Chart showing a sustained decline in major amputation incidence after interdisciplinary care began" width="3000" height="2100" loading="lazy">
  <figcaption><b>Figure 3:</b> Major (leg) amputation incidence rates at MEDVAMC among Veterans with diabetes, 2001-2023.</figcaption>
</figure>



Temporal trends were even clearer with the ratio of leg amputations to foot ulcer, a metric that focuses on the treatment aspect of care and not fluctuations in the incidence of ulcers or the impact of preventative care (see Figure 3).



<figure>
  <img src="/assets/images/system-of-care/amputations-per-ulcer.jpeg" alt="Chart showing the decline in major amputations per foot ulcer from 2001 through 2023" width="3000" height="2100" loading="lazy">
  <figcaption><b>Figure 4:</b> Ratio of major (leg) amputation to foot ulcers at MEDVAMC among Veterans with diabetes, 2001-2023.</figcaption>
</figure>


The decreased leg amputation rate at MEDVAMC does not seem to be mirroring national or regional trends. During this same period ten-year period, the national VHA annualized amputation rate decreased minimally, from 58 to 54 per 100k (Supplemental Figure C). The leg amputation incidence at non-VHA hospitals in Texas have slightly increased10.



Value was also reflected in other metrics. We improved safety through a bundled strategy that reduced the risk-adjusted rate of surgical wound infections by 95%11. We prioritized limb salvage in our selection of patients for angiography (Figure 3). We have nearly eliminated our use of stent-grafts and cryopreserved allogenic saphenous vein grafts, expensive surgialsurgical and endovascular implants, respectively that we identified as being more expensive and less effective than other options12–14. Finally, our team achieved a >90% Veterans Signals survey patient trust rating in fiscal years 2021 and 2022.


<h2 id="challenges" data-system-care-section data-section-label="Challenges">Challenges</h2>
Our first challenge was a significant increase in the patient-physician ratio, occurring about 5 years into our efforts. Among other providers, two vascular surgeons left MEDVAMC in 2016 for higher-paying non-VHA employment. A planned renovation of one of the two vascular surgery-assigned hybrid operatingworking began also in 2016. Additionally, the number of MEDVAMC patient with diabetes had grown 120% (from 89,400 to 107
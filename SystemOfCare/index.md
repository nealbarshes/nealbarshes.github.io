---
layout: single
title: "System of Care"
permalink: /Improvement/
author_profile: false
classes: wide tufte-page
---

<article class="tufte-article">

  <p>


    <label
      for="system-note-1"
      class="system-margin-toggle system-sidenote-number"
      aria-label="Show sidenote 1"
    >1</label>

    <input
      type="checkbox"
      id="system-note-1"
      class="system-margin-toggle"
    >

    <span class="system-sidenote">
      This is a test sidenote. On a desktop screen, it should appear in
      the right margin. On a mobile screen, tap the superscript number
      to show or hide it.
    </span>
  </p>

</article>



# Interdisciplinary Amputation Prevention: Our First Decade

## Abstract

**Background:** In 2011, our Veterans Health Administration (VHA) hospital system undertook multidisciplinary efforts to improve the care for patients with non-healing foot ulcers and reduce leg amputation rates. Herein we examine the impact of these efforts over this 11 year11-year period. 

**Methods:** Characterization of our VHA patient population was done using internal registries and non-federal Texas hospital admission data. A centralized VHA data source provided data on national and local frequencies of various amputations and number of patients with diabetes.

**Results:** Compared to sex- and zip code-matched non-Veteran patients, Veterans treated at our VHA hospital were older and more often self-identified as Black. They also had significantly higher rates of diabetes, chronic kidney disease, and systolic heart failure. A 60% reduction was seen in the incidence rate of major (leg) amputations after implementing multidisciplinary care, despite several challenges to a consistent inpatient delivery model. Several evidence-directed practices were implemented during the study period. The proportion of angiograms done for foot ulcers or gangrene increased from 28.9% to 90.9%.

**Conclusions:** Interdisciplinary care can significantly reduce leg amputation rates, and this reduction does not seem dependent on a particular model for providing inpatient care.


## Introduction
People with diabetes are at risk for the development of foot ulcers, or full-thickness defects in the epithelium of the foot. These defects provide opportunity for bacterial invasion and foot infection, a clinical situation that can lead to leg amputation (Figure 1). Treatment to prevent leg amputation (“limb salvage”) typically requires management across many medical specialties, including podiatry, vascular surgery, infectious diseases. The multidisciplinary team approach to limb salvage was introduced in Boston in 1928{1} and has been the prevailing approach to this cross-specialty medical problem for at least a decade{2}.

<figure>
  <img src="/assets/Figure_VADecade_Fig1_DiseaseState.svg" alt="diabetic foot complications, the disease process">
  <figcaption><b>Figure 1:</b> Schematic diagram illustrating the disease spectrum of diabetic foot disease. In brief, at-risk persons with diabetes develop foot ulcers. These foot ulcers provide opportunity for foot infections that can result in leg amputation.</figcaption>
</figure>



Figure 1: Schematic diagram illustrating the disease spectrum of diabetic foot disease. In brief, at-risk persons with diabetes develop foot ulcers. These foot ulcers provide opportunity for foot infections that can result in leg amputation.

Within our hospital system, we have an inpatient “limb salvage” program: group of dedicated clinicians who have worked collaboratively together to provide evidence-guided management of patients hospitalized with foot ulcers or foot gangrene and any superimposed infection with the goal of avoiding leg amputations. We have seen a significant and durable reduction in the incidence of leg amputations among our Veteran population, and we associate this with the VHA system fostering a learning health system: a system in which “internal data and experience are systematically integrated with external evidence, and that knowledge is put into practice”.

Herein we describe the evolution and outcomes of our hospital system’s limb salvage program over more than a decade. Included in this description are changes to team structure and workflow, successes, and challenges past and present. A supplement provides narrative summary with examples of how our clinical practice and our research efforts have informed one another and how these findings are applied to our clinical management.


## Methods
Veterans Health Administration Support Service Center data was used to obtain numbers of major (leg) and minor (toe and partial foot) amputations at our hospital system at monthly intervals from October 2000 through May 2023. Yearly totals for the number of persons with diabetes and number of foot ulcers at MEDVAMC were also obtained from the Support Service Center. Annual numbers of the patient population size and number of persons with a foot ulcer to provide were converted to monthly estimates using cubic spline interpolation. Rates were calculated as 12 month rolling averages. Trend lines were created with locally weighted running line smoothing that used a span (alpha) of 0.1.

Data from cohorts of Veterans treated for foot ulcers and foot infections at our hospital system were used to characterize our patient population. To compare our contemporary Veteran population with non-Veteran inpatients treated for foot ulcers and foot infection at other hospitals, we created a 2:1 non-Veteran:Veteran cohort matched by sex and zip code using publicly-available hospital admission data from the Texas Department of Health and State Health Services. Veterans used for this cohort comparison consistent of the 100 consecutive patients who underwent angiography for limb salvage during 2022.

This research was done with approval of the Baylor College of Medicine Institutional Review Board (protocol H-34858) and the Michael E. DeBakey Veterans Affairs Medical Center Research Committee (IRBNet protocol 15A12.HB). All analyses were done with de-identified data in the R programming language version 4.2.2 using RStudio version 2022.06.0 Build 421.

 
## Program Description
#### Healthcare System, Hospital, and Care Line Characteristics
The Michael E. DeBakey Veteran Affairs Medical Center (MEDVAMC) is a 350-bed teaching hospital located in central Houston. Eleven outpatient clinics, ranging from 28 to 126 miles in distance, are part of our hospital system (See Appendix, Supplemental Figure A). Our hospital provides vascular, orthopedic, and podiatric surgery services, as well as many other highly specialized services such as liver and heart transplants, and our hospital’s risk-adjusted rates of operative morbidity and mortality (observed-to-expected ratios) are significantly lower than expected.

Despite this, the leg amputation incidence rate at MEDVAMC in early 2011 was nearly 3-fold higher than the national average within the Veterans’ Health Administration (VHA) system. The inpatient management of Veterans with infected foot ulcers was fragmented, with the general, orthopedic and vascular surgery teams separately providing siloed care. Delays in treatment were common. There was much service- and individual practicionerpractitioner-level practice heterogeneity. No diagnostic or treatment protocols were utilized, and standard treatment components were provided only sporadically.

#### Patient Population
Characteristics of the MEDVAMC patient population were another challenge. Compared to a 2:1 non-VHA patient cohort matched by diagnosis codes, sex and zip code (Supplemental Table 1), Veterans seen at MEDVAMC for limb salvage at our hospital are older. Nearly half (46%) self-identify as Black race – a characteristic previously associated with a 2-fold higher risk-adjusted rate of leg amputations (see review3). MEDVAMC patients have significantly higher rates of diabetes, chronic kidney disease and systolic heart failure. About one-fifth (22%) travel more than 40 miles for treatment at our hospital (see zip code heatmap, Figure 2), double that of the non-Veteran matched cohort (10.7%). Thirty-five percent currently smoke, and 37% have moderate to severe peripheral artery disease4.

<figure>
  <img src="/assets/Figure_VADecade_Fig_Map.svg" alt="heatmap: patient zip code of residence">
  <figcaption><b>Figure 2:</b> Heatmap of zip code of residence of Veterans seen at MEDVAMC for limb salvage.</figcaption>
</figure>


## Program Design
In late 2011, our vascular surgery team took the lead in limb salvage efforts. We initiated a implemented a “single team” model, assuming the primary role in management of all Veterans foot ulcers (uninfected or infected; Appendix, Supplemental Figure B) seen as inpatients, in the emergency department, or in MEDVAMC-associated primary care outpatient clinics. Consults were initiated directed to through a dedicated limb salvage pager. The vascular team provided interdisciplinary limb salvage management across the spectrum of disease, including the surgical treatment of infection, assessment for PAD, open surgical operations and endovascular interventions to treat PAD, and foot reconstruction (debridement, minor or partial foot amputations, and skin grafting). This care was complemented by frequent consultation by the infectious disease, vascular medicine, podiatry and geriatric wound care teams. This approach streamlined delivery of consistent multidisciplinary care.

We also worked to understand what best multidisciplinary care should consist of. This was done through research spanning the spectrum of the diabetic foot infection disease process (see Table 1 and the narrative summary in the Supplement). Some of the most impactful practices have been: (1) a proclivity towards surgical treatment of foot infections, especially osteomyelitis4; (2) improved identification of PAD5,6; (3) early surgical closure of foot wounds following revascularization7,8; (4) and “palliative wound care” as an alternative to leg amputation in Veterans who are not candidates for revascularization and limb salvage7,9.

Throughout the improvement period the vascular surgery team led monthly multidisciplinary limb salvage meetings. Activities at these meetings included: (1) coordinating the management of individual Veterans; (2) identifying ways to streamline care and avoid waste; (3) discussing internal research findings and relevant publications; and (4) reviewing a 12-month rolling average of our Veteran population’s leg amputation incidence rate. 

During the study period, our vascular surgery team consisted of 2 to 5 surgeons board-certified in vascular and general surgery, 2 or 3 nurse practicionerspractitioners, and three vascular ultrasound technologists. Associated specialists included: two podiatrists; three geriatricians with with wound care certification; and additional specialists in infectious diseases, vascular medicine, orthopedics and general surgery.

## PROGRAM ASSESSMENT
We noted a significant and sustained decrease in our system’s leg amputation rate after the implementation of multidisciplinary meetings and single-team model from early 2012 through 2017 (Figure 3). Specifically, the amputation incidence rate decreased steadily over a five yearfive-year period from a maximum of 160 per 100k per year in February 2012 to a nadir of 66 per 100k per year in April 2017 (an overall 60% decrease). As described above, increases were noted in early 2018, after ceasing the single-team model, and in the summer of 2022, following periods of bed shortages after the onset of the COVID-19 pandemic. Tracking this important metric helped our providers make course corrections.


<figure>
  <img src="/assets/Figure_VADecade_Fig2_AmpRate.jpg" alt="diabetic foot complications, the disease process">
  <figcaption><b>Figure 3:</b> Major (leg) amputation incidence rates at MEDVAMC among Veterans with diabetes, 2001-2023.</figcaption>
</figure>



The decreased leg amputation rate at MEDVAMC does not seem to be mirroring national or regional trends. During this same period ten yearten-year period, the national VHA annualized amputation rate decreased minimally, from 58 to 54 per 100k (Supplemental Figure C). The leg amputation incidence at non-VHA hospitals in Texas have slightly increased10.

Value was also reflected in other metrics. We improved safety through a bundled strategy that reduced the risk-adjusted rate of surgical wound infections by 95%11. We prioritized limb salvage in our selection of patients for angiography (Figure 3). We have nearly eliminated our use of stent-grafts and cryopreserved allogenic saphenous vein grafts, expensive surgialsurgical and endovascular implants, respectively that we identified as being more expensive and less effective than other options12–14. Finally, our team achieved a >90% Veterans Signals survey patient trust rating in fiscal years 2021 and 2022.

 
# CHALLENGES
Our first challenge was a significant increase in the patient-physician ratio, occurring about 5 years into our efforts. Among other providers, two vascular surgeons left MEDVAMC in 2016 for higher-paying non-VHA employment. A planned renovation of one of the two vascular surgery-assigned hybrid operatingworking began also in 2016. Additionally, the number of MEDVAMC patient with diabetes had grown 120% (from 89,400 to 107,746 between 2010 and 2016), and the MEDVAMC foot ulcer incidence rate had grown 300% (from 392 to 1183 per 100,000). The net result was a higher clinical work loadworkload among the remaining vascular surgeons with less operating room availability.

To stabilize surgeon retention, we reverted from the “single team” model back to inpatient care being distributed among the general surgery, orthopedic surgery and vascular surgery. After noting an increase in the leg amputation incidence rate (Figure 2), we used our meetings to pivot our focus on multidisciplinary to a focus on interdisciplinary care (i.e.i.e., majority of limb salvage clinical care can be provided by providers of any involved specialties). We worked to establish a local, written interdisciplinary consensus on evaluation and management of Veterans with non-healing foot ulcers (see Supplement) to mitigate the loss of a consolidated inpatient careapproach. Despite much provider turnover, at least one physician or surgeon from the core specialties of vascular surgery, podiatry, and infectious diseases remained throughout the study decade.

An additional hurdle occurred in 2020 when the COVID pandemic initiated a shortage of hospital beds available for non-COVID conditions. This was followed by additionalmore bed shortages due to decreased nursing staff. Our health care system also had a period of restricted outpatient encounters early during the COVID pandemic. We noted Veterans with advanced infections presenting in a delayed fashion during this period, and we noted another increase in the leg amputation incidence rate (Figure 2).

Like many health systems, we pivoted to telephone- and video-based outpatient encounters. We also used publicly-availablepublicly available Texas hospitalization data to identify zip codes with particularly high leg amputation incidence rates, and we sent more than 3,500 educational mailings to Veterans categorized as moderate and high risk for leg amputation who lived in these zip codes. These mailings taught how to recognize foot ulcers and infection, emphasized timely evaluation, and identified named our vascular surgery team as a point-of-contact. We have since seen a further decrease in the MEDVAMC leg amputation incidence to its lowest rate in more than 20 years.

## DISCUSSION
A learning organization whose research is directed by clinical observations and whose clinical care is informed by research findings can produce palpable improvements in outcome. Understanding the disease process (Figure 1), then trying to better understand management across the entire range of this disease process has allowed our team to make changes in care that have been systematic in their scope and consistent in their rate. Consolidating inpatient care in a single team model seems to have been effective in reducing amputation rates among diabetic Veterans. That our vascular surgery team served as the hub for limb salvage patients may have been particularly beneficial because of the large impact untreated or unidentified PAD can have and because of the high prevalence of PAD among the limb salvage population seen in our hospital system. To be sustainable, though, a single-team model needs resources. A multi-team model can also be effective in as long as: (1) the degree of multidisciplinary involvement for any given Veteran is appropriate to the individual clinical needs; (2) teams are engaged and willing to contribute in a define role within their specialty; and (3) lines of communication remain open.

Our primary challenge has been and will continue to be retention of our physicians and surgeons. Our main hospital has excellent leadership and a collegial working environment, but the better OR availability, clinical staff support, and salary at non-VA positions has been the basis for many of our physicians – especially surgeons – leaving for other jobs. Despite much staff attrition and a constant flow of resident and fellow trainees, we have been able to keep our clinical approach relatively consistent because of (a) at least one physician or surgeon from each of our four main teams that has fostered a large clinical experience and remained engaged with limb salvage throughout the entire 10- year- period described here; and (b) written local protocols.
Going forward we will work to ensure all requirements of the 2022 Prevention of Amputation in Veterans Everywhere directive7 are incorporated into care. We hope to standardize local management algorithms further still, both to streamline care and to reduce the opportunity for disparities in treatment. More prophylactic podiatric procedures, surgical forms of offloading, and a shared multidisciplinary clinic space may also further help our patients.

## CONCLUSIONS
The introduction of multidisciplinary limb salvage at MEDVAMC in Houston has led to significant and sustained reductions in leg amputation incidence. These reductions do not seem dependent upon a specific team structure for inpatient care. Efforts to improve patient outcomes should focus on making improvements across the disease spectrum; in the case of limb salvage, this includes primary prevention of foot ulcers, the treatment of foot infection, identification and management of PAD, surgical reconstruction / optimal wound healing, and care for patients who do undergo leg amputation.
 
## REFERENCES
1. 	Sanders LJ, Robbins JM, Edmonds ME. History of the team approach to amputation prevention: Pioneers and milestones. Journal of the American Podiatric Medical Association 2010;100(5):317–34. 
2. 	Sumpio BE, Armstrong DG, Lavery LA, Andros G. The role of interdisciplinary team approach in the management of the diabetic foot: A joint statement from the society for vascular surgery and the american podiatric medical association. Journal of the American Podiatric Medical Association 2010;100(4):309–11. 
3. 	Barshes NR, Minc SD. Healthcare disparities in vascular surgery: A critical review. Journal of vascular surgery 2021;74(2):6S–14S. 
4. 	Barshes NR, Mindru C, Ashong C, Rodriguez-Barradas M, Trautner BW. Treatment failure and leg amputation among patients with foot osteomyelitis. The International Journal of Lower Extremity Wounds 2016;15(4):303–12. https://journals.sagepub.com/doi/abs/10.1177/1534734616661058. 10.1177/1534734616661058 
5. 	Barshes NR, Flores E, Belkin M, Kougias P, Armstrong DG, Mills Sr JL. The accuracy and cost-effectiveness of strategies used to identify peripheral artery disease among patients with diabetic foot ulcers. Journal of Vascular Surgery 2016;64(6):1682–90. https://www.sciencedirect.com/science/article/pii/S0741521416303342. 10.1016/j.jvs.2016.04.056 
6. 	Choi JC-B, Miranda J, Greenleaf E, et al. Lower-extremity pressure, staging, and grading thresholds to identify chronic limb-threatening ischemia. Vascular Medicine 2023;28(1):45–53. https://journals.sagepub.com/doi/abs/10.1177/1358863X221147945. 10.1177/1358863X221147945 
7. 	Barshes NR, Chambers JD, Cohen J, Belkin M, Model To Optimize Healthcare Value in Ischemic Extremities (MOVIE) Study Collaborators. Cost-effectiveness in the contemporary management of critical limb ischemia with tissue loss. Journal of vascular surgery 2012;56(4):1015–24. https://www.sciencedirect.com/science/article/pii/S0741521412004843. 10.1016/j.jvs.2012.02.069 
8. 	Barshes NR, Bechara CF, Pisimisis G, Kougias P. Preliminary experiences with early primary closure of foot wounds after lower extremity revascularization. Annals of Vascular Surgery 2014;28(1):48–52. https://www.sciencedirect.com/science/article/pii/S0890509613003828. https://doi.org/10.1016/j.avsg.2013.06.012 
9. 	Barshes NR, Gold B, Garcia A, Bechara CF, Pisimisis G, Kougias P. Minor amputation and palliative wound care as a strategy to avoid major amputation in patients with foot infections and severe peripheral arterial disease. The International Journal of Lower Extremity Wounds 2014;13(3):211–9. https://journals.sagepub.com/doi/abs/10.1177/1534734614543663. 10.1177/1534734614543663 
10. 	Garcia M, Hernandez B, Ellington TG, et al. A lack of decline in major nontraumatic amputations in texas: Contemporary trends, risk factor associations, and impact of revascularization. Diabetes Care 2019;42(6):1061–6. 
11. 	Zamani N, Sharath SE, Vo E, Awad SS, Kougias P, Barshes NR. A multi-component strategy to decrease wound complications after open infra-inguinal re-vascularization. Surgical Infections 2018;19(1):87–94. 
12. 	Barshes NR, Ozaki CK, Kougias P, Belkin M. A cost-effectiveness analysis of infrainguinal bypass in the absence of great saphenous vein conduit. Journal of Vascular Surgery 2013;57(6):1466–70. 
13. 	Zamani N, Sharath S, Browder R, et al. PC158 long-term outcomes after endovascular stent placement for symptomatic, long-segment superficial femoral artery lesions. Journal of Vascular Surgery 2017;65(6):182S–183S. 
14. 	Zamani N, Sharath SE, Browder RC, et al. Outcomes after endovascular stent placement for long-segment superficial femoral artery lesions. Annals of Vascular Surgery 2021;71:298–307. 
 
FIGURES LEGENDS


Figure 3: Proportion of diagnostic angiography done by the vascular surgery service at MEDVAMC for limb salvage (non-healing foot ulcer or gangrene, with or without infection) versus all other indications.


Neal R. Barshes, M.D., M.P.H.1,2, Aimee D. Garcia, M.D. 1,3, Cezarina Mindru, M.D. 1,4, 
Maria Rodriguez-Barradas, M.D., Ph.D. 1,4, Panos Kougias, M.D., M.S. 5,
David M. Green, M.D., M.S. 1,6, Samir S. Awad, M.D., M.P.H. 1,7


1 Michael E. DeBakey Veterans Affairs Medical Center 
2002 Holcombe Boulevard 
Houston, Texas 77030 

2 Division of Vascular Surgery and Endovascular Therapy
Michael E. DeBakey Department of Surgery
Baylor College of Medicine
Houston, Texas 77030

3 Section of Geriatric Medicine
Department of Medicine
Baylor College of Medicine 
Houston, Texas 77030

4 Section of Infectious Disease
Department of Medicine
Baylor College of Medicine
Houston, Texas 77030

5 Department of Surgery
State University of New York (SUNY) Downstate
Brooklyn, NY 11203

6 Department of Orthopedic Surgery
Baylor College of Medicine
Houston, Texas 77030

7 Division of Acute Care Surgery
Michael E. DeBakey Department of Surgery
Baylor College of Medicine
Houston, Texas 77030



4 Please address correspondence to:
Neal R. Barshes, M.D., M.P.H.
Associate Professor of Surgery
Division of Vascular and Endovascular Surgery
Michael E. Debakey Department of Surgery
Baylor College of Medicine / Michael E. DeBakey Veterans Affairs Medical Center
2002 Holcombe Boulevard (OCL 112)
Houston, Texas 77030

Phone: 713.791.1414
E-mail: neal.barshes@va.gov


Abstract word count: 211.
Text word count: 2,191.
Tables and Figures: five.
References: seven. 
Potential conflicts of interest: None of the authors has any relationships with industry or other conflicts of interest to disclose. .
Keywords: amputation prevention; foot ulcer; foot infection; osteomyelitis; peripheral artery disease; femorotibial bypass; evidence-based; interdisciplinary; multidisciplinary.

#### Abbreviations: 
MEDVAMC, Michael E. DeBakey Veteran Affairs Medical Center
PAD, peripheral artery disease
VHA, Veterans Healthcare Administration


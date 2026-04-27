Open CPRS. 
Click on "Notes" tab on the bottom. 
At the top of the screen, click Options --> Create New Template. 
On the right, create a template name and select "Dialog" as the "Template Type".
Then copy everything below this line and paste it into the CPRS template text box: 
--------------------------------------------------------------------------------------



_________________________________________________________________________
*************************************************************************


VASCULAR SURGERY INPATIENT PROGRESS NOTE

For questions, please contact: 
{FLD:CHECK [X/0]}Vascular Surgery RED team, pager 
{FLD:CHECK [X/0]}Vascular Surgery BLUE team, pager 
{FLD:CHECK [X/0]}Vascular Surgery SILVER team: pager 

SUMMARY:

>>  |PATIENT NAME| is a |PATIENT AGE| y/o |PATIENT SEX| 

>>  |ADMIT DX|
 
Active inpatient problems and plans for next 72 hours include:
1. Problem 1:{FLD:TEXT (1-40 CHAR)}
     Plans: 
{FLD:WP 4 LINES 60,IND 6,WP}

2. Problem 2:{FLD:TEXT (1-40 CHAR)}
     Plans: 
{FLD:WP 4 LINES 60,IND 6,WP}

3. Problem 3:{FLD:TEXT (1-40 CHAR)}
     Plans: 
{FLD:WP 4 LINES 60,IND 6,WP}

4. Problem 4:{FLD:TEXT (1-40 CHAR)}
     Plans: 
{FLD:WP 4 LINES 60,IND 6,WP}

5. Problem 5:{FLD:TEXT (1-40 CHAR)}
     Plans: 
{FLD:WP 4 LINES 60,IND 6,WP}


Anticipated date of discharge: ^^^^{FLD:DATE  REQ}^^^
_________________________________________________________________________
*************************************************************************









============================================================================
PATIENT'S SUBJECTIVE REPORT
============================================================================
{FLD:WORD PROCESSING}

Pain level today, as recorded by nursing notes: |PAIN TODAY|



============================================================================
HOSPITAL COURSE
============================================================================
Hospital events, progress, testing over past 24 hours:
{FLD:580 IMS WP 65X2}

Concise chronological summary of events during this hospitalization:
{FLD:WORD PROCESS (REQUIRED)}



============================================================================
INPATIENT RISKS:
============================================================================
Allergies:
|ALLERGIES/ADR|

High risk medications:
|VA-DM HIGH-RISK MEDS|

Documented falls: |VA-FALLS|

|VA-NSG URINE CATH URETHRAL|


============================================================================
PAST MEDICAL HISTORY (as recorded in CPRS)
============================================================================
Diagnosis list:
|ACTIVE PROBLEMS|

Previous admissions with LOS (reverse chronological order):
|PREVIOUS ADMISSIONS|



============================================================================
CARDIORESPIRATORY SYSTEM -- MEDICATIONS, VITAL SIGNS, TESTING
============================================================================
Antihypertensive medications (if any):
|ACTIVE BETA-BLOCKERS|
|ACTIVE ARBS|
|ACTIVE ACEI|

|VITAL SIGNS 3 SETS|

Most recent EKG and chest x-ray imaging:
E.K.G., |EKG MOST RECENT|
|RA CHEST XRAY 2 PA LAT|



============================================================================
HEMATOLOGICAL SYSTEM -- MEDICATIONS AND LABORATORY TESTING RESULTS
============================================================================
Aspirin:
|ACTIVE ASPIRIN 81 AND 325 MG|

Anticoagulant medications:
|ANTICOAGULATION/ANTI-PLATELET ACTIVE MEDS|

Anticoagulation adverse events:
|ANTICOAG ADVERSE EVENTS|

Fecal occult blood testing:
|LRZ OCCULT BLOOD (ALL) X 1Y|

Hematological, three most recent HEMOGLOBIN levels:
|HGB 3/6MO|

Hematological, anemia evaluation:
|LR IRON 6M NULL|
|LR FERRITIN 6M NULL|
|LR MCV 1Y NULL|
|LR MCH 1Y NULL|
|LR MCHC 1Y NULL|
|LR HAPTOGLOBIN 1M NULL|
|LR LDH 1Y NULL|

Coagulation-related:
    |LAB HEADER|
|LR PLT 1M NULL|
|LR INR 1Y NULL|
|LR PTIME 1Y NULL|
|LR PTT(MAIN LAB) 1Y NULL|



============================================================================
INFECTION/INFLAMMATION -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================
Intravenous medications (typically antibiotics):
|IV MEDS|

Inflammation/Infection-related laboratory testing:
|LR WBC 1M NULL|
|LR NEUTROPHIL% 1M NULL|
|LR LYMPHOCYTE% 1M NULL|
|LR C REACTIVE PROTEIN 1Y NULL|
|LR CRP HS 1W NULL|
|LR SED RATE 1Y NULL|
|LRZ PRO-CALCITONIN INP 10DAYS|

|LR MRSA HISTORY|



============================================================================
NUTRITION/INFLAMMATION -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================
Body mass index: |BODY MASS INDEX| kg/m2
Patient height: |PATIENT HEIGHT|

Patient weights:
|PATIENT WEIGHT LAST 6M|

Food allergies: |ALLERGY FOOD|
Inpatient diet: |INPATIENT DIET|

Nutrition/Inflammation-related laboratory results, past 1 month:
|LR ALBUMIN 1M NULL|
|LR PREALBUMIN 1M NULL|



============================================================================
RENAL/ELECTROLYTE -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================
Last three eGFR estimates:
|LR EGFR LAST 3|
Creatinine and BUN:
|LR CREATININE 1M NULL|
|LR UREA NITROGEN 1M NULL|

Brain naturetic peptide (BNP):
|LR BNP 6M NULL|

Other electrolytes/minerals from serum biochemistry:
|LR SODIUM 1M NULL|
|LR POTASSIUM 1M NULL|
|LR CALCIUM 1W NULL|
|LR MAGNESIUM 1Y NULL|
|LR PHOSPHORUS 24H NULL|

Urinalysis:
|LR URINE APPEARANCE 1Y NULL|
|LR URINE BLOOD 1Y NULL|
|LR URINE RBC/HPF 1Y NULL|
|LR URINE WBC/HPF 1Y NULL|
|LR LEUKOCYTE(ESTERASE) 1Y NULL|
|LR URINE NITRITE 1Y NULL|
|LR URINE BACTERIA 1Y NULL|
|LR URINE CULTURE 1Y NULL|

Prostate-Specific Antigens:
|LR PSA LAST 3|



============================================================================
DIABETES- & LIVER-RELATED -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================
|DIABETES MEDICATIONS|

Hemoglobin A1c:
|LR HEMOGLOBIN A1C 1Y NULL|

Liver and pancreatic exocrine function:
|LR TOTAL BILIRUBIN 24H NULL|
|LR DIRECT BILIRUBIN 1Y NULL|
|LR SGOT 24H NULL|
|LR SGPT 24H NULL|
|LR ALK PHOSPHATASE 24H NULL|
|LR AMYLASE 1Y NULL|
|LR LIPASE 1Y NULL|



============================================================================
CARDIOVASCULAR RISK MODIFICATION
============================================================================
Tobacco use: |TOBACCO USE MRD T-1Y|
|VA-TOBACCO USE HISTORY|


|ANTILIPIDEMIC MEDS|

Lipid levels in most recent laboratory testing:
|LR CHOLESTEROL(TOTAL) 1Y NULL|
|LR HDL 1Y NULL|
|LR LDL 1Y NULL|
|LR TRIGLYCERIDE 5Y NULL|



============================================================================
ALLERGIES
============================================================================

|ALLERGIES/ADR|




============================================================================
|RECENT MEDICATIONS|



============================================================================
SOCIAL HISTORY, MOBILITY, OUTPATIENT ENVIRONMENT
============================================================================
Patient address:
|PATIENT ADDRESS|
|PATIENT CELL PHONE|

Bad address indicator:
|BAD ADDRESS INDICATOR|

Prior CLC living situation note:
|VA-CLC LIVING SITUATION|


Occupation: |PATIENT OCCUPATION|
Marital status: |PATIENT MARITAL STATUS|
Emergency contact:
|PATIENT CONTACT(EMERGENCY)|

Service connection (relevant to CLC eligibility): |PATIENT SVC CONN %|





============================================================================
PLAN for TRANSITIONING TO OUTPATIENT CARE
============================================================================
Primary Care Team
|PATIENT PRIMARY CARE TEAM|

Upcoming appointments:
|FUTURE APPOINTMENTS/RECALL|



============================================================================




           \\\    ///\\\         Michael E. DeBakey
            \\\  ///  \\\        Department of Veterans Affairs
             \\\///    \\\       2002 Holcombe Blvd
              \///   \\\\\\      Houston, Texas 77030




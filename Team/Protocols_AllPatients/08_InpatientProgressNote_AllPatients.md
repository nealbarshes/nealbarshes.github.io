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


============================================================================
the CONCISE SUMMARY:
============================================================================


>>  |PATIENT NAME| is a |PATIENT AGE| y/o |PATIENT SEX| 

>>   with an admission diagnosis of |ADMIT DX|.


This section:
A. Hospital events, progress, testing over past 24 hours:
B. Concise day-by-day summary of events, progress and testing during this hospitalization
C. Numbered list of ACTIVE inpatient problems and their related management plans:

{FLD:WP 5/74MAN}



Anticipated date of discharge: ^^^^{FLD:DATE  REQ}^^^

We anticipate that patient will be discharged to:
{FLD:CHECK [X/0]} the place where the patient lived immediately prior to discharge (typically: home).
{FLD:CHECK [X/0]} a skilled nursing facility or other location NEW to the patient.
{FLD:CHECK [X/0]} undetermined at this time.

The current antiplatelet and anticoagulant medication plan is:

1. aspirin 81mg daily?  {FLD:NO/YES,}.
2. clopidogrel (Plavix)? {FLD:NO/YES,} 75mg daily for a duration of {FLD:TEXT (1-15 CHAR)}.
3. rivaroxaban (Xarelto) 2.5mg BID. {FLD:NO/YES,} NOTE: This dosing is based on lowered cardiovascular and limb events in in the VOYAGER trial. It is 
a low dose and is NOT considered therapeutic anticoagulation.  
4. Other antiplatelets or antiplatelets, with dosage, duration, and indication here:
{FLD:TEXT 3 LINES}


The patient is on antiplatelet or anticoagulant medications for OTHER reasons (i.e. not related to peripheral artery disease or a procedure done for 
peripheral artery disease):
{FLD:NO YES VERTICAL}
{FLD:WP 3 FL 50}


_________________________________________________________________________
*************************************************************************










============================================================================
PATIENT'S SUBJECTIVE REPORT
============================================================================
{FLD:WORD PROCESSING}

Pain level today, as recorded by nursing notes: |PAIN TODAY|





============================================================================
TODAY'S PHYSICAL EXAM & VITAL SIGNS
============================================================================

|VITAL SIGNS 3 SETS|

General appearance:
{FLD:CHECK [X/0]}Awake, alert, oriented
{FLD:CHECK [X/0]}Appears to be comfortable and in no distress
{FLD:CHECK [X/0]}Appears to be in pain

Neurological:
{FLD:CHECK [X/0]}Speech is coherent and logical
{FLD:CHECK [X/0]}Speech is incoherent or illogical
{FLD:CHECK [X/0]}No new focal neurological deficits
{FLD:CHECK [X/0]}NEW focal neurological deficit

Respiratory:
{FLD:CHECK [X/0]}Not obviously dyspneic or tachynpeic
{FLD:CHECK [X/0]}Tachypneic and/or dyspneic

Abdominal exam:
{FLD:CHECK [X/0]}Not distended or tender. 
{FLD:CHECK [X/0]}Abdomen is not distended.
{FLD:CHECK [X/0]}Abdomen is tender.
{FLD:CHECK [X/0]}Not assessed.

Surgical Site(s)?
{FLD:NO YES VERTICAL}
Locations= {FLD:TEXT (1-40 CHAR) REQ}
Appearance=
{FLD:YES/NO/NS/NA REQ} intact
{FLD:YES/NO/NS/NA REQ} dehiscence
{FLD:YES/NO/NS/NA REQ} contiguous erythema
{FLD:YES/NO/NS/NA REQ} swelling or fluctuance
{FLD:YES/NO/NS/NA REQ} drainage
Text description (optional):
{FLD:WP 4 LINES 60,IND 6,WP}

Foot wound:{FLD:YES/NO/UNKNOWN} {FLD:LEFT/RIGHT/BOTH}
{FLD:CHECK [X/0]} healthy red tissue at base. 
{FLD:CHECK [X/0]} covered with eschar and/or non-viable debris.
{FLD:CHECK [X/0]} surrounding erythema
{FLD:CHECK [X/0]} surrounding callus 
{FLD:CHECK [X/0]} fluctuance
{FLD:CHECK [X/0]} drainage
{FLD:CHECK [X/0]} not assessed
Text description (optional):
{FLD:WP 4 LINES 60,IND 6,WP}

Vascular exam: 
{FLD:CHECK [X/0]}unchanged
{FLD:CHECK [X/0]}new changes:
{FLD:WP 4 LINES 60,IND 6,WP}




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

|BLOOD PRESSURE LAST 3|
|PULSE (LAST 3)|

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




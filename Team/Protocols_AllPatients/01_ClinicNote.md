Open CPRS. 
Click on "Notes" tab on the bottom. 
At the top of the screen, click Options --> Create New Template. 
On the right, create a template name and select "Dialog" as the "Template Type".
Then copy everything below this line and paste it into the CPRS template text box: 
--------------------------------------------------------------------------------------

VASCULAR SURGERY OUTPATIENT ENCOUNTER NOTE


Encounter start time (click "Now"): {FLD:TIME**}
Encounter end time (click "Now"): {FLD:TIME**}


New Patient
{FLD:CHECK [X/0]}99202, 20 minutes	    expanded prob focused
{FLD:CHECK [X/0]}99203, 30 minutes	    detailed 
{FLD:CHECK [X/0]}99204, 45 minutes    moderate 			
{FLD:CHECK [X/0]}99205, 60 minutes    high 				

Established Patient (seen by our providers within 3 YEARS)
{FLD:CHECK [X/0]}99024, post-op within global (0-90 days  of surgery, depending on procedure)
{FLD:CHECK [X/0]}99212, 20 minutes	    problem focused 	
{FLD:CHECK [X/0]}99213, 30 minutes	    exp prob focused
{FLD:CHECK [X/0]}99214, 45 minutes	    detailed 		
{FLD:CHECK [X/0]}99215, 60 minutes	    comprehensive 	



============================================================================
IDENTIFYING INFORMATION & CLINIC HISTORY
============================================================================
Patient address:
|PATIENT ADDRESS|
|PATIENT CELL PHONE|

Occupation: |PATIENT OCCUPATION|
Marital status: |PATIENT MARITAL STATUS|

Primary Care Provider: |PATIENT PCP|
Primary Care Team: |PATIENT PRIMARY CARE TEAM|
Clinic enrollments: |PATIENT CLINIC ENROLLMENTS|
Service connection (relevant to CLC eligibility): |PATIENT SVC CONN %|

============================================================================
IDENTIFYING INFORMATION & CLINIC HISTORY
============================================================================

Last podiatry or vascular appointment (w/in 2 years): |MOST RECENT PODIATRY/VASCULAR APPT;2Y|

Outpatient appointments in the past year:
|OUTPT APPTS PAST YR| 

Previous admissions with LOS (reverse chronological order):
|PREVIOUS ADMISSIONS|


============================================================================
PATIENT SYMPTOMS AND RECENT HISTORY
============================================================================

primary reason for appointment: : |PATIENT NAME| is a |PATIENT AGE| year-old 
|PATIENT SEX| who is being seen in our vascular surgery clinic for 
 {FLD:TEXT (1-40 CHAR) REQ}.

Current + recent clinical history, symptoms: 
{FLD:WP 10/70}

Description of {FLD:TEXT (1-20 CHAR)}  pain (using OLDCARTS mnemonic):
O= Onset:{FLD:TEXT (1-60 CHAR)}
L= Location:{FLD:TEXT (1-60 CHAR)}
D= Duration:{FLD:TEXT (1-60 CHAR)}
C= Character:{FLD:TEXT (1-60 CHAR)}
A= Aggravating factors:{FLD:TEXT (1-50 CHAR)}
R= Relieving factors:{FLD:TEXT (1-50 CHAR)}
T= Timing/frequency:{FLD:TEXT (1-50 CHAR)}
S= Severity:{FLD:TEXT (1-60 CHAR)}



============================================================================
PHYSICAL EXAM
============================================================================

Vital signs: 
Temperature= |TEMPERATURE TODAY|
Blood pressure= |BLOOD PRESSURE TODAY|
Pulse= |PULSE TODAY|
Respiratory rate= |RESPIRATION TODAY|
Body mass index: |BODY MASS INDEX| kg/m2
Patient height: |PATIENT HEIGHT|
Patient weights:
|PATIENT WEIGHT LAST 6M|

1. General appearance:
{FLD:CHECK [X/0]}awake, alert, oriented
{FLD:CHECK [X/0]}appears to be comfortable and in no distress
{FLD:CHECK [X/0]}appears to be in pain
{FLD:CHECK [X/0]}other: {FLD:TEXT (1-40 CHAR)}

2. Neurological:
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}full and symmetric upper and lower extremity strength
{FLD:CHECK [X/0]}obvious upper extremity weakness on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}obvious lower extremity weakness on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}other: {FLD:TEXT (1-40 CHAR)}

3. Speech: [ ]tangential [ ]disoriented [ ]aphasia [ ]none
{FLD:CHECK [X/0]}fluent, logical, coherent
{FLD:CHECK [X/0]}aphasic
{FLD:CHECK [X/0]}other: {FLD:TEXT (1-40 CHAR)}

4. Smile / facial muscles: 
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}symmetric smile
{FLD:CHECK [X/0]}other: {FLD:TEXT (1-40 CHAR)}

4. Oral cavity: 
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}no obvious loose teeth or caries
{FLD:CHECK [X/0]}tongue deviation toward {FLD:LEFT RIGHT RADIO}
{FLD:CHECK [X/0]}bifid uvula
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

5. Neck: 
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}no obvious abnormalities
{FLD:CHECK [X/0]}carotid bruit on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

6. Lungs:
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}no obvious abnormalities
{FLD:CHECK [X/0]}tachypneic and/or dyspneic
{FLD:CHECK [X/0]}wheezing or crackles on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

7. Cardiac
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}regular rhythm, no murmurs
{FLD:CHECK [X/0]}irregular rhythm
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

8. Abdomen
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}no scars, no tenderness
{FLD:CHECK [X/0]}surgical scars:{FLD:TEXT (1-30 CHAR)}
{FLD:CHECK [X/0]}obese
{FLD:CHECK [X/0]}hernia in {FLD:TEXT (1-30 CHAR)}
{FLD:CHECK [X/0]}tenderness in {FLD:TEXT (1-30 CHAR)}
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

9. Legs
{FLD:CHECK [X/0]}not assessed
{FLD:CHECK [X/0]}prior leg amputation on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}pretibial edema on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}dermatoliposclerosis on {FLD:LEFT/RIGHT/BOTH} side(s)
{FLD:CHECK [X/0]}other:{FLD:TEXT (1-40 CHAR)}

10. Vascular exam (@VascularSurgery_PulseExam)


RIGHT LOWER EXTREMITY, 

         /           
        /        
       O        
        \   
        _\         

--PALPATION-----------
femoral:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
popliteal:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
dorsalis pedis:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
posterior tibial:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed

RIGHT LOWER EXTREMITY, --INSONATION (Doppler)---------
dorsalis pedis:
{FLD:CHECK [X/0]}sharp systolic upstroke		
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed
posterior tibial:
{FLD:CHECK [X/0]}sharp systolic upstroke
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed
fibular (peroneal), ant. communicating branch:
{FLD:CHECK [X/0]}sharp systolic upstroke
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed

    

LEFT LOWER EXTREMITY
           \          
            \      
             O     
            / 
           /_    

--PALPATION-----------
femoral:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
popliteal:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
dorsalis pedis:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed
posterior tibial:
{FLD:CHECK [X/0]}normal/2+
{FLD:CHECK [X/0]}weak/absent
{FLD:CHECK [X/0]}not assessed

--INSONATION (Doppler)---------
dorsalis pedis:
{FLD:CHECK [X/0]}sharp systolic upstroke		
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed
posterior tibial:
{FLD:CHECK [X/0]}sharp systolic upstroke
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed
fibular (peroneal), ant. communicating branch:
{FLD:CHECK [X/0]}sharp systolic upstroke
{FLD:CHECK [X/0]}delayed sytolic upstroke
{FLD:CHECK [X/0]}monophasic
{FLD:CHECK [X/0]}absent
{FLD:CHECK [X/0]}not assessed

12. Foot wound:{FLD:YES/NO/UNKNOWN} {FLD:LEFT/RIGHT/BOTH}
{FLD:CHECK [X/0]} healthy red tissue at base. 
{FLD:CHECK [X/0]} covered with eschar and/or non-viable debris.
{FLD:CHECK [X/0]} surrounding erythema
{FLD:CHECK [X/0]} surrounding callus 
{FLD:CHECK [X/0]} fluctuance
{FLD:CHECK [X/0]} drainage
{FLD:CHECK [X/0]} not assessed
Text description (optional):
{FLD:WP 4 LINES 60,IND 6,WP}

13. Surgical Site(s):
Location(s)= {FLD:TEXT (1-40 CHAR)}
Text description (optional):
{FLD:WP 4 LINES 60,IND 6,WP}


============================================================================
Assessment/Diagnoses/Problem list and Management Plan: 
============================================================================

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



Planned return to vascular clinic:
{FLD:NO YES VERTICAL}
In 
{FLD:TEXT (1-40 CHAR)}



Upcoming appointments:
|FUTURE APPOINTMENTS|





  * * * * * * * * * * * * * * * * * * * * * * * * 
  *                                             *
  *                                             *
  *                E N D    of                  *
  *                                             *
  *                                             *
  *          U S E R     I N P U T              *
  *                                             *
  *                                             *
  *        (automated text below here)          *
  *                                             *
  *                                             *
  *                                             *
  * * * * * * * * * * * * * * * * * * * * * * * * 




============================================================================
PAST MEDICAL HISTORY (as recorded in CPRS)
============================================================================

Diagnosis list:
|ACTIVE PROBLEMS|



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
RENAL/ELECTROLYTE -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================
Last three eGFR estimates:
|LR EGFR LAST 3|
Creatinine and BUN:
|LR CREATININE 1Y NULL|
|LR UREA NITROGEN 1Y NULL|

Brain naturetic peptide (BNP):
|LR BNP 6M NULL|

Other electrolytes/minerals from serum biochemistry:
|LR SODIUM 1Y NULL|
|LR POTASSIUM 1Y NULL|
|LR CALCIUM 1Y NULL|
|LR MAGNESIUM 1Y NULL|

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
|LR TOTAL BILIRUBIN 1Y NULL|
|LR DIRECT BILIRUBIN 1Y NULL|
|LR SGOT 1Y NULL|
|LR SGPT 1Y NULL|
|LR ALK PHOSPHATASE 1Y NULL|
|LR AMYLASE 1Y NULL|
|LR LIPASE 1Y NULL|


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



============================================================================
NUTRITION/INFLAMMATION -- MEDICATIONS & LABORATORY TESTING RESULTS
============================================================================

Nutrition/Inflammation-related laboratory results:
|LR ALBUMIN 1Y NULL|



============================================================================
ALLERGIES
============================================================================

|ALLERGIES/ADR|




============================================================================
|OUTPATIENT MEDS|


============================================================================

           \\\    ///\\\         Michael E. DeBakey
            \\\  ///  \\\        Department of Veterans Affairs
             \\\///    \\\       2002 Holcombe Blvd
              \///   \\\\\\      Houston, Texas 77030





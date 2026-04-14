Show ^ Title ^ Vascular Surgery Chart Review   

Show ^Text ^Note: This is bottom-up chart review, intended to a complement top-down problem-focused scripts(ex. limb salvage script) by identifying health problems that are: (1) not yet identified by the provider; and (2) potentially-relevant to vascular health outcomes.

Show ^Text ^
Show ^ Heading ^ Age   
{Age}                                                                                                                                                 
Show ^ Demographics ^Sex
                                                
                      
Show ^ Text ^---------------------------------------------------------------------------------------------------------------------
Show ^ Title ^ Contemporary Medical Management

Show ^ Text ^  
Show ^ Heading ^ Aspirin / Anti-platelet medications   
show ^IsOnRx ^Aspirin
show ^IsOnRx ^Clopidogrel 
show ^IsOnRx ^Ticagrelor
show ^IsOnRx ^Prasugrel 

Show ^ Text ^  
Show ^ Heading ^ Blood Pressure   
Show ^ Vitals ^BP  ^Count = 5 ^ Indent=4     


Show ^ Text ^  
Show ^ Heading ^ Cholesterol
Show ^ Lab Profile ^ Lipid Profile  ^ Count = 2      
Show ^ Text ^    
Show ^ RxGroup ^ STATIN ^ Indent = 4          

Show ^ Text ^ 
Show ^Heading ^Diabetes  
{DM}   
Show ^ Text ^ 
Show ^ Lab ^ _A1c ^ Count = 3 ^ Indent=4  

Show ^ Heading ^ Diabetic Medications (Active Rx if any)
Show ^ RxGroup ^ DIABETES MELLITUS RX ^ Indent = 4  
Show ^ Text ^   
         
Show ^Heading ^Eliminate tobacco
{Tobacco use}    
Show ^HF ^Tobacco; ^Category = Tobacco ^Count=99  ^HideCategoryName = Yes                      



Show ^ Text ^---------------------------------------------------------------------------------------------------------------------
Show ^ Title ^ Vascular Findings   
                            
                                                                            
Show ^ Text ^           
Show ^Heading ^Carotid Disease 
Show ^ Text ^ Chart diagnosis of carotid disease?  
{Carotid Stenosis}
{Cerebrovascular disease}
Show ^ Text ^
Show ^ProgressNoteTextByTitle ^VASCULAR/CAROTID ULTRASOUND, ^Count=2
Show ^ Text ^
Show ^CopyImagingTextBlock ^Report:; Dx codes|Signed by|Electronically:Staff:;3 ^IfTitleIncludes = CT angiography, neck/ ^Count = 3 ^IncludeBlockEndMarkerLine = No
Show ^II ^_CT ANGIO NECK  ^Count=1  
Show ^II ^Carotid              

                              
                                                  
                      
Show ^ Text ^---------------------------------------------------------------------------------------------------------------------
Show ^ Title ^ Cardiac Testing 
Show ^ Text ^ Chart diagnosis of CAD or CHF?    
{CAD}           
Show ^ Lab ^ _BNP ^ Count = 3 ^ Indent=4   
Show ^ Text ^ 
SHow ^ Heading ^ Cardiology Reports 
Show ^ Text ^                                              
SHow ^ Heading ^ Cardiology Progress Notes
Show ^ ProgressNoteTitlesList ^ Cardiology ^ StartDateOffset=1095 ^ ExcludeIfTitleIncludes = Teleph; secure; nurs; Diagnos; Non-invas ^ Count = 5
SHow ^ Heading ^ Highlighted Words
Show ^HighlightWords ^EKG; ECG; Holter; Stress T; Echo; Cardiac Cath; myocardial  ^ COUNT = 5
SHow ^ Heading ^ Search
Show ^SearchWords ^EKG; ECG; Holter; Stress T; Echo; Cardiac Cath; myocardial ^ COUNT = 5

                                                                             

                                                         
Show ^ Text ^---------------------------------------------------------------------------------------------------------------------
Show ^ Title ^ Patient Selection
Show ^Text ^
Show ^Hyperlink ^ Asymptomatic ICA Stenosis Surgical Risk Stratification Calculator, PMID 23478502 | https://reference.medscape.com/calculator/216/asymptomatic-ica-internal-carotid-artery-stenosis-surgical-risk-stratification#                               
Show ^Text ^  Note: NOT in logical order, but rather in order as listed in the online calculator.                     

Show ^ Heading ^MAJOR RISK FACTORS   
Show ^ Heading ^1. Age >=80          
{Age}   
Show ^Heading ^2. Insulin-Dependent Diabetes: ^indent = 5 
Show ^IsOnRx ^Insulin ^Indent = 5

Show ^ Heading ^ 6. E.S.R.D.                          
Show ^ LAB Names Like ^ GFR  ^ COUNT = 5 ^ INDENT = 7 

Show ^ Heading ^ 6. Contralateral ICA >=80%                          


                                 
Show ^ Heading ^ 5. Smoking
{Tobacco use}


Show ^Heading ^7. Statin: ^indent = 5 
Show ^IsOnRx ^Statin ^Indent = 5   
Show ^ RxGroup ^ STATIN ^ Indent = 4    

Show ^Text ^  
Show ^Text ^Low risk (0-3 points) = <=2 minor; 90+% 5-year survival 
Show ^Text ^Medium risk (4-11) = 1 major + <=3 minor; 75% 5-year survival 
Show ^Text ^High risk (12+ points) = 3 major or 2 major + 2+ minor; <60% 5-year survival   
Show ^Text ^          
Show ^Text ^
Show ^Text ^

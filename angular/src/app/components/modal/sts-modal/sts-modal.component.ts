import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "../../calculator/calculator.service";
import { CategoryFilter } from "../category-filter";

@Component({
  selector: "app-sts-modal",
  templateUrl: "./sts-modal.component.html",
  styleUrls: ["./sts-modal.component.scss"]
})
export class StsModalComponent implements OnInit {

  cat1: string[] = [
    "Aneurysm, other",
    "Aneurysm, pulmonary artery",
    "Aneurysm, ventricular, right",
    "Aortic valve, other",
    "Aortopulmonary window",
    "Arrhythmia",
    "Arrhythmia, Heart block, Acquired",
    "Arrhythmia, Heart block, Congenital",
    "Arrhythmia, Heart block, NOS",
    "Arrhythmia, Pacemaker, Indication for replacement",
    "ASD, Common atrium (single atrium)",
    "ASD, Coronary sinus",
    "ASD, NOS",
    "ASD, Secundum",
    "ASD, Sinus venosus",
    "AVSD, Complete",
    "AVSD, Intermediate (transitional)",
    "AVSD, NOS",
    "AVSD Partial (incomplete) (ASD, primum)",
    "Cardiac tumor",
    "Cor triatriatum",
    "Coronary artery anomaly, Anomalous aortic origin",
    "Coronary artery anomaly, Anomalous pulmonary origin (includes ALCAPA)",
    "Double Chamber Right Ventricle",
    "DORV, NOS",
    "DORV, Remote VSD (uncommitted VSD)",
    "DORV, TGA type",
    "DORV, VSD type",
    "Heart Transplant",
    "Miscellaneous, Other",
    "Mitral regurgitation",
    "Normal heart",
    "Partial anomalous pulmonary venous connection",
    "Patent ductus arteriosus",
    "Pectus excavatum or carinatum",
    "Pericardial disease, Other",
    "Pericardial effusion",
    "Pericarditis",
    "PFO",
    "Aortopulmonary window",
    "Arrhythmia",
    "Arrhythmia, Heart block, Acquired",
    "Arrhythmia, Heart block, Congenital",
    "Arrhythmia, Heart block, NOS",
    "Arrhythmia, Pacemaker, Indication for replacement",
    "ASD, Common atrium (single atrium)",
    "ASD, Coronary sinus",
    "ASD, NOS",
    "ASD, Secundum",
    "ASD, Sinus venosus",
    "AVSD, Complete",
    "AVSD, Intermediate (transitional)",
    "AVSD, NOS",
    "AVSD Partial (incomplete) (ASD, primum)",
    "Cardiac tumor",
    "Cor triatriatum",
    "Coronary artery anomaly, Anomalous aortic origin",
    "Coronary artery anomaly, Anomalous pulmonary origin (includes ALCAPA)",
    "Double Chamber Right Ventricle",
    "DORV, NOS",
    "DORV, Remote VSD (uncommitted VSD)",
    "DORV, TGA type",
    "DORV, VSD type",
    "Heart Transplant",
    "Miscellaneous, Other",
    "Mitral regurgitation",
    "Normal heart",
    "Partial anomalous pulmonary venous connection",
    "Patent ductus arteriosus",
    "Pectus excavatum or carinatum",
    "Pericardial disease, Other",
    "Pericardial effusion",
    "Pericarditis",
    "PFO",
    "Pulmonary insufficiency",
    "Pulmonary hypertension due to left to right shunt",
    "Pulmonary stenosis, NOS",
    "Pulmonary stenosis, Valvar",
    "Pulmonary valve, Other",
    "Sinus of Valsalva aneurysm",
    "Systemic venous anomaly",
    "Systemic venous obstruction",
    "TGA, IVS",
    "TGA, NOS",
    "Total anomalous pulmonary venous connection, NOS",
    "Total anomalous pulmonary venous connection, Type 1 (supracardiac)",
    "Total anomalous pulmonary venous connection, Type 2 (cardiac)",
    "Tricuspid regurgitation and tricuspid stenosis",
    "Tricuspid regurgitation, non-Ebstein's related",
    "Tricuspid valve, Other",
    "Truncal valve insufficiency",
    "Vascular ring",
    "VSD, Multiple",
    "VSD, NOS",
    "VSD, SingleAortopulmonary window",
    "Arrhythmia",
    "Arrhythmia, Heart block, Acquired",
    "Arrhythmia, Heart block, Congenital",
    "Arrhythmia, Heart block, NOS",
    "Arrhythmia, Pacemaker, Indication for replacement",
    "ASD, Common atrium (single atrium)",
    "ASD, Coronary sinus",
    "ASD, NOS",
    "ASD, Secundum",
    "ASD, Sinus venosus",
    "AVSD, Complete",
    "AVSD, Intermediate (transitional)",
    "AVSD, NOS",
    "AVSD Partial (incomplete) (ASD, primum)",
    "Cardiac tumor",
    "Cor triatriatum",
    "Coronary artery anomaly, Anomalous aortic origin",
    "Coronary artery anomaly, Anomalous pulmonary origin (includes ALCAPA)",
    "Double Chamber Right Ventricle",
    "DORV, NOS",
    "DORV, Remote VSD (uncommitted VSD)",
    "DORV, TGA type",
    "DORV, VSD type",
    "Heart Transplant",
    "Miscellaneous, Other",
    "Mitral regurgitation",
    "Normal heart",
    "Partial anomalous pulmonary venous connection",
    "Patent ductus arteriosus",
    "Pectus excavatum or carinatum",
    "Pericardial disease, Other",
    "Pericardial effusion",
    "Pericarditis",
    "PFO",
    "Pulmonary insufficiency",
    "Pulmonary hypertension due to left to right shunt",
    "Pulmonary stenosis, NOS",
    "Pulmonary stenosis, Valvar",
    "Pulmonary valve, Other",
    "Sinus of Valsalva aneurysm",
    "Systemic venous anomaly",
    "Systemic venous obstruction",
    "TGA, IVS",
    "TGA, NOS",
    "Total anomalous pulmonary venous connection, NOS",
    "Total anomalous pulmonary venous connection, Type 1 (supracardiac)",
    "Total anomalous pulmonary venous connection, Type 2 (cardiac)",
    "Tricuspid regurgitation and tricuspid stenosis",
    "Tricuspid regurgitation, non-Ebstein's related",
    "Tricuspid valve, Other",
    "Truncal valve insufficiency",
    "Vascular ring",
    "VSD, Multiple",
    "VSD, NOS",
    "VSD, SinglePulmonary insufficiency",
    "Pulmonary hypertension due to left to right shunt",
    "Pulmonary stenosis, NOS",
    "Pulmonary stenosis, Valvar",
    "Pulmonary valve, Other",
    "Sinus of Valsalva aneurysm",
    "Systemic venous anomaly",
    "Systemic venous obstruction",
    "TGA, IVS",
    "TGA, NOS",
    "Total anomalous pulmonary venous connection, NOS",
    "Total anomalous pulmonary venous connection, Type 1 (supracardiac)",
    "Total anomalous pulmonary venous connection, Type 2 (cardiac)",
    "Tricuspid regurgitation and tricuspid stenosis",
    "Tricuspid regurgitation, non-Ebstein's related",
    "Tricuspid valve, Other",
    "Truncal valve insufficiency",
    "Vascular ring",
    "VSD, Multiple",
    "VSD, NOS",
    "VSD, SinglePulmonary insufficiency",
    "Pulmonary hypertension due to left to right shunt",
    "Pulmonary stenosis, NOS",
    "Pulmonary stenosis, Valvar",
    "Pulmonary valve, Other",
    "Sinus of Valsalva aneurysm",
    "Systemic venous anomaly",
    "Systemic venous obstruction",
    "TGA, IVS",
    "TGA, NOS",
    "Total anomalous pulmonary venous connection, NOS",
    "Total anomalous pulmonary venous connection, Type 1 (supracardiac)",
    "Total anomalous pulmonary venous connection, Type 2 (cardiac)",
    "Tricuspid regurgitation and tricuspid stenosis",
    "Tricuspid regurgitation, non-Ebstein's related",
    "Tricuspid valve, Other",
    "Truncal valve insufficiency",
    "Vascular ring",
    "VSD, Multiple",
    "VSD, NOS",
    "VSD, Single"
  ];

  cat2: string[] = [
    "Aneurysm, Ventricular, Left",
    "Aortic aneurysm (including pseudoaneurysm)",
    "Aortic arch hypoplasia",
    "Aortic insufficiency",
    "Aortic stenosis, Subvalvar",
    "Aortic stenosis, Valvar",
    "Aortic valve atresia",
    "Atrial Isomerism, Left",
    "Atrial Isomerism, Right",
    "Cardiomyopathy",
    "Chylothorax",
    "Coarctation of aorta",
    "Conduit failure",
    "Congenitally corrected TGA",
    "Coronary artery anomaly",
    "Coronary artery anomaly, Fistula",
    "DOLV",
    "DORV TOF type",
    "Ebstein's anomaly",
    "Endocarditis",
    "HLHS",
    "Hypoplastic LV",
    "Hypoplastic RV",
    "Interrupted aortic arch",
    "LV to aorta tunnel",
    "MAPCA(s) (without PA-VSD)",
    "Meconium aspiration",
    "Mediastinitis",
    "Mitral regurgitation and mitral stenosis",
    "Mitral stenosis, NOS",
    "Mitral stenosis, Subvalvar",
    "Mitral stenosis, Subvalvar, Parachute",
    "Mitral stenosis, Supravalvar mitral ring",
    "Mitral stenosis, Valvar",
    "Mitral valve, Other",
    "Myocarditis",
    "Peripheral vascular, Other",
    "Persistent fetal circulation",
    "Prosthetic valve failure",
    "Pulmonary artery origin from ascending aorta (hemitruncus)",
    "Pulmonary artery stenosis (hypoplasia), Main (trunk)",
    "Pulmonary artery stenosis, Branch, Central (within the hilar bifurcation)",
    "Pulmonary artery stenosis, Branch, Peripheral (at or beyond the hilar bifurcation)",
    "Pulmonary artery stenosis, NOS",
    "Pulmonary artery, Discontinuous",
    "Pulmonary atresia",
    "Pulmonary atresia, IVS",
    "Pulmonary atresia, VSD (Including TOF with pulmonary atresia)",
    "Pulmonary atresia, VSD-MAPCA (pseudotruncus)",
    "Pulmonary arteriovenous fistula",
    "Primary pulmonary hypertension",
    "Pulmonary venous hypertension",
    "Pulmonary hypertension secondary to pulmonary disease",
    "Pulmonary insufficiency and pulmonary stenosis",
    "Pulmonary stenosis, Subvalvar",
    "Pulmonary venous stenosis",
    "Single ventricle, DILV",
    "Single ventricle, DIRV",
    "Single ventricle, Heterotaxia syndrome",
    "Single ventricle, Mitral atresia",
    "Single ventricle, NOS",
    "Single ventricle, Other",
    "Single ventricle, Tricuspid atresia",
    "Single ventricle, Unbalanced AVSD",
    "TGA, IVS-LVOTO",
    "TGA, VSD",
    "TGA, VSD-LVOTO",
    "TOF",
    "TOF, AVSD",
    "Total anomalous pulmonary venous connection, Type 3 (infracardiac)",
    "Total anomalous pulmonary venous connection, Type 4 (mixed)",
    "Tricuspid stenosis",
    "Truncus arteriosus",
    "Partial anomalous pulmonary venous connection, scimitar"
  ];

  cat3: string[] = [
    "Aortic dissection",
    " Aortic insufficiency and aortic stenosis",
    " Aortic stenosis, Supravalvar",
    " Cardiomyopathy, End-stage congenital heart disease",
    " Coronary artery anomaly, Aneurysm",
    " Lung disease, Malignant",
    " Myocardial infarction",
    " Pulmonary vascular disease",
    " Pulmonary embolism",
    " Pulmonary vascular obstructive disease (Eisenmenger’s)",
    " Pulmonary vascular obstructive disease, NOS",
    " TOF, Absent pulmonary valve",
    " Tracheal stenosis"
  ];
  filter:CategoryFilter;
  public calc: CalculatorService

  constructor(calc: CalculatorService) {
    this.calc = calc;
    this.filter = new CategoryFilter(this.cat1, this.cat2, this.cat3);
  }

  ngOnInit() {}

  
}

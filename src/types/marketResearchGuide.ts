// src/types/marketResearchGuide.ts

export interface GuideSectionNotes {
  // Common fields for all guide sections, e.g., lastUpdated, isComplete.
  // Currently a marker or for future use.
}

export interface IntroductionData extends GuideSectionNotes {
  purposeNotes: string;
  scopeNotes: string;
  methodologyOverviewNotes: string;
}

export interface PrimaryResearchMethodsData {
  designNotes: string;
  distributionNotes: string;
  analysisNotes: string;
}

export interface PrimaryResearchData extends GuideSectionNotes {
  surveys: PrimaryResearchMethodsData;
  interviews: PrimaryResearchMethodsData;
  focusGroups: PrimaryResearchMethodsData;
  observation: PrimaryResearchMethodsData;
  // otherPrimaryNotes?: string; // Keep if it was there
}

export interface SecondaryResearchData extends GuideSectionNotes {
  governmentResources: { notes: string };
  industryReports: { notes: string };
  onlineResources: { notes: string };
  // chathamKentReportsStudiesNotes?: string; // Keep if it was there
  // localMediaArchivesNotes?: string;      // Keep if it was there
}

export interface OntarioSpecificData extends GuideSectionNotes {
  chathamKentEconomicDevelopmentNotes: string;
  localBusinessAssociationsNotes: string;
  networkingLocalEventsNotes: string;
  understandingLocalDemographicsNotes: string;
}

export interface CompetitiveAnalysisData extends GuideSectionNotes {
  identifyingCompetitorsNotes: string;
  assessingStrengthsWeaknessesNotes: string; // SWOT
  marketPositioningNotes: string;
  ontarioCompetitiveLandscapeNotes: string;
}

export interface CustomerAnalysisData extends GuideSectionNotes {
  targetAudienceNotes: string; // Demographics, Psychographics, Geographics
  customerNeedsPainPointsNotes: string;
  customerJourneyMappingNotes: string;
  customerPersonasOntarioNotes: string;
}

export interface MarketTrendsData extends GuideSectionNotes {
  currentMarketTrendsNotes: string;
  industryGrowthPotentialOntarioNotes: string;
  technologicalAdvancementsNotes: string;
  regulatoryEconomicFactorsOntarioNotes: string;
}

export interface ResearchToolsData extends GuideSectionNotes {
  onlineSurveyToolsNotes: string;
  dataAnalysisSoftwareNotes: string;
  seoKeywordResearchToolsNotes: string;
  socialMediaListeningToolsNotes: string;
}

export interface AnalyzingFindingsData extends GuideSectionNotes {
  dataCleaningPreparationNotes: string;
  quantitativeAnalysisNotes: string;
  qualitativeAnalysisNotes: string;
  drawingConclusionsNotes: string;
  reportingFindingsNotes: string;
}

export interface MarketResearchPlanData extends GuideSectionNotes {
  researchObjectivesNotes: string;
  researchMethodologiesNotes: string;
  budgetTimelineNotes: string;
  deliverablesReportingNotes: string;
}

// Main data structure for the entire guide
export interface MarketResearchGuideData {
  introduction: IntroductionData;
  primaryResearch: PrimaryResearchData;
  secondaryResearch: SecondaryResearchData;
  ontarioSpecificData: OntarioSpecificData;
  competitiveAnalysis: CompetitiveAnalysisData;
  customerAnalysis: CustomerAnalysisData;
  marketTrends: MarketTrendsData;
  researchTools: ResearchToolsData;
  analyzingFindings: AnalyzingFindingsData;
  marketResearchPlan: MarketResearchPlanData;
  // ethicalConsiderations: EthicalConsiderationsData; // To be added when that section is implemented
  // conclusionNextSteps: ConclusionData; // Example for future
}

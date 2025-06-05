/**
 * @file MarketResearchGuidePage.tsx
 * @description An interactive guide to help users learn about and plan market research activities.
 * Based on the content from MarketResearch.md.
 */

import React, { useState, useEffect } from 'react';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { useForm, FormProvider } from 'react-hook-form';
import IntroductionSection from '@/components/market_research_guide_parts/IntroductionSection';
import PrimaryResearchSection from '@/components/market_research_guide_parts/PrimaryResearchSection';
import SecondaryResearchSection from '@/components/market_research_guide_parts/SecondaryResearchSection';
import OntarioSpecificDataSection from '@/components/market_research_guide_parts/OntarioSpecificDataSection';
import CompetitiveAnalysisSection from '@/components/market_research_guide_parts/CompetitiveAnalysisSection';
import CustomerAnalysisSection from '@/components/market_research_guide_parts/CustomerAnalysisSection';
import MarketTrendsSection from '@/components/market_research_guide_parts/MarketTrendsSection';
import ResearchToolsSection from '@/components/market_research_guide_parts/ResearchToolsSection';
import AnalyzingFindingsSection from '@/components/market_research_guide_parts/AnalyzingFindingsSection';
import MarketResearchPlanSection from '@/components/market_research_guide_parts/MarketResearchPlanSection';
// Potential react-hook-form imports for later integration:
// import { useForm, FormProvider } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

// Types are now imported from '@/types/marketResearchGuide.ts'

const initialGuideData: MarketResearchGuideData = {
  introduction: {
    purposeNotes: '',
    scopeNotes: '',
    methodologyOverviewNotes: '',
  },
  primaryResearch: {
    surveys: {
      designNotes: '',
      distributionNotes: '',
      analysisNotes: '',
    },
    interviews: {
      designNotes: '',
      distributionNotes: '',
      analysisNotes: '',
    },
    focusGroups: {
      designNotes: '',
      distributionNotes: '',
      analysisNotes: '',
    },
    observation: {
      designNotes: '',
      distributionNotes: '',
      analysisNotes: '',
    },
  },
  secondaryResearch: {
    governmentResources: { notes: '' },
    industryReports: { notes: '' },
    onlineResources: { notes: '' },
  },
  ontarioSpecificData: {
    chathamKentEconomicDevelopmentNotes: '',
    localBusinessAssociationsNotes: '',
    networkingLocalEventsNotes: '',
    understandingLocalDemographicsNotes: '',
  },
  competitiveAnalysis: {
    identifyingCompetitorsNotes: '',
    assessingStrengthsWeaknessesNotes: '',
    marketPositioningNotes: '',
    ontarioCompetitiveLandscapeNotes: '',
  },
  customerAnalysis: {
    targetAudienceNotes: '',
    customerNeedsPainPointsNotes: '',
    customerJourneyMappingNotes: '',
    customerPersonasOntarioNotes: '',
  },
  marketTrends: {
    currentMarketTrendsNotes: '',
    industryGrowthPotentialOntarioNotes: '',
    technologicalAdvancementsNotes: '',
    regulatoryEconomicFactorsOntarioNotes: '',
  },
  researchTools: {
    onlineSurveyToolsNotes: '',
    dataAnalysisSoftwareNotes: '',
    seoKeywordResearchToolsNotes: '',
    socialMediaListeningToolsNotes: '',
  },
  analyzingFindings: {
    dataCleaningPreparationNotes: '',
    quantitativeAnalysisNotes: '',
    qualitativeAnalysisNotes: '',
    drawingConclusionsNotes: '',
    reportingFindingsNotes: '',
  },
  marketResearchPlan: {
    researchObjectivesNotes: '',
    researchMethodologiesNotes: '',
    budgetTimelineNotes: '',
    deliverablesReportingNotes: '',
  },
};

const guideSections = [
  { id: 'introduction', title: 'Introduction to Market Research' },
  { id: 'primaryResearch', title: 'Primary Research Methods' },
  { id: 'secondaryResearch', title: 'Secondary Research Sources' },
  { id: 'ontarioSpecificData', title: 'Ontario-Specific Data & Local Insights' },
  { id: 'competitiveAnalysis', title: 'Competitive Analysis' },
  { id: 'customerAnalysis', title: 'Customer Analysis' },
  { id: 'marketTrends', title: 'Market Trends and Industry Analysis' },
  { id: 'researchTools', title: 'Tools and Techniques for Market Research' },
  { id: 'analyzingFindings', title: 'Analyzing Findings and Reporting' },
  { id: 'marketResearchPlan', title: 'Developing Your Market Research Plan' },
  // ... add more as implemented
];

const MarketResearchGuidePage: React.FC = () => {
    const methods = useForm<MarketResearchGuideData>({
    defaultValues: initialGuideData,
  });
  const { reset, watch } = methods; 
  const [activeSection, setActiveSection] = useState<string>(guideSections[0].id);

  useEffect(() => {
    const savedGuideData = localStorage.getItem('marketResearchGuideData');
    if (savedGuideData) {
      try {
        const parsedData = JSON.parse(savedGuideData);
        reset(parsedData);
      } catch (error) {
        console.error('Failed to parse market research guide data from localStorage:', error);
        localStorage.removeItem('marketResearchGuideData');
        reset(initialGuideData);
      }
    } else {
      reset(initialGuideData);
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem('marketResearchGuideData', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <IntroductionSection
            form={methods} // Pass the whole methods object
          />
        );
      case 'primaryResearch':
        return <PrimaryResearchSection form={methods} />;
      case 'secondaryResearch':
        return <SecondaryResearchSection form={methods} />;
      case 'ontarioSpecificData':
        return <OntarioSpecificDataSection form={methods} />;
      case 'competitiveAnalysis':
        return <CompetitiveAnalysisSection form={methods} />;
      case 'customerAnalysis':
        return <CustomerAnalysisSection form={methods} />;
      case 'marketTrends':
        return <MarketTrendsSection form={methods} />;
      case 'researchTools':
        return <ResearchToolsSection form={methods} />;
      case 'analyzingFindings':
        return <AnalyzingFindingsSection form={methods} />;
      case 'marketResearchPlan':
        return <MarketResearchPlanSection form={methods} />;
      default:
        return <div>Select a section from the navigation.</div>;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Sidebar Navigation */}
      <nav className="md:w-1/4 lg:w-1/5 p-4 bg-white shadow-lg rounded-lg md:mr-6 mb-6 md:mb-0">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Market Research Guide</h2>
        <ul>
          {guideSections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium 
                            ${activeSection === section.id 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="md:w-3/4 lg:w-4/5 p-6 bg-white shadow-xl rounded-lg overflow-y-auto">
        {renderSectionContent()}
      </main>
    </div>
    </FormProvider>
  );
};

export default MarketResearchGuidePage;

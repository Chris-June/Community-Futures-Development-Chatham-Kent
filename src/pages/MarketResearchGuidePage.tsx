/**
 * @file MarketResearchGuidePage.tsx
 * @description An interactive guide to help users learn about and plan market research activities.
 * Based on the content from MarketResearch.md.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download } from 'lucide-react';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { PdfExportButton } from '@/components/common/PdfExportButton';
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

// Define guide sections with their IDs and titles
const guideSections = [
  { id: 'introduction' as const, title: 'Introduction to Market Research' },
  { id: 'primaryResearch' as const, title: 'Primary Research Methods' },
  { id: 'secondaryResearch' as const, title: 'Secondary Research Methods' },
  { id: 'ontarioSpecificData' as const, title: 'Ontario-Specific Data' },
  { id: 'competitiveAnalysis' as const, title: 'Competitive Analysis' },
  { id: 'customerAnalysis' as const, title: 'Customer Analysis' },
  { id: 'marketTrends' as const, title: 'Market Trends and Opportunities' },
  { id: 'researchTools' as const, title: 'Tools and Techniques for Market Research' },
  { id: 'analyzingFindings' as const, title: 'Analyzing Findings and Reporting' },
  { id: 'marketResearchPlan' as const, title: 'Developing Your Market Research Plan' },
];

type GuideSectionId = typeof guideSections[number]['id'];

// Add 'allSections' to the GuideSectionId type
type ExtendedGuideSectionId = GuideSectionId | 'allSections';

const MarketResearchGuidePage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const methods = useForm<MarketResearchGuideData>({
    defaultValues: {
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
    },
  });
  const { reset, watch } = methods; 
  const [activeSection, setActiveSection] = useState<GuideSectionId>(guideSections[0].id);
  
  // Set ref for a section
  const setSectionRef = useCallback((sectionId: ExtendedGuideSectionId) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[sectionId] = el;
    }
  }, []);

  // Get the active section component based on the current activeSection state
  const getActiveSection = useCallback(() => {
    switch (activeSection) {
      case 'introduction':
        return <IntroductionSection form={methods} />;
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
        return <IntroductionSection form={methods} />;
    }
  }, [activeSection, methods]);

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

  // Render all sections for PDF export (hidden from view but accessible for PDF)
  const renderAllSections = useCallback(() => (
    <div 
      className="space-y-8" 
      style={{ position: 'absolute', left: '-9999px', width: '210mm' }}
      ref={setSectionRef('allSections')}
    >
      <h1 className="text-3xl font-bold mb-6">Market Research Guide</h1>
      
      {guideSections.map(({ id, title }) => (
        <div key={id} className="print-section" ref={setSectionRef(id as GuideSectionId)}>
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {id === 'introduction' && <IntroductionSection form={methods} />}
          {id === 'primaryResearch' && <PrimaryResearchSection form={methods} />}
          {id === 'secondaryResearch' && <SecondaryResearchSection form={methods} />}
          {id === 'ontarioSpecificData' && <OntarioSpecificDataSection form={methods} />}
          {id === 'competitiveAnalysis' && <CompetitiveAnalysisSection form={methods} />}
          {id === 'customerAnalysis' && <CustomerAnalysisSection form={methods} />}
          {id === 'marketTrends' && <MarketTrendsSection form={methods} />}
          {id === 'researchTools' && <ResearchToolsSection form={methods} />}
          {id === 'analyzingFindings' && <AnalyzingFindingsSection form={methods} />}
          {id === 'marketResearchPlan' && <MarketResearchPlanSection form={methods} />}
        </div>
      ))}
    </div>
  ), [methods, setSectionRef]);

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
        <div className="flex-1 flex flex-col" ref={contentRef}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Market Research Guide</h1>
            <div className="flex gap-2">
              <PdfExportButton 
                title="Market Research Guide"
                filename="market-research-guide.pdf"
                contentRef={contentRef} // Pass the main content ref
                stepElements={guideSections.map(s => sectionRefs.current[s.id]).filter(Boolean).map(el => ({ current: el as HTMLElement }))}
                captureAllSteps={true} // Ensure all steps are captured
              />
              <a 
                href="/MarketResearch.md"
                download="Market_Research_Guide_Template.md"
                className="shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Download size={18} className="mr-2" /> Download Template
              </a>
            </div>
          </div>
          <main className="flex-1 p-6 bg-white shadow-xl rounded-lg overflow-y-auto">
            {/* Normal view - only show active section */}
          <div className="print:hidden">
            {getActiveSection()}
          </div>
          
          {/* Hidden container for PDF export with all sections */}
          <div style={{ position: 'absolute', left: '-9999px', top: 0, width: '210mm' }}>
            {renderAllSections()}
          </div>
          </main>
        </div>
      </div>
    </FormProvider>
  );
};

export default MarketResearchGuidePage;

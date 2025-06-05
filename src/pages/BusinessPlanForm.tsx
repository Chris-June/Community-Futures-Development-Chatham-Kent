/**
 * BusinessPlanForm.tsx
 * 
 * Purpose: Provides an interactive, multi-step form for users to fill out key sections of their business plan.
 *          It saves progress to localStorage and allows users to download the complete template.
 * Core Responsibilities: 
 *   - Render form steps for different sections of the business plan.
 *   - Manage form state and user input.
 *   - Save and load form data from localStorage.
 *   - Provide a link to download the full business plan template.
 * Assumptions: 
 *   - Users will benefit from an interactive way to start their business plan.
 *   - localStorage is available and acceptable for saving draft data.
 */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import ExecutiveSummaryPart, { ExecutiveSummaryData } from '../components/business_plan_form_parts/ExecutiveSummaryPart';
import CompanyDescriptionPart, { CompanyDescriptionData } from '../components/business_plan_form_parts/CompanyDescriptionPart';
import MarketAnalysisPart, { MarketAnalysisData } from '../components/business_plan_form_parts/MarketAnalysisPart';
import OrganizationAndManagementPart, { OrganizationAndManagementData } from '../components/business_plan_form_parts/OrganizationAndManagementPart';
import ProductsOrServicesPart, { ProductsOrServicesData } from '../components/business_plan_form_parts/ProductsOrServicesPart';
import MarketingAndSalesStrategyPart, { MarketingAndSalesStrategyData } from '../components/business_plan_form_parts/MarketingAndSalesStrategyPart';
import FundingRequestPart, { FundingRequestData } from '../components/business_plan_form_parts/FundingRequestPart';
import FinancialProjectionsPart, { FinancialProjectionsData } from '../components/business_plan_form_parts/FinancialProjectionsPart';
import AppendixPart, { AppendixData } from '../components/business_plan_form_parts/AppendixPart';

// Define the structure for form data
export interface FormData {
  executiveSummary: ExecutiveSummaryData;
  companyDescription: CompanyDescriptionData;
  marketAnalysis: MarketAnalysisData;
  organizationAndManagement: OrganizationAndManagementData;
  productsOrServices: ProductsOrServicesData;
  marketingAndSalesStrategy: MarketingAndSalesStrategyData;
  fundingRequest: FundingRequestData;
  financialProjections: FinancialProjectionsData;
  appendix: AppendixData;
}

const initialFormData: FormData = {
  executiveSummary: {
    missionStatement: '',
    visionStatement: '',
    businessGoals: { specific: '', measurable: '', achievable: '', relevant: '', timeBound: '' },
    productsServicesOverview: '',
    targetMarketSummary: '',
    competitiveAdvantage: '',
    financialHighlights: '',
    fundingRequest: '',
  },
  companyDescription: {
    description: '',
    missionStatement: '',
    visionStatement: '',
    legalStructureAndOwnership: '',
    businessLocation: '',
    managementTeamSummary: '',
    objectives: '',
    historicalSummary: '',
  },
  marketAnalysis: {
    industryOverview: '',
    targetMarket: { demographics: '', psychographics: '', needsAndPreferences: '', sizeAndGrowthRate: '' },
    marketTrends: '',
    competition: {
      directCompetitors: '',
      indirectCompetitors: '',
      swotAnalysis: { strengths: '', weaknesses: '', opportunities: '', threats: '' },
    },
    barriersToEntry: '',
  },
  organizationAndManagement: {
    organizationalStructureChart: '',
    managementTeamBios: '',
    rolesAndResponsibilities: '',
    personnelPlan: '',
    advisoryBoard: '',
  },
  productsOrServices: {
    detailedDescription: '',
    uniqueSellingProposition: '',
    productDevelopmentLifecycle: '',
    intellectualProperty: '',
    sourcingAndFulfillment: '',
  },
  marketingAndSalesStrategy: {
    marketingPlan: {
      targetAudienceRecap: '',
      positioningStrategy: '',
      pricingStrategy: '',
      promotionStrategy: '',
      distributionChannels: '',
    },
    salesStrategy: {
      salesProcess: '',
      salesTeamStructure: '',
      salesForecastsSummary: '',
    },
    customerServicePlan: '',
  },
  fundingRequest: {
    currentFundingStatus: '',
    fundingNeeded: '',
    useOfFunds: '',
    futureFundingPlans: '',
  },
  financialProjections: {
    keyAssumptions: '',
    startupCostsTable: '', 
    salesForecastTable: '', 
    financialStatements: {
      incomeStatementProjections: '', 
      balanceSheetProjections: '', 
      cashFlowProjections: '', 
    },
    breakEvenAnalysis: '',
    financialRatios: '', 
  },
  appendix: {
    supportingDocumentsList: '',
    additionalInformation: '',
  },
};

const formSteps = [
  { id: 'executiveSummary', title: '1. Executive Summary' },
  { id: 'companyDescription', title: '2. Company Description' },
  { id: 'marketAnalysis', title: '3. Market Analysis' },
  { id: 'organizationAndManagement', title: '4. Organization and Management' },
  { id: 'productsOrServices', title: '5. Products or Services' },
  { id: 'marketingAndSalesStrategy', title: '6. Marketing and Sales Strategy' },
  { id: 'fundingRequest', title: '7. Funding Request' },
  { id: 'financialProjections', title: '8. Financial Projections' },
  { id: 'appendix', title: '9. Appendix' },
];

// Helper function to set nested properties. Modifies obj directly.
const setNestedValue = (obj: any, path: string, value: any) => {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
      current[keys[i]] = {}; 
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
};

export default function BusinessPlanForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    const savedData = localStorage.getItem('businessPlanFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Deep merge parsedData with initialFormData to ensure structure
        const mergedData = {
          ...initialFormData,
          ...parsedData,
          // Ensure critical nested structures are preserved if parsedData is incomplete/outdated
          executiveSummary: {
            ...initialFormData.executiveSummary,
            ...(parsedData.executiveSummary || {}),
            businessGoals: {
              ...initialFormData.executiveSummary.businessGoals,
              ...((parsedData.executiveSummary && parsedData.executiveSummary.businessGoals) || {}),
            },
          },
          marketAnalysis: {
            ...initialFormData.marketAnalysis,
            ...(parsedData.marketAnalysis || {}),
            targetMarket: {
              ...initialFormData.marketAnalysis.targetMarket,
              ...((parsedData.marketAnalysis && parsedData.marketAnalysis.targetMarket) || {}),
            },
            competition: {
              ...initialFormData.marketAnalysis.competition,
              ...((parsedData.marketAnalysis && parsedData.marketAnalysis.competition) || {}),
              swotAnalysis: {
                ...initialFormData.marketAnalysis.competition.swotAnalysis,
                ...((parsedData.marketAnalysis && parsedData.marketAnalysis.competition && parsedData.marketAnalysis.competition.swotAnalysis) || {}),
              },
            },
          },
          marketingAndSalesStrategy: {
            ...initialFormData.marketingAndSalesStrategy,
            ...(parsedData.marketingAndSalesStrategy || {}),
            marketingPlan: {
              ...initialFormData.marketingAndSalesStrategy.marketingPlan,
              ...((parsedData.marketingAndSalesStrategy && parsedData.marketingAndSalesStrategy.marketingPlan) || {}),
            },
            salesStrategy: {
              ...initialFormData.marketingAndSalesStrategy.salesStrategy,
              ...((parsedData.marketingAndSalesStrategy && parsedData.marketingAndSalesStrategy.salesStrategy) || {}),
            },
          },
          financialProjections: {
            ...initialFormData.financialProjections,
            ...(parsedData.financialProjections || {}),
            financialStatements: {
              ...initialFormData.financialProjections.financialStatements,
              ...((parsedData.financialProjections && parsedData.financialProjections.financialStatements) || {}),
            },
          },
          // Add other sections with nested objects as needed for robustness
          // For sections without deep nesting, the initial spread might be sufficient,
          // but being explicit for known complex objects is safer.
          companyDescription: {
            ...initialFormData.companyDescription,
            ...(parsedData.companyDescription || {}),
          },
          organizationAndManagement: {
            ...initialFormData.organizationAndManagement,
            ...(parsedData.organizationAndManagement || {}),
          },
          productsOrServices: {
            ...initialFormData.productsOrServices,
            ...(parsedData.productsOrServices || {}),
          },
          fundingRequest: {
            ...initialFormData.fundingRequest,
            ...(parsedData.fundingRequest || {}),
          },
          appendix: {
            ...initialFormData.appendix,
            ...(parsedData.appendix || {}),
          },
        };
        setFormData(mergedData);
      } catch (error) {
        console.error('Failed to parse business plan data from localStorage:', error);
        localStorage.removeItem('businessPlanFormData');
        setFormData(initialFormData); 
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('businessPlanFormData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (sectionKey: keyof FormData, fieldPath: string, value: string) => {
    setFormData(prevData => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const sectionData = newData[sectionKey as keyof FormData];
      setNestedValue(sectionData, fieldPath, value);
      return newData;
    });
  };

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    const stepId = formSteps[currentStep].id as keyof FormData;

    switch (stepId) {
      case 'executiveSummary':
        return (
          <ExecutiveSummaryPart 
            data={formData.executiveSummary} 
            onChange={(fieldName, value) => handleInputChange('executiveSummary', fieldName, value)} 
          />
        );
      case 'companyDescription':
        return (
          <CompanyDescriptionPart
            data={formData.companyDescription}
            onChange={(fieldName, value) => handleInputChange('companyDescription', fieldName, value)}
          />
        );
      case 'marketAnalysis':
        return (
          <MarketAnalysisPart
            data={formData.marketAnalysis}
            onChange={(fieldName, value) => handleInputChange('marketAnalysis', fieldName, value)}
          />
        );
      case 'organizationAndManagement':
        return (
          <OrganizationAndManagementPart
            data={formData.organizationAndManagement}
            onChange={(fieldName, value) => handleInputChange('organizationAndManagement', fieldName, value)}
          />
        );
      case 'productsOrServices':
        return (
          <ProductsOrServicesPart
            data={formData.productsOrServices}
            onChange={(fieldName, value) => handleInputChange('productsOrServices', fieldName, value)}
          />
        );
      case 'marketingAndSalesStrategy':
        return (
          <MarketingAndSalesStrategyPart
            data={formData.marketingAndSalesStrategy}
            onChange={(fieldName, value) => handleInputChange('marketingAndSalesStrategy', fieldName, value)}
          />
        );
      case 'fundingRequest':
        return (
          <FundingRequestPart
            data={formData.fundingRequest}
            onChange={(fieldName, value) => handleInputChange('fundingRequest', fieldName, value)}
          />
        );
      case 'financialProjections':
        return (
          <FinancialProjectionsPart
            data={formData.financialProjections}
            onChange={(fieldName, value) => handleInputChange('financialProjections', fieldName, value)}
          />
        );
      case 'appendix':
        return (
          <AppendixPart
            data={formData.appendix}
            onChange={(fieldName, value) => handleInputChange('appendix', fieldName, value)}
          />
        );
      default:
        const _exhaustiveCheck: never = stepId;
        console.warn('Unhandled form step:', _exhaustiveCheck);
        return <div>Unknown Step: {String(stepId)}</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate('/resources')} className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center">
        <ChevronLeft size={20} className="mr-1" /> Back to Resources
      </button>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Interactive Business Plan Builder</h1>
            <p className="text-gray-600 mt-1">Fill out key sections of your business plan. Your progress is saved automatically.</p>
          </div>
          <a 
              href="/BusinessPlan.md"
              download="Business_Plan_Template.md"
              className="ml-4 shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
              <Download size={18} className="mr-2" /> Download Template
          </a>
        </div>
        
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700">{formSteps[currentStep].title}</h2>
        </div>

        <div className="p-6 border border-gray-200 rounded-md bg-gray-50 min-h-[400px]">
          {renderStepContent()}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} className="mr-2" /> Previous
          </button>
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {formSteps.length}
          </div>
          <button
            onClick={nextStep}
            disabled={currentStep === formSteps.length - 1}
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

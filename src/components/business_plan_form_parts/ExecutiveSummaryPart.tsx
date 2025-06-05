/**
 * @file ExecutiveSummaryPart.tsx
 * @description Component for the Executive Summary section of the business plan form.
 * It includes fields for mission statement, vision, goals, and other key summary points.
 * This component receives its data and change handlers via props from the main form.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface ExecutiveSummaryData {
  missionStatement: string;
  visionStatement: string;
  businessGoals: {
    specific: string;
    measurable: string;
    achievable: string;
    relevant: string;
    timeBound: string;
  };
  productsServicesOverview: string;
  targetMarketSummary: string;
  competitiveAdvantage: string;
  financialHighlights: string;
  fundingRequest: string;
}

interface ExecutiveSummaryPartProps {
  data: ExecutiveSummaryData;
  // The fieldName will now include dot notation for nested fields like 'businessGoals.specific'
  onChange: (fieldName: string, value: string) => void;
}

const ExecutiveSummaryPart: React.FC<ExecutiveSummaryPartProps> = ({ data, onChange }) => {
  // Generic handler for simple fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">1. Executive Summary</h2>
      
      <FormField
        label="Mission Statement"
        id="missionStatement"
        name="missionStatement"
        type="textarea"
        value={data.missionStatement}
        onChange={handleChange}
        placeholder="Describe your company's mission."
        rows={3}
      />

      <FormField
        label="Vision Statement"
        id="visionStatement"
        name="visionStatement"
        type="textarea"
        value={data.visionStatement}
        onChange={handleChange}
        placeholder="Describe your company's vision for the future."
        rows={3}
      />

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Business Goals (SMART)</h3>
        <FormField
          label="Specific"
          id="businessGoals.specific" 
          name="businessGoals.specific" // Use dot notation for name
          type="textarea"
          value={data.businessGoals.specific}
          onChange={handleChange}
          placeholder="What specific goals do you want to achieve?"
          rows={2}
        />
        <FormField
          label="Measurable"
          id="businessGoals.measurable"
          name="businessGoals.measurable"
          type="textarea"
          value={data.businessGoals.measurable}
          onChange={handleChange}
          placeholder="How will you measure progress towards these goals?"
          rows={2}
        />
        <FormField
          label="Achievable"
          id="businessGoals.achievable"
          name="businessGoals.achievable"
          type="textarea"
          value={data.businessGoals.achievable}
          onChange={handleChange}
          placeholder="Are these goals realistic and attainable?"
          rows={2}
        />
        <FormField
          label="Relevant"
          id="businessGoals.relevant"
          name="businessGoals.relevant"
          type="textarea"
          value={data.businessGoals.relevant}
          onChange={handleChange}
          placeholder="How do these goals align with your overall business strategy?"
          rows={2}
        />
        <FormField
          label="Time-bound"
          id="businessGoals.timeBound"
          name="businessGoals.timeBound"
          type="textarea"
          value={data.businessGoals.timeBound}
          onChange={handleChange}
          placeholder="What is the timeframe for achieving these goals?"
          rows={2}
        />
      </div>

      <FormField
        label="Brief Overview of Products/Services"
        id="productsServicesOverview"
        name="productsServicesOverview"
        type="textarea"
        value={data.productsServicesOverview}
        onChange={handleChange}
        placeholder="Briefly describe your products or services."
        rows={4}
      />

      <FormField
        label="Target Market Summary"
        id="targetMarketSummary"
        name="targetMarketSummary"
        type="textarea"
        value={data.targetMarketSummary}
        onChange={handleChange}
        placeholder="Briefly describe your target market."
        rows={3}
      />

      <FormField
        label="Competitive Advantage"
        id="competitiveAdvantage"
        name="competitiveAdvantage"
        type="textarea"
        value={data.competitiveAdvantage}
        onChange={handleChange}
        placeholder="What makes your business unique and competitive?"
        rows={3}
      />

      <FormField
        label="Financial Highlights (Projections)"
        id="financialHighlights"
        name="financialHighlights"
        type="textarea"
        value={data.financialHighlights}
        onChange={handleChange}
        placeholder="Summarize key financial projections (e.g., revenue, profit)."
        rows={3}
      />

      <FormField
        label="Funding Request (If Applicable)"
        id="fundingRequest"
        name="fundingRequest"
        type="textarea"
        value={data.fundingRequest}
        onChange={handleChange}
        placeholder="State the amount and purpose of funding, if any."
        rows={3}
      />
    </div>
  );
};

export default ExecutiveSummaryPart;

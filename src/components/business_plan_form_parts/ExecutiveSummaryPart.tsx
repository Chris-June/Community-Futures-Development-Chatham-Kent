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
      <h2 className="text-xl font-semibold text-foreground mb-6">1. Executive Summary</h2>
      
      <FormField
        label="Mission Statement"
        id="missionStatement"
        name="missionStatement"
        type="textarea"
        value={data.missionStatement}
        onChange={handleChange}
        placeholder="Example: To empower businesses of all sizes with intelligent, AI-first digital solutions that streamline operations, enhance customer experiences, and drive innovation from the heart of Chatham-Kent, Ontario."
        rows={3}
      />

      <FormField
        label="Vision Statement"
        id="visionStatement"
        name="visionStatement"
        type="textarea"
        value={data.visionStatement}
        onChange={handleChange}
        placeholder="Example: To become Canada's leading provider of AI-powered business platforms by 2030, redefining how organizations interact with software through adaptive and intuitive systems."
        rows={3}
      />

      <div className="mb-6 p-4 border border-border rounded-md bg-muted">
        <h3 className="text-lg font-medium text-foreground mb-3">Business Goals (SMART)</h3>
        <FormField
          label="Specific"
          id="businessGoals.specific" 
          name="businessGoals.specific" // Use dot notation for name
          type="textarea"
          value={data.businessGoals.specific}
          onChange={handleChange}
          placeholder="Example: Launch three flagship AI SaaS products in our first 18 months, focused on SME automation, intelligent CRM, and real-time business analytics."
          rows={2}
        />
        <FormField
          label="Measurable"
          id="businessGoals.measurable"
          name="businessGoals.measurable"
          type="textarea"
          value={data.businessGoals.measurable}
          onChange={handleChange}
          placeholder="Example: Achieve 1,000 paying users, reach $500,000 in annual recurring revenue, and maintain a 90% customer retention rate within 24 months."
          rows={2}
        />
        <FormField
          label="Achievable"
          id="businessGoals.achievable"
          name="businessGoals.achievable"
          type="textarea"
          value={data.businessGoals.achievable}
          onChange={handleChange}
          placeholder="Example: We’ve assembled a highly skilled development team with previous startup success, secured $150,000 in early-stage funding, and validated market need through beta testing with 20 local businesses."
          rows={2}
        />
        <FormField
          label="Relevant"
          id="businessGoals.relevant"
          name="businessGoals.relevant"
          type="textarea"
          value={data.businessGoals.relevant}
          onChange={handleChange}
          placeholder="Example: Our goals align directly with our strategy to become a leader in regional tech innovation, supporting Chatham-Kent’s economic development goals and Canada's national AI strategy."
          rows={2}
        />
        <FormField
          label="Time-bound"
          id="businessGoals.timeBound"
          name="businessGoals.timeBound"
          type="textarea"
          value={data.businessGoals.timeBound}
          onChange={handleChange}
          placeholder="Example: All core milestones are set within 24 months: MVP by month 6, beta testing completed by month 9, full launch by month 12, and targeted growth KPIs achieved by month 24."
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
        placeholder="Example: We develop scalable AI-first SaaS solutions, including automated task managers, conversational CRMs, and predictive financial tools, designed for small and mid-sized enterprises (SMEs)."
        rows={4}
      />

      <FormField
        label="Target Market Summary"
        id="targetMarketSummary"
        name="targetMarketSummary"
        type="textarea"
        value={data.targetMarketSummary}
        onChange={handleChange}
        placeholder="Example: Our initial market includes SMEs in Southwestern Ontario with 5–50 employees, especially in professional services, logistics, and retail—industries under increasing pressure to automate and digitize."
        rows={3}
      />

      <FormField
        label="Competitive Advantage"
        id="competitiveAdvantage"
        name="competitiveAdvantage"
        type="textarea"
        value={data.competitiveAdvantage}
        onChange={handleChange}
        placeholder="Example: Unlike legacy systems, our solutions are modular, customizable, and deeply integrated with OpenAI’s GPT models. We offer localized support and direct onboarding for Canadian businesses, giving us an edge over US-based competitors."
        rows={3}
      />

      <FormField
        label="Financial Highlights (Projections)"
        id="financialHighlights"
        name="financialHighlights"
        type="textarea"
        value={data.financialHighlights}
        onChange={handleChange}
        placeholder="Example: Year 1 projected revenue: $250K; Year 2: $750K. Operating at breakeven by Q3 of Year 2. Initial funding secured: $150K through angel investment."
        rows={3}
      />

      <FormField
        label="Funding Request (If Applicable)"
        id="fundingRequest"
        name="fundingRequest"
        type="textarea"
        value={data.fundingRequest}
        onChange={handleChange}
        placeholder="Example: We are seeking an additional $250,000 in seed funding to scale development, hire sales and support staff, and expand our marketing outreach across Ontario."
        rows={3}
      />
    </div>
  );
};

export default ExecutiveSummaryPart;

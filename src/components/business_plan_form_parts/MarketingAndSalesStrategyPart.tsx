/**
 * @file MarketingAndSalesStrategyPart.tsx
 * @description Component for the Marketing and Sales Strategy section of the business plan form.
 * This covers the marketing plan (positioning, pricing, promotion, distribution) and sales strategy.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface MarketingAndSalesStrategyData {
  marketingPlan: {
    targetAudienceRecap: string;
    positioningStrategy: string;
    pricingStrategy: string;
    promotionStrategy: string; 
    distributionChannels: string;
  };
  salesStrategy: {
    salesProcess: string;
    salesTeamStructure: string; 
    salesForecastsSummary: string; 
  };
  customerServicePlan: string;
}

interface MarketingAndSalesStrategyPartProps {
  data: MarketingAndSalesStrategyData;
  onChange: (fieldName: string, value: string) => void;
}

const MarketingAndSalesStrategyPart: React.FC<MarketingAndSalesStrategyPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">6. Marketing and Sales Strategy</h2>

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Marketing Plan</h3>
        <FormField
          label="Target Audience Recap"
          id="marketingAndSalesStrategy.marketingPlan.targetAudienceRecap"
          name="marketingPlan.targetAudienceRecap"
          type="textarea"
          value={data.marketingPlan.targetAudienceRecap}
          onChange={handleChange}
          placeholder={`Example: Our target audience includes small and mid-sized businesses in Southwestern Ontario, particularly in the logistics, retail, and service sectors, seeking to modernize their operations with practical AI tools.`}
          rows={2}
        />
        <FormField
          label="Positioning Strategy"
          id="marketingAndSalesStrategy.marketingPlan.positioningStrategy"
          name="marketingPlan.positioningStrategy"
          type="textarea"
          value={data.marketingPlan.positioningStrategy}
          onChange={handleChange}
          placeholder={`Example: We position IntelliNova as the trusted local provider of AI-first solutions for SMEs—offering practical, approachable, and affordable software designed specifically for the Canadian business landscape.`}
          rows={3}
        />
        <FormField
          label="Pricing Strategy"
          id="marketingAndSalesStrategy.marketingPlan.pricingStrategy"
          name="marketingPlan.pricingStrategy"
          type="textarea"
          value={data.marketingPlan.pricingStrategy}
          onChange={handleChange}
          placeholder={`Example: Our freemium-to-premium pricing model offers entry-level access with essential tools, while paid tiers introduce advanced features like API access, multi-user support, and custom GPT integration—providing clear value for scale.`}
          rows={3}
        />
        <FormField
          label="Promotion Strategy"
          id="marketingAndSalesStrategy.marketingPlan.promotionStrategy"
          name="marketingPlan.promotionStrategy"
          type="textarea"
          value={data.marketingPlan.promotionStrategy}
          onChange={handleChange}
          placeholder={`Example: Multi-channel approach: digital marketing (Google Ads, LinkedIn), social media (LinkedIn, Facebook), Chamber events, webinars, and community-led tech education programs to build trust and brand visibility.`}
          rows={4}
        />
        <FormField
          label="Distribution Channels"
          id="marketingAndSalesStrategy.marketingPlan.distributionChannels"
          name="marketingPlan.distributionChannels"
          type="textarea"
          value={data.marketingPlan.distributionChannels}
          onChange={handleChange}
          placeholder={`Example: Products are distributed via our secure web portal. Onboarding is supported with live Zoom walkthroughs and a customer portal. Direct sales will be supplemented by regional partnerships and tech ecosystem referrals.`}
          rows={3}
        />
      </div>

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Sales Strategy</h3>
        <FormField
          label="Sales Process"
          id="marketingAndSalesStrategy.salesStrategy.salesProcess"
          name="salesStrategy.salesProcess"
          type="textarea"
          value={data.salesStrategy.salesProcess}
          onChange={handleChange}
          placeholder={`Example: Inbound marketing generates leads through our website and social channels. Leads are nurtured via email campaigns and AI demos. Sales team conducts consultative discovery calls, followed by tailored product walkthroughs and onboarding.`}
          rows={4}
        />
        <FormField
          label="Sales Team Structure (If Applicable)"
          id="marketingAndSalesStrategy.salesStrategy.salesTeamStructure"
          name="salesStrategy.salesTeamStructure"
          type="textarea"
          value={data.salesStrategy.salesTeamStructure}
          onChange={handleChange}
          placeholder={`Example: Initial sales handled by co-founders and early hires trained in solution selling. As we scale, we will hire a dedicated account executive and sales enablement coordinator to streamline the funnel.`}
          rows={3}
        />
        <FormField
          label="Sales Forecasts Summary"
          id="marketingAndSalesStrategy.salesStrategy.salesForecastsSummary"
          name="salesStrategy.salesForecastsSummary"
          type="textarea"
          value={data.salesStrategy.salesForecastsSummary}
          onChange={handleChange}
          placeholder={`Example: Year 1 goal: 100 paying users.  \nYear 2: 500 users.  \nYear 3: 1,500+ users. Growth driven by repeatable onboarding and expansion into adjacent sectors.`}
          rows={3}
        />
      </div>

      <FormField
        label="Customer Service Plan"
        id="marketingAndSalesStrategy.customerServicePlan"
        name="customerServicePlan"
        type="textarea"
        value={data.customerServicePlan}
        onChange={handleChange}
        placeholder={`Example: We provide customer service via live chat (Intercom), email, and scheduled onboarding calls. Our knowledge base supports self-service. We aim for a 24-hour response time and 95% satisfaction score.`}
        rows={4}
      />
    </div>
  );
};

export default MarketingAndSalesStrategyPart;

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
          placeholder="Briefly recap your target audience (detailed in Market Analysis)."
          rows={2}
        />
        <FormField
          label="Positioning Strategy"
          id="marketingAndSalesStrategy.marketingPlan.positioningStrategy"
          name="marketingPlan.positioningStrategy"
          type="textarea"
          value={data.marketingPlan.positioningStrategy}
          onChange={handleChange}
          placeholder="How will you position your products/services in the market relative to competitors?"
          rows={3}
        />
        <FormField
          label="Pricing Strategy"
          id="marketingAndSalesStrategy.marketingPlan.pricingStrategy"
          name="marketingPlan.pricingStrategy"
          type="textarea"
          value={data.marketingPlan.pricingStrategy}
          onChange={handleChange}
          placeholder="Describe your pricing strategy and how it reflects value to the customer and market position."
          rows={3}
        />
        <FormField
          label="Promotion Strategy"
          id="marketingAndSalesStrategy.marketingPlan.promotionStrategy"
          name="marketingPlan.promotionStrategy"
          type="textarea"
          value={data.marketingPlan.promotionStrategy}
          onChange={handleChange}
          placeholder="Outline your promotion and advertising plans (e.g., online marketing, social media, PR, events)."
          rows={4}
        />
        <FormField
          label="Distribution Channels"
          id="marketingAndSalesStrategy.marketingPlan.distributionChannels"
          name="marketingPlan.distributionChannels"
          type="textarea"
          value={data.marketingPlan.distributionChannels}
          onChange={handleChange}
          placeholder="How will customers access your products/services? (e.g., direct sales, online store, retail partners)."
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
          placeholder="Describe your sales process from lead generation to closing the sale."
          rows={4}
        />
        <FormField
          label="Sales Team Structure (If Applicable)"
          id="marketingAndSalesStrategy.salesStrategy.salesTeamStructure"
          name="salesStrategy.salesTeamStructure"
          type="textarea"
          value={data.salesStrategy.salesTeamStructure}
          onChange={handleChange}
          placeholder="Describe your sales team structure, roles, and training. If no dedicated team, explain who handles sales."
          rows={3}
        />
        <FormField
          label="Sales Forecasts Summary"
          id="marketingAndSalesStrategy.salesStrategy.salesForecastsSummary"
          name="salesStrategy.salesForecastsSummary"
          type="textarea"
          value={data.salesStrategy.salesForecastsSummary}
          onChange={handleChange}
          placeholder="Summarize your sales forecasts. (Detailed forecasts will be in Financial Projections)."
          rows={2}
        />
      </div>

      <FormField
        label="Customer Service Plan"
        id="marketingAndSalesStrategy.customerServicePlan"
        name="customerServicePlan"
        type="textarea"
        value={data.customerServicePlan}
        onChange={handleChange}
        placeholder="How will you handle customer service and support? Describe your approach to customer satisfaction and retention."
        rows={4}
      />
    </div>
  );
};

export default MarketingAndSalesStrategyPart;

/**
 * @file FundingRequestPart.tsx
 * @description Component for the Funding Request section of the business plan form.
 * This section details current funding, amount needed, use of funds, and future funding plans.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface FundingRequestData {
  currentFundingStatus: string;
  fundingNeeded: string;
  useOfFunds: string;
  futureFundingPlans: string;
}

interface FundingRequestPartProps {
  data: FundingRequestData;
  onChange: (fieldName: string, value: string) => void;
}

const FundingRequestPart: React.FC<FundingRequestPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">7. Funding Request</h2>

      <FormField
        label="Current Funding Status"
        id="fundingRequest.currentFundingStatus"
        name="currentFundingStatus"
        type="textarea"
        value={data.currentFundingStatus}
        onChange={handleChange}
        placeholder={`Example: IntelliNova is currently bootstrapped by the co-founders with $75,000 in personal contributions. An additional $150,000 was raised through a local angel investment round in Q1 2025.`}
        rows={3}
      />

      <FormField
        label="Funding Needed"
        id="fundingRequest.fundingNeeded"
        name="fundingNeeded"
        type="text" // Could also be 'number' if we add specific validation
        value={data.fundingNeeded}
        onChange={handleChange}
        placeholder={`Example: $250,000 CAD`}
      />

      <FormField
        label="Use of Funds"
        id="fundingRequest.useOfFunds"
        name="useOfFunds"
        type="textarea"
        value={data.useOfFunds}
        onChange={handleChange}
        placeholder={`Example: The requested $250,000 will be allocated as follows:
• 40% – Product development (engineering hires, cloud infrastructure)
• 30% – Sales and marketing (launch campaigns, CRM setup)
• 20% – Customer support and onboarding
• 10% – Legal, compliance, and operational reserves
`}
        rows={5}
      />

      <FormField
        label="Future Funding Plans"
        id="fundingRequest.futureFundingPlans"
        name="futureFundingPlans"
        type="textarea"
        value={data.futureFundingPlans}
        onChange={handleChange}
        placeholder={`Example: IntelliNova plans to raise a $1M seed round in late 2026 to scale nationally. That round will support broader market expansion, platform integrations, and the development of new AI product lines tailored for financial services and municipal systems.`}
        rows={3}
      />
    </div>
  );
};

export default FundingRequestPart;

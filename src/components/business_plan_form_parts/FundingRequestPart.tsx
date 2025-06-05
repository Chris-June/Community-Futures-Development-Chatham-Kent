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
        placeholder="Describe your current funding situation (e.g., bootstrapped, seed funding received). Include amounts and sources if applicable."
        rows={3}
      />

      <FormField
        label="Funding Needed"
        id="fundingRequest.fundingNeeded"
        name="fundingNeeded"
        type="text" // Could also be 'number' if we add specific validation
        value={data.fundingNeeded}
        onChange={handleChange}
        placeholder="Specify the total amount of funding you are seeking."
      />

      <FormField
        label="Use of Funds"
        id="fundingRequest.useOfFunds"
        name="useOfFunds"
        type="textarea"
        value={data.useOfFunds}
        onChange={handleChange}
        placeholder="Detail how the requested funds will be used (e.g., product development, marketing, hiring, working capital). Provide a breakdown if possible."
        rows={5}
      />

      <FormField
        label="Future Funding Plans"
        id="fundingRequest.futureFundingPlans"
        name="futureFundingPlans"
        type="textarea"
        value={data.futureFundingPlans}
        onChange={handleChange}
        placeholder="Outline any plans for future funding rounds or financial milestones."
        rows={3}
      />
    </div>
  );
};

export default FundingRequestPart;

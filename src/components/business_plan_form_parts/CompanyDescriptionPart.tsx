/**
 * @file CompanyDescriptionPart.tsx
 * @description Component for the Company Description section of the business plan form.
 * It includes fields for company overview, mission, vision, legal structure, location, etc.
 * This component receives its data and change handlers via props from the main form.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface CompanyDescriptionData {
  description: string;
  missionStatement: string; 
  visionStatement: string;  
  legalStructureAndOwnership: string;
  businessLocation: string;
  managementTeamSummary: string; 
  objectives: string;
  historicalSummary: string; 
}

interface CompanyDescriptionPartProps {
  data: CompanyDescriptionData;
  onChange: (fieldName: string, value: string) => void;
}

const CompanyDescriptionPart: React.FC<CompanyDescriptionPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">2. Company Description</h2>

      <FormField
        label="Company Description"
        id="companyDescription.description"
        name="description"
        type="textarea"
        value={data.description}
        onChange={handleChange}
        placeholder="Example: IntelliNova is an AI-first software development firm based in Chatham-Kent, Ontario. We specialize in building adaptive, intelligent digital solutions that automate business workflows, enhance decision-making, and improve operational efficiency for SMEs across Canada."
        rows={5}
      />

      <FormField
        label="Mission Statement (Elaborated)"
        id="companyDescription.missionStatement"
        name="missionStatement"
        type="textarea"
        value={data.missionStatement}
        onChange={handleChange}
        placeholder="Example: Our mission is to democratize access to intelligent software by creating intuitive, AI-first platforms that empower small businesses to compete with enterprise-level efficiency—while staying grounded in our values of trust, transparency, and community impact."
        rows={3}
      />

      <FormField
        label="Vision Statement (Elaborated)"
        id="companyDescription.visionStatement"
        name="visionStatement"
        type="textarea"
        value={data.visionStatement}
        onChange={handleChange}
        placeholder="Example: We envision a future where every business—regardless of size—can access the power of AI through scalable, user-friendly technology developed right here in Canada. Our long-term goal is to lead the AI transformation of Canada's digital economy."
        rows={3}
      />

      <FormField
        label="Legal Structure and Ownership"
        id="companyDescription.legalStructureAndOwnership"
        name="legalStructureAndOwnership"
        type="text"
        value={data.legalStructureAndOwnership}
        onChange={handleChange}
        placeholder="Example: Federally incorporated Canadian Corporation. Owned and operated by two co-founders, each holding 50% equity."
        rows={3}
      />

      <FormField
        label="Business Location(s)"
        id="companyDescription.businessLocation"
        name="businessLocation"
        type="textarea"
        value={data.businessLocation}
        onChange={handleChange}
        placeholder="Example: Headquartered in downtown Chatham-Kent, Ontario, our office is located within a co-working innovation hub that supports local tech entrepreneurs. We operate with a hybrid remote team model and serve clients across Ontario and beyond."
        rows={3}
      />

      <FormField
        label="Management Team Summary (Brief)"
        id="companyDescription.managementTeamSummary"
        name="managementTeamSummary"
        type="textarea"
        value={data.managementTeamSummary}
        onChange={handleChange}
        placeholder="Example: Our co-founders include a senior software architect with 10+ years in enterprise AI development, and a business strategist with a background in finance and digital transformation. Together, they combine technical depth with market insight."
        rows={3}
      />

      <FormField
        label="Company Objectives"
        id="companyDescription.objectives"
        name="objectives"
        type="textarea"
        value={data.objectives}
        onChange={handleChange}
        placeholder="Example: Short-term: Complete MVP of two flagship platforms by Q4, 2025.  \nLong-term: Onboard 500+ users by end of 2026, hire 10 full-time staff, and secure Series A funding to scale across Canada."
        rows={4}
      />

      <FormField
        label="Historical Summary (If an Existing Business)"
        id="companyDescription.historicalSummary"
        name="historicalSummary"
        type="textarea"
        value={data.historicalSummary}
        onChange={handleChange}
        placeholder="Example: IntelliNova was incorporated in early 2025 following successful prototype testing of our AI task management engine. Since inception, we've built key partnerships with local businesses for beta trials and secured $150,000 in pre-seed funding."
        rows={4}
      />
    </div>
  );
};

export default CompanyDescriptionPart;

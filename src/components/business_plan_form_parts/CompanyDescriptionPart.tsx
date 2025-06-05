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
        placeholder="Provide a general description of your company, what it does, and what makes it unique."
        rows={5}
      />

      <FormField
        label="Mission Statement (Elaborated)"
        id="companyDescription.missionStatement"
        name="missionStatement"
        type="textarea"
        value={data.missionStatement}
        onChange={handleChange}
        placeholder="Elaborate on your company's mission. What is its purpose and core values? (You can expand on the version from the Executive Summary)"
        rows={3}
      />

      <FormField
        label="Vision Statement (Elaborated)"
        id="companyDescription.visionStatement"
        name="visionStatement"
        type="textarea"
        value={data.visionStatement}
        onChange={handleChange}
        placeholder="Elaborate on your company's vision. Where do you see the company in the long term? (You can expand on the version from the Executive Summary)"
        rows={3}
      />

      <FormField
        label="Legal Structure and Ownership"
        id="companyDescription.legalStructureAndOwnership"
        name="legalStructureAndOwnership"
        type="text"
        value={data.legalStructureAndOwnership}
        onChange={handleChange}
        placeholder="e.g., Sole Proprietorship, Partnership, LLC, Corporation. Describe ownership structure."
      />

      <FormField
        label="Business Location(s)"
        id="companyDescription.businessLocation"
        name="businessLocation"
        type="textarea"
        value={data.businessLocation}
        onChange={handleChange}
        placeholder="Describe your physical and/or online locations, facilities, and any geographical advantages."
        rows={3}
      />

      <FormField
        label="Management Team Summary (Brief)"
        id="companyDescription.managementTeamSummary"
        name="managementTeamSummary"
        type="textarea"
        value={data.managementTeamSummary}
        onChange={handleChange}
        placeholder="Briefly introduce key members of the management team and their expertise. (Detailed bios will be in 'Organization and Management' section)"
        rows={3}
      />

      <FormField
        label="Company Objectives"
        id="companyDescription.objectives"
        name="objectives"
        type="textarea"
        value={data.objectives}
        onChange={handleChange}
        placeholder="Outline specific short-term and long-term objectives for the company."
        rows={4}
      />

      <FormField
        label="Historical Summary (If an Existing Business)"
        id="companyDescription.historicalSummary"
        name="historicalSummary"
        type="textarea"
        value={data.historicalSummary}
        onChange={handleChange}
        placeholder="If your business is already established, provide a brief history, including founding, key milestones, and significant achievements or challenges."
        rows={4}
      />
    </div>
  );
};

export default CompanyDescriptionPart;

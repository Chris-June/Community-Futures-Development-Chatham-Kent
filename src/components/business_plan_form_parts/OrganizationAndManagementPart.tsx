/**
 * @file OrganizationAndManagementPart.tsx
 * @description Component for the Organization and Management section of the business plan form.
 * This includes details about the organizational structure, management team, roles, personnel plan, and advisory board.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface OrganizationAndManagementData {
  organizationalStructureChart: string; 
  managementTeamBios: string; 
  rolesAndResponsibilities: string;
  personnelPlan: string;
  advisoryBoard: string; 
}

interface OrganizationAndManagementPartProps {
  data: OrganizationAndManagementData;
  onChange: (fieldName: string, value: string) => void;
}

const OrganizationAndManagementPart: React.FC<OrganizationAndManagementPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-6">4. Organization and Management</h2>

      <FormField
        label="Organizational Structure (Description or Link to Chart)"
        id="organizationAndManagement.organizationalStructureChart"
        name="organizationalStructureChart"
        type="textarea"
        value={data.organizationalStructureChart}
        onChange={handleChange}
        placeholder={`Example: IntelliNova operates with a flat organizational structure. The co-founders oversee three core departments: Product Development, Client Success, and Operations. Each department is led by a department head reporting directly to the founders. A chart link can be provided in the appendix.`}
        rows={4}
      />

      <FormField
        label="Management Team Bios"
        id="organizationAndManagement.managementTeamBios"
        name="managementTeamBios"
        type="textarea"
        value={data.managementTeamBios}
        onChange={handleChange}
        placeholder={`Example: Jane Doe, CEO – 12 years in enterprise software leadership, previously at Shopify. Expert in scaling tech teams and product-market fit.
John Smith, CTO – AI specialist with 10+ years experience. Former lead ML engineer at a national fintech firm.
Emily Tran, COO – Operations strategist with a background in startup scaling, logistics, and systems implementation.`}
        rows={5}
      />

      <FormField
        label="Roles and Responsibilities"
        id="organizationAndManagement.rolesAndResponsibilities"
        name="rolesAndResponsibilities"
        type="textarea"
        value={data.rolesAndResponsibilities}
        onChange={handleChange}
        placeholder={`Example: CEO: Strategic leadership, investor relations, long-term vision.
CTO: Oversees software architecture, AI model integration, tech hiring.
COO: Manages daily operations, legal/compliance, internal systems.
Each team member leads 1–2 direct reports in their respective domain.`}
        rows={4}
      />

      <FormField
        label="Personnel Plan"
        id="organizationAndManagement.personnelPlan"
        name="personnelPlan"
        type="textarea"
        value={data.personnelPlan}
        onChange={handleChange}
        placeholder={`Example: Current team: 3 founders, 2 part-time developers, 1 freelance designer.
Year 1 hires: 2 full-time engineers, 1 customer success rep.
Year 2 hires: 1 product manager, 1 sales lead, 1 QA specialist.`}
        rows={4}
      />

      <FormField
        label="Advisory Board (If Applicable)"
        id="organizationAndManagement.advisoryBoard"
        name="advisoryBoard"
        type="textarea"
        value={data.advisoryBoard}
        onChange={handleChange}
        placeholder={`Example: Our advisory board includes:
- Dr. Amina Patel, AI ethics advisor and University of Waterloo professor.
- Raj Gupta, former VP at a national SaaS firm, advising on go-to-market.
- Lisa Murray, local entrepreneur with experience in rural business development.`}
        rows={5}
      />
    </div>
  );
};

export default OrganizationAndManagementPart;

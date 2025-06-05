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
      <h2 className="text-xl font-semibold text-gray-800 mb-6">4. Organization and Management</h2>

      <FormField
        label="Organizational Structure (Description or Link to Chart)"
        id="organizationAndManagement.organizationalStructureChart"
        name="organizationalStructureChart"
        type="textarea"
        value={data.organizationalStructureChart}
        onChange={handleChange}
        placeholder="Describe your company's organizational structure. You can describe it here or link to a visual chart if you have one."
        rows={4}
      />

      <FormField
        label="Management Team Bios"
        id="organizationAndManagement.managementTeamBios"
        name="managementTeamBios"
        type="textarea"
        value={data.managementTeamBios}
        onChange={handleChange}
        placeholder="Provide detailed biographies for key management team members, highlighting relevant experience and expertise."
        rows={6}
      />

      <FormField
        label="Roles and Responsibilities"
        id="organizationAndManagement.rolesAndResponsibilities"
        name="rolesAndResponsibilities"
        type="textarea"
        value={data.rolesAndResponsibilities}
        onChange={handleChange}
        placeholder="Outline the primary roles and responsibilities of each key team member or department."
        rows={4}
      />

      <FormField
        label="Personnel Plan"
        id="organizationAndManagement.personnelPlan"
        name="personnelPlan"
        type="textarea"
        value={data.personnelPlan}
        onChange={handleChange}
        placeholder="Describe your current and future staffing needs, including number of employees, types of roles, and hiring plans."
        rows={4}
      />

      <FormField
        label="Advisory Board (If Applicable)"
        id="organizationAndManagement.advisoryBoard"
        name="advisoryBoard"
        type="textarea"
        value={data.advisoryBoard}
        onChange={handleChange}
        placeholder="If you have an advisory board, list the members and briefly describe their roles and contributions."
        rows={3}
      />
    </div>
  );
};

export default OrganizationAndManagementPart;

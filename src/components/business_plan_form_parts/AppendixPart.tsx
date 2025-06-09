/**
 * @file AppendixPart.tsx
 * @description Component for the Appendix section of the business plan form.
 * This section is for listing supporting documents and any other additional information.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface AppendixData {
  supportingDocumentsList: string;
  additionalInformation: string;
}

interface AppendixPartProps {
  data: AppendixData;
  onChange: (fieldName: string, value: string) => void;
}

const AppendixPart: React.FC<AppendixPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">9. Appendix</h2>

      <FormField
        label="List of Supporting Documents"
        id="appendix.supportingDocumentsList"
        name="supportingDocumentsList"
        type="textarea"
        value={data.supportingDocumentsList}
        onChange={handleChange}
        placeholder={`Example: 
• Resumes of Jane Doe (CEO), John Smith (CTO), and Emily Tran (COO)  
• Letters of support from Community Futures and Innovation Kent  
• Product development roadmap and sprint timelines  
• Trademark filings for SmartOps and SyncCRM  
• Detailed Year 1–3 financial model (Excel)  
• Customer testimonials from beta partners  
• Market research report: AI adoption in Ontario SMEs`}
        rows={9}
      />

      <FormField
        label="Additional Information (Optional)"
        id="appendix.additionalInformation"
        name="additionalInformation"
        type="textarea"
        value={data.additionalInformation}
        onChange={handleChange}
        placeholder={`Example: IntelliNova is exploring an academic research partnership with the University of Windsor to study the socioeconomic impact of AI adoption in rural businesses. We are also drafting an internal code of ethics for responsible AI deployment.`}
        rows={4}
      />
    </div>
  );
};

export default AppendixPart;

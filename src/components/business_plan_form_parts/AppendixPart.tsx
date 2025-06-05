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
        placeholder="List any supporting documents you will include in your appendix (e.g., resumes of key personnel, permits, licenses, letters of support, market research data, detailed financial statements). You can list them here and attach them separately when submitting your full plan."
        rows={5}
      />

      <FormField
        label="Additional Information (Optional)"
        id="appendix.additionalInformation"
        name="additionalInformation"
        type="textarea"
        value={data.additionalInformation}
        onChange={handleChange}
        placeholder="Include any other relevant information that doesn't fit elsewhere in the business plan."
        rows={5}
      />
    </div>
  );
};

export default AppendixPart;

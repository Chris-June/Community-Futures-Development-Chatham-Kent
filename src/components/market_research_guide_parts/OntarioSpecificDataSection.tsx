/**
 * OntarioSpecificDataSection.tsx
 * 
 * Purpose: Defines the React component for the Ontario-Specific Data & Local Insights section 
 *          of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to Chatham-Kent economic development,
 *                   local business associations, networking events, and local demographics.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface OntarioSpecificDataSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const OntarioSpecificDataSection: React.FC<OntarioSpecificDataSectionProps> = ({ form }) => {
  const sectionId = 'ontarioSpecificData';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['ontarioSpecificData'], title: string, placeholderText: string) => {
    const fullFieldName = `${sectionId}.${fieldName}` as const;
    return (
      <div className="space-y-2 mb-6 p-4 border rounded-md">
        <FormField
          control={form.control}
          name={fullFieldName}
          render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, typeof fullFieldName> }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">{title}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={placeholderText}
                  {...field}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Ontario-Specific Data & Local Insights</h2>
      {renderNotesField(
        'chathamKentEconomicDevelopmentNotes',
        'Chatham-Kent Economic Development Resources',
        'Notes on resources from the Chatham-Kent Economic Development department, local SBDCs, or municipal websites (e.g., reports, statistics, business support programs).'
      )}
      {renderNotesField(
        'localBusinessAssociationsNotes',
        'Local Business Associations & Chambers of Commerce',
        'Information from or about local business associations, BIA (Business Improvement Areas), or Chambers of Commerce (e.g., events, member directories, local industry insights).'
      )}
      {renderNotesField(
        'networkingLocalEventsNotes',
        'Networking & Local Events',
        'Insights gained from local networking events, workshops, or community consultations relevant to your market research.'
      )}
      {renderNotesField(
        'understandingLocalDemographicsNotes',
        'Understanding Local Demographics (Chatham-Kent & Ontario)',
        'Notes on specific demographic data for Chatham-Kent or relevant Ontario regions (e.g., age, income, population trends, cultural makeup) and how it impacts your market.'
      )}
    </div>
  );
};

export default OntarioSpecificDataSection;

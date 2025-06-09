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
        `Notes on resources from the Chatham-Kent Economic Development department, local SBDCs, or municipal websites (e.g., reports, statistics, business support programs).

Example Content:
We referenced the Chatham-Kent Economic Development Annual Report and regional SME census data to identify local AI adoption gaps. The CKED’s “Digital Main Street” portal informed our pilot outreach strategy. Business support grants for tech startups were flagged as key growth accelerators.`
      )}
      {renderNotesField(
        'localBusinessAssociationsNotes',
        'Local Business Associations & Chambers of Commerce',
        `Information from or about local business associations, BIA (Business Improvement Areas), or Chambers of Commerce (e.g., events, member directories, local industry insights).

Example Content:
The Chatham-Kent Chamber of Commerce member directory provided warm leads for our beta outreach. BIA event calendars helped identify key times for community demos. We also met with Innovation Kent to discuss co-hosting an “AI & Your Business” seminar series.`
      )}
      {renderNotesField(
        'networkingLocalEventsNotes',
        'Networking & Local Events',
        `Insights gained from local networking events, workshops, or community consultations relevant to your market research.

Example Content:
Attended Small Business Week networking breakfast and CK Business Expo. Received strong feedback from service-based businesses eager for better client tracking and automated workflows. Several participants volunteered for beta testing IntelliNova tools.`
      )}
      {renderNotesField(
        'understandingLocalDemographicsNotes',
        'Understanding Local Demographics (Chatham-Kent & Ontario)',
        `Notes on specific demographic data for Chatham-Kent or relevant Ontario regions (e.g., age, income, population trends, cultural makeup) and how it impacts your market.

Example Content:
Chatham-Kent’s aging population and rise in solopreneurs suggest a growing need for user-friendly AI tools with strong onboarding. Average household income falls below the provincial median, reinforcing the value of freemium access and flexible pricing tiers.`
      )}
    </div>
  );
};

export default OntarioSpecificDataSection;

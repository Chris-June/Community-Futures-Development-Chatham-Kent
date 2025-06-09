/**
 * SecondaryResearchSection.tsx
 * 
 * Purpose: Defines the React component for the Secondary Research section of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to government resources, industry reports, and online resources.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface SecondaryResearchSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const SecondaryResearchSection: React.FC<SecondaryResearchSectionProps> = ({ form }) => {
  const sectionId = 'secondaryResearch';

  // Helper function to render a Textarea field for a secondary research source
  const renderSourceField = (sourceName: 'governmentResources' | 'industryReports' | 'onlineResources', title: string, placeholderText: string) => {
    const fieldName = `${sectionId}.${sourceName}.notes` as const;
    return (
      <div className="space-y-2 mb-6 p-4 border rounded-md">
        <FormField
          control={form.control}
          name={fieldName}
          render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, typeof fieldName> }) => (
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Secondary Research Sources</h2>
      {renderSourceField(
        'governmentResources',
        'Government Resources',
        `e.g., Statistics Canada, Industry Canada, provincial and municipal government websites. List specific reports, datasets, or portals relevant to your research.

Example Content:
Statistics Canada’s SME performance dashboard provided insights into digital tool adoption by business size and sector. The Ontario Ministry of Economic Development’s AI Innovation brief (2023) helped identify funding gaps. We also consulted CK’s municipal broadband expansion reports.`
      )}
      {renderSourceField(
        'industryReports',
        'Industry Reports and Publications',
        `e.g., Market research firms (Gartner, Forrester, Nielsen), trade association publications, academic journals. Note key findings or reports.

Example Content:
A Forrester report on AI adoption in North America highlighted barriers in onboarding and cost perception—directly relevant to IntelliNova’s pricing model. We also reviewed MaRS Discovery District publications focused on AI commercialization in Canada.`
      )}
      {renderSourceField(
        'onlineResources',
        'Online Resources and Databases',
        `e.g., Competitor websites, industry blogs, news articles, online forums, Google Trends, university research databases. Document useful websites or search queries.

Example Content:
We analyzed Google Trends data for “AI automation tools Ontario” and reviewed user forums on Reddit discussing alternatives to Asana and Trello. Competitor blogs revealed a growing trend in offering guided onboarding and case studies.`
      )}
    </div>
  );
};

export default SecondaryResearchSection;

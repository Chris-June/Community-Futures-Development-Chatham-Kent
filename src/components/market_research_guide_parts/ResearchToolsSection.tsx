/**
 * ResearchToolsSection.tsx
 * 
 * Purpose: Defines the React component for the Tools and Techniques for Market Research section 
 *          of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to online survey tools, data analysis software,
 *                   SEO/keyword research tools, and social media listening tools.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface ResearchToolsSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const ResearchToolsSection: React.FC<ResearchToolsSectionProps> = ({ form }) => {
  const sectionId = 'researchTools';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['researchTools'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Tools and Techniques for Market Research</h2>
      {renderNotesField(
        'onlineSurveyToolsNotes',
        'Online Survey Tools',
        'e.g., SurveyMonkey, Google Forms, Typeform. List tools you plan to use or have considered, and why.'
      )}
      {renderNotesField(
        'dataAnalysisSoftwareNotes',
        'Data Analysis Software',
        'e.g., Excel, SPSS, R, Python (with libraries like Pandas, NumPy). Note any software you will use for analyzing quantitative or qualitative data.'
      )}
      {renderNotesField(
        'seoKeywordResearchToolsNotes',
        'SEO & Keyword Research Tools',
        'e.g., Google Keyword Planner, SEMrush, Ahrefs, Moz Keyword Explorer. Describe tools for understanding search trends and online visibility.'
      )}
      {renderNotesField(
        'socialMediaListeningToolsNotes',
        'Social Media Listening Tools',
        'e.g., Hootsuite, Sprout Social, Brandwatch, Mention. List tools for monitoring social media conversations about your industry, competitors, or brand.'
      )}
    </div>
  );
};

export default ResearchToolsSection;

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
        `e.g., SurveyMonkey, Google Forms, Typeform. List tools you plan to use or have considered, and why.

Example Content:
We used Typeform to build a clean, mobile-friendly survey focused on AI tool adoption. The logic jump features helped personalize question flows. Survey links were distributed through email and LinkedIn to target business owners in Chatham-Kent.
`
      )}
      {renderNotesField(
        'dataAnalysisSoftwareNotes',
        'Data Analysis Software',
        `e.g., Excel, SPSS, R, Python (with libraries like Pandas, NumPy). Note any software you will use for analyzing quantitative or qualitative data.

Example Content:
Google Sheets was used for initial sorting and filtering. We also used Python with Pandas for cleaning larger data sets and generating frequency distributions. Thematic insights from interviews were tagged and grouped using Notion.
`
      )}
      {renderNotesField(
        'seoKeywordResearchToolsNotes',
        'SEO & Keyword Research Tools',
        `e.g., Google Keyword Planner, SEMrush, Ahrefs, Moz Keyword Explorer. Describe tools for understanding search trends and online visibility.

Example Content:
SEMrush was used to analyze search behavior for “AI workflow tools for small business.” We noted seasonal spikes and regional keyword patterns that informed copy for our product landing pages and ad targeting strategy.
`
      )}
      {renderNotesField(
        'socialMediaListeningToolsNotes',
        'Social Media Listening Tools',
        `e.g., Hootsuite, Sprout Social, Brandwatch, Mention. List tools for monitoring social media conversations about your industry, competitors, or brand.

Example Content:
We used Brandwatch to monitor sentiment around AI in rural Ontario. Linked keywords like “automation” and “overwhelming tech” helped us refine our brand messaging. Positive buzz from a Chamber event was tracked and reshared using Hootsuite.
`
      )}
    </div>
  );
};

export default ResearchToolsSection;

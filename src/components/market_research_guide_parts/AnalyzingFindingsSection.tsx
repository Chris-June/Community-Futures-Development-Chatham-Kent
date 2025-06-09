/**
 * AnalyzingFindingsSection.tsx
 * 
 * Purpose: Defines the React component for the Analyzing Findings and Reporting section 
 *          of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to data cleaning/preparation, 
 *                   quantitative analysis, qualitative analysis, drawing conclusions, and reporting findings.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface AnalyzingFindingsSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const AnalyzingFindingsSection: React.FC<AnalyzingFindingsSectionProps> = ({ form }) => {
  const sectionId = 'analyzingFindings';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['analyzingFindings'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Analyzing Findings and Reporting</h2>
      {renderNotesField(
        'dataCleaningPreparationNotes',
        'Data Cleaning and Preparation',
        `Describe the steps taken to clean and prepare your collected data for analysis (e.g., handling missing data, outliers, formatting).
Example Content:
We consolidated survey data from Typeform and removed incomplete entries. All categorical fields were standardized (e.g., "Tech Company" vs "Technology Co.") and dates were formatted to ISO standard. Outliers in revenue were flagged but retained for trend analysis.
`
      )}
      {renderNotesField(
        'quantitativeAnalysisNotes',
        'Quantitative Analysis',
        `Detail the methods used for quantitative analysis (e.g., statistical tests, descriptive statistics, charts, graphs). Summarize key numerical findings.
Example Content:
We used descriptive statistics to summarize user demographics. A paired t-test was run on productivity metrics before and after IntelliNova tool usage. Charts show a 37% average time savings across beta participants.
`
      )}
      {renderNotesField(
        'qualitativeAnalysisNotes',
        'Qualitative Analysis',
        `Explain how qualitative data (e.g., from interviews, focus groups) was analyzed (e.g., thematic analysis, content analysis). Summarize key themes and insights.
Example Content:
Conducted thematic analysis of open-ended feedback. Key themes included appreciation for local support, concerns about data privacy, and a desire for more customization. Used keyword frequency mapping to identify patterns.
`
      )}
      {renderNotesField(
        'drawingConclusionsNotes',
        'Drawing Conclusions',
        `Based on your analysis, what are the main conclusions? How do these findings answer your initial research questions or objectives?
Example Content:
Findings show that IntelliNova's SmartOps tool improves SME workflow efficiency and has strong appeal due to its Canadian localization. Survey responses aligned closely with original hypotheses, especially around perceived ease-of-use and support satisfaction.
`
      )}
      {renderNotesField(
        'reportingFindingsNotes',
        'Reporting Findings',
        `Outline how you will report your findings (e.g., written report, presentation). Consider the audience and key messages to convey. Include any visual aids planned.
Example Content:
Findings will be shared in a written report and presented to stakeholders at the Chamber of Commerce. Visuals include a bar chart of time savings, user quotes, and a summary matrix of product feedback themes. A one-pager will be used for broader outreach.
`
      )}
    </div>
  );
};

export default AnalyzingFindingsSection;

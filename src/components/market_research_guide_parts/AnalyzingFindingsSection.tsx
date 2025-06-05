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
        'Describe the steps taken to clean and prepare your collected data for analysis (e.g., handling missing data, outliers, formatting).'
      )}
      {renderNotesField(
        'quantitativeAnalysisNotes',
        'Quantitative Analysis',
        'Detail the methods used for quantitative analysis (e.g., statistical tests, descriptive statistics, charts, graphs). Summarize key numerical findings.'
      )}
      {renderNotesField(
        'qualitativeAnalysisNotes',
        'Qualitative Analysis',
        'Explain how qualitative data (e.g., from interviews, focus groups) was analyzed (e.g., thematic analysis, content analysis). Summarize key themes and insights.'
      )}
      {renderNotesField(
        'drawingConclusionsNotes',
        'Drawing Conclusions',
        'Based on your analysis, what are the main conclusions? How do these findings answer your initial research questions or objectives?'
      )}
      {renderNotesField(
        'reportingFindingsNotes',
        'Reporting Findings',
        'Outline how you will report your findings (e.g., written report, presentation). Consider the audience and key messages to convey. Include any visual aids planned.'
      )}
    </div>
  );
};

export default AnalyzingFindingsSection;

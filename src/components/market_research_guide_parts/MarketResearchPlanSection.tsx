/**
 * MarketResearchPlanSection.tsx
 * 
 * Purpose: Defines the React component for the Developing Your Market Research Plan section 
 *          of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to research objectives, methodologies,
 *                   budget/timeline, and deliverables/reporting.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface MarketResearchPlanSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const MarketResearchPlanSection: React.FC<MarketResearchPlanSectionProps> = ({ form }) => {
  const sectionId = 'marketResearchPlan';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['marketResearchPlan'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Developing Your Market Research Plan</h2>
      {renderNotesField(
        'researchObjectivesNotes',
        'Research Objectives',
        `Clearly define the specific objectives of your market research. What questions do you need to answer? What information are you seeking?

Example Content:
Determine which AI features are most desired by SME owners in Chatham-Kent. Identify current frustrations with workflow tools. Validate pricing sensitivity for tiered software plans. Understand which onboarding methods increase trust and retention.`
      )}
      {renderNotesField(
        'researchMethodologiesNotes',
        'Research Methodologies',
        `Outline the specific primary and secondary research methodologies you will use to achieve your objectives (e.g., surveys, interviews, data analysis of reports).

Example Content:
• Primary: 20 structured interviews with local SMEs, 2 online surveys targeting different industries.  
• Secondary: Review of government innovation reports and academic research on rural AI adoption trends.`
      )}
      {renderNotesField(
        'budgetTimelineNotes',
        'Budget and Timeline',
        `Estimate the budget required for your research activities (e.g., tools, incentives, time). Develop a realistic timeline for completing each phase of your research.

Example Content:
Budget: $3,500 total  
• $500 – Survey platform license  
• $1,500 – Participant incentives  
• $1,000 – Contracted analyst  
• $500 – Graphic design for presentation  
Timeline: Month 1 – Planning, Month 2 – Execution, Month 3 – Reporting`
      )}
      {renderNotesField(
        'deliverablesReportingNotes',
        'Deliverables and Reporting',
        `What are the expected outputs of your research (e.g., a formal report, presentation, data sets)? How will you present and share your findings?

Example Content:
Deliverables: Executive summary report, interactive data dashboard (Power BI), and community presentation deck. Findings will be shared with economic development officers and local business groups.`
      )}
    </div>
  );
};

export default MarketResearchPlanSection;

/**
 * CustomerAnalysisSection.tsx
 * 
 * Purpose: Defines the React component for the Customer Analysis section of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to target audience, customer needs/pain points,
 *                   customer journey mapping, and Ontario-specific customer personas.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface CustomerAnalysisSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const CustomerAnalysisSection: React.FC<CustomerAnalysisSectionProps> = ({ form }) => {
  const sectionId = 'customerAnalysis';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['customerAnalysis'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Customer Analysis</h2>
      {renderNotesField(
        'targetAudienceNotes',
        'Target Audience Definition',
        'Describe your ideal customer. Include demographics (age, gender, location, income), psychographics (lifestyle, values, interests), and geographics (specific regions).'
      )}
      {renderNotesField(
        'customerNeedsPainPointsNotes',
        'Customer Needs & Pain Points',
        'What problems does your product/service solve for your target audience? What are their unmet needs or frustrations with current solutions?'
      )}
      {renderNotesField(
        'customerJourneyMappingNotes',
        'Customer Journey Mapping',
        'Outline the typical journey a customer takes from awareness to purchase and beyond. Identify key touchpoints and potential areas for improvement.'
      )}
      {renderNotesField(
        'customerPersonasOntarioNotes',
        'Customer Personas (Ontario Focus)',
        'Develop detailed personas for your key customer segments, with a focus on Ontario-specific characteristics or behaviors if applicable.'
      )}
    </div>
  );
};

export default CustomerAnalysisSection;

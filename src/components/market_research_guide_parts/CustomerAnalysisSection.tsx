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
        'Example: Describe your ideal customer. Include demographics (age, gender, location, income), psychographics (lifestyle, values, interests), and geographics (specific regions).\n\nExample Content:\nIntelliNova\'s ideal customer is a small to mid-sized business owner (age 35–60), located in Southwestern Ontario, typically managing 5–50 employees. These customers are tech-aware but not tech-savvy, value time-saving solutions, and often lack dedicated IT support.\n'
      )}
      {renderNotesField(
        'customerNeedsPainPointsNotes',
        'Customer Needs & Pain Points',
        'Example: What problems does your product/service solve for your target audience? What are their unmet needs or frustrations with current solutions?\n\nExample Content:\nCustomers are frustrated with clunky enterprise tools or generic apps that don’t fit their workflow. They need automation without complexity. They want human support, fast onboarding, and software that feels made for them—not just adapted from the enterprise market.\n'
      )}
      {renderNotesField(
        'customerJourneyMappingNotes',
        'Customer Journey Mapping',
        'Example: Outline the typical journey a customer takes from awareness to purchase and beyond. Identify key touchpoints and potential areas for improvement.\n\nExample Content:\nAwareness: Sees social post from local Chamber  \nConsideration: Attends IntelliNova webinar, requests a demo  \nEvaluation: Engages in a free trial, speaks with co-founder  \nPurchase: Signs up for Premium plan with onboarding support  \nPost-Purchase: Monthly product check-ins, quarterly strategy calls\n'
      )}
      {renderNotesField(
        'customerPersonasOntarioNotes',
        'Customer Personas (Ontario Focus)',
        'Example: Develop detailed personas for your key customer segments, with a focus on Ontario-specific characteristics or behaviors if applicable.\n\nExample Content:\n“Practical Peter” – Owns a logistics business in Chatham-Kent. Age 48. Values reliability and ROI. Uses email and attends in-person events.  \n“Digital Diane” – 38-year-old owner of a boutique marketing firm in Windsor. Early tech adopter. Prefers automated tools and async support.\n'
      )}
    </div>
  );
};

export default CustomerAnalysisSection;

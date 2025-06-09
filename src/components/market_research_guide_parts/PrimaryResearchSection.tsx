/**
 * PrimaryResearchSection.tsx
 * 
 * Purpose: Defines the React component for the Primary Research section of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to surveys, interviews, focus groups, and observation.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface PrimaryResearchSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const PrimaryResearchSection: React.FC<PrimaryResearchSectionProps> = ({ form }) => {
  const sectionId = 'primaryResearch';

  // Helper function to render a set of Textarea fields for a primary research method
  const renderMethodFields = (methodName: 'surveys' | 'interviews' | 'focusGroups' | 'observation', title: string) => {
    const basePath = `${sectionId}.${methodName}` as const;
    return (
      <div className="space-y-4 mb-6 p-4 border rounded-md">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <FormField
          control={form.control}
          name={`${basePath}.designNotes`}
          render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof basePath}.designNotes`> }) => (
            <FormItem>
              <FormLabel className="text-md font-medium">Design Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Detail the design of your ${methodName.toLowerCase()}. Consider questions, format, participant selection criteria, etc.\n\nExample Content:\nOur survey includes 12 multiple-choice questions and 3 open-ended responses focused on productivity tools and AI familiarity. Participants are selected from the Chamber directory and local business networks, targeting owners/operators of SMEs with 5–50 employees.`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${basePath}.distributionNotes`}
          render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof basePath}.distributionNotes`> }) => (
            <FormItem>
              <FormLabel className="text-md font-medium">Distribution/Recruitment Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`How will you distribute the ${methodName.toLowerCase()} or recruit participants? Describe the channels and logistics.\n\nExample Content:\nSurveys will be emailed via Mailchimp to a segmented list of 300 local SMEs. Interviews will be scheduled with referrals from CK Chamber and Innovation Kent. Focus groups will be hosted at co-working spaces with coffee incentives provided.`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${basePath}.analysisNotes`}
          render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof basePath}.analysisNotes`> }) => (
            <FormItem>
              <FormLabel className="text-md font-medium">Analysis Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={`Outline your plan for analyzing the data collected from ${methodName.toLowerCase()}. What tools or techniques will you use?\n\nExample Content:\nQuantitative data will be analyzed using Google Sheets and charts to identify usage patterns and pain points. Open-ended responses will undergo basic thematic analysis. Interview transcripts will be coded in Notion to extract key insights.`}
                  {...field}
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Primary Research Methods</h2>
      {renderMethodFields('surveys', 'Surveys')}
      {renderMethodFields('interviews', 'Interviews')}
      {renderMethodFields('focusGroups', 'Focus Groups')}
      {renderMethodFields('observation', 'Observation')}
    </div>
  );
};

export default PrimaryResearchSection;

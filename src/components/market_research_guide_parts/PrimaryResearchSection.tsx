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
                  placeholder={`Detail the design of your ${methodName.toLowerCase()}. Consider questions, format, participant selection criteria, etc.`}
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
                  placeholder={`How will you distribute the ${methodName.toLowerCase()} or recruit participants? Describe the channels and logistics.`}
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
                  placeholder={`Outline your plan for analyzing the data collected from ${methodName.toLowerCase()}. What tools or techniques will you use?`}
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

/**
 * IntroductionSection.tsx
 * 
 * Purpose: Defines the React component for the Introduction section of the Market Research Guide.
 * Responsibilities: Renders form fields for introduction notes and handles data input.
 * Assumptions: Relies on props for data (guideData) and change handling (handleInputChange).
 */
import React from 'react';
import { FormField } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface IntroductionSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ form }) => {
  const sectionId = 'introduction';

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name={`${sectionId}.purposeNotes`}
        render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof sectionId}.purposeNotes`> }) => (
          <FormItem>
            <FormLabel className="text-lg font-semibold">Purpose of Your Market Research</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Define the main objectives of your research. What specific questions do you want to answer? What are the boundaries of your research (e.g., specific geographic area, customer segment)?"
                {...field}
                rows={5}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${sectionId}.scopeNotes`}
        render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof sectionId}.scopeNotes`> }) => (
          <FormItem>
            <FormLabel className="text-lg font-semibold">Scope of Your Market Research</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Define the scope of your research. What are the boundaries (e.g., specific geographic area, customer segment)?"
                {...field}
                rows={5}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${sectionId}.methodologyOverviewNotes`}
        render={({ field }: { field: ControllerRenderProps<MarketResearchGuideData, `${typeof sectionId}.methodologyOverviewNotes`> }) => (
          <FormItem>
            <FormLabel className="text-lg font-semibold">Methodology Overview</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Briefly outline the research methodologies you plan to use (e.g., surveys, interviews, secondary data analysis)."
                {...field}
                rows={5}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default IntroductionSection;

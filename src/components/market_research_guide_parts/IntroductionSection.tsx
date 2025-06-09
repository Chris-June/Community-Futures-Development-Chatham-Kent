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
                placeholder={`Define the main objectives of your research. What specific questions do you want to answer? What are the boundaries of your research (e.g., specific geographic area, customer segment)?

Example Content:
This research aims to evaluate the demand for AI-first workflow automation tools among small businesses in Southwestern Ontario. Key questions include: What are the most common pain points in existing business software? What is the perceived value of AI-driven features? What support models are most appealing to non-technical users?`}
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
                placeholder={`Define the scope of your research. What are the boundaries (e.g., specific geographic area, customer segment)?

Example Content:
The research is limited to SMEs operating within a 150km radius of Chatham-Kent, Ontario, with a focus on professional services, logistics, and retail. Participants will include decision-makers with roles in operations or technology adoption.`}
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
                placeholder={`Briefly outline the research methodologies you plan to use (e.g., surveys, interviews, secondary data analysis).

Example Content:
We will use a combination of structured surveys (distributed via local chambers and online forums), follow-up interviews with 10 SME leaders, and secondary research from StatCan and MaRS Discovery District reports.`}
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

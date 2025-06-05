/**
 * MarketTrendsSection.tsx
 * 
 * Purpose: Defines the React component for the Market Trends and Industry Analysis section 
 *          of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to current market trends, industry growth potential,
 *                   technological advancements, and regulatory/economic factors, with an Ontario focus where applicable.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface MarketTrendsSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const MarketTrendsSection: React.FC<MarketTrendsSectionProps> = ({ form }) => {
  const sectionId = 'marketTrends';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['marketTrends'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Market Trends and Industry Analysis</h2>
      {renderNotesField(
        'currentMarketTrendsNotes',
        'Current Market Trends',
        'Identify and describe current trends in your industry/market. Consider consumer behavior shifts, product innovations, and overall market direction.'
      )}
      {renderNotesField(
        'industryGrowthPotentialOntarioNotes',
        'Industry Growth Potential (Ontario Focus)',
        'Assess the growth potential of your industry, particularly within Ontario. Are there emerging opportunities or declining segments?'
      )}
      {renderNotesField(
        'technologicalAdvancementsNotes',
        'Technological Advancements',
        'What technological advancements are impacting your industry? How might these technologies affect your business (opportunities or threats)?'
      )}
      {renderNotesField(
        'regulatoryEconomicFactorsOntarioNotes',
        'Regulatory & Economic Factors (Ontario Focus)',
        'Note any significant regulatory changes or economic factors (e.g., inflation, interest rates, government policies in Ontario) that could impact your market.'
      )}
    </div>
  );
};

export default MarketTrendsSection;

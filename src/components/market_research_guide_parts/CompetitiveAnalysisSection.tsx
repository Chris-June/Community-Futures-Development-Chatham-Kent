/**
 * CompetitiveAnalysisSection.tsx
 * 
 * Purpose: Defines the React component for the Competitive Analysis section of the Market Research Guide.
 * Responsibilities: Renders form fields for notes related to identifying competitors, SWOT analysis,
 *                   market positioning, and the Ontario competitive landscape.
 * Assumptions: Relies on react-hook-form for form management.
 */
import React from 'react';
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MarketResearchGuideData } from '@/types/marketResearchGuide';
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form';

interface CompetitiveAnalysisSectionProps {
  form: UseFormReturn<MarketResearchGuideData>; // Form context from react-hook-form
}

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({ form }) => {
  const sectionId = 'competitiveAnalysis';

  // Helper function to render a Textarea field
  const renderNotesField = (fieldName: keyof MarketResearchGuideData['competitiveAnalysis'], title: string, placeholderText: string) => {
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
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Competitive Analysis</h2>
      {renderNotesField(
        'identifyingCompetitorsNotes',
        'Identifying Competitors',
        'Example: List your direct and indirect competitors. Consider their products/services, market share, and customer base.\n\nExample Content:\nDirect competitors: Ada (Toronto) – conversational AI, Blue J – AI legal tech.  \nIndirect competitors: Monday.com, Zoho CRM, and regional IT consultants offering traditional software without AI integration.'
      )}
      {renderNotesField(
        'assessingStrengthsWeaknessesNotes',
        'Assessing Strengths & Weaknesses (SWOT Analysis for Competitors)',
        'Example: For key competitors, analyze their Strengths, Weaknesses, Opportunities, and Threats. How do you compare?\n\nExample Content:\nAda – Strength: Strong enterprise adoption. Weakness: Limited support for SMEs.  \nBlue J – Strength: Legal niche expertise. Weakness: Less flexible tech stack.  \nIntelliNova – Strength: Canadian SME focus, agile deployment. Weakness: Brand awareness still growing.'
      )}
      {renderNotesField(
        'marketPositioningNotes',
        'Market Positioning of Competitors',
        'Example: Describe how your competitors position themselves in the market (e.g., price, quality, innovation, customer service).\n\nExample Content:\nCompetitors often market themselves as either high-end enterprise platforms or general-purpose tools. IntelliNova is positioned as the “approachable AI-first solution for Canadian SMEs,” emphasizing customization, support, and ease-of-use.'
      )}
      {renderNotesField(
        'ontarioCompetitiveLandscapeNotes',
        'Ontario-Specific Competitive Landscape',
        'Example: Note any unique aspects of the competitive environment in Ontario or your specific local market (e.g., local regulations, dominant local players, specific consumer behaviors).\n\nExample Content:\nMany Ontario SMEs express distrust in outsourced tech and prefer regional providers. Local Chambers and funding groups (e.g., Innovation Kent) are strong allies. Some sectors (e.g., agriculture, manufacturing) are ripe for AI transformation but underrepresented.'
      )}
    </div>
  );
};

export default CompetitiveAnalysisSection;

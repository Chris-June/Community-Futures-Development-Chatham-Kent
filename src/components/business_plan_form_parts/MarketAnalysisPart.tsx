/**
 * @file MarketAnalysisPart.tsx
 * @description Component for the Market Analysis section of the business plan form.
 * This includes industry overview, target market details, market trends, competitive analysis (including SWOT),
 * and barriers to entry. It handles nested data structures for target market and SWOT analysis.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface MarketAnalysisData {
  industryOverview: string;
  targetMarket: {
    demographics: string;
    psychographics: string;
    needsAndPreferences: string;
    sizeAndGrowthRate: string;
  };
  marketTrends: string;
  competition: {
    directCompetitors: string;
    indirectCompetitors: string;
    swotAnalysis: {
      strengths: string;
      weaknesses: string;
      opportunities: string;
      threats: string;
    };
  };
  barriersToEntry: string;
}

interface MarketAnalysisPartProps {
  data: MarketAnalysisData;
  onChange: (fieldName: string, value: string) => void;
}

const MarketAnalysisPart: React.FC<MarketAnalysisPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">3. Market Analysis</h2>

      <FormField
        label="Industry Overview"
        id="marketAnalysis.industryOverview"
        name="industryOverview"
        type="textarea"
        value={data.industryOverview}
        onChange={handleChange}
        placeholder="Describe the industry, its size, growth rate, and key characteristics."
        rows={4}
      />

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Target Market</h3>
        <FormField
          label="Demographics"
          id="marketAnalysis.targetMarket.demographics"
          name="targetMarket.demographics"
          type="textarea"
          value={data.targetMarket.demographics}
          onChange={handleChange}
          placeholder="Describe the age, gender, income, location, etc., of your target customers."
          rows={3}
        />
        <FormField
          label="Psychographics"
          id="marketAnalysis.targetMarket.psychographics"
          name="targetMarket.psychographics"
          type="textarea"
          value={data.targetMarket.psychographics}
          onChange={handleChange}
          placeholder="Describe the lifestyle, values, interests, and attitudes of your target customers."
          rows={3}
        />
        <FormField
          label="Needs and Preferences"
          id="marketAnalysis.targetMarket.needsAndPreferences"
          name="targetMarket.needsAndPreferences"
          type="textarea"
          value={data.targetMarket.needsAndPreferences}
          onChange={handleChange}
          placeholder="What specific needs does your target market have? What are their preferences?"
          rows={3}
        />
        <FormField
          label="Size and Growth Rate"
          id="marketAnalysis.targetMarket.sizeAndGrowthRate"
          name="targetMarket.sizeAndGrowthRate"
          type="textarea"
          value={data.targetMarket.sizeAndGrowthRate}
          onChange={handleChange}
          placeholder="Estimate the size of your target market and its potential for growth."
          rows={2}
        />
      </div>

      <FormField
        label="Market Trends"
        id="marketAnalysis.marketTrends"
        name="marketTrends"
        type="textarea"
        value={data.marketTrends}
        onChange={handleChange}
        placeholder="Identify key trends in the market and how they might impact your business."
        rows={4}
      />

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Competition</h3>
        <FormField
          label="Direct Competitors"
          id="marketAnalysis.competition.directCompetitors"
          name="competition.directCompetitors"
          type="textarea"
          value={data.competition.directCompetitors}
          onChange={handleChange}
          placeholder="Identify your main direct competitors and their offerings."
          rows={3}
        />
        <FormField
          label="Indirect Competitors"
          id="marketAnalysis.competition.indirectCompetitors"
          name="competition.indirectCompetitors"
          type="textarea"
          value={data.competition.indirectCompetitors}
          onChange={handleChange}
          placeholder="Identify any indirect competitors or alternative solutions."
          rows={3}
        />
        <div className="mt-4 p-3 border border-gray-300 rounded-md bg-white">
            <h4 className="text-md font-medium text-gray-600 mb-2">SWOT Analysis (for your business relative to competition)</h4>
            <FormField
                label="Strengths"
                id="marketAnalysis.competition.swotAnalysis.strengths"
                name="competition.swotAnalysis.strengths"
                type="textarea"
                value={data.competition.swotAnalysis.strengths}
                onChange={handleChange}
                placeholder="What are your company's internal strengths?"
                rows={2}
            />
            <FormField
                label="Weaknesses"
                id="marketAnalysis.competition.swotAnalysis.weaknesses"
                name="competition.swotAnalysis.weaknesses"
                type="textarea"
                value={data.competition.swotAnalysis.weaknesses}
                onChange={handleChange}
                placeholder="What are your company's internal weaknesses?"
                rows={2}
            />
            <FormField
                label="Opportunities"
                id="marketAnalysis.competition.swotAnalysis.opportunities"
                name="competition.swotAnalysis.opportunities"
                type="textarea"
                value={data.competition.swotAnalysis.opportunities}
                onChange={handleChange}
                placeholder="What external opportunities can your company leverage?"
                rows={2}
            />
            <FormField
                label="Threats"
                id="marketAnalysis.competition.swotAnalysis.threats"
                name="competition.swotAnalysis.threats"
                type="textarea"
                value={data.competition.swotAnalysis.threats}
                onChange={handleChange}
                placeholder="What external threats does your company face?"
                rows={2}
            />
        </div>
      </div>

      <FormField
        label="Barriers to Entry"
        id="marketAnalysis.barriersToEntry"
        name="barriersToEntry"
        type="textarea"
        value={data.barriersToEntry}
        onChange={handleChange}
        placeholder="What are the potential barriers to entry for new competitors in this market?"
        rows={3}
      />
    </div>
  );
};

export default MarketAnalysisPart;

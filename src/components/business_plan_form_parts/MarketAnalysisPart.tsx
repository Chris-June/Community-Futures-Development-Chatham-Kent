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
        placeholder="Example: The AI software industry is experiencing rapid global growth, projected to exceed $500 billion by 2027. In Canada, AI adoption is surging among small businesses seeking operational efficiency. This industry is characterized by high innovation, frequent disruption, and increasing demand for tailored solutions in underserved regional markets like Chatham-Kent."
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
          placeholder="Example: Small to mid-sized businesses (5–50 employees) in Southwestern Ontario, particularly in logistics, retail, and professional services. Decision-makers are typically aged 35–60, with moderate to high digital literacy and annual revenues ranging from $500K to $5M."
          rows={3}
        />
        <FormField
          label="Psychographics"
          id="marketAnalysis.targetMarket.psychographics"
          name="targetMarket.psychographics"
          type="textarea"
          value={data.targetMarket.psychographics}
          onChange={handleChange}
          placeholder="Example: These businesses value efficiency, cost-savings, and innovation but are often overwhelmed by complex tech. They prefer hands-on service and local support. Their leaders are pragmatic early adopters open to intelligent systems that show clear ROI and ease-of-use."
          rows={3}
        />
        <FormField
          label="Needs and Preferences"
          id="marketAnalysis.targetMarket.needsAndPreferences"
          name="targetMarket.needsAndPreferences"
          type="textarea"
          value={data.targetMarket.needsAndPreferences}
          onChange={handleChange}
          placeholder="Example: They need affordable, scalable digital tools to automate operations, manage clients, and streamline data. Preferences include intuitive interfaces, personalized onboarding, and responsive customer support that understands regional business culture."
          rows={3}
        />
        <FormField
          label="Size and Growth Rate"
          id="marketAnalysis.targetMarket.sizeAndGrowthRate"
          name="targetMarket.sizeAndGrowthRate"
          type="textarea"
          value={data.targetMarket.sizeAndGrowthRate}
          onChange={handleChange}
          placeholder="Example: Over 15,000 SMEs operate within a 200km radius of Chatham-Kent. This segment is growing at ~3% annually. A large percentage are digitizing core operations post-COVID, presenting a strong opportunity for AI-first platforms built for local scalability."
          rows={4}
        />
      </div>

      <FormField
        label="Market Trends"
        id="marketAnalysis.marketTrends"
        name="marketTrends"
        type="textarea"
        value={data.marketTrends}
        onChange={handleChange}
        placeholder="Example: Key trends include rising demand for AI-powered automation, the normalization of hybrid work models, and a shift toward no-code/low-code platforms. Businesses increasingly expect integrated, smart systems rather than siloed software tools."
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
          placeholder="Direct competitors include Toronto-based AI SaaS providers like Ada and Blue J. These companies offer automation tools but lack tailored services for regional SMEs or localized implementation support."
          rows={3}
        />
        <FormField
          label="Indirect Competitors"
          id="marketAnalysis.competition.indirectCompetitors"
          name="competition.indirectCompetitors"
          type="textarea"
          value={data.competition.indirectCompetitors}
          onChange={handleChange}
          placeholder="Example: Indirect competitors include traditional CRM and workflow platforms like Monday.com and Salesforce, as well as IT consultants offering manual solutions. While functional, these options are often too complex or costly for small regional businesses."
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
                placeholder="Example: Local presence, rapid deployment timelines, flexible pricing, deep GPT integration, and strong founder credibility in both tech and business development."
                rows={2}
            />
            <FormField
                label="Weaknesses"
                id="marketAnalysis.competition.swotAnalysis.weaknesses"
                name="competition.swotAnalysis.weaknesses"
                type="textarea"
                value={data.competition.swotAnalysis.weaknesses}
                onChange={handleChange}
                placeholder="Example: Limited brand awareness outside of Ontario, lean initial team size, and heavy reliance on strategic partnerships for scaling."
                rows={2}
            />
            <FormField
                label="Opportunities"
                id="marketAnalysis.competition.swotAnalysis.opportunities"
                name="competition.swotAnalysis.opportunities"
                type="textarea"
                value={data.competition.swotAnalysis.opportunities}
                onChange={handleChange}
                placeholder="Example: Increase in government funding for AI innovation, underserved rural markets, and growing demand for ethical AI solutions tailored to Canadian compliance standards."
                rows={2}
            />
            <FormField
                label="Threats"
                id="marketAnalysis.competition.swotAnalysis.threats"
                name="competition.swotAnalysis.threats"
                type="textarea"
                value={data.competition.swotAnalysis.threats}
                onChange={handleChange}
                placeholder="Example: Potential market saturation from big tech, rapid evolution of AI tools requiring constant adaptation, and rising customer expectations for full-service support."
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
        placeholder="Example: High technical expertise required, upfront development costs, evolving regulatory compliance for AI use in Canada, and trust-building challenges with non-technical SME audiences."
        rows={3}
      />
    </div>
  );
};

export default MarketAnalysisPart;

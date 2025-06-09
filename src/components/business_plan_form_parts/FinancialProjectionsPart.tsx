/**
 * @file FinancialProjectionsPart.tsx
 * @description Component for the Financial Projections section of the business plan form.
 * This covers key assumptions, startup costs, projected financial statements, break-even analysis, and financial ratios.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface FinancialProjectionsData {
  keyAssumptions: string;
  startupCostsTable: string;
  salesForecastTable: string; // Added for sales forecast
  financialStatements: {
    incomeStatementProjections: string;
    balanceSheetProjections: string;
    cashFlowProjections: string;
  };
  breakEvenAnalysis: string;
  financialRatios: string;
}

interface FinancialProjectionsPartProps {
  data: FinancialProjectionsData;
  onChange: (fieldName: string, value: string) => void;
}

const FinancialProjectionsPart: React.FC<FinancialProjectionsPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">8. Financial Projections</h2>

      <FormField
        label="Key Assumptions"
        id="financialProjections.keyAssumptions"
        name="keyAssumptions"
        type="textarea"
        value={data.keyAssumptions}
        onChange={handleChange}
        placeholder={`Example: 
• Year-over-year user growth: 150%  
• Average revenue per user (ARPU): $720 annually  
• COGS: 25% of revenue (includes cloud hosting and support)  
• Operating expenses: 45% of revenue  
• No debt financing assumed`}
        rows={6}
      />

      <FormField
        label="Startup Costs (Description or Link to Table)"
        id="financialProjections.startupCostsTable"
        name="startupCostsTable"
        type="textarea"
        value={data.startupCostsTable}
        onChange={handleChange}
        placeholder={`Example: 
Total Startup Costs: $210,000  
• Product development: $100,000  
• Marketing and launch: $50,000  
• Legal and incorporation: $10,000  
• Hardware & software licenses: $25,000  
• Working capital reserve: $25,000`}
        rows={7}
      />

      <FormField
        label="Sales Forecast Table (Description or Link)"
        id="financialProjections.salesForecastTable"
        name="salesForecastTable"
        type="textarea"
        value={data.salesForecastTable}
        onChange={handleChange}
        placeholder={`Example: 
Year 1: $120,000  
Year 2: $360,000  
Year 3: $900,000  
Forecasts based on a subscription model with increasing monthly signups and tiered pricing.`}
        rows={5}
      />

      <div className="mb-6 p-4 border border-gray-200 rounded-md bg-slate-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Projected Financial Statements (Summary or Link)</h3>
        <FormField
          label="Income Statement Projections (e.g., for 3-5 years)"
          id="financialProjections.financialStatements.incomeStatementProjections"
          name="financialStatements.incomeStatementProjections"
          type="textarea"
          value={data.financialStatements.incomeStatementProjections}
          onChange={handleChange}
          placeholder={`Example: Gross revenue growing from $120K to $900K over three years. Gross margin target: 75%. Net profit in Year 3 projected at $120K after reinvestment into product scaling.`}
          rows={3}
        />
        <FormField
          label="Balance Sheet Projections (e.g., for 3-5 years)"
          id="financialProjections.financialStatements.balanceSheetProjections"
          name="financialStatements.balanceSheetProjections"
          type="textarea"
          value={data.financialStatements.balanceSheetProjections}
          onChange={handleChange}
          placeholder={`Example: Total assets expected to grow from $75K to $500K by Year 3. Equity grows as company reinvests profits and avoids major debt liabilities.`}
          rows={3}
        />
        <FormField
          label="Cash Flow Projections (e.g., for 3-5 years)"
          id="financialProjections.financialStatements.cashFlowProjections"
          name="financialStatements.cashFlowProjections"
          type="textarea"
          value={data.financialStatements.cashFlowProjections}
          onChange={handleChange}
          placeholder={`Example: Positive cash flow expected by Q2 of Year 2. Operating cash flow increases year over year as CAC drops and user retention improves. Monthly burn rate falls below $10K by Year 3.`}
          rows={3}
        />
      </div>

      <FormField
        label="Break-Even Analysis"
        id="financialProjections.breakEvenAnalysis"
        name="breakEvenAnalysis"
        type="textarea"
        value={data.breakEvenAnalysis}
        onChange={handleChange}
        placeholder={`Example: Break-even at 175 paying users at $60/month. Expected to achieve this milestone in Month 9 based on current acquisition rates and churn model.`}
        rows={3}
      />

      <FormField
        label="Key Financial Ratios (Optional)"
        id="financialProjections.financialRatios"
        name="financialRatios"
        type="textarea"
        value={data.financialRatios}
        onChange={handleChange}
        placeholder={`Example: 
• Gross Margin: 75%  
• Net Margin (Yr 3): 13.3%  
• Current Ratio: 3.2  
• Customer Lifetime Value (LTV): $1,500  
• CAC: $250`}
        rows={6}
      />
    </div>
  );
};

export default FinancialProjectionsPart;

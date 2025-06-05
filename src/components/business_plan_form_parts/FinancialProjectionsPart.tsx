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
        placeholder="List the key assumptions underlying your financial projections (e.g., sales growth rate, cost of goods sold, operating expenses)."
        rows={4}
      />

      <FormField
        label="Startup Costs (Description or Link to Table)"
        id="financialProjections.startupCostsTable"
        name="startupCostsTable"
        type="textarea"
        value={data.startupCostsTable}
        onChange={handleChange}
        placeholder="Detail your startup costs. You can describe them here or link to a separate table/spreadsheet."
        rows={4}
      />

      <FormField
        label="Sales Forecast Table (Description or Link)"
        id="financialProjections.salesForecastTable"
        name="salesForecastTable"
        type="textarea"
        value={data.salesForecastTable}
        onChange={handleChange}
        placeholder="Summarize your sales forecasts (e.g., Year 1, 2, 3) or provide a link to a detailed table/spreadsheet."
        rows={4}
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
          placeholder="Summarize your projected income statements or provide a link to the detailed statements."
          rows={3}
        />
        <FormField
          label="Balance Sheet Projections (e.g., for 3-5 years)"
          id="financialProjections.financialStatements.balanceSheetProjections"
          name="financialStatements.balanceSheetProjections"
          type="textarea"
          value={data.financialStatements.balanceSheetProjections}
          onChange={handleChange}
          placeholder="Summarize your projected balance sheets or provide a link."
          rows={3}
        />
        <FormField
          label="Cash Flow Projections (e.g., for 3-5 years)"
          id="financialProjections.financialStatements.cashFlowProjections"
          name="financialStatements.cashFlowProjections"
          type="textarea"
          value={data.financialStatements.cashFlowProjections}
          onChange={handleChange}
          placeholder="Summarize your projected cash flow statements or provide a link."
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
        placeholder="Describe your break-even point and the analysis used to determine it."
        rows={3}
      />

      <FormField
        label="Key Financial Ratios (Optional)"
        id="financialProjections.financialRatios"
        name="financialRatios"
        type="textarea"
        value={data.financialRatios}
        onChange={handleChange}
        placeholder="List any key financial ratios relevant to your business and industry (e.g., gross profit margin, net profit margin, current ratio)."
        rows={3}
      />
    </div>
  );
};

export default FinancialProjectionsPart;

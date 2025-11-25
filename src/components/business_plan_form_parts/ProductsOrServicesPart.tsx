/**
 * @file ProductsOrServicesPart.tsx
 * @description Component for the Products or Services section of the business plan form.
 * This section details the offerings, unique selling proposition, development lifecycle, IP, and sourcing.
 */

import React from 'react';
import FormField from '../shared/FormField';

export interface ProductsOrServicesData {
  detailedDescription: string; 
  uniqueSellingProposition: string;
  productDevelopmentLifecycle: string;
  intellectualProperty: string;
  sourcingAndFulfillment: string;
}

interface ProductsOrServicesPartProps {
  data: ProductsOrServicesData;
  onChange: (fieldName: string, value: string) => void;
}

const ProductsOrServicesPart: React.FC<ProductsOrServicesPartProps> = ({ data, onChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-6">5. Products or Services</h2>

      <FormField
        label="Detailed Description of Products/Services"
        id="productsOrServices.detailedDescription"
        name="detailedDescription"
        type="textarea"
        value={data.detailedDescription}
        onChange={handleChange}
        placeholder={`Example: IntelliNova offers a suite of AI-first SaaS tools tailored for small businesses. Our flagship products include:  
• SmartOps – an AI-powered task manager that auto-delegates tasks based on real-time priority detection.  
• SyncCRM – a conversational, GPT-integrated CRM platform that allows voice-driven updates and intelligent client summaries.  
• InsightIQ – a predictive analytics dashboard with financial forecasting, KPI tracking, and market insights.`}
        rows={6}
      />

      <FormField
        label="Unique Selling Proposition (USP)"
        id="productsOrServices.uniqueSellingProposition"
        name="uniqueSellingProposition"
        type="textarea"
        value={data.uniqueSellingProposition}
        onChange={handleChange}
        placeholder={`Example: We are one of the only Canadian-based AI SaaS firms building locally customized tools with OpenAI’s GPT models. Unlike generic platforms, our systems are modular, conversational, and backed by local onboarding and support.`}
        rows={4}
      />

      <FormField
        label="Product/Service Development Lifecycle"
        id="productsOrServices.productDevelopmentLifecycle"
        name="productDevelopmentLifecycle"
        type="textarea"
        value={data.productDevelopmentLifecycle}
        onChange={handleChange}
        placeholder={`Example: All three products are in active development. SmartOps is in live beta with select SMEs in Chatham-Kent; SyncCRM is in early alpha; InsightIQ is scheduled for MVP release by Q4 2025. We follow agile development cycles with bi-weekly sprint reviews.`}
        rows={4}
      />

      <FormField
        label="Intellectual Property (If Applicable)"
        id="productsOrServices.intellectualProperty"
        name="intellectualProperty"
        type="textarea"
        value={data.intellectualProperty}
        onChange={handleChange}
        placeholder={`Example: Proprietary prompt chaining models and fine-tuned GPT system instructions. Trademarks filed for SmartOps and SyncCRM. All code is owned and maintained in private GitHub repositories.`}
        rows={3}
      />

      <FormField
        label="Sourcing and Fulfillment/Production"
        id="productsOrServices.sourcingAndFulfillment"
        name="sourcingAndFulfillment"
        type="textarea"
        value={data.sourcingAndFulfillment}
        onChange={handleChange}
        placeholder={`Example: All software is developed in-house by IntelliNova’s dev team. Services are cloud-hosted via Canadian data centers with 99.9% uptime SLAs. User onboarding and customer support are delivered through our hybrid team using Intercom and direct Slack channels.`}
        rows={4}
      />
    </div>
  );
};

export default ProductsOrServicesPart;

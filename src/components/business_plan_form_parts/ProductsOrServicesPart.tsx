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
      <h2 className="text-xl font-semibold text-gray-800 mb-6">5. Products or Services</h2>

      <FormField
        label="Detailed Description of Products/Services"
        id="productsOrServices.detailedDescription"
        name="detailedDescription"
        type="textarea"
        value={data.detailedDescription}
        onChange={handleChange}
        placeholder="Provide a detailed description of each product or service you offer or plan to offer. Include features, benefits, and how they meet customer needs."
        rows={6}
      />

      <FormField
        label="Unique Selling Proposition (USP)"
        id="productsOrServices.uniqueSellingProposition"
        name="uniqueSellingProposition"
        type="textarea"
        value={data.uniqueSellingProposition}
        onChange={handleChange}
        placeholder="What makes your products/services unique compared to competitors? What is your key differentiator?"
        rows={4}
      />

      <FormField
        label="Product/Service Development Lifecycle"
        id="productsOrServices.productDevelopmentLifecycle"
        name="productDevelopmentLifecycle"
        type="textarea"
        value={data.productDevelopmentLifecycle}
        onChange={handleChange}
        placeholder="Describe the current stage of development for your products/services (e.g., idea, prototype, market-ready). Outline future development plans and timelines."
        rows={4}
      />

      <FormField
        label="Intellectual Property (If Applicable)"
        id="productsOrServices.intellectualProperty"
        name="intellectualProperty"
        type="textarea"
        value={data.intellectualProperty}
        onChange={handleChange}
        placeholder="Describe any patents, trademarks, copyrights, or trade secrets associated with your products/services. If none, state so."
        rows={3}
      />

      <FormField
        label="Sourcing and Fulfillment/Production"
        id="productsOrServices.sourcingAndFulfillment"
        name="sourcingAndFulfillment"
        type="textarea"
        value={data.sourcingAndFulfillment}
        onChange={handleChange}
        placeholder="How will your products be sourced or manufactured? How will services be delivered? Describe your supply chain and fulfillment process."
        rows={4}
      />
    </div>
  );
};

export default ProductsOrServicesPart;

/**
 * @file FormField.tsx
 * @description Defines a reusable FormField component for input elements.
 * This component provides a consistent styling and structure for form inputs,
 * supporting text, textarea, and other standard input types.
 * It is intended to be used across various parts of the application requiring form inputs.
 */

import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string; // Added name prop for form handling
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'textarea' | 'number' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  rows?: number; // for textarea
  className?: string; // Allow additional styling
  labelClassName?: string;
  inputClassName?: string;
  autoComplete?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  rows = 3,
  className = 'mb-4',
  labelClassName = 'block text-sm font-medium text-foreground mb-1',
  inputClassName = 'mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-primary focus:border-primary sm:text-sm',
  autoComplete,
}) => (
  <div className={className}>
    <label htmlFor={id} className={labelClassName}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={name} // Use name prop
        rows={rows}
        className={inputClassName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name} // Use name prop
        className={inputClassName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    )}
  </div>
);

export default FormField;

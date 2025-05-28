import { useForm, UseFormReturn, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback } from 'react';

// Define form field types
export type FormField = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date';
  required?: boolean;
  disabled?: boolean;
  validation?: yup.AnySchema;
  options?: { label: string; value: string }[];
  placeholder?: string;
  helperText?: string;
};

// Type for form values
type FormValues = Record<string, any>;

// Extended form methods with our custom methods
interface UseFormWithValidationReturn<T extends FieldValues> extends UseFormReturn<T> {
  formFields: FormField[];
  handleSubmit: (onValid: SubmitHandler<T>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  getFieldError: (fieldName: string) => string | undefined;
  isSubmitting: boolean;
}

// Default validation schemas for common field types
const defaultValidationSchemas = {
  email: yup.string().email('Please enter a valid email address'),
  required: yup.string().required('This field is required'),
  phone: yup
    .string()
    .matches(
      /^\+?[\d\s-]{10,}$/,
      'Please enter a valid phone number (e.g., 123-456-7890)'
    ),
  url: yup.string().url('Please enter a valid URL'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
};

interface UseFormWithValidationProps {
  fields: FormField[];
  defaultValues?: Record<string, any>;
  onSubmit?: (data: any) => Promise<void> | void;
  onError?: (errors: any) => void;
}

export const useFormWithValidation = ({
  fields,
  defaultValues = {},
  onSubmit,
  onError,
}: UseFormWithValidationProps): UseFormWithValidationReturn<FormValues> => {
  // Build the Yup validation schema based on the form fields
  const buildValidationSchema = useCallback(() => {
    const schema: Record<string, yup.AnySchema> = {};

    fields.forEach((field) => {
      if (!field.validation && field.required) {
        // If no custom validation is provided but field is required, use default required validation
        schema[field.name] = defaultValidationSchemas.required;
      } else if (field.validation) {
        // Use custom validation if provided
        schema[field.name] = field.validation;
      }

      // Add email validation if field type is email
      if (field.type === 'email' && !field.validation) {
        schema[field.name] = defaultValidationSchemas.email;
      }
    });

    return yup.object().shape(schema);
  }, [fields]);

  const validationSchema = buildValidationSchema();

  const formMethods = useForm<FormValues>({
    resolver: yupResolver(validationSchema) as any, // Type assertion needed due to yupResolver type complexity
    defaultValues,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit: rhfHandleSubmit,
    formState: { isSubmitting, errors },
  } = formMethods;

  // Get error message for a specific field
  const getFieldError = (fieldName: string): string | undefined => {
    const error = errors[fieldName];
    return error?.message as string | undefined;
  };

  // Enhanced handleSubmit with loading state and error handling
  const handleFormSubmit = useCallback(
    (onValid: SubmitHandler<any>) =>
      async (e?: React.BaseSyntheticEvent) => {
        try {
          if (onSubmit) {
            const result = await rhfHandleSubmit(onValid)(e);
            await onSubmit(result);
          } else {
            await rhfHandleSubmit(onValid)(e);
          }
        } catch (error) {
          console.error('Form submission error:', error);
          onError?.(error);
        }
      },
    [rhfHandleSubmit, onError, onSubmit]
  );

  return {
    ...formMethods,
    formFields: fields,
    handleSubmit: handleFormSubmit,
    getFieldError,
    isSubmitting,
  };
};

// Export commonly used validation schemas for reuse
export const validationSchemas = {
  email: defaultValidationSchemas.email,
  required: defaultValidationSchemas.required,
  phone: defaultValidationSchemas.phone,
  url: defaultValidationSchemas.url,
  password: defaultValidationSchemas.password,
};

// Helper function to create form field configurations
export const createFormField = (
  name: string,
  label: string,
  options: Omit<FormField, 'name' | 'label'> = {}
): FormField => ({
  name,
  label,
  type: 'text',
  required: false,
  ...options,
});

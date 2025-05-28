import React from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import { Box, TextField, FormControl, FormLabel, FormHelperText, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextareaAutosize, FormGroup, RadioGroup, Radio, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormField, useFormWithValidation } from '@/hooks/useFormWithValidation';

interface FormBuilderProps {
  fields: FormField[];
  onSubmit: (data: any) => Promise<void> | void;
  onError?: (errors: any) => void;
  submitButtonText?: string;
  defaultValues?: Record<string, any>;
  loading?: boolean;
  formProps?: React.ComponentProps<'form'>;
  children?: React.ReactNode;
}

// Form field component that renders the appropriate input based on the field type
const FormFieldRenderer: React.FC<{ field: FormField }> = ({ field }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[field.name];
  
  // Generate common input props
  const commonProps = {
    ...register(field.name),
    id: field.name,
    label: field.label,
    placeholder: field.placeholder,
    error: !!error,
    helperText: (error?.message?.toString() || field.helperText) as string | undefined,
    fullWidth: true,
    margin: 'normal' as const, 
    disabled: field.disabled,
  };

  // Render different input types
  switch (field.type) {
    case 'select':
      return (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel id={`${field.name}-label`}>{field.label}</InputLabel>
          <Select
            labelId={`${field.name}-label`}
            id={field.name}
            label={field.label}
            {...register(field.name)}
            error={!!error}
          >
            {field.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message?.toString() || 'This field is required'}</FormHelperText>}
        </FormControl>
      );

    case 'checkbox':
      return (
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">{field.label}</FormLabel>
          <FormGroup>
            {field.options?.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    {...register(field.name)}
                    value={option.value}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
          {error && <FormHelperText error>{error.message?.toString() || 'This field is required'}</FormHelperText>}
        </FormControl>
      );

    case 'radio':
      return (
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">{field.label}</FormLabel>
          <RadioGroup
            aria-label={field.name}
            {...register(field.name)}
          >
            {field.options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {error && <FormHelperText error>{error.message?.toString() || 'This field is required'}</FormHelperText>}
        </FormControl>
      );

    case 'textarea':
      return (
        <Box marginY={2}>
          <Typography variant="subtitle2" gutterBottom>
            {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
          </Typography>
          <TextareaAutosize
            {...register(field.name)}
            id={field.name}
            placeholder={field.placeholder}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '8px',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              borderColor: error ? '#f44336' : 'rgba(0, 0, 0, 0.23)',
              borderRadius: '4px',
            }}
          />
          {(error || field.helperText) && (
            <FormHelperText error={!!error}>
              {error?.message?.toString() || field.helperText?.toString()}
            </FormHelperText>
          )}
        </Box>
      );

    default:
      return (
        <TextField
          type={field.type || 'text'}
          {...commonProps}
          InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
        />
      );
  }
};

const FormBuilder: React.FC<FormBuilderProps> = ({
  fields,
  onSubmit,
  onError,
  submitButtonText = 'Submit',
  defaultValues = {},
  loading = false,
  formProps = {},
  children,
}) => {
  const form = useFormWithValidation({
    fields,
    defaultValues,
    onSubmit,
    onError,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        {...formProps}
        style={{ width: '100%', ...formProps.style }}
      >
        {fields.map((field) => (
          <FormFieldRenderer key={field.name} field={field} />
        ))}
        {children}
        <Box marginTop={3} display="flex" justifyContent="flex-end">
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting || loading}
            disabled={isSubmitting || loading}
          >
            {submitButtonText}
          </LoadingButton>
        </Box>
      </form>
    </FormProvider>
  );
};

export default FormBuilder;

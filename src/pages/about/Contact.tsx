import { useState } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ParallaxHero from '../../components/ParallaxHero';
import FormBuilder from '../../components/forms/FormBuilder';
import { validationSchemas } from '@/hooks/useFormWithValidation';
import { Box, Container, Typography, Card, CardContent, Snackbar, Alert } from '@mui/material';

// Form field configurations

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create email content
      const subject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
      const body = `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Message:
${data.message}
`;

      // Encode the subject and body for URL
      const mailtoLink = `mailto:info@communityfutures.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message since the email client will handle sending
      setSubmitStatus({
        success: true,
        message: 'Your email client has been opened with a pre-filled message. Please click send to complete your submission.'
      });
      
    } catch (error) {
      console.error('Error preparing email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error preparing your email. Please try again or contact us directly at info@communityfutures.ca'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <ParallaxHero
        title="Get in Touch"
        description="Have questions about starting or growing your business? Our team is here to help you succeed."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      <Box sx={{ py: { xs: 8, sm: 12 }, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Have questions about starting or growing your business? Our team is here to help you succeed.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 6, maxWidth: '1200px', mx: 'auto' }}>
            <Box>
              <Card elevation={0} sx={{ height: '100%', bgcolor: 'transparent' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    Get in touch
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </Typography>
                  <Box component="dl" sx={{ mt: 4, '& > div': { display: 'flex', mb: 2 } }}>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Box component="dt" sx={{ flex: '0 0 auto', mr: 2, color: 'primary.main' }}>
                        <MapPin />
                      </Box>
                      <Box component="dd" sx={{ m: 0 }}>
                        <Typography>124 Thames St.</Typography>
                        <Typography>Chatham, ON N7M 5K8</Typography>
                      </Box>
                    </Box>
                  
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Box component="dt" sx={{ flex: '0 0 auto', mr: 2, color: 'primary.main' }}>
                        <Phone />
                      </Box>
                      <Box component="dd" sx={{ m: 0 }}>
                        <Typography component="a" href="tel:+15193542400" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                          (519) 354-2400
                        </Typography>
                      </Box>
                    </Box>
                  
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Box component="dt" sx={{ flex: '0 0 auto', mr: 2, color: 'primary.main' }}>
                        <Mail />
                      </Box>
                      <Box component="dd" sx={{ m: 0 }}>
                        <Typography component="a" href="mailto:info@communityfutures.ca" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                          info@communityfutures.ca
                        </Typography>
                      </Box>
                    </Box>
                  
                    <Box sx={{ display: 'flex' }}>
                      <Box component="dt" sx={{ flex: '0 0 auto', mr: 2, color: 'primary.main' }}>
                        <Clock />
                      </Box>
                      <Box component="dd" sx={{ m: 0 }}>
                        <Typography>Monday - Friday: 9:00 AM - 5:00 PM</Typography>
                        <Typography>Saturday - Sunday: Closed</Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
                  <FormBuilder
                    fields={[
                      {
                        name: 'firstName',
                        label: 'First name',
                        type: 'text',
                        required: true,
                        validation: validationSchemas.required,
                        placeholder: 'Enter your first name',
                      },
                      {
                        name: 'lastName',
                        label: 'Last name',
                        type: 'text',
                        required: true,
                        validation: validationSchemas.required,
                        placeholder: 'Enter your last name',
                      },
                      {
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        required: true,
                        validation: validationSchemas.email,
                        placeholder: 'your.email@example.com',
                      },
                      {
                        name: 'phone',
                        label: 'Phone number',
                        type: 'text',
                        validation: validationSchemas.phone,
                        placeholder: '(123) 456-7890',
                      },
                      {
                        name: 'message',
                        label: 'Message',
                        type: 'textarea',
                        required: true,
                        validation: validationSchemas.required,
                        placeholder: 'How can we help you?',
                        rows: 4,
                      }
                    ]}
                    onSubmit={handleSubmit}
                    submitButtonText="Send Message"
                    loading={isSubmitting}
                    formProps={{
                      style: { display: 'flex', flexDirection: 'column', gap: '16px' },
                      'aria-busy': isSubmitting
                    }}
                    defaultValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      message: ''
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          </Box>
          
          <Snackbar
            open={!!submitStatus}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert 
              onClose={handleCloseSnackbar} 
              severity={submitStatus?.success ? 'success' : 'error'}
              sx={{ width: '100%' }}
            >
              {submitStatus?.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </Box>
  );
}
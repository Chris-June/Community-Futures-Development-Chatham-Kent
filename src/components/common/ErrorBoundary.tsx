import { Component, ErrorInfo, ReactNode } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || this.defaultErrorFallback();
    }

    return this.props.children;
  }

  private defaultErrorFallback() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        p={3}
        textAlign="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We're sorry for the inconvenience. An unexpected error has occurred.
        </Typography>
        {this.state.error && (
          <Box
            component="details"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              padding: 2,
              borderRadius: 1,
              marginBottom: 2,
              width: '100%',
              maxWidth: '600px',
              textAlign: 'left',
              overflow: 'auto',
              maxHeight: '200px',
            }}
          >
            <Typography variant="subtitle2" component="summary">
              Error Details (for developers)
            </Typography>
            <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error.toString()}
              {this.state.errorInfo?.componentStack}
            </Typography>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ marginTop: 2 }}
        >
          Return to Home
        </Button>
      </Box>
    );
  }
}

export default ErrorBoundary;

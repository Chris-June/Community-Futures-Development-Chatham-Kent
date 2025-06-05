import React, { useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { exportToPDF } from '../../utils/pdfExporter';

interface PdfExportButtonProps {
  title: string;
  filename: string;
  contentRef: React.RefObject<HTMLElement>;
  stepElements?: React.RefObject<HTMLElement>[];
  captureAllSteps?: boolean;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const PdfExportButton: React.FC<PdfExportButtonProps> = ({
  title,
  filename,
  contentRef,
  stepElements = [],
  captureAllSteps = false,
  className = '',
  variant = 'outline',
  size = 'default',
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const isMounted = useRef(true);

  // Cleanup mounted state on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleExport = async () => {
    if (!contentRef.current) {
      console.error('No content reference provided');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Get all step elements if provided
      const elements = stepElements.length > 0 
        ? stepElements.map(ref => ref.current).filter(Boolean) as HTMLElement[]
        : [contentRef.current];
      
      // Make all elements temporarily visible for capture
      const originalStyles = elements.map(el => ({
        element: el,
        display: el.style.display,
        visibility: el.style.visibility,
        position: el.style.position,
        left: el.style.left,
        top: el.style.top,
        opacity: el.style.opacity,
        height: el.style.height,
        width: el.style.width,
      }));

      // Apply styles for capture
      elements.forEach(el => {
        el.style.display = 'block';
        el.style.visibility = 'visible';
        el.style.position = 'relative';
        el.style.left = '0';
        el.style.top = '0';
        el.style.opacity = '1';
        el.style.height = 'auto';
        el.style.width = 'auto';
      });

      // Small delay to ensure DOM updates
      await new Promise(resolve => setTimeout(resolve, 100));
      
      await exportToPDF({
        title,
        filename,
        element: contentRef.current,
        captureAllSteps: captureAllSteps || elements.length > 1,
        stepElements: elements,
      });
      
      // Restore original styles
      originalStyles.forEach(({ element, ...styles }) => {
        Object.entries(styles).forEach(([key, value]) => {
          element.style[key as any] = value;
        });
      });
    } catch (error) {
      console.error('Export failed:', error);
      // Consider adding toast notification here
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  };

  return (
    <Button
      onClick={handleExport}
      variant={variant}
      size={size}
      disabled={isLoading}
      className={`gap-2 ${className}`}
    >
      <Download className="h-4 w-4" />
      {isLoading ? 'Exporting...' : 'Export as PDF'}
    </Button>
  );
};

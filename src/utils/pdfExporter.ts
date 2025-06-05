import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFOptions {
  title: string;
  filename: string;
  element: HTMLElement;
  margin?: number;
  format?: 'a4' | 'letter';
  captureAllSteps?: boolean;
  stepElements?: HTMLElement[];
}

export const exportToPDF = async ({
  title,
  filename,
  element,
  margin = 10,
  format = 'a4',
  captureAllSteps = false,
  stepElements = [],
}: PDFOptions) => {
  try {
    // Initialize PDF
    const pdf = new jsPDF('p', 'mm', format);
    const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    
    // Add title and metadata to first page
    const addHeader = (pageNumber: number, isFirstPage = false) => {
      if (isFirstPage) {
        pdf.setFontSize(20);
        pdf.text(title, margin, 20);
        
        const date = new Date().toLocaleDateString();
        pdf.setFontSize(10);
        pdf.text(`Generated on: ${date}`, margin, 30);
        return 40; // Return y-position after header
      } else {
        pdf.setFontSize(12);
        pdf.text(`Page ${pageNumber} - ${title}`, margin, 20);
        return 25; // Less space for subsequent pages
      }
    };

    const elementsToCapture = captureAllSteps && stepElements.length > 0 
      ? stepElements 
      : [element];

    for (let i = 0; i < elementsToCapture.length; i++) {
      const currentElement = elementsToCapture[i];
      const isFirstPage = i === 0;
      
      // Add new page for each element after the first one
      if (i > 0) {
        pdf.addPage();
      }
      
      // Add header and get the y-position to start content
      const startY = addHeader(i + 1, isFirstPage);
      
      try {
        // Convert the element to canvas
        const canvas = await html2canvas(currentElement, {
          scale: 1, // Reduced scale for better performance
          useCORS: true,
          backgroundColor: '#ffffff',
          allowTaint: true,
          removeContainer: true,
          scrollY: -window.scrollY, // Fix for scrolling issues
          windowHeight: currentElement.scrollHeight,
          height: currentElement.scrollHeight,
        } as any);
        
        // Calculate dimensions
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        
        // Calculate dimensions to fit page width while maintaining aspect ratio
        const imgWidth = pageWidth;
        const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
        
        // Add the image to the PDF
        pdf.addImage({
          imageData: imgData,
          x: margin,
          y: startY,
          width: imgWidth,
          height: imgHeight,
          compression: 'FAST',
        });
        
      } catch (error) {
        console.error(`Error capturing element ${i + 1}:`, error);
        // Continue with next element even if one fails
        continue;
      }
    }
    
    // Save the PDF
    pdf.save(`${filename}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

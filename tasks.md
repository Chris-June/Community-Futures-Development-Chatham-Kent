# Community Futures Chatham-Kent Website Updates

## Task List

### 1. Branding & Styling Updates
- [x] Update color palette to match Community Futures branding
  - [x] Define color variables in theme configuration (in tailwind.config.js)
  - [x] Update global styles and theme provider (in index.css and tailwind config)
  - [ ] Test color contrast for accessibility

- [x] Navigation Styling
  - [x] Update font colors to use darkest green from branding
  - [x] Add hover effects with complementary highlight color
  - [x] Ensure mobile menu follows the same styling

- [ ] Add "Apply Here" Button
  - [ ] Add button to each page hero section
  - [ ] Link to loan application
  - [ ] Style to match brand guidelines

- [x] Update Background Gradient
  - [x] Modify gradient to use dark green from branding
  - [x] Ensure text remains readable with new background
  - [x] Update any component-specific gradient overrides

- [x] Heading Styling
  - [x] Update H1-H6 tags with light contrasting colors
  - [x] Ensure proper hierarchy and readability
  - [x] Update any component-specific heading overrides

### 2. Homepage Modal Implementation
- [ ] "Business Loans" Section
  - [ ] Create modal component
  - [ ] Add trigger button/link (currently links to /start-business)
  - [ ] Style according to brand
  - [ ] Add content and media

- [ ] "Business Counselling" Section
  - [ ] Create modal component
  - [ ] Add trigger button/link (currently links to /counselling)
  - [ ] Style according to brand
  - [ ] Add content and media

- [ ] "Economic Development" Section
  - [ ] Create modal component
  - [ ] Add trigger button/link (currently links to /about/who-we-are)
  - [ ] Style according to brand
  - [ ] Add content and media

### 3. Business Counselling Page Updates
- [ ] "Startup Success" Card
  - [ ] Create modal component
  - [ ] Add detailed content (basic content exists in counsellingServices.ts)
  - [ ] Style according to brand

- [ ] "Business Growth" Card
  - [ ] Create modal component
  - [ ] Add detailed content (basic content exists in counsellingServices.ts)
  - [ ] Style according to brand

- [ ] "Digital Transformation" Card
  - [ ] Create modal component
  - [ ] Add detailed content (basic content exists in counsellingServices.ts)
  - [ ] Style according to brand

### 4. Resources Page Improvements
- [x] Interactive Builder
  - [x] Basic implementation complete (links to /business-plan-form)
  - [ ] Fix PDF export formatting
  - [ ] Ensure all fields are visible in export
  - [ ] Test with various content lengths

- [x] Market Research Guide
  - [x] Refactored MarketResearchGuidePage.tsx with react-hook-form
  - [x] Created individual React components for all nine market research sections
  - [x] Integrated all section components into the parent page
  - [ ] Fix PDF export formatting
  - [ ] Test with various content lengths

- [ ] Download Template Functionality
  - [ ] Add .doc/.docx export
  - [ ] Add .txt export
  - [ ] Add any other relevant formats
  - [ ] Style download buttons
  - [ ] Test all export options
  
### 5. Video Resources (New Section = this is future enhancement not in current scope)
- [ ] Video Content
  - [ ] Add YouTube video IDs
  - [ ] Implement video player
  - [ ] Add video descriptions
  - [ ] Style video cards
  - [ ] Test video playback

## Required Files to Review/Modify

### Styling & Theming
- `src/styles/globals.css`
- `src/styles/theme.ts` (or equivalent theme configuration)
- `tailwind.config.js` (if using Tailwind)
- `src/components/layout/Header.tsx`
- `src/components/layout/Navigation.tsx`

### Homepage Components
- `src/pages/Home.tsx`
- `src/components/home/BusinessLoansSection.tsx`
- `src/components/home/BusinessCounsellingSection.tsx`
- `src/components/home/EconomicDevelopmentSection.tsx`
- New modal components for each section

### Business Counselling Page
- `src/pages/BusinessCounselling.tsx`
- `src/components/business-counselling/ExpertiseCard.tsx`
- New modal components for each expertise area

### Resources Page
- `src/pages/Resources.tsx`
- `src/components/resources/InteractiveBuilder.tsx`
- `src/components/resources/MarketResearchGuide.tsx`
- `src/utils/exportUtils.ts` (for export functionality)

## Implementation Notes

### Color Scheme
- Primary Brand Green: #006837 (example - verify exact color)
- Dark Green (for navigation): #004d29 (example - verify exact color)
- Highlight Color: #ffd700 (example - choose complementary color)
- Text Colors: Ensure WCAG AA/AAA compliance

### Modal Implementation
- Use accessible modal components
- Implement proper focus management
- Ensure keyboard navigation works
- Add proper ARIA labels

### Export Functionality
- Use libraries like `html2pdf.js` for PDF generation
- Use `docx` or similar for Word document generation
- Test exports with various content lengths
- Add loading states for better UX

## Testing Checklist
- [ ] Test all interactive elements
- [ ] Verify color contrast ratios
- [ ] Test responsive behavior
- [ ] Verify all modals open/close correctly
- [ ] Test all export/download functionality
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing

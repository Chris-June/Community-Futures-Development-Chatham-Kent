# Engagement CTA Component

A high-impact, motivational call-to-action component designed to drive user engagement and conversions.

## Features

- **Visually Striking**: Gradient background with subtle animations
- **Responsive Design**: Works on all screen sizes
- **Customizable**: All text and actions are configurable via props
- **Interactive Elements**: Hover effects and smooth transitions
- **Social Proof**: Built-in trust indicators

## Installation

1. Ensure you have the required dependencies:
   - `react-icons`

2. Import the component:
   ```tsx
   import EngagementCTA from './EngagementCTA';
   ```

## Usage

### Basic Usage

```tsx
<EngagementCTA />
```

### With Custom Props

```tsx
<EngagementCTA
  title="Join Our Community"
  subtitle="Be part of something bigger and make a real impact in your community."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log('Primary action')}
  onSecondaryClick={() => console.log('Secondary action')}
  className="my-8"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | "Shape the Future of Our Community" | Main heading text |
| subtitle | string | "Your voice matters! Join us in creating positive change..." | Supporting text |
| primaryButtonText | string | "Join the Movement" | Text for primary button |
| secondaryButtonText | string | "Learn More" | Text for secondary button |
| onPrimaryClick | function | () => {} | Callback for primary button click |
| onSecondaryClick | function | () => {} | Callback for secondary button click |
| className | string | "" | Additional CSS classes for the container |

## Styling

The component uses Tailwind CSS for styling. You can override styles by:
1. Using the `className` prop to add custom classes
2. Using Tailwind's `@apply` directive in your CSS to modify component styles
3. Using the `!important` modifier if needed to override default styles

## Best Practices

- Place this CTA in high-visibility areas of your pages
- Use action-oriented, benefit-driven copy
- Ensure the primary action is clear and compelling
- Test different button text and colors for conversion optimization
- Keep the surrounding content clean to make the CTA stand out

## Accessibility

- All interactive elements are keyboard-navigable
- Sufficient color contrast for text readability
- ARIA attributes included for screen readers
- Focus states are clearly visible

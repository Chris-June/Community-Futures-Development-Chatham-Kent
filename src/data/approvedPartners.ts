import type { LogoItem } from "../components/LogoMarquee/LogoMarquee";

// Centralized list for Approved Partners logo marquee.
// Use SVG/PNG paths from /public. Add width/height when known to reduce CLS.
export const approvedPartnerLogos: LogoItem[] = [
  {
    src: "/assets/images/padgett-accounting.jpg",
    alt: "Padgett Accounting",
    width: 200,
    height: 80,
    href: "https://www.padgett.com/"
  },
  {
    src: "/assets/images/padget-accounting1.jpg",
    alt: "Padgett Accounting (Alt)",
    width: 200,
    height: 80,
    href: "https://www.padgett.com/"
  },
  {
    src: "/assets/images/smith-cycle.jpg",
    alt: "Smith Cycle",
    width: 180,
    height: 80,
    href: "https://www.smithcycle.com/"
  },
  {
    src: "/assets/images/TheMill.jpg",
    alt: "The Mill Business",
    width: 180,
    height: 80,
  },
  {
    src: "/assets/images/QuoVadisPizza.jpg",
    alt: "Quo Vadis Pizza",
    width: 180,
    height: 80,
  },
  // Government of Canada (supporter) for credibility, optional in footer/home
  {
    src: "/assets/images/GovCanada.png",
    alt: "Government of Canada",
    width: 200,
    height: 60,
    href: "https://www.canada.ca/en/services/business.html"
  },
];

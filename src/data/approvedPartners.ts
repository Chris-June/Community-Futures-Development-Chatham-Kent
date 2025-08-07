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
    src: "/assets/images/filename.jpg",
    alt: "Pathways Law",
    width: 200,
    height: 80,
    href: "https://www.pathwayslaw.ca/"
},
{
    src: "/assets/images/Logo.png",
    alt: "Intellisync Solutions",
    width: 180,
    height: 80,
    href: "https://www.intellisync.io/"
  },

];


  // Government of Canada (supporter) for credibility, optional in footer/home
//   {
//     src: "/assets/images/GovCanada.png",
//     alt: "Government of Canada",
//     width: 200,
//     height: 60,
//     href: "https://www.canada.ca/en/services/business.html"
//   },



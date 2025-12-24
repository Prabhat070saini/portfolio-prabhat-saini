
import fs from 'fs';
import path from 'path';

const ICONS_TO_FETCH = {
  "TypeScript": "TypeScript",
  "JavaScript": "JavaScript",
  "Go": "Go",
  "Python": "Python",
  "HTML": "HTML5",
  "CSS": "CSS (New)",
  "SQL": "Database", // Will map to a generic or Postgres if not found, checking logic below
  "PostgreSQL": "PostgreSQL",
  "MySQL": "MySQL",
  "MongoDB": "MongoDB",
  "Redis": "Redis",
  "React": "React",
  "NextJS": "Next.js",
  "NodeJS": "Node.js",
  "NestJS": "NestJS",
  "Express": "Express.js",
  "TailwindCSS": "Tailwind CSS",
  "Prisma": "Prisma",
  "Docker": "Docker",
  "AWS": "Amazon Web Services",
  "Git": "Git",
  "GitHub": "GitHub",
  "LinkedIn": "LinkedIn",
  "Twitter": "X (formerly Twitter)",
  "Gmail": "Gmail",
  "C": "C", // C/C++
  "Cpp": "C++",
};

// Fallback or specific URL for RabbitMQ since it was missing in SVGL list
const EXTRA_ICONS = {
    "RabbitMQ": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"
};

async function fetchIcons() {
  console.log("Fetching SVGL list...");
  const resp = await fetch('https://api.svgl.app');
  const allIcons = await resp.json();

  const iconData = {};

  // Process SVGL icons
  for (const [key, svglTitle] of Object.entries(ICONS_TO_FETCH)) {
    const icon = allIcons.find(i => i.title === svglTitle || i.title.toLowerCase() === svglTitle.toLowerCase());
    if (icon) {
      let url = icon.route;
      
      // Prefer object with light/dark, but if string use it.
      // If object, prefer dark mode for this dark-themed portfolio, or handle both?
      // For simplicity in a single component, I'll use the 'light' version for dark text, or 'dark' version?
      // Usually 'light' route in SVGL means "for light background" (so the icon is dark) or "light colored icon"?
      // Checking SVGL: "route":{"light":"...","dark":"..."}. 
      // If I want it to look good on dark theme (portfolio is dark), I likely want the "dark" theme icon (which is usually white/light).
      // Wait, standard convention: "dark" usually means "for dark mode" (so the icon is light/white).
      
      if (typeof url === 'object') {
        url = url.dark || url.light; // Prefer dark (for dark mode), fallback to light
      }
      
      if (url) {
        console.log(`Fetching ${key} from ${url}...`);
        try {
            const svgResp = await fetch(url);
            let svgText = await svgResp.text();
            iconData[key] = cleanSVG(svgText);
        } catch (e) {
            console.error(`Failed to fetch ${key}:`, e);
        }
      }
    } else {
        console.warn(`Icon not found for ${key} (${svglTitle})`);
    }
  }

  // Process Extra icons
  for (const [key, url] of Object.entries(EXTRA_ICONS)) {
    console.log(`Fetching ${key} from ${url}...`);
    try {
        const svgResp = await fetch(url);
        let svgText = await svgResp.text();
        iconData[key] = cleanSVG(svgText);
    } catch (e) {
        console.error(`Failed to fetch ${key}:`, e);
    }
  }

  generateComponent(iconData);
}

function cleanSVG(svg) {
  // Remove XML declaration
  let cleaned = svg.replace(/<\?xml[^>]*\?>/g, '');
  // Remove width/height
  cleaned = cleaned.replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '');
  
  // 2. Ensure viewBox is present (SVGL usually has it)
  
  // 3. Add {...props} to the svg tag
  // We'll do this in the string interpolation
  
  // 4. If we want them to inherit color, we might replace fill="..." with fill="currentColor", but brand icons usually keep their colors.
  // I will KEEP original colors for brand icons as they look better.
  
  // Return just the attributes and children? No, full SVG string helps parsing.
  // Actually, I'll extract the inner content or just inject props into the main string.
  // Simple regex to inject props before the closing of the first tag
  cleaned = cleaned.replace(/<svg([^>]*)>/, '<svg$1 {...props}>');
  return cleaned;
}

function generateComponent(icons) {
  const content = `import React from 'react';

export const Icons = {
${Object.entries(icons).map(([key, svg]) => `  ${key}: (props: React.SVGProps<SVGSVGElement>) => (
    ${svg}
  ),`).join('\n')}
};
`;

  fs.writeFileSync(path.join(process.cwd(), 'components/icons.tsx'), content);
  console.log("Icons component generated at components/icons.tsx");
}

fetchIcons();

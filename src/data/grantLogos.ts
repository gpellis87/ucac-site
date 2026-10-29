// Logos grant recipients must display on advertising and literature.
// To add one: drop the file in public/grant-logos/ and add an entry below.
export type GrantLogo = {
  name: string;
  description: string;
  file: string; // filename inside public/grant-logos/
  format: string;
};

export const grantLogos: GrantLogo[] = [
  {
    name: "UCCAC Logo (White Background)",
    description: "Full-color logo on a white background. Best for print and standard documents.",
    file: "uccac-logo-white-background.png",
    format: "PNG",
  },
  {
    name: "UCCAC Logo (Transparent)",
    description: "Full-color logo with a transparent background. Best for placing over light backgrounds.",
    file: "uccac-logo-transparent.png",
    format: "PNG",
  },
  {
    name: "North Carolina Arts Council",
    description: "Logo of the North Carolina Arts Council, which funds the Grassroots Arts Program.",
    file: "nc-arts-council-logo.png",
    format: "PNG",
  },
];

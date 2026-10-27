// Logos grant recipients must display on advertising and literature.
// To add one: drop the file in public/grant-logos/ and add an entry below.
export type GrantLogo = {
  name: string;
  description: string;
  file: string; // filename inside public/grant-logos/
  format: string;
};

export const grantLogos: GrantLogo[] = [];

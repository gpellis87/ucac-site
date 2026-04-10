export interface Artist {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  website?: string;
  instagram?: string;
  medium: string;
  bio?: string;
  portraitUrl: string;
  workImages: string[];
}

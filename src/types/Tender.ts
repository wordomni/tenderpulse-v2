export interface Tender {
  id?: number;
  title: string;
  organisation: string;
  country: string;
  category: string;
  deadline: string;
  score: number;
  description: string;
  source_url?: string;
}

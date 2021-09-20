export interface IProject {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
  teches: {
    id: number;
    name: string;
    published_at: string;
    createdAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

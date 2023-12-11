import { PortableTextBlock } from "sanity";

export type Service = {
  _id: string;
  _createdAt: string;
  slug: string;
  name: string;
  order: string;
  description: string;
  image: string;
  wfImage: string;
  content: PortableTextBlock[];
};

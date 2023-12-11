import { createClient, groq } from "next-sanity";
import { StaffMember } from "../types/StaffMember";
import { Service } from "../types/Service";

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION;

export async function getStaffMembers(): Promise<StaffMember[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == "staffMember"]{
      _id,
      _createdAt,
      order,
      name,
      jobtitle,
      "image": image.asset->url,
      wfImage,
    } | order(order asc)`
  );
}
export async function getService(): Promise<Service[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  return client.fetch(
    groq`*[_type == "service"]{
      _id,
      _createdAt,
      "slug": slug.current,
      name,
      order,
      description,
      "image": image.asset->url,
      wfImage,
      content,
    } | order(order asc)`
  );
}

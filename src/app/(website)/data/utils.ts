import servicesData from "@/app/(website)/data/services";
// import teamData from "@/data/team";

export function getServicePage(slug: string) {
  var servicesPage = servicesData.filter((servicePage) => {
    return servicePage.Slug === slug;
  });
  return servicesPage[0];
}

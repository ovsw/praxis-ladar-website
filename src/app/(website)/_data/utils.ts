import servicesData from "@/app/(website)/_data/services";
// import teamData from "@/_data/team";

export function getServicePage(slug: string) {
  var servicesPage = servicesData.filter((servicePage) => {
    return servicePage.Slug === slug;
  });
  return servicesPage[0];
}

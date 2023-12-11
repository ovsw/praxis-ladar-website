const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "wfImage",
      title: "Webflow Image URL",
      type: "url",
    },
    {
      name: "description",
      title: "Short Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "ALT",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  orderings: [
    {
      title: "By Order, descending",
      name: "orderNoAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

export default service;

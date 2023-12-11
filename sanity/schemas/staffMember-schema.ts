const staffMember = {
  name: "staffMember",
  title: "Staff Member",
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
      name: "jobtitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "wfImage",
      title: "Webflow Image URL",
      type: "url",
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
  ],
  orderings: [
    {
      title: "By Order, descending",
      name: "orderNoAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

export default staffMember;

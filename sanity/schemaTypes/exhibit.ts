import { defineField, defineType } from "sanity";

export const exhibitType = defineType({
  name: "exhibit",
  title: "Exhibition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Exhibition Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Auto-generated from the title — used in the page URL.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Now On View", value: "now-on-view" },
          { title: "Opening Soon", value: "opening-soon" },
          { title: "Call for Artists", value: "call-for-artists" },
          { title: "Archived (hidden from site)", value: "archived" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "The main paragraph shown on the exhibition page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Detail Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional extra details shown as a bulleted list.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Main banner image for the exhibition.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Gallery Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Additional photos shown in the gallery section.",
    }),
    defineField({
      name: "location",
      title: "Venue Name",
      type: "string",
      initialValue: "UCCAC Gallery",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      initialValue: "300 North Hayne Street, Monroe, NC 28111",
    }),
    defineField({
      name: "receptionDate",
      title: "Reception / Celebration Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({
      name: "receptionTime",
      title: "Reception Time",
      type: "string",
      description: "e.g. 5:30 PM – 9:00 PM",
    }),
    defineField({
      name: "submissionDeadline",
      title: "Submission Deadline",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({
      name: "submissionUrl",
      title: "Submission Form URL",
      type: "url",
      description: "Link to the Google Form or other submission page.",
    }),
    defineField({
      name: "flyerFile",
      title: "Flyer (PDF or Image)",
      type: "file",
      description: "Upload the official event flyer as a PDF or image (PNG, JPG, etc.).",
      options: { accept: "application/pdf,image/*" },
    }),
    defineField({
      name: "videoUrl",
      title: "Preview Video URL",
      type: "string",
      description:
        "URL to a promo video. Use the public path like /videos/filename.mp4, or a full https:// link.",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "presentedBy",
      title: "Presented By",
      type: "array",
      of: [{ type: "string" }],
      description: "Organizations co-presenting this exhibition.",
    }),
    defineField({
      name: "callToAction",
      title: "Call to Action Button",
      type: "object",
      description: "Optional button shown on the exhibition page.",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", status: "status", media: "heroImage" },
    prepare({ title, status, media }) {
      const labels: Record<string, string> = {
        "now-on-view": "Now On View",
        "opening-soon": "Opening Soon",
        "call-for-artists": "Call for Artists",
        archived: "Archived",
      };
      return { title, subtitle: labels[status] ?? status, media };
    },
  },
});

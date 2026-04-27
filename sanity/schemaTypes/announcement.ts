import { defineField, defineType } from "sanity";

export const announcementType = defineType({
  name: "announcement",
  title: "Announcements",
  type: "document",
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      description: 'Small label above the title — e.g. "Announcement", "Named Grant", "New Program"',
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Auto-generated from the title. Used as the anchor on the Announcements page.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief summary shown on the home page card. Keep it to 1–2 sentences.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Full Announcement",
      type: "text",
      rows: 10,
      description: "Full text shown on the Announcements page. Separate paragraphs with a blank line.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      description: "Used to sort announcements — newest appears featured on the home page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "active",
      title: "Show on site",
      type: "boolean",
      description: "Toggle off to hide this announcement without deleting it.",
      initialValue: true,
    }),
    defineField({
      name: "expiresAt",
      title: "Expiry Date",
      type: "date",
      description: "Optional. Automatically hides on this date. Leave blank for evergreen announcements.",
    }),
    defineField({
      name: "ctaOne",
      title: "Primary Button",
      type: "object",
      description: "Main action button, e.g. Donate, Join, Register.",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description: "Internal paths start with / (e.g. /donate). External links use the full URL.",
        }),
      ],
    }),
    defineField({
      name: "ctaTwo",
      title: "Secondary Button (optional)",
      type: "object",
      description: "An extra action button if needed. The 'Read this announcement' link is added automatically.",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description: "Internal paths start with / (e.g. /new-home). External links use the full URL.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      active: "active",
    },
    prepare({ title, subtitle, active }) {
      return {
        title: `${active ? "" : "[Hidden] "}${title}`,
        subtitle,
      };
    },
  },
});

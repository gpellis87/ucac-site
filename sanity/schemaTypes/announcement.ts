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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short summary shown on the home page. Keep it to 1–2 sentences.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      description: "Used to sort announcements — newest appears featured.",
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
      description: "Main call-to-action button.",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description: 'Internal paths start with / (e.g. /donate). External links use the full URL.',
        }),
      ],
    }),
    defineField({
      name: "ctaTwo",
      title: "Secondary Button (optional)",
      type: "object",
      description: "A second button, e.g. 'Read the Announcement'.",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({
          name: "url",
          title: "URL",
          type: "string",
          description: 'Internal paths start with / (e.g. /new-home). External links use the full URL.',
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

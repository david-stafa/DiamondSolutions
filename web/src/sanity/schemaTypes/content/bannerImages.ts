import {defineField, defineType} from 'sanity'

export const bannerImages = defineType({
  name: "bannerImage",
  title: "Bannery",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Název",
      type: "string",
      description: "Např. Banner1",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
      description:
        "Stačí kliknout na tlačítko generate - nutné vyplnit pro správné fungování stránky",
    }),
    defineField({
      name: "shortDescription",
      type: "string",
      title: "Krátký popis",
      description: "Stačí opravdu krátký popis - pár slov.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Banner",
      description: "Ideální rozlišení: ",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      type: "string",
      title: "Odkaz",
      description: "Odkaz kam bude uživatel přesměrován po kluknutí na banner. Např. /sperky",
    }),
  ],
});

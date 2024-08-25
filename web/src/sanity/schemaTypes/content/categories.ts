import { defineField, defineType } from "sanity";

export const categories = defineType({
  name: "category",
  title: "Kategorie",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Název",
      readOnly: true,
      description: "Nelze upravit - pokud byste chtěli změnit dejte vědět",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      readOnly: true,
    }),
    defineField({
      name: "bannerImage",
      type: "image",
      title: "Banner image",
      description: "Formát: Banner zobrazený na stránce podkategorií šperků",
    }),
    defineField({
      name: "menuImage",
      type: "image",
      title: "Menu image",
      description:
        "Formát: Obrázek zobrazený na úvodní stránce u výběru kategorie šperků",
    }),
  ],
});

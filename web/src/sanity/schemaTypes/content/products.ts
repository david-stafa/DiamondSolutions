import { defineField, defineType, ValidationContext } from "sanity";

interface ProductDocument {
  name: string;
  slug: { current: string };
  price: number;
  shortDescription?: string;
  longDescription?: string;
  category?: { _ref: string };
  subcategory?: { _ref: string };
  image?: { asset: { _ref: string } };
  productImages?: { asset: { _ref: string } }[];
}

const validateSubcategory = (value: any, context: ValidationContext) => {
  const parent = context.parent as ProductDocument;
  // Ensure `parent` and `parent.category` are defined
  if (parent?.category?._ref === "56679be4-42b1-49c2-84d3-dd84d398d2a7") {
    // Perform validation when the category matches the specific ID
    if (!value) {
      return "Subcategory is required when category is Sperky.";
    }
  }
  return true; // Return true if validation passes or if no validation needed
};

export const products = defineType({
  name: "products",
  title: "Produkty",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Název",
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
      name: "price",
      type: "number",
      title: "Cena",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "salePrice",
      type: "number",
      title: "Cena po slevě",
      description:
        "Vyplň pokud chceš dát produkt se slevou. Do tohoto pole dej cenu po sleve. Původní pole CENA nech stejnou.",
    }),
    defineField({
      name: "new",
      type: "boolean",
      title: "Novinka",
      description: "Produkt se zobrazí ve výběru novinek a bude mít badge", 
    }),
    defineField({
      name: "shortDescription",
      type: "string",
      title: "Krátký popis",
      description: "Stačí opravdu krátký popis - jedna věta např.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "longDescription",
      type: "text",
      title: "Delší popis",
      description: "Popis produktu, který bude zobrazený při rozkliknutí produktu",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subcategory",
      type: "reference",
      to: [{ type: "subcategory" }],
      hidden: ({ parent }) =>
        parent?.category?._ref !== "56679be4-42b1-49c2-84d3-dd84d398d2a7",
      validation: (Rule) =>
        Rule.custom((value, context) => validateSubcategory(value, context)),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Hlavní fotka",
      description: "Hlavní fotka, která se bude zobrazovat jako první",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImages",
      type: "array",
      title: "Další produktové fotky která se zobrazí při rozkliknutí produktu",
      of: [
        {
          type: "image",
        },
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
});

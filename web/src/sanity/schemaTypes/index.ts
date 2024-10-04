import { type SchemaTypeDefinition } from "sanity";
import { bannerImages } from "./content/bannerImages";
import { categories } from "./content/categories";
import { products } from "./content/products";
import { subcategories } from "./content/subcategories";
import { contact } from "./content/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerImages, categories, products, subcategories, contact],
};

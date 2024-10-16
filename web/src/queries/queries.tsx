interface ProductType {
  product: "prsteny" | "naramky" | "nahrdelniky" | "nausnice" | undefined;
}
interface CategoryType {
  category: "investicni-sperky" | "volne-diamanty" | "sperky";
}

export const PRODUCTS_QUERY = (
  category: CategoryType["category"],
  page: number,
  orderBy: string | null,
  product?: ProductType["product"], // Optional parameter for subcategory
) =>
  `*[_type == 'products' && category->slug.current == '${category}'${
    product ? ` && subcategory->slug.current == '${product}'` : ""
  }]
  | order(${orderBy == null ? "_createdAt desc" : orderBy})[${(page - 1) * 24}...${page * 24}] {
  name,
  price,
  salePrice,
  new,
  "slug": slug.current,
  shortDescription,
  "mainImage": image.asset->url
}`;

export const BANNER_QUERY = (
  category: CategoryType["category"],
  product?: ProductType["product"],
) => {
  const subcategoryCondition = product
    ? `, "subcategory": subcategory->name, "subcategoryBannerImageUrl": subcategory->bannerImage.asset->url`
    : "";

  return `*[_type == 'products' && category->slug.current == '${category}' ${
    product ? `&& subcategory->slug.current == '${product}'` : ""
  }][0]{
    shortDescription,
    "category": category->name,
    "categoryBannerImageUrl": category->bannerImage.asset->url
    ${subcategoryCondition}
  }`;
};

export const MENU_PHOTOS_QUERY = `*[_type == 'subcategory']{
    name,
    "slug": slug.current,
    "subcategoryImage": menuImage.asset->url,
    "categoryImage": category->menuImage.asset->url
  }`;

export const CATEGORY_LANDING_PAGE_BANNER_QUERY = `*[_type == 'category' && (slug.current == 'volne-diamanty' || slug.current == 'investicni-sperky')]{
  name,
  "slug": slug.current,
  "image": menuImage.asset->url
}`;

export const SINGLE_PRODUCT_QUERY = (
  data: string,
) => `*[_type == 'products' && slug.current == '${data}'][0]{
  name,
  price,
  salePrice,
  longDescription,
  "mainImage": image.asset->url,
  "images": productImages[].asset->url
}`;

export const NEW_JEWELRY_QUERY = `*[_type == 'products' && new == true]{
  name,
  price,
  new,
  salePrice,
  shortDescription,
  "slug": slug.current,
  "mainImage": image.asset->url,
}`;

export const SEARCH_QUERY = (data: string) =>
  `*[_type == 'products' && name match "${data}*"]{
  name,
  price,
  salePrice,
  "slug": slug.current,
  "mainImage": image.asset->url,
  shortDescription,
  "totalCount": count(*[_type == "products" && name match "${data}*"])
}`;

export const SEARCH_INPUT_QUERY = (data: string) =>
  `*[_type == 'products' && name match "${data}*"]{
  name,
  price,
  salePrice,
  "slug": slug.current,
  "mainImage": image.asset->url,
  shortDescription,
  "totalCount": count(*[_type == "products" && name match "${data}*"])
}[0..5]`;

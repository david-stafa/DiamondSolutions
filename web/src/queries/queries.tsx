interface ProcuctType {
  product: "prsteny" | "naramky" | "nahrdelniky" | "nausnice";
}
interface CategoryType {
  category: "investicni-sperky" | "volne-diamanty" | "sperky";
}

export const SPERKY_QUERY = (
  product: ProcuctType["product"],
) => `*[_type == 'products' && category->slug.current == 'sperky' && subcategory->slug.current == '${product}']{
  name,
  price,
  salePrice,
  "subcategory": subcategory->name,
  "slug": slug.current,
  shortDescription,
  "subcategoryBannerImageUrl": subcategory->bannerImage.asset->url,
  "mainImage": image.asset->url
  }`;

export const PRODUCTS_QUERY = (
  category: CategoryType["category"],
) => `*[_type == 'products' && category->slug.current == '${category}']{
  name,
  price,
  salePrice,
  "category": category->name,
  "slug": slug.current,
  shortDescription,
  "categoryBannerImageUrl": category->bannerImage.asset->url,
  "mainImage": image.asset->url
  }`;

export const MENU_PHOTOS_QUERY = `*[_type == 'subcategory']{
    name,
    "slug": slug.current,
    "subcategoryImage": menuImage.asset->url,
    "categoryImage": category->menuImage.asset->url
  }`;

export const CATEGORY_BANNER_QUERY = `*[_type == 'category' && (slug.current == 'volne-diamanty' || slug.current == 'investicni-sperky')]{
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
  salePrice,
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

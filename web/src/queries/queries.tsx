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
  shortDescription,
  "subcategoryBannerImageUrl": subcategory->bannerImage.asset->url,
  "imageUrl": image.asset->url
  }`;

export const PRODUCTS_QUERY = (
  category: CategoryType["category"],
) => `*[_type == 'products' && category->slug.current == '${category}']{
  name,
  price,
  shortDescription,
  "categoryBannerImageUrl": category->bannerImage.asset->url,
  "imageUrl": image.asset->url
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
  "image": manuImage.asset->url
}`;

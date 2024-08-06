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

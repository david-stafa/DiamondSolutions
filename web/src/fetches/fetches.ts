import { BANNER_QUERY, PRODUCTS_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

interface CategoryBanner {
  categoryBannerImageUrl: string;
  shortDescription: string;
  category: string;
  subcategory: string;
  subcategoryBannerImageUrl: string;
}

interface ProductsResponse {
  products: products[];
  productsCount: number;
}

interface FetchBannerParams {
  category: "sperky" | "volne-diamanty" | "investicni-sperky";
  product?: "nahrdelniky" | "prsteny" | "naramky" | "nausnice";
}

interface FetchProductsParams {
  category: "sperky" | "volne-diamanty" | "investicni-sperky";
  page: number;
  product?: "nahrdelniky" | "prsteny" | "naramky" | "nausnice";
  orderByQuery:
    | "coalesce(salePrice, price) asc"
    | "coalesce(salePrice, price) desc"
    | "_createdAt asc"
    | "_createdAt desc"
    | null;
}

export async function fetchBanner({
  category,
  product,
}: FetchBannerParams): Promise<CategoryBanner> {
  return sanityFetch({
    query: BANNER_QUERY(category, product),
    revalidate: 60,
  });
}

export async function fetchProducts({
  category,
  page,
  orderByQuery,
  product,
}: FetchProductsParams): Promise<ProductsResponse> {
  const products = await sanityFetch({
    query: PRODUCTS_QUERY(category, page, orderByQuery, product),
    revalidate: 60,
  });

  const { productsCount } = await sanityFetch({
    query: `{
      "productsCount": count(*[_type == "products" && category->slug.current == '${category}'${
        product ? ` && subcategory->slug.current == '${product}'` : ""
      }])
    }`,
    revalidate: 60,
  });
  return { products, productsCount };
}

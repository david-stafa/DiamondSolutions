import MainProductImage from "../products/mainProductImage";
import ProductList from "../products/productList";
import { fetchBanner, fetchProducts } from "@/fetches/fetches";
import Pagination from "./Paggination";
import OrderBy from "./OrderBy";

interface ProductPageControllerParams {
  category: "sperky" | "volne-diamanty" | "investicni-sperky";
  page: number;
  product?: "nahrdelniky" | "prsteny" | "naramky" | "nausnice";
  orderQuery: string | null;
}

type OrderBy =
  | "coalesce(salePrice, price) asc"
  | "coalesce(salePrice, price) desc"
  | "_createdAt asc"
  | "_createdAt desc";

export const ProductPageController = async ({
  category,
  page,
  product,
  orderQuery,
}: ProductPageControllerParams) => {
  try {
    // Create query params for sorting
    const orderByQuery = (orderQuery as OrderBy | null) || null;

    const [banner, { products, productsCount }] = await Promise.all([
      fetchBanner({ category, product }),
      fetchProducts({ category, page, product, orderByQuery }),
    ]);

    return (
      <div className="flex-grow">
        <MainProductImage
          source={
            banner.subcategoryBannerImageUrl || banner.categoryBannerImageUrl
          }
          alt={banner.shortDescription}
          header={banner.subcategory || banner.category}
        />

        <OrderBy orderByQuery={orderByQuery}/>

        <ProductList data={products} />

        <Pagination currentPage={page} productsCount={productsCount} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
};

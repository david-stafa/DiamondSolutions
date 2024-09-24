import MainProductImage from "../products/mainProductImage";
import ProductList from "../products/productList";
import { fetchBanner, fetchProducts } from "@/fetches/fetches";
import Pagination from "./Paggination";

interface ProductPageControllerParams {
  category: "sperky" | "volne-diamanty" | "investicni-sperky";
  page: number;
  product?: "nahrdelniky" | "prsteny" | "naramky" | "nausnice";
}

export const ProductPageController = async ({
  category,
  page,
  product,
}: ProductPageControllerParams) => {
  try {
    const [banner, { products, productsCount }] = await Promise.all([
      fetchBanner({ category, product }),
      fetchProducts({ category, page, product }),
    ]);

    console.log(banner);

    return (
      <div className="flex-grow">
        <MainProductImage
          source={
            banner.subcategoryBannerImageUrl || banner.categoryBannerImageUrl
          }
          alt={banner.shortDescription}
          header={banner.subcategory || banner.category}
        />

        <ProductList data={products} />

        <Pagination currentPage={page} productsCount={productsCount} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
};

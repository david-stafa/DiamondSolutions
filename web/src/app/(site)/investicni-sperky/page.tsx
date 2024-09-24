import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { CATEGORY_BANNER_QUERY, PRODUCTS_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const InvesticniSperky = async () => {
  const categoryBanner = await sanityFetch({
    query: CATEGORY_BANNER_QUERY("investicni-sperky"),
    revalidate: 60,
  });
  const products: products[] = await sanityFetch({
    query: PRODUCTS_QUERY("investicni-sperky"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={categoryBanner.categoryBannerImageUrl}
        alt={categoryBanner.shortDescription}
        header={categoryBanner.category}
      />

      <ProductList data={products} />
    </div>
  );
};

export default InvesticniSperky;

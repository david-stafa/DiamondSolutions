import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const InvesticniSperky = async () => {
  const products: products[] = await sanityFetch({
    query: PRODUCTS_QUERY("investicni-sperky"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={products[0].categoryBannerImageUrl}
        alt={products[0].shortDescription}
        header={products[0].category}
      />

      <ProductList data={products} />
    </div>
  );
};

export default InvesticniSperky;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const Sperky = async () => {
  const sperky: products[] = await sanityFetch({
    query: PRODUCTS_QUERY("sperky"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={sperky[0].categoryBannerImageUrl}
        alt={sperky[0].shortDescription}
        header={sperky[0].category}
      />

      <ProductList data={sperky} />
    </div>
  );
};

export default Sperky;

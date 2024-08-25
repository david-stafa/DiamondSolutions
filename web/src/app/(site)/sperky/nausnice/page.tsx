import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const Earings = async () => {
  const nausnice: products[] = await sanityFetch({
    query: SPERKY_QUERY("nausnice"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={nausnice[0].subcategoryBannerImageUrl}
        alt={nausnice[0].shortDescription}
        header={nausnice[0].subcategory}
      />

      <ProductList data={nausnice} />
    </div>
  );
};

export default Earings;

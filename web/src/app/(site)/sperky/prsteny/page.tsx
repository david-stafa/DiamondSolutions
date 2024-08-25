import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const Ring = async () => {
  const prsteny: products[] = await sanityFetch({
    query: SPERKY_QUERY("prsteny"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={prsteny[0].subcategoryBannerImageUrl}
        alt={prsteny[0].shortDescription}
        header={prsteny[0].subcategory}
      />

      <ProductList data={prsteny} />
    </div>
  );
};

export default Ring;

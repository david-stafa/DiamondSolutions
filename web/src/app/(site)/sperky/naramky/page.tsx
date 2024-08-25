import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";

import { sanityFetch } from "@/sanity/lib/client";

const Bracelet = async () => {
  const naramky: products[] = await sanityFetch({
    query: SPERKY_QUERY("naramky"),
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <div className="flex-grow">
      <MainProductImage
        source={naramky[0].subcategoryBannerImageUrl}
        alt={naramky[0].shortDescription}
        header={naramky[0].subcategory}
      />

      <ProductList data={naramky} />
    </div>
  );
};

export default Bracelet;

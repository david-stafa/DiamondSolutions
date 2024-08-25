import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";

import { sanityFetch } from "@/sanity/lib/client";

const Necklace = async () => {
  const nahrdelniky: products[] = await sanityFetch({
    query: SPERKY_QUERY("nahrdelniky"),
    revalidate: 60, // update cache at most once every minute
  });

  console.log(nahrdelniky);

  return (
    <div className="flex-grow">
      <MainProductImage
        source={nahrdelniky[0].subcategoryBannerImageUrl}
        alt={nahrdelniky[0].shortDescription}
        header={nahrdelniky[0].subcategory}
      />

      <ProductList data={nahrdelniky} />
    </div>
  );
};

export default Necklace;

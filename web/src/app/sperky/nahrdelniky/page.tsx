import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Necklace = async () => {
  const nahrdelniky: products[] = await client.fetch(SPERKY_QUERY("nahrdelniky"));

  return (
    <>
      <MainProductImage
        source={nahrdelniky[0].subcategoryBannerImageUrl}
        alt={nahrdelniky[0].shortDescription}
      />

      <ProductList data={nahrdelniky} />
    </>
  );
};

export default Necklace;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Ring = async () => {
  const prsteny: products[] = await client.fetch(SPERKY_QUERY("prsteny"));

  return (
    <>
      <MainProductImage
        source={prsteny[0].subcategoryBannerImageUrl}
        alt={prsteny[0].shortDescription}
      />

      <ProductList data={prsteny} />
    </>
  );
};

export default Ring;

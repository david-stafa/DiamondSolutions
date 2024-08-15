import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Bracelet = async () => {
  const naramky: products[] = await client.fetch(SPERKY_QUERY("naramky"));

  return (
    <>
      <MainProductImage
        source={naramky[0].subcategoryBannerImageUrl}
        alt={naramky[0].shortDescription}
      />

      <ProductList data={naramky} />
    </>
  );
};

export default Bracelet;

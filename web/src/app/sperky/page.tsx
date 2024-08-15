import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Sperky = async () => {
  const sperky: products[] = await client.fetch(PRODUCTS_QUERY("sperky"));

  return (
    <>
      <MainProductImage
        source={sperky[0].categoryBannerImageUrl}
        alt={sperky[0].shortDescription}
      />

      <ProductList data={sperky} />
    </>
  );
};

export default Sperky;

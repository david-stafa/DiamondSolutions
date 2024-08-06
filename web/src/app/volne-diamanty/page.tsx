import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const VolneDiamanty = async () => {
  const products: products[] = await client.fetch(PRODUCTS_QUERY("volne-diamanty"));

  return (
    <>
      <MainProductImage
        source={products[0].categoryBannerImageUrl}
        alt={products[0].shortDescription}
      />

      <ProductList data={products} />
    </>
  );
};

export default VolneDiamanty;

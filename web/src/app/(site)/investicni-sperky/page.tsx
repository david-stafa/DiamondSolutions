import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const InvesticniSperky = async () => {
  const products: products[] = await client.fetch(PRODUCTS_QUERY("investicni-sperky"));

  return (
    <div className="flex-grow">
      <MainProductImage
        source={products[0].categoryBannerImageUrl}
        alt={products[0].shortDescription}
        header={products[0].category}
      />

      <ProductList data={products} />
    </div>
  );
};

export default InvesticniSperky;

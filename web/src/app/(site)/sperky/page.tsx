import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { PRODUCTS_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Sperky = async () => {
  const sperky: products[] = await client.fetch(PRODUCTS_QUERY("sperky"));

  return (
    <div className="flex-grow">
      <MainProductImage
        source={sperky[0].categoryBannerImageUrl}
        alt={sperky[0].shortDescription}
        header={sperky[0].category}
      />

      <ProductList data={sperky} />
    </div>
  );
};

export default Sperky;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Ring = async () => {
  const prsteny: products[] = await client.fetch(SPERKY_QUERY("prsteny"));

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={prsteny[0].subcategoryBannerImageUrl}
        alt={prsteny[0].shortDescription}
      />

      <ProductList data={prsteny} />
    </div>
  );
};

export default Ring;

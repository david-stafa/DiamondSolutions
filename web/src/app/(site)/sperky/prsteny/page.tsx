import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Ring = async () => {
  const prsteny: products[] = await client.fetch(SPERKY_QUERY("prsteny"));

  return (
    <div className="flex-grow">
      <MainProductImage
        source={prsteny[0].subcategoryBannerImageUrl}
        alt={prsteny[0].shortDescription}
        header={prsteny[0].subcategory}
      />

      <ProductList data={prsteny} />
    </div>
  );
};

export default Ring;

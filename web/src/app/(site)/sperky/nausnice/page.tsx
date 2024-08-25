import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Earings = async () => {
  const nausnice: products[] = await client.fetch(SPERKY_QUERY("nausnice"));

  return (
    <div className="flex-grow">
      <MainProductImage
        source={nausnice[0].subcategoryBannerImageUrl}
        alt={nausnice[0].shortDescription}
        header={nausnice[0].subcategory}
      />

      <ProductList data={nausnice} />
    </div>
  );
};

export default Earings;

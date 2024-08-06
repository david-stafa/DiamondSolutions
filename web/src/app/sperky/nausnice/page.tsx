import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Earings = async () => {
  const nausnice: products[] = await client.fetch(SPERKY_QUERY("nausnice"));

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={nausnice[0].subcategoryBannerImageUrl}
        alt={nausnice[0].shortDescription}
      />

      <ProductList data={nausnice} />
    </div>
  );
};

export default Earings;

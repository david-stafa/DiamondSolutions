import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { SPERKY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const Necklace = async () => {
  const nahrdelniky: products[] = await client.fetch(SPERKY_QUERY("nahrdelniky"));

  console.log(nahrdelniky)

  return (
    <div className="flex-grow">
      <MainProductImage
        source={nahrdelniky[0].subcategoryBannerImageUrl}
        alt={nahrdelniky[0].shortDescription}
        header={nahrdelniky[0].subcategory}
      />

      <ProductList data={nahrdelniky} />
    </div>
  );
};

export default Necklace;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'sperky' && subcategory->slug.current == 'nahrdelniky']{
  name,
  price,
  shortDescription,
  "imageUrl": image.asset->url
  }`;

const Necklace = async () => {
  const nahrdelniky: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={nahrdelniky[0].imageUrl}
        alt={nahrdelniky[0].shortDescription}
      />

      <ProductList data={nahrdelniky} />
    </div>
  );
};

export default Necklace;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'volne-diamanty']{
  name,
  price,
  "imageUrl": image.asset->url
  }`;

const Earings = async () => {
  const nausnice: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={nausnice[1].imageUrl}
        alt={nausnice[1].shortDescription}
      />

      <ProductList data={nausnice} />
    </div>
  );
};

export default Earings;

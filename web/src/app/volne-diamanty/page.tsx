import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'volne-diamanty']{
  name,
  price,
  "imageUrl": image.asset->url
}`;

const VolneDiamanty = async () => {
  const products: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <>
      <MainProductImage
        source={products[1].imageUrl}
        alt={products[1].shortDescription}
      />

      <ProductList data={products} />
    </>
  );
};

export default VolneDiamanty;

import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'investicni-sperky']{
  name,
  price,
  shortDescription,
  "imageUrl": image.asset->url
}`;

const InvesticniSperky = async () => {
  const products: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <>
      <MainProductImage
        source={products[0]?.imageUrl}
        alt={products[0]?.shortDescription}
      />

      <ProductList data={products} />
    </>
  );
};

export default InvesticniSperky;

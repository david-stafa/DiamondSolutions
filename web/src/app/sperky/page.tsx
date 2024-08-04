
import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'sperky']{
  name,
  price,
  "imageUrl": image.asset->url
  }`;

const Sperky = async () => {
  const sperky: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage source={sperky[1].imageUrl} alt={sperky[1].shortDescription} />

      <ProductList data={sperky} />

    </div>
  );
};

export default Sperky;

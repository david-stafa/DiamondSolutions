import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'sperky' && subcategory->slug.current == 'naramky']{
  name,
  price,
  shortDescription,
  "imageUrl": image.asset->url
  }`;

const Bracelet = async () => {
  const naramky: products[] = await client.fetch(PRODUCTS_QUERY);

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={naramky[0].imageUrl}
        alt={naramky[0].shortDescription}
      />

      <ProductList data={naramky} />
    </div>
  );
};

export default Bracelet;

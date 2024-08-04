import MainProductImage from "@/components/products/mainProductImage";
import ProductList from "@/components/products/productList";
import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[_type == 'products' && category->slug.current == 'sperky' && subcategory->slug.current == 'prsteny']{
  name,
  price,
  shortDescription,
  "imageUrl": image.asset->url
  }`;

const Ring = async () => {
  const prsteny: products[] = await client.fetch(PRODUCTS_QUERY);
  console.log(prsteny)

  return (
    <div className="max-w-7xl px-4 xl:px-0">
      <MainProductImage
        source={prsteny[0].imageUrl}
        alt={prsteny[0].shortDescription}
      />

      <ProductList data={prsteny} />
    </div>
  );
};

export default Ring;

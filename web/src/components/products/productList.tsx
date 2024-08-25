import { numberWithDecimals } from "@/helpers/numberwdecimals";
import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";
import ProductCard from "../common/productCard";

type Props = {
  data: products[];
};

const ProductList: React.FC<Props> = async ({ data }) => {
  return (
    <Container>
      <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mb-8 lg:gap-4 xl:grid-cols-4">
        {data.map((product, index) => (

          <ProductCard product={product} key={index} />
          // <div
          //   key={index}
          //   className="overflow-hidden rounded-2xl border border-slate-200"
          // >
          //   <Link href={`/produkt/${product.slug}`}>
          //     <div className="relative aspect-square overflow-hidden border-b">
          //       <Image
          //         fill={true}
          //         src={product.mainImage}
          //         alt={product.shortDescription}
          //         className="aspect-square transition ease-in-out hover:scale-110"
          //       />
          //     </div>
          //     <h6 className="mt-3 pl-2">{product.name}</h6>
          //     <p className="mb-3 pl-2">
          //       {numberWithDecimals(product.price)} Kč
          //     </p>
          //   </Link>
          // </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;

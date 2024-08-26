import { numberWithDecimals } from "@/helpers/numberwdecimals";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  product,
  index,
}: {
  product: products;
  index?: string;
}) => {
  return (
    <div
      key={index || undefined}
      className="overflow-hidden rounded-2xl border border-slate-200"
    >
      <Link href={`/produkt/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            fill={true}
            src={product.mainImage}
            alt={product.shortDescription}
            className="aspect-square transition ease-in-out hover:scale-110"
          />
        </div>
        <h6 className="mt-3 pl-2">{product.name}</h6>
        {product.salePrice ? (
          <>
            <p className="mb-3 inline-block pl-2 text-sm text-gray-500 line-through">
              {numberWithDecimals(product.price)} Kč
            </p>
            <p className="mb-3 inline-block pl-2">
              {numberWithDecimals(product.salePrice)} Kč
            </p>
          </>
        ) : (
          <p className="mb-3 pl-2">{numberWithDecimals(product.price)} Kč</p>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;

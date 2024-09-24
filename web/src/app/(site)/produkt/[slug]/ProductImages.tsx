import Image from "next/image";
import Link from "next/link";

const ProductImages = ({
  imagesArray,
  slug,
}: {
  imagesArray: string[];
  slug: string;
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {imagesArray?.map((img, i) => (
        <Link
          className="relative aspect-square overflow-hidden rounded-2xl"
          key={i}
          href={`/produkt/${slug}/?show=true&imageNumber=${i}`}
          scroll={false}
        >
          <Image src={img} alt={`product${i}`} fill={true} />
        </Link>
      ))}
    </div>
  );
};

export default ProductImages;

import Image from "next/image";

const ModalProductImages = ({
  productImages,
  alt,
}: {
  productImages: string[];
  alt: string;
}) => {
  return (
    <div className="grid grid-cols-2">
      {productImages.map((image, index) => (
        <div key={index} className="relative h-32 w-32">
          <Image src={image} alt={alt} fill={true} />
        </div>
      ))}
    </div>
  );
};

export default ModalProductImages;
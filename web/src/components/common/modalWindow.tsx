// Server-side Modal

import ModalProductImages from "@/app/(site)/produkt/[slug]/modalProductImages";
import Close from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  productImages: string[];
  alt: string;
  slug: string;
  imageNumber: string;
}

const Modal: React.FC<ModalProps> = ({
  productImages,
  alt,
  slug,
  imageNumber,
}) => {
  return (
    // <Link
    //   href={`/produkt/${slug}`}
    //   className="fixed inset-0 z-10 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50"
    // >
    //   <div className="relative z-30 aspect-square h-4/5 overflow-clip rounded-2xl">
    //     <Image src={productImages[+imageNumber]} alt={alt} fill={true} />

    //     {/* Update later if you need to show all images in modal - In this version only one image is shown */}
    //     {/* <ModalProductImages productImages={productImages} alt={alt} /> */}
    //     {/* Navigates back to the base URL - closing the modal */}

    //     <Link href={`/produkt/${slug}`} className="absolute right-5 top-5">
    //       <Close fontSize="large" />
    //     </Link>
    //   </div>
    // </Link>
    <div className="fixed inset-0 z-10 flex w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div className="relative z-30 aspect-square w-[80%] max-w-3xl overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src={productImages[+imageNumber]}
            alt={alt}
            fill
            // className="object-contain"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Link
          href={`/produkt/${slug}`}
          className="absolute right-5 top-5 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
          aria-label="Close modal"
          scroll={false}
        >
          <Close fontSize="large" />
        </Link>
      </div>
      <Link
        href={`/produkt/${slug}`}
        className="fixed inset-0 z-20"
        aria-label="Close modal"
        scroll={false}
      />
    </div>
  );
};

export default Modal;

import Container from "../../../../components/common/Container";
import { SINGLE_PRODUCT_QUERY } from "@/queries/queries";
import { CarouselProduct } from "@/app/(site)/produkt/[slug]/carouselProduct";
import { sanityFetch } from "@/sanity/lib/client";
import Modal from "@/components/common/modalWindow";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import BreadCrumbs from "@/components/common/Breadcrumbs";

interface params {
  slug: string;
  show: string;
  imageNumber: string;
}

const ProductPage: React.FC<params> = async ({ slug, show, imageNumber }) => {
  const product: products = await sanityFetch({
    query: SINGLE_PRODUCT_QUERY(slug),
    revalidate: 60, // update cache at most once every minute
  });

  const imagesArray = [product.mainImage, ...(product.images || [])];

  return (
    <Container classes={"flex-grow"}>
      {show && (
        <Modal
          productImages={imagesArray}
          alt={product.shortDescription}
          slug={slug}
          imageNumber={imageNumber}
        />
      )}
      <div className="my-4 grid w-full grid-cols-1 lg:flex">
        <BreadCrumbs slug={slug} className={"block lg:hidden pb-4 pl-1 text-sm"}/>
        {/* Carousel for MOBILE devices - sm:hidden */}
        <CarouselProduct data={imagesArray} />
        {/* Product images for bigger screens - sm:flex */}
        <div className="hidden flex-col gap-2 sm:flex lg:w-[calc(100%-440px)] lg:max-w-[calc(100%-440px)] lg:pr-12">
          <ProductImages imagesArray={imagesArray} slug={slug} />
        </div>
        <div>
          <BreadCrumbs slug={slug} className={"hidden lg:block mb-[-8px] "}/>
          <ProductDescription
            name={product.name}
            price={product.price}
            salePrice={product.salePrice}
            longDescription={product.longDescription}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;

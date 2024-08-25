import { numberWithDecimals } from "@/helpers/numberwdecimals";
import Container from "./common/Container";
import { PRODUCTS_QUERY, SINGLE_PRODUCT_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";
import Image from "next/image";
import Carousel from "./common/carrousel";
import { CarouselSize } from "./common/carrouselShad";
import { CarouselProduct } from "@/app/(site)/produkt/[slug]/carouselProduct";
import Link from "next/link";

interface params {
  slug: string;
}

const ProductPage: React.FC<params> = async ({ slug }) => {
  const product: products = await client.fetch(SINGLE_PRODUCT_QUERY(slug));

  const imagesArray = [product.mainImage, ...(product.images || [])];

  return (
    <Container classes={"flex-grow"}>
      <div className="my-8 grid w-full grid-cols-1 lg:flex">
        <CarouselProduct data={imagesArray} />
        <div className="flex h-full flex-col gap-2 lg:w-[calc(100%-440px)] lg:max-w-[calc(100%-440px)] lg:pr-12">
          {/* IMAGES */}
          <div className="hidden gap-2 sm:grid sm:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src={product?.mainImage} alt={`product`} fill={true} />
            </div>
            {product?.images?.map((img, i) => (
              <div
                className="relative aspect-square overflow-hidden rounded-2xl"
                key={i}
              >
                <Image src={img} alt={`product${i}`} fill={true} />
              </div>
            ))}
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="h-auto w-full self-start lg:sticky lg:top-0 lg:w-[440px] lg:max-w-[440px]">
          <div className="mb-4 mt-5 flex h-fit justify-between">
            <h3 className="flex w-fit items-end">{product?.name}</h3>
            <div className="mt-auto flex h-full flex-col flex-wrap">
              {product.salePrice ? (
                <>
                  {" "}
                  <div className="ml-auto h-1/2 w-fit text-nowrap text-gray-500 line-through">
                    {numberWithDecimals(product?.price)} Kč
                  </div>
                  <div className="ml-auto h-1/2 w-fit text-nowrap text-lg">
                    {numberWithDecimals(product?.salePrice)} Kč
                  </div>
                </>
              ) : (
                <div className="ml-auto h-1/2 w-fit text-nowrap text-lg">
                  {numberWithDecimals(product?.price)} Kč
                </div>
              )}
            </div>
          </div>
          <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
          <p className="font mb-4">{product?.longDescription}</p>
          <Link href="/kontakt">
            <button className="h-12 w-full rounded-2xl bg-slate-200">
              Kontaktujte nás
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;

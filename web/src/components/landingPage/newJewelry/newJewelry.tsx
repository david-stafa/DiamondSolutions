import { CarouselSize } from "@/components/common/carrouselShad";
import Container from "@/components/common/Container";
import { NEW_JEWELRY_QUERY } from "@/queries/queries";
import { sanityFetch } from "@/sanity/lib/client";

const NewJewelry = async () => {
  const newJewelry: products[] = await sanityFetch({
    query: NEW_JEWELRY_QUERY,
    revalidate: 60, // update cache at most once every minute
  });

  return (
    <Container classes="mb-8">
      <h4 className="mb-4">Novinky:</h4>
      {/* <ItemsGallery
        data={[
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
        ]}
      /> */}
      <CarouselSize data={newJewelry} />
      {/* <ItemsGalleryMobile data={[{ image: "/" }, { image: "/" }]} /> */}
      <hr className="mb-8 mt-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
    </Container>
  );
};

export default NewJewelry;

import { CarouselSize } from "@/components/common/carrouselShad";
import Container from "@/components/common/Container";
import ItemsGallery from "@/components/common/ItemsGallery";
import ItemsGalleryMobile from "@/components/common/ItemsGalleryMobile";
import { NEW_JEWELRY_QUERY } from "@/queries/queries";
import { client } from "@/sanity/client";

const NewJewelry = async () => {
  const newJewelry: products[] = await client.fetch(
    NEW_JEWELRY_QUERY,
  );

  console.log(newJewelry)

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

import { ProductPageController } from "@/components/common/ProductsPageController";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Earings = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1;
  return (
    <ProductPageController category="sperky" page={page} product="nausnice" />
  );
};

export default Earings;

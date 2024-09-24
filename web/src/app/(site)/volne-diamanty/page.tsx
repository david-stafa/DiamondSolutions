import { ProductPageController } from "@/components/common/ProductsPageController";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const VolneDiamanty = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1;

  return <ProductPageController category="volne-diamanty" page={page} />;
};

export default VolneDiamanty;

import { ProductPageController } from "@/components/common/ProductsPageController";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Bracelet = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1;
  const orderQuery = (searchParams["order-by"] as string) || null;
  
  return (
    <ProductPageController
      category="sperky"
      page={page}
      product="naramky"
      orderQuery={orderQuery}
    />
  );
};

export default Bracelet;

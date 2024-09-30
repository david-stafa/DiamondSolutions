import { ProductPageController } from "@/components/common/ProductsPageController";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const InvesticniSperky = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1;
  const orderQuery = (searchParams["order-by"] as string) || null;

  return (
    <ProductPageController
      category="investicni-sperky"
      page={page}
      orderQuery={orderQuery}
    />
  );
};

export default InvesticniSperky;

import { ProductPageController } from "@/components/common/ProductsPageController";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Sperky({ searchParams }: PageProps) {
  const page = Number(searchParams.page) || 1;

  return <ProductPageController category="sperky" page={page} />;
}

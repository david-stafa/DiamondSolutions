import ProductPage from "@/components/ProductPage";
import { useParams } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <ProductPage slug={slug as string} />
    </>
  );
}

import ProductPage from "./ProductPage";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { show: string; imageNumber: string };
}) {

  const { slug } = params;
  const { show, imageNumber } = searchParams;

  return (
    <>
      <ProductPage slug={slug} show={show} imageNumber={imageNumber} />
    </>
  );
}

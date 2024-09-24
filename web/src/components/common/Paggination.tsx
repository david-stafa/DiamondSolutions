"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface props {
  productsCount: number;
  currentPage: number;
}

const Pagination: React.FC<props> = ({ productsCount, currentPage }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();


  // Total Pages count
  const pages = Math.ceil(productsCount / 2);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  //TODO UI pro strankovani

  return (
    <div className={`flex justify-center mb-8`}>
      {Array.from({ length: pages }).map((_, index) => (
        <span
          className={`cursor-pointer px-1 ${index + 1 == currentPage ? "underline underline-offset-4 cursor-auto" : ""}`}
          // Disable onclick when page is 2 and user would click on 2 again
          onClick={() =>
            index + 1 != currentPage && router.push(createPageURL(index + 1))
          }
          key={index}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

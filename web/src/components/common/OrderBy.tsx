"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const options = [
  { value: "coalesce(salePrice, price) asc", label: "Nejlevnější" },
  { value: "coalesce(salePrice, price) desc", label: "Nejdražší" },
  { value: "_createdAt asc", label: "Nejstarší" },
  { value: "_createdAt desc", label: "Nejnovější" },
];

type OrderByQuery =
  | "coalesce(salePrice, price) asc"
  | "coalesce(salePrice, price) desc"
  | "_createdAt asc"
  | "_createdAt desc"
  | null;

const OrderBy = ({ orderByQuery }: { orderByQuery: OrderByQuery }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  // Constant to make sure that user cant click on chosen filter again
  const clickDisabler = orderByQuery || "_createdAt desc";

  const createPageURL = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("order-by", value);
    return `${pathname}?${params.toString()}`;
  };

  // Function that finds matching value from Options object with Query params order-by
  const getLabelFromQuery = (query: OrderByQuery): string => {
    const option = options.find((opt) => opt.value === query);
    return option ? option.label : "Nejnovější"; // Fallback to default if no match
  };

  return (
    <div className="mb-2 md:mb-4 relative ml-auto w-fit max-w-7xl px-5">
      <div
        className="ml-auto flex w-52 cursor-pointer items-center justify-around rounded-2xl bg-slate-200 p-1 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="p-1 pl-2 text-center">Seřadit od:</p>
        <div className="p-1 text-center">{getLabelFromQuery(orderByQuery)}</div>

        <span className="px-1">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </div>

      {isOpen && (
        <div className="absolute z-20 w-52 rounded-2xl bg-slate-100 p-1 pl-3">
          {options.map((option, index) => (
            <div
              className={`${clickDisabler === option.value ? "cursor-text text-gray-500" : ""} cursor-pointer text-sm py-1`}
              onClick={() => {
                if (clickDisabler != option.value) {
                  router.push(createPageURL(option.value));
                  setIsOpen(false);
                }
              }}
              key={index}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderBy;

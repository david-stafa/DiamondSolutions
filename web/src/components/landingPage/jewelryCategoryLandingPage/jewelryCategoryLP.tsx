"use client";
import { menuItemsData } from "@/data/menuItemsData";
import Link from "next/link";

const JewelryCategoryLandingPage = () => {
  const sperkyItem = menuItemsData.find((item) => item.title === "Šperky");
  return (
    <div className="mx-auto max-w-7xl">
      <h4 className="mb-8">Šperky podle kategorie: </h4>
      <div className="my-8 flex justify-around rounded-2xl shadow-xl">
        {sperkyItem &&
          sperkyItem.submenu &&
          // Render SPERKY categories
          sperkyItem.submenu.map((submenuItem, index) => (
            <div key={index} className="flex w-fit flex-col items-center py-8">
              <h6 className="mb-4">{submenuItem.title}</h6>
              <Link href={submenuItem.url}>
                <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-slate-200">
                  <h6 className="text-center">IMAGE of: {submenuItem.title}</h6>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JewelryCategoryLandingPage;

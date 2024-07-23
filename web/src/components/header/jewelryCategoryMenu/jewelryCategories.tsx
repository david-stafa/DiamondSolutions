"use client";
import { menuItemsData } from "@/data/menuItemsData";
import Link from "next/link";


const JewelryCategoryLandingPage = () => {
  const sperkyItem = menuItemsData.find((item) => item.title === "Šperky");
  return (
    <div className="max-w-7xl bg-slate-200 m-auto flex justify-around ">
      {sperkyItem &&
        sperkyItem.submenu &&
        // Render SPERKY categories
        sperkyItem.submenu.map((submenuItem, index) => (
          <div key={index} className="w-fit py-8 flex flex-col items-center">
            <h3 className="mb-4">{submenuItem.title}</h3>
            <Link href={submenuItem.url}>
              <div className="w-36 h-36 bg-white">
                <h4>IMAGE of: {submenuItem.title}</h4>
              </div>
            </Link>
            {submenuItem.submenu && (
              <div className="w-full">
                {/* Render subcategories for sperky */}
                {submenuItem.submenu.map((nestedSubmenuItem, nestedIndex) => (
                  <div key={nestedIndex}>
                    <p>{nestedSubmenuItem.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default JewelryCategoryLandingPage;

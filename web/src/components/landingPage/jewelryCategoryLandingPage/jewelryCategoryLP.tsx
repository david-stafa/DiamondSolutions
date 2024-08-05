"use client";
import Container from "@/components/common/Container";
import { menuItemsData } from "@/data/menuItemsData";
import Link from "next/link";

const JewelryCategoryLandingPage = () => {
  const sperkyItem = menuItemsData.find((item) => item.title === "Šperky");

  return (
    <Container>
      <h4 className="mb-8">Šperky podle kategorie: </h4>
      <div className="p-8 grid grid-cols-5 flex-wrap gap-4 rounded-2xl shadow-xl">
        {sperkyItem &&
          sperkyItem.submenu &&
          // Render SPERKY categories
          sperkyItem.submenu.map((submenuItem, index) => (
            <div key={index} className="">
              <h6 className="mb-4 text-center">{submenuItem.title}</h6>
              <Link href={submenuItem.url}>
                <div className="w-full h-40 rounded-2xl bg-slate-200 m-auto">
                  <h6 className="text-center">IMAGE of: {submenuItem.title}</h6>
                </div>
              </Link> 
            </div>
          ))}
      </div>
    </Container>
  );
};

export default JewelryCategoryLandingPage;

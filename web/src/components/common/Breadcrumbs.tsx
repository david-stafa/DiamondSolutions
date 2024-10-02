import { sanityFetch } from "@/sanity/lib/client";
import Link from "next/link";

interface BreadcrumbsResponse {
  breadcrumbs: {
    label: string | null;
    link: string | null;
  }[];
}

interface BreadcrumbsProps {
  slug: string;
  className: string;
}

const breadcrumbsQuery = (slug: string) => `
  *[_type == 'products' && slug.current == '${slug}'][0]{
    "breadcrumbs": [
      { "label": "Domů", "link": "/" },
      { "label": category->name, "link": "/" + category->slug.current },
      { "label": subcategory->name, "link": "/" + category->slug.current + "/" + subcategory->slug.current }
    ]
  }
`;

const BreadCrumbs: React.FC<BreadcrumbsProps> = async ({ slug, className }) => {
  const breadcrumbsFetch: BreadcrumbsResponse = await sanityFetch({
    query: breadcrumbsQuery(slug),
    revalidate: 60, // update cache at most once every minute
  });

  let { breadcrumbs } = breadcrumbsFetch;

  // Get rid of subcategory if does not exists
  breadcrumbs[2].label === null && breadcrumbs.splice(2, 2);

  return (
    <div className={className}>
      {breadcrumbs.map((object, index) => (
        <span key={index} className="text-gray-500 hover:text-black">
          <Link href={object.link!}>
            {object.label} {index + 1 < breadcrumbs.length && "/"}{" "}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;

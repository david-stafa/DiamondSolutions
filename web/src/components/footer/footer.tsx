import { footerData } from "@/data/footerData";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";

// Define the type for the icon mapping
interface IconMapping {
  [key: string]: React.ComponentType<any>;
}

const iconMapping: IconMapping = {
  email: EmailIcon,
  phone: PhoneIcon,
  instagram: InstagramIcon,
  adress: StoreIcon,
};

const CONTACT_QUERY = `*[_type == 'contact' && name == 'Diamond Solutions'][0]{
  phone, 
  adress,
  instagram,
  email
}`;

interface Contact {
  phone: string;
  adress: string;
  instagram: { link: string; name: string };
  email: string;
}

const Footer = async () => {
  const contactData:Contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  const contactArray = Object.entries(contactData);

  return (
    <div className="h-fit w-full bg-slate-200">
      <div className="m-auto flex h-fit max-w-7xl flex-wrap justify-between px-5 pb-4">
        <div>
          <h5 className="pt-4 underline">Kontakt</h5>
          {contactArray &&
            contactArray.map(([key, value], index) => {
              const IconComponent = key && iconMapping[key];

              return (
                <div key={index} className="flex">
                  <div className="flex h-6 items-center">
                    {IconComponent && <IconComponent className="mr-2" />}
                    {value.name ? (
                      <Link href={value.link}>
                        <span>{value.name}</span>
                      </Link>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

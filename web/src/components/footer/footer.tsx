import { footerData } from "@/data/footerData";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";

// Define the type for the icon mapping
interface IconMapping {
  [key: string]: React.ComponentType<any>;
}

const iconMapping: IconMapping = {
  EmailIcon: EmailIcon,
  PhoneIcon: PhoneIcon,
  InstagramIcon: InstagramIcon,
  StoreIcon: StoreIcon,
};

const Footer = () => {
  return (
    <div className="mt-auto flex h-fit w-full justify-around bg-gray-200 p-8">
      {footerData &&
        footerData.map((section, index) => (
          <div key={index}>
            <h5 className="mb-2 underline">{section.title}</h5>
            {section.links.map((link, linkIndex) => {
              const IconComponent = link.icon && iconMapping[link.icon];
              return (
                <div key={linkIndex} className="flex">
                  <div className="flex h-6 items-center">
                    {link.link ? (
                      <>
                        {IconComponent && <IconComponent className="mr-2" />}
                        <Link href={link.link}>
                          <span className="">{link.data || link.title}</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        {IconComponent && <IconComponent className="mr-2" />}
                        <span className="">{link.data || link.title}</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Footer;

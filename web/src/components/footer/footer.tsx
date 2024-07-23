import { footerData } from "@/data/footerData";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";

const iconMapping = {
  EmailIcon: EmailIcon,
  PhoneIcon: PhoneIcon,
  InstagramIcon: InstagramIcon,
  StoreIcon: StoreIcon,
};

const Footer = () => {

  return (
    <div className="flex h-fit w-screen justify-around bg-gray-200 p-8 mt-auto">
      {footerData &&
        footerData.map((section, index) => (
          <div key={index}>
            <h5 className="mb-2 underline">{section.title}</h5>
            {section.links.map((link, linkIndex) => {
              const IconComponent = iconMapping[link.icon];
              return (
                <div key={linkIndex} className="flex">
                  <div className="h-6 flex items-center">
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

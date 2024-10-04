import { sanityFetch } from "@/sanity/lib/client";
import Instagram from "@mui/icons-material/Instagram";

const CONTACT_QUERY = `*[_type == 'contact' && name == 'Diamond Solutions'][0]{
  phone, 
  adress,
  instagram,
  email,
  openHours
}`;

interface Contact {
  phone: string;
  adress: string;
  instagram: { link: string; name: string };
  email: string;
  openHours: {days: string, hours: string};
}

const ContactInfo = async () => {
  const contactData: Contact = await sanityFetch({
    query: CONTACT_QUERY,
    revalidate: 60,
  });

  console.log(contactData)
  return (
    <div>
      <h2 className="mb-4">Spojte se s námi</h2>
      <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
        <div>
          <p className="text-base font-bold">Kontaktujte nás</p>
          <p>{contactData.openHours.days}</p>
          <p>{contactData.openHours.hours}</p>
        </div>
        <div>
          <p className="text-base font-bold">Adresa</p>
          <p>{contactData.adress}</p>
        </div>
        <div>
          <p className="text-base font-bold">Telefon</p>
          <p>{contactData.phone}</p>
        </div>
        <div>
          <p className="text-base font-bold">Sociální sítě</p>
          <a href={contactData.instagram.link} className="flex">
            <Instagram />
            <p className="ml-1">{contactData.instagram.name}</p>
          </a>
        </div>
        <div>
          <p className="text-base font-bold">Napište nám</p>
          <p>{contactData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

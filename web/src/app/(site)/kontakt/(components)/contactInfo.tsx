import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="mb-4">Spojte se s námi</h2>
      <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
        <div>
          <p className="text-base font-bold">Kontaktujte nás</p>
          <p>Po - Pá</p>
          <p>09 - 17 h</p>
        </div>
        <div>
          <p>Adresa</p>
          <p>Revolucni 655, Praha</p>
        </div>
        <div className="text-base font-bold">
          <p>Telefon</p>
          <p>+420 123 456 789</p>
        </div>
        <div className="text-base font-bold">
          <p>Sociální sítě</p>
          <div>
            <Facebook />
            <Instagram />
          </div>
        </div>
        <div>
          <p className="text-base font-bold">Napište nám</p>
          <p>info@diamondsolutions.cz</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

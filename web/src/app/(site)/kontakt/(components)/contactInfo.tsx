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
          <p className="text-base font-bold">Adresa</p>
          <p>Plzeňská 18, 150 00 Praha</p>
        </div>
        <div>
          <p className="text-base font-bold">Telefon</p>
          <p>+420 775 339 817</p>
        </div>
        <div>
          <p className="text-base font-bold">Sociální sítě</p>
          <a
            href="https://www.instagram.com/diamond_solutionss/?igsh=MTd2bjR3dWVlZmF4ag%3D%3D&utm_source=qr"
            className="flex"
          >
            <Instagram />
            <p className="ml-1">diamond_solutionss</p>
          </a>
        </div>
        <div>
          <p className="text-base font-bold">Napište nám</p>
          <p>info@diamondhut.cz</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

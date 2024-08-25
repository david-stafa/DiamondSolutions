import Container from "@/components/common/Container";
import ContactInfo from "./(components)/contactInfo";
import ContactForm from "./(components)/contactForm";
import Map from "./(components)/map";
import CompanyPicture from "./(components)/companyPicture";

export default function Contact() {
  return (
    <Container classes="grow mt-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-20 ">
        <CompanyPicture />
        <div className="flex flex-col gap-4 justify-center">
          <ContactInfo />
          <Map />
        </div>
      </div>
      <ContactForm />
    </Container>
  );
}

import Container from "@/components/common/Container";

const BrandDescription = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-300 pt-8">
      <Container>
        {/* <div className="flex items-center justify-between"> */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="my-auto mb-4 md:mb-0 flex-grow align-middle">Diamond Solutions</h1>
          <p className="w-full text-justify text-base">
            Diamond Hut s.r.o. je malá česká společnost se sídlem v Praze, která
            se specializuje na prodej diamantových šperků a volných diamantů pod
            značkou Diamond Solutions. Díky přímému přístupu k dodavatelům a
            minimálním provozním nákladům nabízíme zákazníkům vysoce kvalitní
            produkty za bezkonkurenční ceny. Klademe důraz na osobní přístup a
            splnění i těch nejnáročnějších požadavků našich klientů, ať už
            hledáte dokonalý šperk, nebo investiční diamanty.
          </p>
        </div>
        <hr className="mb-8 mt-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      </Container>
    </div>
  );
};

export default BrandDescription;

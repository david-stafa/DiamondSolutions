import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Název",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
      description:
        "Formát - +420 XXX XXX XXX nebo XXX XXX XXX - nutné napsat s mezerami",
      validation: (Rule) =>
        Rule.regex(/^\+420\s\d{3}\s\d{3}\s\d{3}$|^\d{3}\s\d{3}\s\d{3}$/, {
          name: "phone",
          invert: false,
        }),
    }),
    defineField({
      name: "adress",
      type: "string",
      description: "Příklad formátu: Plzeňská 18, 150 00 Praha",
      title: "Adresa",
    }),
    defineField({
      name: "openHours",
      type: "object",
      title: "Otevírací doba",
      fields: [
        { name: "days", title: "Dny", type: "string" },
        { name: "hours", title: "Hodiny", type: "string" },
      ],
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Jméno",
          description: "Jméno účtu na instagramu",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          description: "Zkopírovaný link k instagram účtu",
          type: "url",
        },
      ],
    }),
  ],
});

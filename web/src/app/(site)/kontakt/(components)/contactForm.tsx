"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  //* EmailJS configuration
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Message succesfully sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        },
      );
  };
  return (
    <div className="my-8">
      <h2 className="mb-2">Napište nám</h2>
      <p className="text-sm lg:text-base">
        Líbí se vám náš produkt nebo se jen chcete na něco zeptat? Napiště nám a
        my se vám budeme snažit co nejrychleji odpovědět.
      </p>
      <form className="mt-2" ref={form} onSubmit={sendEmail}>
        <div className="flex gap-2">
          <input
            type="text"
            name="user_name"
            placeholder="Jméno"
            required
            className="w-1/2 rounded-2xl border border-slate-200 p-4"
          />
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
            className="w-1/2 rounded-2xl border border-slate-200 p-4"
          />
        </div>
        <textarea
          rows={5}
          name="message"
          placeholder="Zpráva"
          required
          className="mt-2 w-full rounded-2xl border border-slate-200 p-4"
        ></textarea>
        <input
          type="submit"
          value="Odeslat"
          className="text-large w-full rounded-2xl border border-slate-200 bg-slate-200 p-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ContactForm;

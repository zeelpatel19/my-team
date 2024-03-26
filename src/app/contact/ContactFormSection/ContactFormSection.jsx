import ContactForm from "./ContactForm/ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-primary-teal pb-[11rem]">
      <div className="w-full max-w-[45rem] sm:w-[70%] sm:max-w-[54rem] lg:w-full">
        <ContactForm />
      </div>
    </section>
  );
}

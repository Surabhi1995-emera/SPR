import { useState, type FormEvent } from "react";
import { PageHero } from "../components/layout/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { contact } from "../data/siteContent";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone)) next.phone = "Please enter a valid phone number.";
    if (!form.message.trim()) next.message = "Tell us a little about what you're looking for.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = (name: keyof FormState, label: string, type: string = "text") => (
    <div>
      <label htmlFor={name} className="text-xs tracking-[0.15em] text-navy/60">
        {label.toUpperCase()}
      </label>
      {name === "message" ? (
        <textarea
          id={name}
          rows={4}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="mt-2 w-full resize-none border-b border-navy/20 bg-transparent py-2 text-navy outline-none transition-colors focus:border-gold"
        />
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="mt-2 w-full border-b border-navy/20 bg-transparent py-2 text-navy outline-none transition-colors focus:border-gold"
        />
      )}
      {errors[name] && <p className="mt-1 text-xs text-burgundy">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        heading="Let's build your"
        script="next chapter together"
        text="Reach out about residences, retail, office space, or partnership opportunities across SPR India's portfolio."
      />

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl text-navy">Send an enquiry</h2>
            {sent ? (
              <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/5 p-8">
                <p className="font-display text-xl text-navy">Thank you.</p>
                <p className="mt-2 text-sm text-ink/70">
                  Your email client should have opened with your message ready to send. We'll be in touch shortly.
                </p>
                <button
                  data-cursor="link"
                  onClick={() => {
                    setForm(initialState);
                    setSent(false);
                  }}
                  className="mt-5 text-xs tracking-[0.2em] text-gold underline underline-offset-4"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                {field("name", "Full name")}
                {field("email", "Email", "email")}
                {field("phone", "Phone", "tel")}
                {field("message", "Message")}
                <Button type="submit" variant="filled">
                  SEND ENQUIRY
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-navy p-8 text-cream sm:p-10">
              <h3 className="font-display text-2xl text-gold">Visit or reach us</h3>
              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="text-xs tracking-[0.2em] text-gold/70">ADDRESS</p>
                  <p className="mt-1 text-cream/85">{contact.addressLines.join(" ")}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-gold/70">PHONE</p>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} data-cursor="link" className="mt-1 block text-cream/85 hover:text-gold">
                      {p}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-gold/70">EMAIL</p>
                  <a href={`mailto:${contact.email}`} data-cursor="link" className="mt-1 block text-cream/85 hover:text-gold">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-cream/10">
                <iframe
                  title="SPR India location"
                  className="h-full w-full grayscale"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Perambur,Chennai,Tamil+Nadu+600012&output=embed"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

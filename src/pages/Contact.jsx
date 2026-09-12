import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { slideLeft, slideRight, staggerContainer, staggerItem, viewport } from "../utils/motion.js";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's Start a Conversation"
        subtitle="Tell us how we can assist you."
        crumbs={[{ to: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="py-12 md:py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h2 className="font-serif text-2xl text-navy mb-6">
              Contact Information
            </h2>
            <motion.ul
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.li className="flex gap-4" variants={staggerItem}>
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-navy text-sm">Address</p>
                  <p className="text-charcoal/70 text-sm mt-1">New York, NY, United States</p>
                </div>
              </motion.li>
              <motion.li className="flex gap-4" variants={staggerItem}>
                <Phone size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-navy text-sm">Phone</p>
                  <p className="text-charcoal/70 text-sm mt-1">+1 (XXX) XXX-XXXX</p>
                </div>
              </motion.li>
              <motion.li className="flex gap-4" variants={staggerItem}>
                <Mail size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-navy text-sm">Email</p>
                  <a
                    href="mailto:info@jahblesslaw.com"
                    className="text-charcoal/70 text-sm mt-1 inline-block hover:text-gold transition-colors"
                  >
                    info@jahblesslaw.com
                  </a>
                </div>
              </motion.li>
              <motion.li className="flex gap-4" variants={staggerItem}>
                <Clock size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-navy text-sm">Opening Hours</p>
                  <p className="text-charcoal/70 text-sm mt-1">
                    Monday – Friday, 8:00 AM – 5:00 PM
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            <p className="text-xs text-charcoal/40 mt-8 max-w-xs leading-relaxed">
              Contact details above are demo placeholders and can be replaced
              with the firm's actual information.
            </p>

            {/* Map placeholder */}
            <div className="mt-10 aspect-video bg-ivory border border-charcoal/10 flex flex-col items-center justify-center text-center px-6">
              <MapPin size={26} className="text-gold" strokeWidth={1.25} />
              <p className="text-sm text-navy mt-3">New York, NY, United States</p>
              <p className="text-xs text-charcoal/45 mt-1 max-w-[220px]">
                Map placeholder — connect a map provider to display the
                firm's exact location.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h2 className="font-serif text-2xl text-navy mb-6">
              Request a Consultation
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

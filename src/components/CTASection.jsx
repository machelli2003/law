import { motion } from "framer-motion";
import Button from "./Button.jsx";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../utils/motion.js";

export default function CTASection({
  eyebrow = "NEED LEGAL GUIDANCE?",
  title = "Let's discuss how we can help.",
  text = "Whether you are facing a legal dispute, establishing a business, managing property, or simply need professional legal advice, our team is ready to listen.",
}) {
  return (
    <section className="bg-navy text-white">
      <motion.div
        className="container-xl py-20 md:py-24 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p className="text-sm text-gold mb-4" variants={staggerItem}>
          {eyebrow}
        </motion.p>
        <motion.h2
          className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-tight"
          variants={staggerItem}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white/70 max-w-xl mx-auto mt-5 leading-relaxed"
          variants={staggerItem}
        >
          {text}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-9"
          variants={staggerItem}
        >
          <Button to="/contact" variant="primary">
            Request a Consultation
          </Button>
          <Button to="/contact" variant="outlineLight">
            Contact Our Office
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

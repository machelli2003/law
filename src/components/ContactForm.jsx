import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  contactMethod: "Email",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please tell us the legal matter.";
  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a little more detail (at least 10 characters).";
  }
  return errors;
}

const fieldClass =
  "w-full border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none transition-colors duration-200";

const labelClass = "block text-sm text-navy mb-1.5";

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-ivory p-8 text-center">
        <CheckCircle2 className="mx-auto text-gold" size={36} strokeWidth={1.25} />
        <h3 className="font-serif text-2xl text-navy mt-4">
          Request Received
        </h3>
        <p className="text-charcoal/70 mt-3 leading-relaxed max-w-sm mx-auto">
          Thank you, {values.name.split(" ")[0]}. A member of our team will
          review your request and contact you shortly.
        </p>
        <button
          onClick={() => {
            setValues(initialState);
            setSubmitted(false);
          }}
          className="mt-6 text-sm text-navy border-b border-navy/30 hover:text-gold hover:border-gold"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={fieldClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-700 mt-1.5">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-700 mt-1.5">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-charcoal/40">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Legal Matter / Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          className={fieldClass}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-red-700 mt-1.5">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contactMethod" className={labelClass}>
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={values.contactMethod}
          onChange={handleChange}
          className={fieldClass}
        >
          <option>Email</option>
          <option>Phone</option>
          <option>Either</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={fieldClass}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-700 mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-charcoal/55 leading-relaxed border-l-2 border-gold/50 pl-3">
        Information submitted through this form is intended for initial
        consultation purposes. Please do not include highly confidential or
        privileged information until an attorney-client relationship has been
        established.
      </p>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy/90 transition-colors duration-200"
      >
        Submit Consultation Request
      </button>
    </form>
  );
}

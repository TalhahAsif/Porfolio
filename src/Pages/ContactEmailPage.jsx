import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronDown } from "lucide-react";
import SocialIcons from "../Component/SocialIcons/SocialIcons";

const faqs1 = [
  {
    id: 1,
    question: "What kind of websites and applications do you build?",
    answer:
      "I build custom web applications, business websites, dashboards, and SaaS platforms using React.js, Next.js, and Node.js. Whether you're launching a new idea or improving an existing product, I can help turn your requirements into a reliable and scalable web solution.",
  },

  {
    id: 2,
    question: "What technologies do you work with?",
    answer:
      "My core stack includes React.js, Next.js, Node.js, Express.js, and MongoDB. I also work with Tailwind CSS, REST APIs, Git, and other modern tools to build fast, responsive, and maintainable web applications.",
  },

  {
    id: 3,
    question: "How much does a project cost?",
    answer:
      "The cost depends on the project's scope, features, and complexity. Once I understand your requirements, I'll provide a clear estimate so you know what to expect before development begins.",
  },

  {
    id: 4,
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the size and complexity of the project. A simple website may take a few weeks, while a larger web application can take several weeks or more. I'll provide a realistic timeline after reviewing your requirements.",
  },
];
const faqs2 = [
  {
    id: 5,
    question: "How do you handle the development process?",
    answer:
      "I start by understanding your goals and requirements, then plan the project, build the solution, test everything, and prepare it for launch. You'll stay involved throughout the process and have opportunities to review progress and provide feedback.",
  },

  {
    id: 6,
    question: "Do you provide support after the project is launched?",
    answer:
      "Yes. I can provide ongoing support, bug fixes, improvements, and new features after launch. The goal is to make sure your application continues to work smoothly as your business grows.",
  },

  {
    id: 7,
    question: "Will I own the project and source code?",
    answer:
      "Yes. Once the project is completed and the agreed payment terms are fulfilled, you'll have ownership of the delivered project and source code. If needed, I'm also happy to work under an NDA to keep your project and business information confidential.",
  },

  {
    id: 8,
    question: "How can I start a project with you?",
    answer:
      "Simply get in touch through the contact form and share some details about your project. We'll discuss your goals, requirements, and timeline, then I'll help you determine the best way to move forward.",
  },
];

const CONTACT_EMAIL = "talhahasif995@gmail.com";

const splitIntoColumns = (items) => [
  items.filter((_, i) => i % 2 === 0),
  items.filter((_, i) => i % 2 === 1),
];

const FaqCard = ({ faq, isOpen, onToggle }) => (
  <div className="rounded-2xl border dark:border-gray-800 p-2 text-left dark:bg-white/5">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-xs font-bold dark:text-white">
        {faq.question}
      </span>
      <ChevronDown
        size={20}
        className={`shrink-0 dark:text-text_silver duration-300 ${
          isOpen ? "rotate-180 text-yellow-400" : ""
        }`}
      />
    </button>
    <div
      className={`grid duration-300 ${
        isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
      }`}
    >
      <p className="overflow-hidden dark:text-text_silver text-xs leading-relaxed">
        {faq.answer}
      </p>
    </div>
  </div>
);

const ContactEmailPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg(
        "Email service isn't configured yet. Please set the VITE_EMAILJS_* keys in .env.",
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey },
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      console.log("EmailJS error:", err);
      setErrorMsg(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="dark:bg-bg_rich_Black min-h-screen">
      <section className="sm:max-w-[60%] m-auto text-center p-5 pt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white">
          Let's talk about your <span className="text-yellow-400">project</span>
        </h1>
        <p className="mt-4 dark:text-text_silver max-w-2xl mx-auto">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </section>

      <section className="sm:max-w-[50%] m-auto p-5 mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border dark:border-gray-800 p-8 dark:bg-white/5"
        >
          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="name"
              className="text-sm font-semibold dark:text-text_silver"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border dark:border-gray-700 bg-transparent px-4 py-2.5 dark:text-white outline-none focus:border-yellow-400 duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="email"
              className="text-sm font-semibold dark:text-text_silver"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded-lg border dark:border-gray-700 bg-transparent px-4 py-2.5 dark:text-white outline-none focus:border-yellow-400 duration-200"
            />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="message"
              className="text-sm font-semibold dark:text-text_silver"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="rounded-lg border dark:border-gray-700 bg-transparent px-4 py-2.5 dark:text-white outline-none focus:border-yellow-400 duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-yellow-400 text-black font-bold py-3 hover:bg-yellow-300 duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-400 text-center">
              Thanks! Your message has been sent — I'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">{errorMsg}</p>
          )}
        </form>
      </section>

      <section className="sm:max-w-[70%] m-auto p-5 mt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-5">
          {[faqs1, faqs2].map((block, blockIndex) => {
            const [leftColumn, rightColumn] = splitIntoColumns(block);
            return (
              <div
                key={blockIndex}
                className="grid items-start sm:grid-cols-1 md:grid-cols-2 gap-5"
              >
                {[leftColumn, rightColumn].map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className="flex flex-col gap-5"
                  >
                    {column.map((faq) => (
                      <FaqCard
                        key={faq.id}
                        faq={faq}
                        isOpen={openFaq === faq.id}
                        onToggle={() => toggleFaq(faq.id)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 flex flex-col items-center gap-4">
        <p className="dark:text-text_silver text-sm">Find me on</p>
        <SocialIcons iconClassName="w-6 h-6" />
      </section>
    </div>
  );
};

export default ContactEmailPage;

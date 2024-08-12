import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Notifier = dynamic(() => import("../Notifier"));
const FormElement = dynamic(() => import("./FormElement"));

import loadingGif from "../../public/assets/icons/Rolling-1s-200px.gif";
import { MdCall, MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


const ContactForm = ({ imageUrl, locale }) => {
  const [notifier, setNotifier] = useState({
    show: false,
    success: true,
    message: "",
  });

  const [inputs, setInputs] = useState([
    { id: 1, name: "name", type: "text", placeholder: "Your name" },
    { id: 2, name: "subject", type: "text", placeholder: "Your email subject" },
    { id: 3, name: "email", type: "email", placeholder: "Your email address" },
    { id: 4, name: "message", type: "textarea", placeholder: "Write your message..." },
  ]);

  const [values, setValues] = useState({
    name: "",
    subject:"",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form submission logic goes here
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.ok) {
        const successText =
          locale === "ar-DZ"
            ? "تم إرسال رسالتك"
            : locale === "fr-FR"
            ? "Votre message a été envoyé!"
            : "Your message has been sent!";
        setNotifier({ show: true, success: true, message: successText });
      } else {
        const failureText =
          locale === "ar-DZ"
            ? "حدث خطأ ما"
            : locale === "fr-FR"
            ? "Quelque chose s'est mal passé"
            : "Something went wrong";
        setNotifier({ show: true, success: false, message: failureText });
      }
    } catch (err) {
      console.log(err.message);
      setNotifier({
        show: true,
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
      setValues({ name: "", subject: "", email: "", message: "" });
      setTimeout(() => setNotifier({ ...notifier, show: false }), 4000);
    }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center mb-6">
        <p className="text-base font-semibold uppercase tracking-wide text-secondary">
          Contact
        </p>
        <h2 className="font-manrope mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-4xl sm:text-5xl">
          Get in Touch
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-6">
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-12">
            At Nasta Bazar, we’re always eager to hear from you! Whether you have a question about
            our products, need assistance, or just want to share your feedback, feel free to reach
            out to us. Our team is here to provide you with the best service and support. Get in
            touch with us today, and we'll get back to you as soon as possible.
          </p>
          <ul className="space-y-6">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                <MdLocationOn size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Corporate Office
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  506, Akshar Square, Near Page One Restaurant,
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Sandesh Press Road, Vastrapur,
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Ahmedabad, Gujarat 380054
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-gray-50">
                <MdCall size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 99786 09107</p>
                <p className="text-gray-600 dark:text-slate-400">Mail: info@nastabazar.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl shadow-md w-full">
          <h2 className="text-black underline font-manrope text-4xl font-semibold leading-10 mb-11">
            Send Us A Message
          </h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-6 space-y-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-xs uppercase tracking-wider"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider"></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-xs uppercase tracking-wider"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-xs uppercase tracking-wider"></label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-lightBlue text-white px-6 py-3 font-xl rounded-md transition-all duration-700 "
              >
                Send Message
              </button>
            </div>
          </form>
          {loading && (
            <div className="flex justify-center items-center py-6">
              <Image src={loadingGif} alt="Loading" />
            </div>
          )}
          {notifier.show && <Notifier success={notifier.success} message={notifier.message} />}
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ContactForm;

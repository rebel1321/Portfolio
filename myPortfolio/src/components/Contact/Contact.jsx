import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
const form = useRef();
const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
e.preventDefault();
setLoading(true);


try {
  await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
 
  form.current.reset();

  toast.success("Message sent successfully! ✅", {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
} catch (error) {
  console.error("EmailJS Error:", error);

  toast.error("Failed to send message ❌", {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
} finally {
  setLoading(false);
}


};

return ( <section
   id="contact"
   className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
 > <ToastContainer />


  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white">CONTACT</h2>
    <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

    <p className="text-gray-400 mt-4 text-lg font-semibold">
      I'd love to hear from you—reach out for any opportunities or
      questions!
    </p>
  </div>

  <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
    <h3 className="text-xl font-semibold text-white text-center">
      Connect With Me 🚀
    </h3>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-4 flex flex-col space-y-4"
    >
      <input
        type="hidden"
        name="time"
        defaultValue={new Date().toLocaleString()}
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
      />

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        required
        className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 text-white font-semibold rounded-md transition ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
</section>

);
};

export default Contact;

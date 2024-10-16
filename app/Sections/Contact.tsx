"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    emailjs
      .send("service_jq14zeo", "template_1glz8go", formData, "cKjjXnzqzzN0a1Y0_")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccess(true);
          setError(false);
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear form fields
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <form className="w-full lg:w-1/2 mb-8 lg:mb-0" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name" // Use 'user_name' here
                value={formData.user_name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email" // Use 'user_email' here
                value={formData.user_email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
            {success && <p className="text-green-600 mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-600 mt-4">Failed to send message. Please try again.</p>}
          </form>
          <div className="lg:w-1/2 text-center ">
            <p className="text-lg font-semibold mb-4">Connect with me:</p>
            <div className="space-x-4">
              <a href="https://www.linkedin.com/in/alhassan-fedawy-02a353321/" className="text-blue-600 font-bold">LinkedIn</a>
              <a href="https://github.com/Hassanfedawy" className="text-green-600 font-bold">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

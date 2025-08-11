import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">📞 Contact Us</h1>
        <p className="text-lg text-gray-600 mt-3">
          We’d love to hear from you! Reach out to us for any queries or support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions? Need help with an order? Contact us anytime.
          </p>
          <p className="text-gray-700">
            📧 <strong>Email:</strong> <a href="mailto:Anupriya@ecommerce.com" className="text-indigo-600 hover:underline">Anupriya@ecommerce.com</a>
          </p>
          <p className="text-gray-700">
            📞 <strong>Phone:</strong> <a href="tel:+9546055425" className="text-indigo-600 hover:underline">+91 95460 55425</a>
          </p>
          <p className="text-gray-700">
            📍 <strong>Address:</strong> 123 ClickNCart Street, Kolkata, India
          </p>
        </div>

      
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

    
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">📍 Find Us Here</h2>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8807420497384!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027731c91a2d75%3A0x109d6b30b06b41b4!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

    
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">🌐 Connect With Us</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

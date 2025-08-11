import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
    
      <div
        className="relative bg-cover bg-center h-[60vh] flex justify-center items-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping,store')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold">About Our Store</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Your go-to destination for high-quality products, unbeatable prices, and seamless shopping experiences.</p>
        </motion.div>
      </div>

    
      <div className="container mx-auto px-6 py-16">
      
        <motion.section
          className="text-center max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-indigo-600">e-commerce platform</span>offering a diverse product , fashion and electronics to home essentials.
          </p>
        </motion.section>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {[
            { title: "🚀 Our Mission", text: "To make online shopping effortless, enjoyable, and affordable for everyone." },
            { title: "🎯 Our Vision", text: "Becoming the world’s most customer-centric e-commerce platform with innovative solutions." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

    
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "🚀 Fast Delivery", desc: "Get your orders delivered quickly & safely." },
            { title: "🔒 Secure Payments", desc: "Your transactions are 100% safe with us." },
            { title: "📞 24/7 Support", desc: "We’re here to help you anytime, anywhere." },
            { title: "💰 Best Prices", desc: "Competitive pricing without compromising quality." },
            { title: "🌟 High Quality", desc: "Every product is handpicked for the best experience." },
            { title: "🔄 Easy Returns", desc: "Hassle-free return policy for your convenience." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

    
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { name: "John Doe", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
              { name: "Jane Smith", role: "Marketing Manager", img: "https://via.placeholder.com/150" },
              { name: "Mike Johnson", role: "Lead Developer", img: "https://via.placeholder.com/150" }
            ].map((team, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={team.img} alt={team.name} className="mx-auto w-40 h-40 rounded-full border-4 border-indigo-500 mb-4 shadow-lg" />
                <h3 className="text-xl font-semibold">{team.name}</h3>
                <p className="text-gray-600">{team.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

      
        <section className="mt-16 text-center bg-indigo-600 text-white py-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg sm:text-xl mb-4">We’d love to hear from you! Reach out to us anytime.</p>
          <p className="text-lg">📧 Email: support@shopwithus.com</p>
          <p className="text-lg">📍 Location: New York, USA</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

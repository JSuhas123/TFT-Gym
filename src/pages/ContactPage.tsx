import { motion } from 'framer-motion';
import { Clock, ExternalLink, Instagram, Mail, MapPin, Navigation, Phone, } from 'lucide-react';
import React from 'react';

export default function ContactPage() {

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@thrust.fitness',
      href: 'https://www.instagram.com/thrust.fitness?igsh=d2NveHA2cjJreHg3',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 9731067915',
      action: 'tel:+91 9731067915'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'thrustfittribe.01@gmail.com',
      action: 'mailto:thrustfittribe.01@gmail.com'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      info: 'Mon-Sun: 5:30AM-10:30PM',
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-orange-500/20 to-red-500/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              LET'S CONNECT
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light mb-12">
              Your fitness journey starts with a single conversation. Reach out and let's make it happen.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="group"
                >
                  {contact.action ? (
                    <a
                      href={contact.action}
                      className="block bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/50 hover:border-yellow-500/50 transition-all duration-500 hover:bg-gray-700/60 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <contact.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{contact.info}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/50">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                          <contact.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {contact.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{contact.info}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Located in the heart of New York City, easily accessible by car or public transport.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
          >
            {/* Real Google Maps Embed */}
            <div className="relative h-96 lg:h-[500px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.093590423967!2d77.62831187481159!3d13.00202888732146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176e93154a91%3A0xedb698075a43836e!2sThrust%20Fitness%20Center!5e0!3m2!1sen!2sin!4v1691846400000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
  ></iframe>
              
              {/* Address Overlay */}
              <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/50 max-w-sm">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
        <MapPin size={24} className="text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Thrust Fitness Center</h3>
        <p className="text-gray-300 text-sm mb-1">
          6, Dodda Banaswadi Main Rd, near Orion Avenue Mall
        </p>
        <p className="text-gray-300 text-sm mb-1">
          Jaibharath Nagar, Vivekananda Nagar, Maruthi Sevanagar
        </p>
        <p className="text-gray-300 text-sm mb-4">
          Bengaluru, Karnataka 560033
        </p>
      </div>
    </div>
  </div>
            </div>

            {/* Map Action Buttons */}
            <div className="absolute top-6 right-6 flex flex-col gap-3">
              <motion.a
                href="https://www.google.com/maps/dir/Thrust+Fit+Tribe+(TFT),+Dodda+Banaswadi+Main+Road,+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka/6,+Dodda+Banaswadi+Main+Rd,+near+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka+560033/@13.0017795,77.5892054,12182m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <span className="text-sm font-bold">Google Maps</span>
                  <ExternalLink size={16} />
                </div>
              </motion.a>
              
              <motion.a
                href="https://www.google.com/maps/dir/Thrust+Fit+Tribe+(TFT),+Dodda+Banaswadi+Main+Road,+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka/6,+Dodda+Banaswadi+Main+Rd,+near+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka+560033/@13.0017795,77.5892054,12182m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gray-800/90 backdrop-blur-xl text-white px-6 py-3 rounded-xl font-bold border border-gray-600/50 overflow-hidden transition-all duration-300 hover:border-gray-400 hover:bg-gray-700/90 hover:shadow-xl"
              >
                <div className="relative flex items-center space-x-2">
                  <span className="text-sm font-bold">Apple Maps</span>
                  <ExternalLink size={16} />
                </div>
              </motion.a>
              
              <motion.button
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(() => {
                      window.open('https://www.google.com/maps/dir/Thrust+Fit+Tribe+(TFT),+Dodda+Banaswadi+Main+Road,+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka/6,+Dodda+Banaswadi+Main+Rd,+near+Orion+Avenue+Mall,+Jaibharath+Nagar,+Vivekananda+Nagar,+Maruthi+Sevanagar,+Bengaluru,+Karnataka+560033/@13.0017795,77.5892054,12182m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991!1m5!1m1!1s0x3bae176e93154a91:0xedb698075a43836e!2m2!1d77.6304913!2d13.0016991?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
                    });
                  }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-blue-600/90 backdrop-blur-xl text-white px-6 py-3 rounded-xl font-bold border border-blue-500/50 overflow-hidden transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/90 hover:shadow-xl"
              >
                <div className="relative flex items-center space-x-2">
                  <span className="text-sm font-bold">Directions</span>
                  <Navigation size={16} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Follow Our Journey
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Join our community and stay updated with the latest workouts, tips, and success stories.
      </p>
    </motion.div>

    {/* Single Instagram Card */}
    <div className="flex justify-center">
      <motion.a
        href={socialMedia[0].href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl 
                   rounded-3xl p-8 border border-gray-600/50 hover:border-transparent transition-all 
                   duration-500 hover:shadow-2xl overflow-hidden w-full max-w-lg"
      >
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${socialMedia[0].color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
        
        <div className="relative z-10 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${socialMedia[0].color} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
            {React.createElement(socialMedia[0].icon, { size: 28, className: "text-white" })}
          </div>
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
            {socialMedia[0].name}
          </h3>
          <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors duration-300">{socialMedia[0].handle}</p>
          
          {/* Follow Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${socialMedia[0].color} text-white px-4 py-2 rounded-lg text-sm font-bold`}>
              <span>Follow</span>
              <ExternalLink size={14} />
            </div>
          </motion.div>
        </div>
      </motion.a>
    </div>
  </div>
</section>

    </div>
  );
}
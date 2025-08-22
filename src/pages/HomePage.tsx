import { motion } from 'framer-motion';
import React from 'react';
import Hero from '../components/Hero';

export const HomePage: React.FC = () => {
  const facilities = [
    {
      title: "Premium Gym",
      description: "State-of-the-art equipment and free weights",
      icon: "🏋️‍♂️",
      gradient: "from-blue-600 to-purple-700"
    },
    {
      title: "Swimming Pool",
      description: "Olympic-sized pool with lane swimming",
      icon: "🏊‍♀️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Yoga Studio",
      description: "Peaceful space for mind-body wellness",
      icon: "🧘‍♀️",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Cardio Zone",
      description: "Latest treadmills, bikes & ellipticals",
      icon: "🏃‍♂️",
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Spa & Sauna",
      description: "Recovery and relaxation facilities",
      icon: "🧖‍♀️",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Personal Training",
      description: "One-on-one expert guidance",
      icon: "💪",
      gradient: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <main className="bg-black min-h-screen">
      <Hero />

      {/* Video Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual tour of our world-class facilities and see why we're the premier fitness destination
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/20"
          >
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              {/* Replace with your actual YouTube embed */}
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400">YouTube Video Embed Goes Here</p>
                <p className="text-sm text-gray-500 mt-2">Replace this div with your YouTube iframe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our premium amenities designed to elevate your fitness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${facility.gradient} p-8 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-white/10 backdrop-blur-sm`}>
                  <div className="text-center">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {facility.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                      {facility.description}
                    </p>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-2xl font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real transformations from our incredible community members
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priyanka",
                role: "Software Engineer",
                image: "P",
                testimonial: "The best gym experience I've ever had! The trainers are incredibly supportive and the equipment is absolutely top-notch. I've never felt stronger!",
                rating: 5,
                gradient: "from-pink-500 to-purple-600"
              },
              {
                name: "Rahul Kumar",
                role: "Manager",
                image: "R",
                testimonial: "Super clean facilities, and an amazing community vibe. The variety of classes and equipment keeps my workouts exciting. I genuinely look forward to coming here every day!",
                rating: 5,
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                name: "Anjali Patel",
                role: "Doctor",
                image: "A",
                testimonial: "The personal training sessions transformed my fitness journey completely. The nutrition guidance and recovery facilities are exceptional. Worth every penny!",
                rating: 5,
                gradient: "from-green-500 to-emerald-600"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 transform group-hover:scale-105 transition-all duration-500 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {testimonial.image}
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-bold text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-4 text-lg">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="text-gray-300 italic leading-relaxed text-lg">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-semibold">VERIFIED MEMBER</span>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-600">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full filter blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Best Self
              <br />
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Awaits
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of members who have discovered their strongest, healthiest selves at Thrust Fitness. Your transformation journey starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-black text-white font-bold px-12 py-5 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black hover:border-gray-800 min-w-[250px]"
              >
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </span>
              </motion.a>
              
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-3 border-white text-white font-bold px-12 py-5 rounded-2xl text-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 backdrop-blur-sm min-w-[250px]"
              >
                <span className="flex items-center justify-center">
                  Take a Virtual Tour
                  <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
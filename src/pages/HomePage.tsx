import { motion } from 'framer-motion';
import React from 'react';
import Hero from '../components/Hero';

export const HomePage: React.FC = () => {
  return (
    <main className="bg-black min-h-screen">
      <Hero onJoinWaitlist={() => { /* TODO: implement waitlist logic */ }} />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
    Why Choose Thrust Fitness
  </h2>
  <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
    Experience fitness like never before with our world-class facilities and personalized training programs
  </p>

  <div className="max-w-3xl mx-auto">
    {[
      { icon: "🏋️", text: "40+ Premium Equipment — State-of-the-art machines, free weights, and functional training equipment." },
      { icon: "👨‍⚕️", text: "Expert Personal Trainers — Certified professionals to guide, motivate, and craft personalized workout plans." },
      { icon: "🕐", text: "Flexible Timings (5:30AM - 10:30PM) — Train on your schedule with round-the-clock access." },
      { icon: "🧘", text: "Wellness Programs — Yoga, meditation, nutrition counseling, and recovery services." },
      { icon: "🏊", text: "Premium Amenities — Sauna, steam room, and modern locker rooms with premium facilities." },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="flex items-start space-x-4 mb-6"
      >
        <span className="text-3xl">{item.icon}</span>
        <p className="text-gray-300 text-lg">{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">What Our Members Say</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">Real stories from real people achieving real results</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">P</div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Priyanka</div>
                  <div className="text-gray-400 text-sm">Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">"The best gym experience I've ever had! The trainers are incredibly supportive and the equipment is absolutely top-notch."</p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">R</div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Rahul Kumar</div>
                  <div className="text-gray-400 text-sm">Manager</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">"Super clean facilities, and an amazing community vibe. The variety of classes and equipment keeps my workouts exciting. I genuinely look forward to coming here every day!"</p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                <div className="ml-4">
                  <div className="text-white font-semibold">Anjali Patel</div>
                  <div className="text-gray-400 text-sm">Doctor</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">"The personal training sessions transformed my fitness journey completely. The nutrition guidance and recovery facilities are exceptional. Worth every penny!"</p>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 py-10 text-center">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
      Ready to Transform Your Life?
    </h2>
    <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
      Join thousands of members who have discovered their strongest, healthiest selves at Thrust Fitness. Your transformation starts today.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="/contact"
        className="inline-block bg-white text-yellow-600 font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
      >
        Start Your Journey
      </a>
      <a
        href="/gallery"
        className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300"
      >
        Take a Tour
      </a>
    </div>
    <p className="text-white mt-6 text-base">
      🎯 No joining fee this month | 💪 Free personal training session | 🏊 Pool access included
    </p>
  </div>
</section>

    </main>
  );
}

export default HomePage;

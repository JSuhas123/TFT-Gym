import { motion } from 'framer-motion';
import { Apple, TrendingUp, Users, Utensils } from 'lucide-react';
import React from 'react';

export const NutritionPage: React.FC = () => {
  const services = [
    {
      icon: Apple,
      title: 'Personalized Meal Plans',
      description: 'Custom nutrition plans tailoyellow to your fitness goals and dietary preferences.',
      features: ['Goal-specific nutrition', 'Dietary restrictions accommodated', 'Weekly meal prep guides', 'Shopping lists included']
    },
    {
      icon: Utensils,
      title: 'Nutrition Coaching',
      description: 'One-on-one coaching sessions with our registeyellow dietitians.',
      features: ['Individual consultations', 'Progress tracking', 'Habit formation', 'Ongoing support']
    },
    {
      icon: TrendingUp,
      title: 'Body Composition Analysis',
      description: 'Advanced body composition testing to track your progress accurately.',
      features: ['DEXA scan available', 'InBody analysis', 'Progress photos', 'Measurement tracking']
    },
    {
      icon: Users,
      title: 'Group Nutrition Workshops',
      description: 'Educational workshops covering various nutrition topics and cooking skills.',
      features: ['Monthly workshops', 'Cooking demonstrations', 'Q&A sessions', 'Recipe sharing']
    }
  ];

  const tips = [
    {
      title: 'Hydration is Key',
      description: 'Drink at least 8-10 glasses of water daily to support your metabolism and recovery.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Protein Timing',
      description: 'Consume protein within 30 minutes post-workout for optimal muscle recovery.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Balanced Macros',
      description: 'Aim for a balance of carbohydrates, proteins, and healthy fats in every meal.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Meal Prep Success',
      description: 'Prepare meals in advance to stay consistent with your nutrition goals.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nutrition <span className="text-yellow-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Fuel your fitness journey with expert nutrition guidance and personalized meal planning.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nutrition Tips</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advice to help you make better nutrition choices and achieve your fitness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-12 text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Nutrition?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto"
            >
              Book a consultation with our registeyellow dietitian and start your journey to better health today.
            </motion.p>
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import EnhancedFloatingElements from '../components/3D/EnhancedFloatingElements';
import NutritionForm from '../components/forms/NutritionForm';

const NutritionPage = () => {
  const nutritionTips = [
    {
      id: 'pre-workout',
      title: 'Pre-Workout Fuel',
      content: 'Consume a balanced meal 2-3 hours before training, including complex carbs and lean protein.',
      icon: '⚡',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'post-workout',
      title: 'Post-Workout Recovery',
      content: 'Within 30 minutes post-workout, eat protein and carbs in a 3:1 ratio for optimal recovery.',
      icon: '🏃‍♂️',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'hydration',
      title: 'Hydration Matters',
      content: 'Drink at least 8-10 glasses of water daily, more during intense training sessions.',
      icon: '💧',
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      id: 'timing',
      title: 'Meal Timing',
      content: 'Eat smaller, frequent meals throughout the day to maintain stable energy levels.',
      icon: '⏰',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'balance',
      title: 'Macronutrient Balance',
      content: 'Aim for 40% carbs, 30% protein, and 30% healthy fats for optimal body composition.',
      icon: '⚖️',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'supplements',
      title: 'Smart Supplementation',
      content: 'Focus on whole foods first, use supplements to fill specific nutritional gaps.',
      icon: '💊',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  const benefits = [
    {
      id: 'personalized',
      title: 'Personalized Recommendations',
      description: 'Get nutrition advice tailored to your specific goals, lifestyle, and dietary preferences.',
      icon: '🎯'
    },
    {
      id: 'science-based',
      title: 'Science-Based Approach',
      description: 'Our recommendations are backed by the latest nutrition research and evidence.',
      icon: '🔬'
    },
    {
      id: 'expert-guidance',
      title: 'Expert Guidance',
      description: 'Developed by certified nutritionists and sports dietitians.',
      icon: '👨‍⚕️'
    },
    {
      id: 'practical',
      title: 'Practical & Actionable',
      description: 'Easy-to-follow meal plans and tips that fit into your busy lifestyle.',
      icon: '✅'
    },
    {
      id: 'goal-oriented',
      title: 'Goal-Oriented',
      description: 'Whether losing weight, gaining muscle, or improving performance, we have you covered.',
      icon: '🏆'
    },
    {
      id: 'sustainable',
      title: 'Sustainable Results',
      description: 'Focus on long-term healthy habits rather than quick fixes.',
      icon: '🌱'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-900 via-black to-green-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 via-transparent to-yellow-600/20"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating Elements */}
        <EnhancedFloatingElements variant="nutrition" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fuel Your <motion.span 
              className="text-yellow-400 relative"
              whileHover={{ scale: 1.05 }}
            >
              Success
              <motion.div
                className="absolute -inset-2 bg-yellow-400/20 rounded-lg -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unlock your potential with personalized nutrition guidance designed to complement your fitness journey 
            and accelerate your results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center space-x-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 inline-block"
          >
            <Apple className="h-5 w-5 text-yellow-400" />
            <p className="text-yellow-300 font-semibold">Expert nutrition coaching included with Premium & Elite memberships</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Nutrition Guidance?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Science-backed nutrition strategies designed to optimize your health and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.id} 
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Essential Nutrition Tips</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Science-backed strategies to optimize your nutrition for better performance and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nutritionTips.map((tip, index) => (
              <motion.div 
                key={tip.id} 
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {tip.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                <motion.div 
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-3 ${tip.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  Expert Tip
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Personalized Meal Plans</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a nutrition plan tailored to your specific fitness goals and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nutrition Guide Form */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Personalized Nutrition Guide</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Unlock personalized nutrition recommendations with our comprehensive, science-based guide.
            </p>
          </motion.div>

          <NutritionForm />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Nutrition?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Work with our certified nutrition coaches to create a sustainable eating plan that supports your fitness goals.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white text-green-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Nutrition Consultation
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        
        {/* Background animations */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </section>
    </div>
  );
};

export default NutritionPage;

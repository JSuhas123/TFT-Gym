import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import EnhancedFloatingElements from '../components/3D/EnhancedFloatingElements';
import NutritionForm from '../components/forms/NutritionForm';

const NutritionPage = () => {

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
      
    </div>
  );
};

export default NutritionPage;

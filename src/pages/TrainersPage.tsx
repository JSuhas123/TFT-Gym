import { motion } from 'framer-motion';
import React from 'react';
import OptimizedImage from '../components/OptimizedImage';

type Trainer = {
  name: string;
  specialty: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
};

export const TrainersPage: React.FC = () => {
  const trainers: Trainer[] = [
    {
      name: 'Jacob',
      specialty: 'Bodybuilding, Fat Loss & Muscle Gain',
      experience: '20+ years',
      certifications: ['Mr. Karnataka', 'Mr. Bangalore', 'Mr. India'],
      image: '/Jacob.JPG',
      bio: 'Highly accomplished bodybuilder with decades of experience helping clients achieve peak muscle growth and fat loss.'
    },
    {
      name: 'Karan',
      specialty: 'Fat Loss & Nutrition',
      experience: '3+ years',
      certifications: ['Certified Trainer'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Young and dynamic trainer specializing in fat loss and nutrition guidance to help clients transform effectively.'
    },
    {
      name: 'Sendil',
      specialty: 'Strength Training, Fat Loss & Weight Gain',
      experience: '2+ years ',
      certifications: [],
      image: '',
      bio: 'Focused on strength training, fat loss, and sustainable weight gain strategies tailored for individuals.'
    },
    {
      name: 'Vinod',
      specialty: 'CrossFit, Functional Training & Kickboxing',
      experience: '2+ years',
      certifications: ['Physiotherapist'],
      image: '/Vinod.JPG',
      bio: 'Specialist in fat loss, muscle gain, and functional training, with expertise in injury recovery and rehabilitation.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Expert <span className="text-yellow-600">Trainers</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet our team of certified professionals dedicated to helping you achieve your fitness goals.
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300"
              >
                <OptimizedImage
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                  fallbackSrc="/logo1.png"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm mb-4">{trainer.experience} experience</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{trainer.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="bg-yellow-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
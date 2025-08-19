import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import React from 'react';

export const ClassesPage: React.FC = () => {
  const classes = [
  {
    name: 'HIIT Blast',
    instructor: 'Jacob',
    duration: '45 min',
    capacity: '20 people',
    schedule: 'Mon, Wed, Fri - 6:00 AM',
    description: 'High-intensity interval training that burns calories and builds endurance.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Yoga Flow',
    instructor: 'Karan',
    duration: '60 min',
    capacity: '15 people',
    schedule: 'Tue, Thu - 7:00 AM',
    description: 'Flowing yoga sequences to improve flexibility and yellowuce stress.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Strength Circuit',
    instructor: 'Sendil',
    duration: '50 min',
    capacity: '12 people',
    schedule: 'Mon, Wed, Fri - 6:00 PM',
    description: 'Circuit training focused on building strength and muscle endurance.',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Spin Class',
    instructor: 'Vinod',
    duration: '45 min',
    capacity: '25 people',
    schedule: 'Daily - 5:30 PM',
    description: 'High-energy cycling class with motivating music and coaching.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Functional Training',
    instructor: 'Jacob',
    duration: '55 min',
    capacity: '16 people',
    schedule: 'Tue, Thu, Sat - 8:00 AM',
    description: 'Movement-based training that improves daily life activities.',
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Boxing Fitness',
    instructor: 'Karan',
    duration: '50 min',
    capacity: '18 people',
    schedule: 'Mon, Wed, Fri - 7:00 PM',
    description: 'Boxing-inspiyellow workout that builds strength and coordination.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            Group <span className="text-yellow-600">Classes</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join our energizing group fitness classes led by certified instructors in a motivating environment.
          </motion.p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300"
              >
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">with {classItem.instructor}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock size={16} />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users size={16} />
                      <span>{classItem.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar size={16} />
                      <span>{classItem.schedule}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Weekly Schedule</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule. All times are subject to change.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Time</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Monday</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Tuesday</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Wednesday</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Thursday</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Friday</th>
                  <th className="py-4 px-4 text-yellow-600 font-semibold">Saturday</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">6:00 AM</td>
                  <td className="py-3 px-4">HIIT Blast</td>
                  <td className="py-3 px-4">Yoga Flow</td>
                  <td className="py-3 px-4">HIIT Blast</td>
                  <td className="py-3 px-4">Yoga Flow</td>
                  <td className="py-3 px-4">HIIT Blast</td>
                  <td className="py-3 px-4">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">8:00 AM</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Functional Training</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Functional Training</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Functional Training</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">5:30 PM</td>
                  <td className="py-3 px-4">Spin Class</td>
                  <td className="py-3 px-4">Spin Class</td>
                  <td className="py-3 px-4">Spin Class</td>
                  <td className="py-3 px-4">Spin Class</td>
                  <td className="py-3 px-4">Spin Class</td>
                  <td className="py-3 px-4">Spin Class</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 font-medium">6:00 PM</td>
                  <td className="py-3 px-4">Strength Circuit</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Strength Circuit</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Strength Circuit</td>
                  <td className="py-3 px-4">-</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">7:00 PM</td>
                  <td className="py-3 px-4">Boxing Fitness</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Boxing Fitness</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Boxing Fitness</td>
                  <td className="py-3 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
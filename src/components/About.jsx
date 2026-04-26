import { motion } from 'framer-motion';
import { Code2, Users, Trophy, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code2, value: '2+', label: 'Years Experience' },
    { icon: Users, value: '3', label: 'Companies Worked' },
    { icon: Trophy, value: '5+', label: 'Projects Completed' },
    { icon: BookOpen, value: 'B.Tech', label: 'Computer Engineering' }
  ];

  const focusAreas = [
    'Full-stack web development with multiple Technologies',
    'Freelance website development for businesses and startups',
    'Modern JavaScript frameworks and libraries',
    'Database design, optimization & cloud deployment',
    'Real-time applications with WebSockets',
    'Agile development methodologies'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Software Engineer
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with hands-on industry experience — and a freelancer who turns ideas into live, production-ready websites. With 2+ years across 3 software companies and multiple freelance projects delivered for real clients, I bring both professional discipline and entrepreneurial ownership to every project I take on.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My journey started during my B.Tech years at BVM, where academic projects sparked a deep interest in software development. That curiosity led me through roles at Civica Resource, Alois Solution, and MRI Software — building enterprise-grade applications, optimizing performance, and working with international clients. Alongside my professional career, I've independently delivered client websites that are live today.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I believe in writing clean, maintainable code that solves real business problems. Whether it's a business website for an industrial manufacturer or a React-based consultancy platform, I focus on performance, reliability, and delivering on time — every time.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Current Focus Areas:</h4>
              <ul className="space-y-2">
                {focusAreas.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl text-center border border-primary-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
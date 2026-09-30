import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaBug, FaRocket } from 'react-icons/fa';

const steps = [
  { number: '1', icon: FaLightbulb, title: 'Plan', text: 'Understand the requirement, break the problem into smaller parts, and decide the frontend, backend, and data flow before coding.' },
  { number: '2', icon: FaCode, title: 'Develop', text: 'Build responsive interfaces with React, HTML, CSS, and Bootstrap, then connect them with Python and Django backend logic.' },
  { number: '3', icon: FaBug, title: 'Test', text: 'Check forms, navigation, state changes, validations, database operations, and edge cases to make the application reliable.' },
  { number: '4', icon: FaRocket, title: 'Improve', text: 'Refactor code, improve responsiveness and usability, and prepare the project for deployment and future enhancements.' },
];

const Process = () => (
  <section id="process" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24">
    <div className="w-full max-w-7xl flex flex-col gap-12 z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.4 }} className="text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-textBright mb-4">My Development Process</h2>
        <p className="text-textMuted text-lg max-w-2xl">I follow a simple process to turn requirements into clean, responsive, and maintainable web applications.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: false, amount: 0.4 }} className="bg-darkBg border border-textMuted/20 p-8 rounded-xl hover:border-accent/50 transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-4 text-6xl font-black text-textMuted/5 group-hover:text-accent/5 transition-colors">{step.number}</div>
              <Icon className="text-3xl text-accent mb-6" />
              <h3 className="text-xl font-bold text-textBright mb-3">{step.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
export default Process;

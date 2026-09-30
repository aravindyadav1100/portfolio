import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24">
      <div className="w-full max-w-6xl flex flex-col items-center text-center gap-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-textBright mb-6">Get In Touch</h2>
          <p className="text-textMuted text-lg max-w-2xl leading-relaxed">
            I am open to Python and full-stack development opportunities. Send me a message using the form or contact me directly.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 items-start">
          {/* <motion.form
            action="https://formsubmit.co/aravindmekala1100@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="bg-darkBg border border-textMuted/20 rounded-xl p-6 sm:p-8 text-left space-y-5"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

            <div>
              <label htmlFor="name" className="block text-sm font-mono text-textMuted mb-2">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-textMuted mb-2">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-textMuted mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Write your message"
                className="w-full bg-transparent border border-textMuted/30 rounded-lg px-4 py-3 text-textBright outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-darkBg font-semibold px-6 py-3 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form> */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <a href="mailto:aravindmekala1100@gmail.com" className="bg-darkBg border border-textMuted/20 rounded-xl p-6 text-left hover:border-accent/50 transition-all">
              <FaEnvelope className="text-accent text-2xl mb-3" />
              <h3 className="text-textBright font-bold mb-2">Email</h3>
              <p className="text-textMuted font-mono break-all text-sm">aravindmekala1100@gmail.com</p>
            </a>

            <a href="tel:+919849103029" className="bg-darkBg border border-textMuted/20 rounded-xl p-6 text-left hover:border-accent/50 transition-all">
              <FaPhoneAlt className="text-accent text-2xl mb-3" />
              <h3 className="text-textBright font-bold mb-2">Phone</h3>
              <p className="text-textMuted font-mono text-sm">+91 9849103029</p>
            </a>

            <a href="https://www.linkedin.com/in/mekala-aravind1100" target="_blank" rel="noopener noreferrer" className="bg-darkBg border border-textMuted/20 rounded-xl p-6 text-left hover:border-accent/50 transition-all">
              <FaLinkedin className="text-accent text-2xl mb-3" />
              <h3 className="text-textBright font-bold mb-2">LinkedIn</h3>
              <p className="text-textMuted font-mono text-sm">mekala-aravind1100</p>
            </a>

            <a href="https://github.com/aravindyadav1100" target="_blank" rel="noopener noreferrer" className="bg-darkBg border border-textMuted/20 rounded-xl p-6 text-left hover:border-accent/50 transition-all">
              <SiGithub className="text-accent text-2xl mb-3" />
              <h3 className="text-textBright font-bold mb-2">GitHub</h3>
              <p className="text-textMuted font-mono text-sm">aravindyadav1100</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

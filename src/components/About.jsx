import { motion } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiBootstrap, SiDjango, SiGithub, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaCode, FaDatabase } from 'react-icons/fa';

let About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24">
      <div className="w-full max-w-7xl flex flex-col gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textBright mb-6">About Me</h2>
            <p className="text-textMuted text-lg leading-relaxed mb-4">
              Motivated B.Sc. graduate and Python Full Stack Developer with a strong foundation in Python, object-oriented programming, Django, React.js, JavaScript, HTML5, CSS3, Bootstrap, and MySQL. I enjoy building responsive web applications and continuously improving my development skills through practical projects.
            </p>
            {/* <div className="mt-6 text-textMuted font-mono text-sm leading-7">
              <p><span className="text-accent">Education:</span> B.Sc. — MVS Government Arts &amp; Science College</p>
              <p><span className="text-accent">Graduation:</span> 2026</p>
              <p><span className="text-accent">Percentage:</span> 60.37%</p>
              <p><span className="text-accent">Location:</span> Mahabubnagar, Telangana, India</p>
            </div> */}
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-accent/50 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] group">
              <div className="absolute inset-0 transition-colors duration-500 z-10"></div>
              <img src="/profile.png" alt="Aravind Mekala" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full"
        >
          <h3 className="text-2xl font-semibold text-textBright mb-8 font-mono border-b border-textMuted/20 pb-4 flex items-center gap-3">
            <span className="text-accent">&gt;</span> Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Languages</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiPython className="text-xl" /> Python</div>
                <div className="flex items-center gap-3 text-textBright"><SiJavascript className="text-xl" /> JavaScript</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Frontend</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiReact className="text-xl" /> React.js</div>
                <div className="flex items-center gap-3 text-textBright"><FaHtml5 className="text-xl" /> HTML5</div>
                <div className="flex items-center gap-3 text-textBright"><FaCss3Alt className="text-xl" /> CSS3</div>
                <div className="flex items-center gap-3 text-textBright"><SiBootstrap className="text-xl" /> Bootstrap</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Backend &amp; Database</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiDjango className="text-xl" /> Django</div>
                <div className="flex items-center gap-3 text-textBright"><SiMysql className="text-xl" /> MySQL</div>
                <div className="flex items-center gap-3 text-textBright"><FaDatabase className="text-xl" /> REST APIs</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-textMuted font-mono uppercase tracking-wider text-sm mb-2">Tools &amp; Concepts</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-textBright"><SiGithub className="text-xl" /> GitHub</div>
                <div className="flex items-center gap-3 text-textBright"><FaCode className="text-xl" /> VS Code</div>
                <div className="flex items-center gap-3 text-textBright"><FaCode className="text-xl" /> Object-Oriented Programming</div>
                <div className="flex items-center gap-3 text-textBright"><FaCode className="text-xl" /> State Management</div>
                <div className="flex items-center gap-3 text-textBright"><FaCode className="text-xl" /> Responsive Web Design</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

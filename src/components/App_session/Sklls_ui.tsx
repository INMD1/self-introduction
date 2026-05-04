import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, Mail, Code2 } from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Nest.js",
  "Vue",
  "Python",
  "PHP",
  "MySQL",
  "Git",
  "Pfsense",
  "Openstack",
  "Docker",
];

export default function Sklls_ui() {
  return (
    <section id="skills" className="bg-[#010102] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#5e6ad2] text-xs font-bold uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#f7f8f8] mb-4">
            기술 스택 & 소개
          </h2>
          <p className="text-[#8a8f98] max-w-md text-sm leading-relaxed">
            저에 대한 정보와 기술 스택을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main intro card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-[#0f1011] border border-[#23252a] rounded-lg p-8 hover:border-[#34343a] transition-colors duration-200"
          >
            <div className="w-11 h-11 bg-[#5e6ad2]/10 border border-[#5e6ad2]/20 rounded-lg flex items-center justify-center mb-6">
              <Terminal className="text-[#5e6ad2] w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold text-[#f7f8f8] mb-3">
              Full Stack Developer
            </h3>
            <p className="text-[#8a8f98] text-sm leading-relaxed mb-8">
              문제 해결을 즐기며, 사용자에게 가치 있는 경험을 제공하는 웹
              애플리케이션을 만듭니다. 모던 웹 기술 트렌드를 빠르게 습득하고
              적용하는 것을 좋아합니다.
            </p>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-[#62666d] uppercase tracking-widest font-medium">
                  Skill Level
                </span>
                <span className="text-xs text-[#5e6ad2] font-mono font-medium">
                  85%
                </span>
              </div>
              <div className="h-1.5 bg-[#18191a] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#5e6ad2] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* GitHub card */}
          <motion.a
            href="https://github.com/INMD1"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f1011] border border-[#23252a] rounded-lg p-6 flex flex-col justify-between group hover:border-[#34343a] hover:bg-[#141516] transition-all duration-200 cursor-pointer"
          >
            <Github className="w-7 h-7 text-[#8a8f98] group-hover:text-[#f7f8f8] transition-colors" />
            <div className="mt-10">
              <p className="text-[#f7f8f8] font-medium">GitHub</p>
              <p className="text-[#62666d] text-sm mt-0.5 group-hover:text-[#8a8f98] transition-colors">
                @INMD1
              </p>
            </div>
          </motion.a>

          {/* Email card */}
          <div className="grid gap-2">
            <motion.a
              href="mailto:lyw514549@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#0f1011] border border-[#23252a] rounded-lg p-6 flex flex-col justify-between group hover:border-[#34343a] hover:bg-[#141516] transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-7 h-7 text-[#8a8f98] group-hover:text-[#f7f8f8] transition-colors" />
              <div className="mt-10">
                <p className="text-[#f7f8f8] font-medium">Email</p>
                <p className="text-[#62666d] text-xs mt-0.5 group-hover:text-[#8a8f98] transition-colors break-all">
                  lyw514549@gmail.com
                </p>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/inmd1/?locale=ko"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#0f1011] border border-[#23252a] rounded-lg p-6 flex flex-col justify-between group hover:border-[#34343a] hover:bg-[#141516] transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-7 h-7 text-[#8a8f98] group-hover:text-[#f7f8f8] transition-colors" />
              <div className="mt-10">
                <p className="text-[#f7f8f8] font-medium">LinkedIn</p>
                <p className="text-[#62666d] text-xs mt-0.5 group-hover:text-[#8a8f98] transition-colors break-all">
                  hojun lee
                </p>
              </div>
            </motion.a>
          </div>

          {/* Tech Stack card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-4 bg-[#0f1011] border border-[#23252a] rounded-lg p-8 hover:border-[#34343a] transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-4 h-4 text-[#5e6ad2]" />
              <p className="text-xs text-[#8a8f98] uppercase tracking-widest font-bold">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="px-3.5 py-1.5 bg-[#141516] border border-[#23252a] text-[#d0d6e0] text-sm rounded-md font-medium hover:border-[#5e6ad2]/50 hover:text-[#828fff] transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { ExternalLink } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Student Tracking Platform",
      description: "A full-stack web app to track student attendance, performance, and activity in real-time.",
      image: "/gifs/student-tracking.gif",
      tags: ["Next.js", "MongoDB", "ZOD", "Tailwind CSS"],
      link: "https://student-tracking-platform.vercel.app/"
    },
    {
      id: 2,
      title: "Mood Tracker",
      description: "A mood tracker app with emoji-based input and a color-coded calendar",
      image: "/gifs/mood-tracking.gif",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      link: "https://mood-tracker-dun-delta.vercel.app/"
    },
    {
      id: 3,
      title: "Website - Prayaas Electoral Literacy Club, ABESIT",
      description: "Official website for Prayaas ELC ABESIT, highlighting events, initiatives, and team members.",
      image: "/gifs/voting.gif",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://prayaas-elc-abesit-v924.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Full Stack Developer
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Creating digital experiences that <span className="text-blue-600">inspire</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={fadeIn}
            >
              I&apos;m a passionate developer focused on building innovative web and mobile applications 
              that solve real-world problems with clean, efficient code.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              <motion.a
              href="https://drive.google.com/file/d/1Aw5uOfu3Ezby5zNRlh428Wna8kAef0wh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
            >
              Download My Resume
              </motion.a>

              <motion.a
              href="mailto:imvaibhavshukla100@gmail.com"
              className="inline-block px-8 py-3 border border-gray-300 hover:border-gray-400 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
            >
              Contact Me
              </motion.a>

              </motion.div>
              </motion.div>
          
          <motion.div
            className="relative"
            variants={scaleUp}
          >
            <motion.div 
              className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl"
              whileHover={{ rotate: 3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image 
                src="/hero-image.png"
                alt="Professional Developer Working"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating shapes */}
            <motion.div 
              className="absolute -top-8 -left-8 w-24 h-24 rounded-xl bg-yellow-400 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.8, x: 0, rotate: 10 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-400 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Snapshot */}
      <motion.section 
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/3"
              variants={scaleUp}
            >
              <div className="w-64 h-64 md:w-100 md:h-100 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-xl mx-auto overflow-hidden">
                <Image 
                  src="/profile-image.jpg"
                  alt="Vaibhav Shukla - Professional Portrait"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={fadeIn}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                variants={fadeIn}
              >
                I&apos;m a developer with over 3 years of experience building web applications. 
                I specialize in React.js, Thymeleaf and Spring Boot, creating performant and scalable solutions 
                for businesses across various industries.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={fadeIn}
              >
                My approach combines technical expertise with a strong focus on user experience, 
                ensuring that the applications I build are not only functional but also intuitive 
                and enjoyable to use.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  variants={scaleUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl text-blue-600 mb-1">10+</h3>
                  <p className="text-gray-600">Projects</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  variants={scaleUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl text-blue-600 mb-1">5+</h3>
                  <p className="text-gray-600">Clients</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  variants={scaleUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl text-blue-600 mb-1">3+</h3>
                  <p className="text-gray-600">Years</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  variants={scaleUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-xl text-blue-600 mb-1">10+</h3>
                  <p className="text-gray-600">Technologies</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeIn}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Here are some of my recent projects that showcase my skills and expertise 
              in developing web and mobile applications.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                variants={scaleUp}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                      >
                          View Project 
                    <ExternalLink size={16} />
                    </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            variants={fadeIn}
          >
            {/* <motion.button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section 
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeIn}
            >
              My Skills
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Here are the technologies and tools I use to bring ideas to life.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {['JavaScript', 'React', 'MongoDB', 'C', 'C++', 'VS Code', 'Git', 'GitHub'].map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                variants={scaleUp}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-lg">
                  <span className="text-blue-600 font-bold">{skill.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-gray-800">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
            variants={scaleUp}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
            >
              Ready to work together?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              I&apos;m currently available for freelance work or full-time opportunities.
              Let&apos;s create something amazing together!
            </motion.p>
             <motion.a
      href="mailto:imvaibhavshukla100@gmail.com"
      className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get In Touch
    </motion.a>

          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Creating exceptional digital experiences with modern web technologies.
              </p>
          
              <div className="flex space-x-4">
  {[
    { name: 'Twitter', link: 'https://x.com/GunabhS' },
    { name: 'GitHub', link: 'https://github.com/gunabh25' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/gunabh-sharan-a65380257/' },
    { name: 'Instagram', link: 'https://www.instagram.com/i.sharan._/' },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
    >
      <span className="text-sm">{social.name.charAt(0)}</span>
    </a>
  ))}
</div>
    </div>        
            <div>
              <h3 className="text-xl font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>imvaibhavshukla100@gmail.com</li>
                <li>+91 9506620945</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vaibhav Shukla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronRight, Globe, MessageCircle, Edit3, Clipboard, Headphones, Lightbulb } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const mentors = [
  {
    name: 'English Mentor',
    url: 'https://www.learnenglishmentor.com/',
    flag: '/en.png',
  },
  {
    name: 'Deutsch Mentor',
    url: 'https://deutsch-mentor.com/',
    flag: '/de.png',
  },
  {
    name: 'Italian Mentor',
    url: 'https://www.learnitalianmentor.com/',
    flag: '/it.png',
  },
];

const bounceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const benefits = [
  { icon: Headphones, text: 'Your friendly companion available 24/7 for language adventures!' },
  { icon: Lightbulb, text: 'Personalizes learning to your unique style and interests' },
  { icon: MessageCircle, text: 'Enjoy smooth conversations with AI-powered chat suggestions' },
  { icon: Edit3, text: 'Level up your grammar skills with fun, interactive tips' },
  { icon: Clipboard, text: 'Master new words effortlessly with engaging flash cards' },
  { icon: Globe, text: 'Break language barriers with instant translations at your fingertips' },
];

const year = new Date().getFullYear();
const ondaDevLink = 'https://ondadev.com/';

const LanguageMentors = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 768;

  useEffect(() => {
    if (inView && isLargeScreen) {
      controls.start('visible');
    }
  }, [controls, inView, isLargeScreen]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-100 font-sans">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 text-white"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Learn a New Language Online with AI
        </motion.h1>

        <section className="mb-24">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Meet Your Friendly Language Mentors
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {mentors.map((mentor) => (
              <motion.a
                key={mentor.name}
                href={mentor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="p-8 text-center">
                  <img src={mentor.flag} alt={`${mentor.name} flag`} className="w-20 h-auto mb-6 mx-auto rounded" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{mentor.name}</h3>
                  <span className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
                    Start your adventure <ChevronRight className="ml-1 w-5 h-5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="mb-24" ref={ref}>
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial="hidden"
            animate="visible"
            variants={bounceVariants}
          >
            Discover the Magic of AI Language Learning
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={
                  isLargeScreen
                    ? {
                        hidden: {
                          opacity: 0,
                          x: index % 2 === 0 ? -50 : 50,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: 'spring',
                            damping: 12,
                            stiffness: 100,
                          },
                        },
                      }
                    : {}
                }
                className="flex items-start bg-white rounded-3xl shadow-md p-8 transition-all duration-300 hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 },
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <benefit.icon className="w-10 h-10 text-pink-500 mr-6 flex-shrink-0" />
                <p className="text-lg text-gray-800">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="bg-white mt-24">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>
            &copy; {year}{' '}
            <a
              href={ondaDevLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-600 hover:text-black-800 transition-colors duration-300"
            >
              Powered by OndaDev.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LanguageMentors;

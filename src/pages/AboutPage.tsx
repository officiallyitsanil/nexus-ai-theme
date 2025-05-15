import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About - NexusAI';
  }, []);

  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '5M+', label: 'Messages Processed' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '150+', label: 'Countries Served' },
  ];

  const timelineEvents = [
    {
      year: '2023',
      title: 'NexusAI Founded',
      description: 'Started with a mission to make AI conversations more natural and valuable',
    },
    {
      year: '2023',
      title: 'Beta Launch',
      description: 'Released our first public beta to 1,000 early adopters',
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Secured $12M in funding to accelerate development and growth',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve users in over 150 countries',
    },
    {
      year: '2025',
      title: 'Next-Gen AI Model',
      description: 'Released our proprietary AI model with industry-leading capabilities',
    },
  ];

  const teamMembers = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Co-founder',
      bio: 'Former AI research lead with 10+ years in machine learning and human-computer interaction.',
    },
    {
      name: 'Michael Rivera',
      role: 'CTO & Co-founder',
      bio: 'Engineering leader with experience building AI systems at major tech companies.',
    },
    {
      name: 'Sophia Wang',
      role: 'Chief AI Scientist',
      bio: 'PhD in computational linguistics with groundbreaking research in conversational AI.',
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      bio: 'Product visionary focused on creating intuitive, delightful user experiences.',
    },
  ];

  const values = [
    {
      icon: <Users size={32} />,
      title: 'Human-Centered AI',
      description: 'We build AI that enhances human capabilities rather than replacing them, focusing on collaboration and augmentation.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence in Everything',
      description: 'We pursue excellence in every aspect of our products, from model performance to user experience.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Continuous Innovation',
      description: "We're committed to pushing boundaries and constantly evolving our technology to provide more value."
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Ethical AI Development',
      description: 'We develop AI responsibly, with strong safeguards, transparency, and a focus on positive impact.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission to Transform
              <br />
              <span className="gradient-text">AI Conversations</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              At NexusAI, we're building the future of human-AI interaction, creating technology that understands, assists, and delights in a uniquely human way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                NexusAI was founded in 2023 by a team of AI researchers, engineers, and designers who shared a vision of making AI conversations more natural, helpful, and enjoyable.
              </p>
              <p className="text-neutral-600 mb-4">
                We recognized that existing AI assistants often felt robotic, lacked deep understanding, and frequently missed the nuance of human communication. We set out to create something fundamentally different.
              </p>
              <p className="text-neutral-600 mb-6">
                Today, NexusAI has grown from a small startup to a leader in conversational AI, serving thousands of users worldwide with technology that truly understands and adapts to human needs.
              </p>
              <Link to="/contact" className="text-primary-600 font-medium hover:text-primary-700 flex items-center transition-colors">
                <span>Get in touch with our team</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden h-full">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="NexusAI team working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-neutral-600">
              A look at the key milestones that have shaped NexusAI.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200"></div>

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start relative mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="mb-2 flex items-center justify-end">
                      <span className="text-sm font-medium bg-primary-100 text-primary-600 px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-neutral-600">{event.description}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-primary-500 border-4 border-white"></div>
                  </div>

                  <div className="w-1/2 pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-neutral-600">
              The principles that guide everything we do at NexusAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200"
              >
                <div className="text-primary-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-lg text-neutral-600">
              Meet the passionate experts behind NexusAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200"
              >
                <div className="h-48 bg-neutral-200 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-500 text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on Our Mission
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience the future of AI conversation with NexusAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-white text-primary-600 hover:bg-neutral-100 btn-secondary">
                Get Started Free
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white/10 text-white rounded-full py-3 px-6 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
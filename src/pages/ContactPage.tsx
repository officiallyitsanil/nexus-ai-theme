import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact - NexusAI';
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

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
              We'd Love to <span className="gradient-text">Hear from You</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Have questions about NexusAI? Looking for support? Or just want to say hello? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center"
            >
              <div className="bg-primary-100 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-2">For general inquiries:</p>
              <a href="mailto:hello@nexusai.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                hello@nexusai.com
              </a>
              <p className="text-neutral-600 mt-2 mb-2">For support:</p>
              <a href="mailto:support@nexusai.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                support@nexusai.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center"
            >
              <div className="bg-primary-100 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-neutral-600 mb-2">Monday-Friday, 9am-5pm PT</p>
              <a href="tel:+18005551234" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                +1 (800) 555-1234
              </a>
              <p className="text-neutral-600 mt-4 text-sm">
                For faster support, please use our live chat
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center"
            >
              <div className="bg-primary-100 text-primary-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-neutral-600 mb-4">Get instant support through our live chat</p>
              <button className="flex items-center justify-center mx-auto text-primary-600 font-medium hover:text-primary-700 transition-colors">
                <span>Start a conversation</span>
                <Send size={16} className="ml-2" />
              </button>
              <p className="text-neutral-600 mt-4 text-sm">
                Available 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form and our team will get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success-50 border border-success-200 text-success-800 p-4 rounded-lg mb-6"
                >
                  <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <Input
                    label="Subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Let us know how we can help..."
                      className="w-full rounded-xl border border-neutral-200 bg-white p-3 transition-all duration-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-300 outline-none"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send size={16} />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden h-[500px] bg-neutral-200 hidden lg:block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0910623952205!2d-122.41941748474706!3d37.77492977975931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580962b2d8549%3A0x77afd5da8265c515!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1647055521787!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Our Offices
            </h2>
            <p className="text-neutral-600">
              We'd love to meet you in person at one of our global locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: 'San Francisco',
                address: '525 Market St, Suite 2000\nSan Francisco, CA 94105',
                phone: '+1 (415) 555-1234',
              },
              {
                city: 'New York',
                address: '350 5th Avenue, Suite 4200\nNew York, NY 10118',
                phone: '+1 (212) 555-5678',
              },
              {
                city: 'London',
                address: '10 Finsbury Square\nLondon EC2A 1AF\nUnited Kingdom',
                phone: '+44 (20) 5555 6789',
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6"
              >
                <div className="flex items-start mb-4">
                  <MapPin size={20} className="text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">{office.city}</h3>
                    <p className="text-neutral-600 whitespace-pre-line mt-2">
                      {office.address}
                    </p>
                    <p className="text-neutral-600 mt-2">
                      <span className="font-medium">Phone:</span> {office.phone}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center transition-colors"
                >
                  <span>Get directions</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600">
              Quick answers to common questions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What are your support hours?',
                answer: 'Our support team is available Monday through Friday, 9am-5pm PT. For urgent issues, we offer 24/7 support through our Priority Support channel for Pro and Business plan customers.'
              },
              {
                question: 'How quickly can I expect a response?',
                answer: 'For email inquiries, we typically respond within 24 hours on business days. Live chat support usually connects you with an agent in under 5 minutes during business hours.'
              },
              {
                question: 'Do you offer training for enterprise customers?',
                answer: 'Yes, we provide personalized onboarding and training sessions for our enterprise customers. Contact our sales team to learn more about our enterprise support options.'
              },
              {
                question: 'Where can I find documentation?',
                answer: 'Our comprehensive documentation is available at docs.nexusai.com. It includes guides, tutorials, API reference, and best practices for using NexusAI.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
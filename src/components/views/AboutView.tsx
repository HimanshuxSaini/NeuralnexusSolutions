import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ShieldCheck, Target, Users, Zap, CheckCircle2, Award, Clock, ArrowRight, Lightbulb, Compass, Link as LinkIcon, Briefcase } from 'lucide-react';
import { motion, Variants } from 'motion/react';

interface AboutViewProps {
  onNavigate: (view: string, param?: string) => void;
  onBookCall: () => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function AboutView({ onNavigate, onBookCall }: AboutViewProps) {
  const breadcrumbs = [
    { label: 'About & Mission' }
  ];

  const beliefs = [
    { title: 'INNOVATION', desc: 'We believe every challenge is an opportunity to create something better.', icon: <Lightbulb className="w-5 h-5" /> },
    { title: 'COLLABORATION', desc: 'Different minds create stronger solutions when they work together.', icon: <Users className="w-5 h-5" /> },
    { title: 'QUALITY', desc: 'We believe a solution should not simply work — it should work well.', icon: <Award className="w-5 h-5" /> },
    { title: 'ADAPTABILITY', desc: 'Technology changes rapidly. We believe businesses should be ready to evolve with it.', icon: <Zap className="w-5 h-5" /> },
    { title: 'TRUST', desc: 'Every successful project begins with understanding, transparency, and accountability.', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: 'IMPACT', desc: 'Our ultimate measure of success is the value our work creates for the people and businesses we serve.', icon: <Target className="w-5 h-5" /> }
  ];

  const journeySteps = [
    { num: '01', title: 'FIVE MINDS', desc: 'Five final-year engineering students came together with different skills, ideas, and ambitions.' },
    { num: '02', title: 'THE CHALLENGE', desc: 'We entered a national-level hackathon and challenged ourselves to build an innovative solution under real-world constraints.' },
    { num: '03', title: 'THE BREAKTHROUGH', desc: 'Our team secured Second Position, proving that a small team with the right combination of ideas, technology, and determination can create meaningful impact.' },
    { num: '04', title: 'THE DECISION', desc: 'Instead of allowing the journey to end with a trophy, we decided to build something bigger from the experience.' },
    { num: '05', title: 'THE NEXUS', desc: 'NeuralNexus Solutions was envisioned as a multi-domain technology hub bringing 15 specialized services together.' },
    { num: '06', title: 'THE FUTURE', desc: 'Our ambition is to take this ecosystem beyond borders and build lasting partnerships with clients in India and across the world.' }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white pt-4 pb-8 lg:pt-6 lg:pb-10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#0FA3B1]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start pt-4 lg:pt-8">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span variants={fadeInUp} className="text-sm font-bold text-[#0FA3B1] tracking-widest uppercase mb-4 block">
                About NeuralNexus Solutions
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight">
                Five Minds. One Vision. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FA3B1] to-blue-400">A Nexus of Possibilities.</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="mt-8 space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  NeuralNexus Solutions began with five final-year engineering students who believed that technology should do more than solve a single problem — it should create possibilities across industries.
                </p>
                <p>
                  Our journey started on a national-level hackathon stage, where our team came together to turn an idea into a working solution under pressure, uncertainty, and a limited timeframe.
                </p>
                <p className="text-white font-medium border-l-4 border-[#0FA3B1] pl-4">
                  That journey led us to achieve <strong className="text-[#0FA3B1]">Second Position at a National-Level Hackathon</strong> — an experience that became much more than an achievement. It became the foundation of an idea.
                </p>
                <p className="italic text-xl text-slate-200 mt-8">
                  "What if the same spirit of innovation could be turned into a platform where businesses, startups, organizations, and individuals could access technology solutions across multiple domains — under one roof?"
                </p>
                <p className="font-bold text-white text-xl">
                  That question gave birth to NeuralNexus Solutions.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-gradient-to-br from-[#0FA3B1]/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative w-full h-full max-w-lg mx-auto">
                {/* First Image (Main/Back) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: -2 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-0 right-4 w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0B1F3A] z-10"
                >
                  <img 
                    src="/team%20image.jpeg" 
                    alt="NeuralNexus Solutions Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent"></div>
                </motion.div>

                {/* Second Image (Front/Overlap) */}
                <motion.div 
                  initial={{ opacity: 0, y: 40, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 3 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-12 left-0 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0B1F3A] z-20"
                >
                  <img 
                    src="/1745838599846.jpg" 
                    alt="Neural Nexus Hackathon Moment" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>


              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="space-y-6"
          >
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] leading-tight">
              From a Hackathon Team to a Technology Solutions Hub
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>We started as five students with different strengths, perspectives, and technical interests.</p>
              <p className="font-semibold text-slate-800">The hackathon taught us something important: Great solutions are rarely built by one skill, one technology, or one person. They are built when different ideas connect.</p>
              <p>That belief became the meaning behind our name:</p>
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#0FA3B1]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">NEURAL</h4>
                  <p className="text-slate-600 mt-1">Representing intelligence, ideas, technology, learning, and innovation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0">
                  <LinkIcon className="w-6 h-6 text-[#0FA3B1]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">NEXUS</h4>
                  <p className="text-slate-600 mt-1">Representing connection — the point where people, technologies, ideas, and opportunities come together.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#0FA3B1]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">SOLUTIONS</h4>
                  <p className="text-slate-600 mt-1">Because innovation only matters when it solves a real problem.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0FA3B1]/10 rounded-bl-[100px] transition-transform group-hover:scale-110 duration-500"></div>
            <p className="text-lg text-slate-700 leading-relaxed relative z-10">
              After our hackathon experience, we decided not to let that achievement remain a milestone in our college journey. We decided to build something from it.
            </p>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mt-6 font-['Sora'] relative z-10 leading-tight">
              A technology hub where multiple capabilities could come together to solve diverse real-world challenges.
            </h3>
            <p className="text-slate-600 mt-6 relative z-10 text-lg">
              Today, NeuralNexus Solutions is being built around <strong className="text-[#0FA3B1]">15 specialized service domains</strong>, bringing technology, creativity, business, and digital capabilities together under one ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist & Mission (Split Layout) */}
      <section className="py-6 lg:py-8 bg-slate-50 text-slate-800 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Why We Exist */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Why We Exist</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] mt-3 leading-tight">
                One Problem. Multiple Possibilities.
              </h2>
              <div className="mt-6 space-y-6 text-slate-600 text-lg">
                <p>Businesses today rarely need just one service.</p>
                <p>A company may need a website today, an application tomorrow, automation next month, digital marketing after that, and AI integration as it grows.</p>
                <p>Instead of searching for different providers for every requirement, we envision a single ecosystem where diverse solutions can be discovered, designed, developed, and delivered.</p>
                
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mt-8">
                  <h3 className="text-2xl font-bold font-['Sora'] text-[#0FA3B1]">One Nexus.</h3>
                  <h3 className="text-2xl font-bold font-['Sora'] mt-2 text-[#0B1F3A]">Multiple Domains.</h3>
                  <h3 className="text-2xl font-bold font-['Sora'] mt-2 text-slate-400">Limitless Possibilities.</h3>
                </div>
                
                <p>We bring together our capabilities across <strong>15 service domains</strong> to help clients transform ideas into practical, scalable, and technology-driven solutions.</p>
                <p className="font-medium text-slate-800 border-l-2 border-[#0FA3B1] pl-4">
                  Whether the requirement comes from a growing local business, an emerging startup, or an international organization, our objective remains the same:
                  <br/><br/>
                  <span className="text-[#0FA3B1] font-bold">Understand the problem. Build the right solution. Create measurable value.</span>
                </p>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] mt-3 leading-tight">
                Turning Ideas Into Impact
              </h2>
              <p className="mt-6 text-slate-600 text-lg">
                Our mission is to build a multidisciplinary technology ecosystem that helps individuals, businesses, startups, and organizations solve real-world challenges through innovation, technology, and creativity.
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Transform ideas into practical digital solutions.",
                  "Bring multiple technology and creative disciplines together under one ecosystem.",
                  "Help businesses adopt modern technologies without unnecessary complexity.",
                  "Build scalable, reliable, and user-focused solutions.",
                  "Encourage innovation through collaboration and continuous learning.",
                  "Create long-term relationships rather than one-time transactions.",
                  "Deliver solutions that create genuine business and social value.",
                  "Serve clients across both domestic and international markets."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0FA3B1] shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-cyan-50 border border-cyan-100 rounded-2xl">
                <p className="text-xl font-bold text-[#0B1F3A] font-['Sora']">
                  We don't simply aim to deliver services. <br/>
                  <span className="text-[#0FA3B1]">We aim to become the technology partner behind our clients' next idea, next product, and next stage of growth.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-6 lg:py-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Our Vision</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1F3A] font-['Sora'] mt-3 leading-tight">
              Building a Global Nexus of Innovation
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our vision is to establish NeuralNexus Solutions as a <strong>global multi-domain technology hub</strong> where people, ideas, expertise, and emerging technologies connect to create meaningful solutions.
            </p>
            
            <div className="my-12 p-8 md:p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
              <p className="text-slate-500 italic text-lg">We envision a future where a client doesn't need to ask:</p>
              <h3 className="text-2xl text-slate-400 font-['Sora'] font-semibold mt-2">“Who can solve this problem?”</h3>
              <div className="w-12 h-[1px] bg-slate-200 mx-auto my-6"></div>
              <p className="text-slate-500 italic text-lg">Instead, they can come to one place and say:</p>
              <h3 className="text-3xl md:text-4xl text-[#0B1F3A] font-['Sora'] font-bold mt-2">“This is the challenge. <span className="text-[#0FA3B1]">Let's build the solution.</span>”</h3>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              From a team of five students on a hackathon stage to a global network of technology and creative capabilities, we want NeuralNexus Solutions to grow into an ecosystem that connects <strong>innovation with opportunity</strong>.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our long-term vision is to serve organizations across borders while continuously expanding our expertise, partnerships, technologies, and service capabilities.
            </p>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center md:text-left">
              <div>
                <p className="font-bold text-[#0B1F3A] font-['Sora']">From a college project</p>
                <p className="text-[#0FA3B1]">to a global vision.</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-300"></div>
              <div>
                <p className="font-bold text-[#0B1F3A] font-['Sora']">From five minds</p>
                <p className="text-[#0FA3B1]">to a growing ecosystem.</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-300"></div>
              <div>
                <p className="font-bold text-[#0B1F3A] font-['Sora']">From one solution</p>
                <p className="text-[#0FA3B1]">to a nexus of possibilities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-6 lg:py-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] mt-2">
              Our Beliefs
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {beliefs.map((belief, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-[#0FA3B1]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0FA3B1] mb-6 group-hover:scale-110 group-hover:bg-[#0FA3B1] group-hover:text-white transition-all duration-300">
                  {belief.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-['Sora'] mb-3">{belief.title}</h3>
                <p className="text-slate-600 leading-relaxed">{belief.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-6 lg:py-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] mt-2">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
              {journeySteps.map((step, idx) => (
                <motion.div key={idx} variants={fadeInUp} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#0FA3B1] border-4 border-white shadow-sm -translate-x-1/2 mt-1.5 z-10"></div>
                  
                  <div className="pl-16 md:pl-0 md:w-1/2">
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="text-[#0FA3B1] font-mono font-bold text-sm mb-2 block">{step.num}</span>
                      <h4 className="text-xl font-bold text-[#0B1F3A] font-['Sora'] mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who You're Working With */}
      <section className="py-8 lg:py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-widest">Who You're Working With</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-['Sora'] mt-2">
              Who is behind Neural Nexus?
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              NeuralNexus Solutions operates under Webunitech Solutions LLP, providing clients with a clear legal and operational entity behind the brand.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2 hidden sm:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border-2 border-[#0B1F3A] z-10 w-full max-w-sm mx-auto">
                <h3 className="font-bold text-[#0B1F3A] text-xl font-['Sora']">NEURALNEXUS SOLUTIONS</h3>
                <p className="text-sm text-[#0FA3B1] font-medium mt-1">Client-facing technology solutions brand</p>
              </div>

              <div className="relative flex justify-center z-10 sm:hidden">
                <div className="w-px h-8 bg-slate-200"></div>
              </div>

              <div className="relative text-center bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 z-10 w-full max-w-sm mx-auto">
                <h3 className="font-bold text-slate-800 text-xl font-['Sora']">WEBUNITECH SOLUTIONS LLP</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Legal & operating entity</p>
              </div>

              <div className="relative flex justify-center z-10 sm:hidden">
                <div className="w-px h-8 bg-slate-200"></div>
              </div>

              <div className="relative text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 z-10 w-full max-w-sm mx-auto">
                <h3 className="font-bold text-slate-800 text-xl font-['Sora']">OUR TEAM</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Technology, design, business & domain specialists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Outro */}
      <section className="py-8 lg:py-10 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-50 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1F3A] font-['Sora'] leading-tight mb-8">
              More Than A Service Company
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              We are building NeuralNexus Solutions with a simple belief:<br/>
              <strong className="text-[#0B1F3A]">Technology should connect possibilities, not create barriers.</strong>
            </p>
            <p className="text-lg text-slate-600 mb-12">
              Our journey may have started with five students, a hackathon, and an idea. But our vision goes much further. We want to build a place where a business can bring a challenge and find the people, technology, creativity, and expertise required to solve it.
            </p>
            
            <div className="inline-block p-8 rounded-3xl bg-cyan-50 border border-cyan-100 backdrop-blur-md mb-12">
              <p className="text-2xl font-bold text-[#0FA3B1] font-['Sora']">That is our Nexus.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora']">NeuralNexus Solutions</h3>
              <p className="text-[#0FA3B1] font-medium tracking-wide">Connect Ideas. Create Solutions. Shape What's Next.</p>
            </div>

            <button
              onClick={onBookCall}
              className="mt-12 py-4 px-8 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

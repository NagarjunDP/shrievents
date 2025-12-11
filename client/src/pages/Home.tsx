// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, Palette, Music, Camera, ChevronRight, Star, ArrowRight } from 'lucide-react';

// // Enhanced Hero Section with Logo
// function Hero() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Animated Background with Gradient */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900"
//         animate={{ opacity: [0.8, 0.95, 0.8] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />

//       {/* Animated Background Orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//         />
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         {/* Logo */}
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-8 flex justify-center"
//         >
//           <img
//             src="/logo.png"
//             alt="Shri Events Logo"
//             className="h-32 w-auto drop-shadow-2xl"
//           />
//         </motion.div>

//         {/* Headline */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
//             Celebrate Lovely Moments
//           </h1>
//         </motion.div>

//         {/* Subheading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <p className="text-xl sm:text-2xl lg:text-3xl text-pink-200 mb-8 font-light drop-shadow-md max-w-3xl mx-auto">
//             With us, we make your smile shine brighter than ever
//           </p>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
//         >
//           <motion.a
//             href="#gallery"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 shadow-lg text-sm sm:text-base"
//           >
//             Explore Gallery
//           </motion.a>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm sm:text-base"
//           >
//             Book Now
//           </motion.a>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex justify-center mt-12"
//         >
//           <ChevronRight size={32} className="text-pink-400 drop-shadow-lg rotate-90" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// // Featured Gallery Section
// function FeaturedGallery() {
//   const images = [
//     { src: '/assets/event1.jpg', alt: 'Elegant Pink Wedding', title: 'Elegant Wedding Setup' },
//     { src: '/assets/event2.jpg', alt: 'Grand Mandap', title: 'Grand Mandap Decoration' },
//     { src: '/assets/event3.jpg', alt: 'Stage Decoration', title: 'Professional Stage Design' },
//     { src: '/assets/event4.jpg', alt: 'Wedding Backdrop', title: 'Stunning Backdrop' },
//     { src: '/assets/event5.jpg', alt: 'Venue Decoration', title: 'Complete Venue Setup' },
//     { src: '/assets/event6.jpg', alt: 'Corporate Event', title: 'Corporate Event Space' },
//   ];

//   return (
//     <section id="gallery" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             Explore our stunning collection of decorated events and celebrations.
//           </p>
//         </motion.div>

//         {/* Gallery Grid */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ scale: 1.05, y: -8 }}
//               className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               {/* Overlay */}
//               <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
//                 <div>
//                   <h3 className="text-white font-semibold text-lg">{image.title}</h3>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="/gallery"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
//           >
//             View Full Gallery
//             <ChevronRight size={20} />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Services Section
// function Services() {
//   const services = [
//     {
//       icon: Sparkles,
//       title: 'Event Decoration',
//       description: 'Transform your venue with stunning floral arrangements, elegant drapes, and creative lighting designs.',
//     },
//     {
//       icon: Palette,
//       title: 'Wedding Planning',
//       description: 'From intimate ceremonies to grand celebrations, we create unforgettable wedding experiences.',
//     },
//     {
//       icon: Music,
//       title: 'Corporate Events',
//       description: 'Professional event management for conferences, product launches, and corporate celebrations.',
//     },
//     {
//       icon: Camera,
//       title: 'Theme Parties',
//       description: 'Creative theme-based decorations and complete party management for all occasions.',
//     },
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             We offer comprehensive event solutions to make your celebration unforgettable.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -8 }}
//               className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-lg group"
//             >
//               <motion.div
//                 className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
//                 whileHover={{ rotate: 10, scale: 1.1 }}
//               >
//                 <service.icon className="w-8 h-8 text-pink-600" />
//               </motion.div>

//               <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
//                 {service.title}
//               </h3>

//               <p className="text-slate-700 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Stats Section
// function Stats() {
//   const [stats, setStats] = useState([
//     { label: 'Events Completed', value: 0, target: 500 },
//     { label: 'Happy Clients', value: 0, target: 1200 },
//     { label: 'Team Members', value: 0, target: 45 },
//     { label: 'Years Experience', value: 0, target: 8 },
//   ]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const interval = setInterval(() => {
//               setStats((prev) =>
//                 prev.map((stat) => ({
//                   ...stat,
//                   value: Math.min(stat.value + Math.ceil(stat.target / 50), stat.target),
//                 }))
//               );
//             }, 30);

//             setTimeout(() => clearInterval(interval), 1500);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const statsSection = document.getElementById('stats');
//     if (statsSection) observer.observe(statsSection);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="stats" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                 {stat.value}+
//               </div>
//               <p className="text-lg text-slate-300">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Testimonials Section
// function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       role: 'Wedding Client',
//       text: 'Shri Events made our wedding day absolutely magical. The attention to detail was impeccable!',
//       rating: 5,
//     },
//     {
//       name: 'Rajesh Kumar',
//       role: 'Corporate Event',
//       text: 'Professional, creative, and reliable. They delivered beyond our expectations.',
//       rating: 5,
//     },
//     {
//       name: 'Anjali Patel',
//       role: 'Birthday Party',
//       text: 'The team transformed our venue into a wonderland. Highly recommended!',
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             Real testimonials from our happy clients.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} size={20} className="fill-pink-500 text-pink-500" />
//                 ))}
//               </div>
//               <p className="text-slate-700 mb-4">{testimonial.text}</p>
//               <div>
//                 <p className="font-semibold text-slate-900">{testimonial.name}</p>
//                 <p className="text-sm text-slate-600">{testimonial.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // CTA Section
// function CTA() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-center relative overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto px-4 relative z-10"
//       >
//         <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Celebrate?</h2>
//         <p className="text-xl text-pink-200 mb-8">
//           Let us help you create an unforgettable event. Get in touch today and let's bring your vision to life!
//         </p>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 shadow-lg text-lg"
//         >
//           Get a Free Quote
//           <ArrowRight size={24} />
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }

// // Main Home Component
// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Services />
//       <FeaturedGallery />
//       <Testimonials />
//       <Stats />
//       <CTA />
//     </>
//   );
// }

//working but more like ai generated
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, Palette, Music, Camera, ChevronRight, Star, ArrowRight } from 'lucide-react';

// // Enhanced Hero Section with Logo
// function Hero() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Animated Background with Gradient */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900"
//         animate={{ opacity: [0.8, 0.95, 0.8] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />

//       {/* Animated Background Orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//         />
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         {/* Logo */}
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-8 flex justify-center"
//         >
//           <img
//             src="/logo.png"
//             alt="Shri Events Logo"
//             className="h-32 w-auto drop-shadow-2xl"
//           />
//         </motion.div>

//         {/* Headline */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
//             Celebrate Lovely Moments
//           </h1>
//         </motion.div>

//         {/* Subheading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <p className="text-xl sm:text-2xl lg:text-3xl text-pink-200 mb-8 font-light drop-shadow-md max-w-3xl mx-auto">
//             With us, we make your smile shine brighter than ever
//           </p>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
//         >
//           <motion.a
//             href="#gallery"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 shadow-lg text-sm sm:text-base"
//           >
//             Explore Gallery
//           </motion.a>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 sm:px-10 py-3 sm:py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm sm:text-base"
//           >
//             Book Now
//           </motion.a>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex justify-center mt-12"
//         >
//           <ChevronRight size={32} className="text-pink-400 drop-shadow-lg rotate-90" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// // Featured Gallery Section
// function FeaturedGallery() {
//   const images = [
//     { src: '/assets/event1.jpg', alt: 'Elegant Pink Wedding', title: 'Elegant Wedding Setup' },
//     { src: '/assets/event2.jpg', alt: 'Grand Mandap', title: 'Grand Mandap Decoration' },
//     { src: '/assets/event3.jpg', alt: 'Stage Decoration', title: 'Professional Stage Design' },
//     { src: '/assets/event4.jpg', alt: 'Wedding Backdrop', title: 'Stunning Backdrop' },
//     { src: '/assets/event5.jpg', alt: 'Venue Decoration', title: 'Complete Venue Setup' },
//     { src: '/assets/event6.jpg', alt: 'Corporate Event', title: 'Corporate Event Space' },
//   ];

//   return (
//     <section id="gallery" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             Explore our stunning collection of decorated events and celebrations.
//           </p>
//         </motion.div>

//         {/* Gallery Grid */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ scale: 1.05, y: -8 }}
//               className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               {/* Overlay */}
//               <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
//                 <div>
//                   <h3 className="text-white font-semibold text-lg">{image.title}</h3>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="/gallery"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
//           >
//             View Full Gallery
//             <ChevronRight size={20} />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Services Section
// function Services() {
//   const services = [
//     {
//       icon: Sparkles,
//       title: 'Event Decoration',
//       description: 'Transform your venue with stunning floral arrangements, elegant drapes, and creative lighting designs.',
//     },
//     {
//       icon: Palette,
//       title: 'Wedding Planning',
//       description: 'From intimate ceremonies to grand celebrations, we create unforgettable wedding experiences.',
//     },
//     {
//       icon: Music,
//       title: 'Corporate Events',
//       description: 'Professional event management for conferences, product launches, and corporate celebrations.',
//     },
//     {
//       icon: Camera,
//       title: 'Theme Parties',
//       description: 'Creative theme-based decorations and complete party management for all occasions.',
//     },
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             We offer comprehensive event solutions to make your celebration unforgettable.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -8 }}
//               className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-lg group"
//             >
//               <motion.div
//                 className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
//                 whileHover={{ rotate: 10, scale: 1.1 }}
//               >
//                 <service.icon className="w-8 h-8 text-pink-600" />
//               </motion.div>

//               <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
//                 {service.title}
//               </h3>

//               <p className="text-slate-700 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Stats Section
// function Stats() {
//   const [stats, setStats] = useState([
//     { label: 'Events Completed', value: 0, target: 500 },
//     { label: 'Happy Clients', value: 0, target: 1200 },
//     { label: 'Team Members', value: 0, target: 45 },
//     { label: 'Years Experience', value: 0, target: 8 },
//   ]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const interval = setInterval(() => {
//               setStats((prev) =>
//                 prev.map((stat) => ({
//                   ...stat,
//                   value: Math.min(stat.value + Math.ceil(stat.target / 50), stat.target),
//                 }))
//               );
//             }, 30);

//             setTimeout(() => clearInterval(interval), 1500);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const statsSection = document.getElementById('stats');
//     if (statsSection) observer.observe(statsSection);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="stats" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                 {stat.value}+
//               </div>
//               <p className="text-lg text-slate-300">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Testimonials Section
// function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       role: 'Wedding Client',
//       text: 'Shri Events made our wedding day absolutely magical. The attention to detail was impeccable!',
//       rating: 5,
//     },
//     {
//       name: 'Rajesh Kumar',
//       role: 'Corporate Event',
//       text: 'Professional, creative, and reliable. They delivered beyond our expectations.',
//       rating: 5,
//     },
//     {
//       name: 'Anjali Patel',
//       role: 'Birthday Party',
//       text: 'The team transformed our venue into a wonderland. Highly recommended!',
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
//           <p className="text-lg text-slate-700 max-w-2xl mx-auto">
//             Real testimonials from our happy clients.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} size={20} className="fill-pink-500 text-pink-500" />
//                 ))}
//               </div>
//               <p className="text-slate-700 mb-4">{testimonial.text}</p>
//               <div>
//                 <p className="font-semibold text-slate-900">{testimonial.name}</p>
//                 <p className="text-sm text-slate-600">{testimonial.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // CTA Section
// function CTA() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-center relative overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto px-4 relative z-10"
//       >
//         <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Celebrate?</h2>
//         <p className="text-xl text-pink-200 mb-8">
//           Let us help you create an unforgettable event. Get in touch today and let's bring your vision to life!
//         </p>
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 shadow-lg text-lg"
//         >
//           Get a Free Quote
//           <ArrowRight size={24} />
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// }

// // Main Home Component
// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Services />
//       <FeaturedGallery />
//       <Testimonials />
//       <Stats />
//       <CTA />
//     </>
//   );
// }


//more implementaiton
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Sparkles, Palette, Music, Camera, Phone, ChevronRight, Star, ArrowRight, Menu, X } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Initialize AOS
// if (typeof window !== 'undefined') {
//   AOS.init({ duration: 800, once: true });
// }

// // === CONFIG ===
// const PHONE_NUMBER = "+91 98765 43210"; // CHANGE TO CLIENT'S NUMBER
// const BUSINESS_NAME = "Shri Events";

// // 4K Shri-style images (replace with real client photos later)
// const GALLERY_IMAGES = [
//   { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Royal Mandap" },
//   { src: "https://images.unsplash.com/photo-1606819709994-3095c2e8b1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Floral Fantasy" },
//   { src: "https://images.unsplash.com/photo-1598514982901-93716a794e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Stage Extravaganza" },
//   { src: "https://images.unsplash.com/photo-1606216795423-3c4d7e7c3b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Backdrop Brilliance" },
//   { src: "https://images.unsplash.com/photo-1606214174565-3c2b5e8f8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Venue Transformation" },
//   { src: "https://images.unsplash.com/photo-1606216795423-3c4d7e7c3b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", title: "Corporate Elegance" },
// ];

// // === COMPONENTS ===
// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100 shadow-sm"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//         <div className="flex items-center space-x-2">
//   {/* Logo Container */}
//   <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center border border-pink-100">
//     <img
//       src="/logo.webp"  // Use WebP for fastest load (place in public/)
//       alt="Shri Decoration & Management Logo"
//       className="w-full h-full object-contain"
//       // Fallback chain: WebP → PNG → Inline SVG
//       onError={(e) => {
//         const target = e.currentTarget;
//         if (target.src.includes('logo.webp')) {
//           target.src = '/logo.png'; // Fallback to PNG
//         } else if (target.src.includes('logo.png')) {
//           // Final fallback: Inline pink sparkles SVG
//           target.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899' class='w-6 h-6'><path d='M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z'/></svg>`;
//         }
//       }}
//     />
//   </div>

//   {/* Business Name - Hidden on Mobile */}
//   <span className="text-xl font-bold text-slate-900 hidden sm:block">
//     {BUSINESS_NAME}
//   </span>
// </div>
//           <div className="hidden md:flex space-x-8">
//             {['Home', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-slate-700 hover:text-pink-600 transition-colors font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden text-slate-700"
//           >
//             {mobileOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//          animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-white border-t"
//         >
//           {['Home', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="block px-4 py-3 text-slate-700 hover:bg-pink-50"
//               onClick={() => setMobileOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* 4K Hero Image */}
//       <motion.div style={{ y }} className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
//           alt="Shri Events Hero"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-6"
//         >
//           Celebrate Lovely Moments
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl text-pink-200 max-w-3xl mx-auto mb-10 font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <a
//             href="#gallery"
//             className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Explore Gallery
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:bg-white/30 transition-all"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-8 h-8 text-pink-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }

// function Services() {
//   const services = [
//     { icon: Sparkles, title: "Event Decoration", desc: "Floral artistry, lighting, drapes & themes" },
//     { icon: Palette, title: "Wedding Planning", desc: "End-to-end coordination for your dream day" },
//     { icon: Music, title: "Corporate Events", desc: "Conferences, launches & brand experiences" },
//     { icon: Camera, title: "Theme Parties", desc: "Birthdays, anniversaries & custom themes" },
//   ];

//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Comprehensive solutions to make every occasion unforgettable
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//               whileHover={{ y: -12, scale: 1.03 }}
//               className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
//                 <s.icon className="w-8 h-8 text-pink-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
//                 {s.title}
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FeaturedGallery() {
//   return (
//     <section id="gallery" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Stunning transformations that speak for themselves
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {GALLERY_IMAGES.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="relative group overflow-hidden rounded-2xl shadow-xl h-80 cursor-pointer"
//             >
//               <img
//                 src={img.src}
//                 alt={img.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                 <h3 className="text-white text-xl font-bold">{img.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <a
//             href="/gallery"
//             className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
//           >
//             View Full Gallery <ChevronRight className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stats() {
//   const [counts, setCounts] = useState([0, 0, 0, 0]);
//   const targets = [500, 1200, 45, 8];
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           targets.forEach((target, i) => {
//             let start = 0;
//             const increment = target / 60;
//             const timer = setInterval(() => {
//               start += increment;
//               if (start >= target) {
//                 setCounts((prev) => {
//                   const newCounts = [...prev];
//                   newCounts[i] = target;
//                   return newCounts;
//                 });
//                 clearInterval(timer);
//               } else {
//                 setCounts((prev) => {
//                   const newCounts = [...prev];
//                   newCounts[i] = Math.ceil(start);
//                   return newCounts;
//                 });
//               }
//             }, 30);
//           });
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     { label: "Events Completed", value: counts[0] },
//     { label: "Happy Clients", value: counts[1] },
//     { label: "Team Members", value: counts[2] },
//     { label: "Years Experience", value: counts[3] },
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, i) => (
//             <div key={i}>
//               <div className="text-5xl md:text-6xl font-bold mb-2">
//                 {stat.value}+
//               </div>
//               <p className="text-lg text-pink-100">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const testimonials = [
//     { name: "Priya Sharma", role: "Wedding Client", text: "Shri Events made our wedding day absolutely magical. The attention to detail was impeccable!", rating: 5 },
//     { name: "Rajesh Kumar", role: "Corporate Event", text: "Professional, creative, and reliable. They delivered beyond our expectations.", rating: 5 },
//     { name: "Anjali Patel", role: "Birthday Party", text: "The team transformed our venue into a wonderland. Highly recommended!", rating: 5 },
//   ];

//   return (
//     <section id="testimonials" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Client Love</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Real stories from real celebrations
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(t.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-slate-700 italic mb-6">"{t.text}"</p>
//               <div>
//                 <p className="font-semibold text-slate-900">{t.name}</p>
//                 <p className="text-sm text-slate-500">{t.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTA() {
//   return (
//     <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-black/20" />
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="relative z-10 max-w-4xl mx-auto px-4"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           Ready to Create Magic?
//         </h2>
//         <p className="text-xl text-pink-200 mb-10">
//           Let’s bring your vision to life. Get a free quote today!
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
//           >
//             <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
//           </a>
//           <a
//             href="#contact"
//             className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Get Free Quote
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function FloatingCallButton() {
//   return (
//     <motion.a
//       href={`tel:${PHONE_NUMBER}`}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
//     >
//       <Phone className="w-8 h-8" />
//     </motion.a>
//   );
// }

// // === MAIN APP ===
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <FeaturedGallery />
//       <Testimonials />
//       <Stats />
//       <CTA />
//       <FloatingCallButton />
//     </>
//   );
// }

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useInView, useScroll, useTransform } from 'framer-motion';
// import {
//   Sparkles,
//   Palette,
//   Music,
//   Camera,
//   Phone,
//   ChevronRight,
//   Star,
//   ArrowRight,
//   Menu,
//   X,
// } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // === CONFIG ===
// const PHONE_NUMBER = '+91 98765 43210'; // CHANGE TO CLIENT'S NUMBER
// const BUSINESS_NAME = 'Shri Events';

// // 4K Shri-style images (replace with real client photos later)
// const GALLERY_IMAGES = [
//   {
//     src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Royal Mandap',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1606819709994-3095c2e8b1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Floral Fantasy',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1598514982901-93716a794e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Stage Extravaganza',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1606216795423-3c4d7e7c3b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Backdrop Brilliance',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1606214174565-3c2b5e8f8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Venue Transformation',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1606216795423-3c4d7e7c3b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Corporate Elegance',
//   },
// ];

// const SERVICES = [
//   {
//     icon: Sparkles,
//     img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1280&q=80",
//     title: "Event Decoration",
//     subtitle: "Floral artistry, lighting, drapes & themes",
//     highlights: [
//       "Stage setups", "Mandaps", "Lighting design", "Theme decor"
//     ],
//     rating: 5
//   },
//   {
//     icon: Palette,
//     img: "https://images.unsplash.com/photo-1606819709994-3095c2e8b1b8?auto=format&fit=crop&w=1280&q=80",
//     title: "Wedding Planning",
//     subtitle: "End-to-end coordination for your dream day",
//     highlights: [
//       "Invitations", "Logistics", "Vendor management", "Personalized support"
//     ],
//     rating: 5
//   },
//   {
//     icon: Music,
//     img: "https://images.unsplash.com/photo-1598514982901-93716a794e0c?auto=format&fit=crop&w=1280&q=80",
//     title: "Corporate Events",
//     subtitle: "Conferences, launches & brand experiences",
//     highlights: [
//       "AV solutions", "Conference planning", "Product launches", "Branding"
//     ],
//     rating: 5
//   },
//   {
//     icon: Camera,
//     img: "https://images.unsplash.com/photo-1606216795423-3c4d7e7c3b8c?auto=format&fit=crop&w=1280&q=80",
//     title: "Theme Parties",
//     subtitle: "Birthdays, anniversaries & custom themes",
//     highlights: [
//       "Kids themes", "Anniversary setups", "Custom props", "Entertainment"
//     ],
//     rating: 5
//   }
// ];

// // Initialize AOS
// if (typeof window !== 'undefined') {
//   AOS.init({ duration: 800, once: true });
//  }
// // function Navbar() {
// //   const [mobileOpen, setMobileOpen] = useState(false);

// //   return (
// //     <motion.nav
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       className="sticky top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-xl border-b border-pink-100 shadow-md"
// //       style={{ height: "74px" }} // Prevents header overlap, matches logo size!
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
// //         <div className="flex justify-between items-center h-[74px]"> {/* ensures entire navbar is same height as logo */}
// //           {/* Logo and Name */}
// //           <a href="/" className="flex items-center gap-3 group">
// //             <div className="h-[64px] w-[64px] flex items-center justify-center bg-white border border-pink-200 rounded-full shadow-sm overflow-hidden transition-all duration-500 group-hover:scale-105">
// //               {/* Use the full gradient logo PNG provided (Image 2) */}
// //               <img
// //                 src={"/Users/nagarjundp/Downloads/shri_events_website/client/public/assets/logo-removebg-preview.png"}
// //                 alt="Shri Events Logo - Celebrate Lovely Moment"
// //                 className="h-full w-full object-contain"
// //                 style={{ minWidth: "64px", minHeight: "64px", background: "transparent" }}
// //               />
// //             </div>
// //             {/* Brand & Slogan */}
// //             <div className="flex flex-col ml-2">
// //               <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-transparent bg-clip-text tracking-tight" style={{ fontFamily: "Pacifico, cursive" }}>
// //                 {BUSINESS_NAME}
// //               </span>
// //               <span className="text-xs font-medium tracking-wider text-pink-500 uppercase leading-3 mt-1">
// //                 Celebrate Lovely Moment
// //               </span>
// //             </div>
// //           </a>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex space-x-8">
// //             {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
// //               <a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 className="text-slate-700 hover:text-pink-600 font-semibold transition-colors duration-200 relative group uppercase tracking-wide"
// //               >
// //                 {item}
// //                 <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full group-hover:w-[80%] transition-all duration-200 absolute left-0 -bottom-1 w-0" />
// //               </a>
// //             ))}
// //           </div>

// //           {/* Mobile Nav Button */}
// //           <button
// //             onClick={() => setMobileOpen(!mobileOpen)}
// //             className="md:hidden text-pink-600 p-2"
// //             aria-label={mobileOpen ? "Close Navigation" : "Open Navigation"}
// //           >
// //             {mobileOpen ? <X size={32} /> : <Menu size={30} />}
// //           </button>
// //         </div>
// //       </div>
// //       {/* Mobile Menu */}
// //       {mobileOpen && (
// //         <motion.div
// //           initial={{ opacity: 0, y: -24 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -16 }}
// //           className="md:hidden bg-gradient-to-b from-white via-pink-100 to-orange-50 border-t border-pink-100 shadow-lg absolute w-full left-0 top-[74px] z-30"
// //         >
// //           {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
// //             <a
// //               key={item}
// //               href={`#${item.toLowerCase()}`}
// //               className="block px-4 py-4 text-pink-700 font-bold uppercase tracking-wide hover:bg-orange-50 transition-all"
// //               onClick={() => setMobileOpen(false)}
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </motion.div>
// //       )}
// //     </motion.nav>
// //   );
// // }

// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* 4K Hero Image */}
//       <motion.div style={{ y }} className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80"
//           alt="Shri Events Hero"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
//       </motion.div>
//       {/* Content */}
//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-6"
//         >
//           Celebrate Lovely Moments
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl text-pink-200 max-w-3xl mx-auto mb-10 font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <a
//             href="gallery"
//             className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Explore Gallery
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:bg-white/30 transition-all"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </motion.div>
//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-8 h-8 text-pink-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }

// function FeaturedServicesSlider() {
//   const [active, setActive] = useState(0);
//   useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
//   return (
//     <section
//       id="portfolio-services"
//       className="h-screen w-full bg-white relative"
//       style={{
//         scrollSnapType: "y mandatory",
//         overflowY: "scroll",
//         height: "100vh",
//       }}
//     >
//       {SERVICES.map((service, idx) => {
//         // Animate each portfolio when it enters view!
//         const ref = useRef(null);
//         const inView = useInView(ref, { once: true, margin: "-50px" });
//         const IconComponent = service.icon;

//         return (
//           <motion.div
//             ref={ref}
//             key={service.title}
//             className="h-screen w-full flex flex-col lg:flex-row items-center justify-center"
//             style={{
//               scrollSnapAlign: "start",
//               minHeight: "100vh",
//               position: "relative",
//             }}
//             initial={{ opacity: 0, y: 60, scale: 0.96 }}
//             animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             {/* Image Side */}
//             <motion.div
//               className="lg:w-1/2 w-full h-3/5 lg:h-[70%] flex items-center justify-center relative overflow-hidden"
//               initial={{ x: -100, opacity: 0 }}
//               animate={inView ? { x: 0, opacity: 1 } : {}}
//               transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
//             >
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="rounded-3xl shadow-2xl w-full h-full object-cover object-center"
//                 style={{
//                   maxHeight: "70vh",
//                   aspectRatio: "4/3",
//                   filter: "brightness(80%)",
//                 }}
//               />
//               <div className="absolute top-8 left-8 bg-white rounded-full shadow p-2">
//                 <IconComponent className="w-10 h-10 text-pink-500" />
//               </div>
//             </motion.div>

//             {/* Info Side */}
//             <motion.div
//               className="lg:w-1/2 w-full flex flex-col items-start justify-center px-10 py-8"
//               initial={{ x: 100, opacity: 0 }}
//               animate={inView ? { x: 0, opacity: 1 } : {}}
//               transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
//             >
//               <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-pink-600">
//                 {service.title}
//               </h2>
//               <div className="text-lg mb-5 text-slate-700">
//                 {service.subtitle}
//               </div>
//               <ul className="mb-8 space-y-3">
//                 {service.highlights.map((h, i) => (
//                   <li key={i} className="flex gap-2 items-center text-slate-600 text-base">
//                     <Star className="w-5 h-5 text-yellow-400" /> {h}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex items-center mb-3">
//                 {Array.from({ length: service.rating }).map((_, i) => (
//                   <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                 ))}
//                 <span className="ml-2 text-sm text-pink-400">
//                   {service.rating}.0/5.0 client rating
//                 </span>
//               </div>
//               <a
//                 href="#contact"
//                 className="px-7 py-3 mt-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition-all"
//               >
//                 Enquire Now
//               </a>
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </section>
//   );
// }

// function Stats() {
//   const [counts, setCounts] = useState([0, 0, 0, 0]);
//   const targets = [500, 1200, 45, 8];
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           targets.forEach((target, i) => {
//             let start = 0;
//             const increment = target / 60;
//             const timer = setInterval(() => {
//               start += increment;
//               if (start >= target) {
//                 setCounts((prev) => {
//                   const newCounts = [...prev];
//                   newCounts[i] = target;
//                   return newCounts;
//                 });
//                 clearInterval(timer);
//               } else {
//                 setCounts((prev) => {
//                   const newCounts = [...prev];
//                   newCounts[i] = Math.ceil(start);
//                   return newCounts;
//                 });
//               }
//             }, 30);
//           });
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     { label: "Events Completed", value: counts[0] },
//     { label: "Happy Clients", value: counts[1] },
//     { label: "Team Members", value: counts[2] },
//     { label: "Years Experience", value: counts[3] },
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, i) => (
//             <div key={i}>
//               <div className="text-5xl md:text-6xl font-bold mb-2">
//                 {stat.value}+
//               </div>
//               <p className="text-lg text-pink-100">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const testimonials = [
//     { name: "Priya Sharma", role: "Wedding Client", text: "Shri Events made our wedding day absolutely magical. The attention to detail was impeccable!", rating: 5 },
//     { name: "Rajesh Kumar", role: "Corporate Event", text: "Professional, creative, and reliable. They delivered beyond our expectations.", rating: 5 },
//     { name: "Anjali Patel", role: "Birthday Party", text: "The team transformed our venue into a wonderland. Highly recommended!", rating: 5 },
//   ];

//   return (
//     <section id="testimonials" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div data-aos="fade-up" className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Client Love</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Real stories from real celebrations
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               data-aos="fade-up"
//               data-aos-delay={i * 100}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
//             >
//               <div className="flex gap-1 mb-4">
//                 {[...Array(t.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-slate-700 italic mb-6">"{t.text}"</p>
//               <div>
//                 <p className="font-semibold text-slate-900">{t.name}</p>
//                 <p className="text-sm text-slate-500">{t.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTA() {
//   return (
//     <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-black/20" />
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="relative z-10 max-w-4xl mx-auto px-4"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//           Ready to Create Magic?
//         </h2>
//         <p className="text-xl text-pink-200 mb-10">
//           Let’s bring your vision to life. Get a free quote today!
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
//           >
//             <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
//           </a>
//           <a
//             href="#contact"
//             className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Get Free Quote
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function FloatingCallButton() {
//   return (
//     <motion.a
//       href={`tel:${PHONE_NUMBER}`}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
//     >
//       <Phone className="w-8 h-8" />
//     </motion.a>
//   );
// }

// // === MAIN APP ===
// export default function Home() {
//   return (
//     <>
      
//       <Hero />
//       <FeaturedServicesSlider />
//       <Testimonials />
//       <Stats />
//       <CTA />
//       <FloatingCallButton />
//     </>
//   );
// }
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Palette,
  Music,
  Camera,
  Phone,
  ChevronRight,
  Star,
  Instagram,
  Users,
  Gem,
  Ribbon,
  Cake,
  Baby,
  Flower2,
  Heart,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Highlight {
  // whatever you need
}

interface Service {
  img: string;
  title: string;
  subtitle: string;
  highlights: string[];
  rating: number;
}

const services = [
  {
    id: 'wedding',
    title: 'Wedding Decoration',
    icon: 'Rings',
    description: 'End-to-end coordination for your dream day',
    image: '/WhatsApp Image 2025-12-08 at 22.55.11 (1).jpeg',
  },
  {
    id: 'naming',
    title: 'Naming Ceremony',
    icon: 'Baby',
    description: 'Celebrate new beginnings with elegance',
    image: '/oie_9113542DF0IVhHx.jpg',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    icon: 'Ribbon',
    description: 'Celebrate motherhood in style',
    image: '/WhatsApp Image 2025-12-08 at 23.02.28.jpeg',
  },
  {
    id: 'birthday',
    title: 'Birthday Party',
    icon: 'Balloon',
    description: 'Make every birthday magical',
    image: '/event16.webp',
  },
  {
    id: 'kids-activities',
    title: 'Kids Activities',
    icon: 'Paintbrush',
    description: 'Fun and entertainment for all ages',
    image: '/event14.webp',
  },
  {
    id: 'other-events',
    title: 'Other Events',
    icon: 'Sparkles',
    description: 'Corporate, Festivals & More',
    image: '/wMrfOfKI8tCt.jpg',
  },
];

// Icon mapping (since you're using emoji strings in Services)
const iconMap: Record<string, any> = {
  'Rings': Heart,
  'Baby': Baby,
  'Ribbon': Ribbon,
  'Balloon': Cake,
  'Paintbrush': Palette,
  'Sparkles': Sparkles,
};
// === CONFIG ===
const PHONE_NUMBER = '+91 97392 20735';
const BUSINESS_NAME = "Shri Events";

// Example service data -- keep for animated service sections
const SERVICES = [
  {
    icon: Sparkles,
    img: "/event1.jpg",
    title: "Event Decoration",
    subtitle: "Floral artistry, lighting, drapes & themes",
    highlights: [
      "Stage setups", "Mandaps", "Lighting design", "Theme decor"
    ],
    rating: 5
  },
  {
    icon: Palette,
    img: "/event03.webp",
    title: "Wedding Decoration",
    subtitle: "End-to-end coordination for your dream day",
    highlights: [
      "Stage appearance", "Graceful", "Setup Props", "Flower Decorations"
    ],
    rating: 5
  },
  {
    icon: Music,
    img: "/event01.webp",
    title: "Haldi Decorations",
    subtitle: "Marriage, Special Occasions",
    highlights: [
      "High Quality", "Shastra", "Haldi", "Marriage Decorations"
    ],
    rating: 5
  },
  {
    icon: Camera,
    img: "/event02.webp",
    title: "Naming Ceromony",
    subtitle: "Birthdays, anniversaries & custom themes",
    highlights: [
      "Kids themes", "Naming Ceremony", "Custom props", "Entertainment"
    ],
    rating: 5
  }
];

// Initialize AOS for reveal animations
if (typeof window !== 'undefined') {
  AOS.init({ duration: 800, once: true });
}

// ==== Logo Video Component (for business logo repeat in black spot) ====
// function LogoVideo() {
//   // Make sure the video file is in the public folder, use a relative path!
//   return (
//     <section className="flex justify-center items-center bg-black py-8">
//       <video
//         src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"    // Put your logo video in /public and use "/video-file.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="h-32 w-auto rounded-xl shadow-xl border-4 border-pink-600 bg-black"
//         style={{ objectFit: "contain" }}
//       />
//     </section>
//   );
// }

// ==== Hero Section ====
//minimal
// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       <motion.div style={{ y }} className="absolute inset-0">
//         <img
//           src="/event_hero_image_violet_brighter.webp"
//           alt="Shri Events Hero"
//           className="w-full h-full object-cover"
//         />
        
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//       </motion.div>
//       <div
//   className="
//     absolute 
//     left-4 bottom-6 
//     md:left-16 md:bottom-16
//     flex flex-col items-end z-30
//   "
// >
//   <div
//     className="
//       bg-black/80 rounded-full
//       shadow-2xl flex items-center justify-center
//       w-[60px] h-[60px]            /* MOBILE SIZE */
//       md:w-[132px] md:h-[132px]    /* DESKTOP SIZE */
//     "
//   >
//     <video
//       src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="
//         object-contain
//         w-[36px] h-[36px]            /* MOBILE VIDEO SIZE */
//         md:w-[200px] md:h-[150px]    /* DESKTOP VIDEO SIZE */
//       "
//       style={{
//         background: "transparent"
//       }}
//     />
//   </div>
// </div>

//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
//       >
//       {/* === BIG PROFESSIONAL BUSINESS NAME === */}
//         <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1.4, ease: "easeOut" }}
//     className="mb-12"
//   >
//     {/* Main Name – Clean, Bold, Minimal */}
//     <h1 className="
//       text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl
//       font-black tracking-tight
//       text-white
//       drop-shadow-2xl
//       leading-none
//     ">
//       Shri Events
//     </h1>

//     {/* Subtext – Elegant divider style */}
//     <div className="flex items-center justify-center gap-6 mt-6">
//       <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/60"></div>
//       <p className="
//         text-base xs:text-lg sm:text-xl md:text-2xl
//         font-medium tracking-widest text-white/90
//         uppercase
//       ">
//         Decoration and Management
//       </p>
//       <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/60"></div>
//     </div>
//   </motion.div>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-6"
//         >
//           Celebrate Lovely Moments
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl text-pink-200 max-w-3xl mx-auto mb-10 font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <a
//             href="services"
//             className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Explore Services
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:bg-white/30 transition-all"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-8 h-8 text-pink-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.75]);

  // Smooth physics-like randomness using spring
  const smoothRandom = (seed: number) => {
    const physics = useSpring(0, { stiffness: 20, damping: 30 });
    // Trigger subtle random movement every few seconds
    // (Framer Motion handles this smoothly in real app)
    return physics;
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="/event_hero_image_violet_brighter.webp"
          alt="Shri Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent" />
      </motion.div>

      {/* Floating Logo */}
      <div className="absolute left-4 bottom-6 md:left-16 md:bottom-16 z-30">
        <div className="bg-black/70 backdrop-blur-md rounded-full shadow-2xl p-3 md:p-6 border border-amber-400/30">
          <video
            src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
            autoPlay loop muted playsInline
            className="w-12 h-12 md:w-32 md:h-32 object-contain"
          />
        </div>
      </div>

      {/* === ONLY 3 ELEGANT BLUE BUTTERFLIES – Professional & Magical === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Butterfly 1 – Top Left */}
        <motion.div
          animate={{
            x: [-80, 120, -60, 100, -80],
            y: [0, -80, -40, -100, 0],
            rotate: [0, 30, -25, 20, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-16 left-8 md:top-24 md:left-16 w-48 h-48 lg:w-64 lg:h-64 opacity-70 hidden sm:block"
        >
          <ButterflyAnimation color="blue" />
        </motion.div>

        {/* Butterfly 2 – Top Right */}
        <motion.div
          animate={{
            x: [100, -120, 80, -100, 100],
            y: [0, -60, -100, -50, 0],
            rotate: [0, -30, 25, -20, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-10 right-6 md:top-20 md:right-12 w-52 h-52 lg:w-72 lg:h-72 opacity-65 hidden md:block"
        >
          <ButterflyAnimation color="blue" />
        </motion.div>

        {/* Butterfly 3 – Bottom Center (subtle) */}
        <motion.div
          animate={{
            x: [-60, 80, -40, 60, -60],
            y: [100, -50, -80, -30, 100],
            rotate: [0, 25, -30, 15, 0],
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-44 h-44 lg:w-60 lg:h-60 opacity-60 hidden lg:block"
        >
          <ButterflyAnimation color="blue" />
        </motion.div>
      </div>

      {/* Minimal Sparkles – Only 8, barely visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-200 rounded-full blur-sm opacity-40"
            initial={{ y: -100 }}
            animate={{ y: "110vh" }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            style={{ left: `${10 + i * 11}%` }}
          />
        ))}
      </div>

      {/* MAIN CONTENT – Clean & Royal */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Golden Aura */}
          <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/20 via-yellow-300/10 to-amber-400/20 blur-3xl rounded-full animate-pulse-slow" />

          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight leading-none bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-100 bg-clip-text text-transparent drop-shadow-2xl">
            Shri Events
          </h1>

          <div className="flex items-center justify-center gap-10 mt-8">
            <motion.div initial={{ width: 0 }} animate={{ width: "140px" }} transition={{ duration: 1.5, delay: 1 }} className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-amber-100 uppercase">
              Decoration and Management
            </motion.p>
            <motion.div initial={{ width: 0 }} animate={{ width: "140px" }} transition={{ duration: 1.5, delay: 1 }} className="h-px bg-gradient-to-l from-transparent via-amber-300 to-transparent" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8"
        >
          Celebrate Lovely Moments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl font-light"
        >
          With us, every smile shines brighter than ever
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#services"
            className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-amber-300"
          >
            Explore Services
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-amber-300 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
          >
            Call Now +91 97392 20735
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronRight className="w-10 h-10 text-amber-300 rotate-90" />
      </motion.div>
    </section>
  );
}
//royal grand
// ==== FINAL GRAND HERO – CLIENT WILL FALL IN LOVE INSTANTLY ====
// ==== FINAL GRAND HERO – FIXED & PERFECT ====
// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 400], [1, 0.75]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div style={{ y }} className="absolute inset-0 -z-10">
//         <img
//           src="/event_hero_image_violet_brighter.webp"
//           alt="Shri Events"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent" />
//       </motion.div>

//       {/* Floating Logo (Bottom Left) */}
//       <div className="absolute left-4 bottom-6 md:left-16 md:bottom-16 z-30">
//         <div className="bg-black/70 backdrop-blur-md rounded-full shadow-2xl p-3 md:p-6 border border-amber-400/30">
//           <video
//             src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-12 h-12 md:w-32 md:h-32 object-contain"
//           />
//         </div>
//       </div>

//       {/* MAIN GRAND CONTENT */}
//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
//       >
//         {/* Subtle Falling Sparkles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-70"
//               initial={{ y: -100 }}
//               animate={{
//                 y: "110vh",
//                 x: `${Math.random() * 100}vw`,
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* GRAND BUSINESS NAME */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7, y: 100 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="mb-8 md:mb-12 relative"
//         >
//           {/* Golden Glow Aura */}
//           <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 via-yellow-300/20 to-amber-400/30 blur-3xl rounded-full scale-150 animate-pulse-slow" />

//           <h1 className="
//             text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]
//             font-black tracking-tight leading-none
//             bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-100
//             bg-clip-text text-transparent
//             drop-shadow-2xl
//             relative z-10
//             animate-title-glow
//           ">
//             Shri Events
//           </h1>

//           {/* Royal Subtitle */}
//           <div className="flex items-center justify-center gap-10 mt-8">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "140px" }}
//               transition={{ duration: 1.5, delay: 1 }}
//               className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
//             />
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 1 }}
//               className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-amber-100 uppercase"
//             >
//               Decoration and Management
//             </motion.p>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "140px" }}
//               transition={{ duration: 1.5, delay: 1 }}
//               className="h-px bg-gradient-to-l from-transparent via-amber-300 to-transparent"
//             />
//           </div>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6, duration: 1.4 }}
//           className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8"
//         >
//           Celebrate Lovely Moments
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>

//         {/* Royal Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.3, duration: 1 }}
//           className="flex flex-col sm:flex-row gap-6"
//         >
//           <a
//             href="#services"
//             className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-400/60 hover:scale-105 transition-all duration-300 border border-amber-300"
//           >
//             Explore Services
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-amber-300 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
//           >
//             Call Now +91 97392 20735
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-10 h-10 text-amber-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }

//update fucniton hero 
// ==== FINAL SMOOTH + GRAND HERO – PERFECT FOR MOBILE & DESKTOP ====



{/* ========== PROFESSIONAL SERVICES GRID SECTION ========== */}
<section className="py-24 md:py-32 bg-gradient-to-b from-white via-pink-50/50 to-purple-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Our <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From intimate gatherings to grand celebrations — we make every moment unforgettable
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { icon: Heart, title: "Wedding Decoration", desc: "Dream mandaps, floral artistry & lighting", color: "from-pink-500 to-rose-600" },
        { icon: Flower2, title: "Haldi & Mehendi", desc: "Vibrant themes with fresh flowers & props", color: "from-amber-500 to-orange-500" },
        { icon: Baby, title: "Naming Ceremony", desc: "Elegant baby welcomes & joyful decor", color: "from-blue-500 to-cyan-500" },
        { icon: Cake, title: "Birthday Parties", desc: "Themed balloons, backdrops & fun setups", color: "from-purple-500 to-pink-600" },
        { icon: Gem, title: "Engagement & Anniversaries", desc: "Romantic ring ceremonies & love-filled decor", color: "from-emerald-500 to-teal-600" },
        { icon: Users, title: "Corporate & Festivals", desc: "Housewarming, Ganesh Chaturthi & more", color: "from-indigo-500 to-purple-600" },
      ].map((service, i) => (
        <motion.a
          key={i}
          href="/services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.7 }}
          whileHover={{ y: -12 }}
          className="group block"
        >
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full p-10 flex flex-col items-center text-center">
            <div className={`p-5 rounded-full bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>
            <div className="mt-6 text-pink-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>

    {/* View All Button */}
    <motion.a
      href="/services"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-16 px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
    >
      View All Services →
    </motion.a>
  </div>
</section>
// ==== Services Section (Scroll animations, full page sections) ====
// function ServiceFeature({ service }) {
//   const IconComponent = service.icon;
//   return (
//     <section className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
//       <motion.img
//         src={service.img}
//         alt={service.title}
//         initial={{ opacity: 0, x: -80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="rounded-3xl shadow-xl w-full md:w-1/2 object-cover object-center"
//         style={{ maxHeight: "440px" }}
//       />
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="flex-1"
//       >
//         <div className="flex items-center mb-2">
//           <IconComponent className="w-12 h-12 text-pink-500 mr-3 drop-shadow" />
//           <h2 className="text-3xl font-extrabold text-pink-700">{service.title}</h2>
//         </div>
//         <p className="text-lg text-slate-600 mb-5">{service.subtitle}</p>
//         <ul className="mb-6">
//           {service.highlights.map((h, i) => (
//             <li key={i} className="text-base flex gap-2 text-slate-700">
//               <Star className="w-4 h-4 text-yellow-400" /> {h}
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-1 items-center mb-3">
//           {Array.from({ length: service.rating }).map((_, i) => (
//             <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//           ))}
//         </div>
//         <span className="ml-2 text-sm text-pink-400">{service.rating}.0/5 client rating</span>
//       </motion.div>
//     </section>
//   );
// }
export function ServiceFeature({ service, reverse }: { service: Service; reverse?: boolean }) {
  return (
    <section
      className={`
        max-w-6xl mx-auto 
        px-4 py-8 md:py-14
        flex flex-col 
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        items-center 
        gap-6 md:gap-12
        text-center                 /* ← center everything on mobile */
      `}
    >
      {/* ─── IMAGE ─── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <motion.img
          src={service.img}
          alt={service.title}
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl w-full object-cover shadow-xl"
          style={{ maxHeight: "340px" }}
        />
      </motion.div>

      {/* ─── TEXT ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.05 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-black mb-2 leading-tight">
          {service.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-neutral-600 mb-5 md:mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
          {service.subtitle}
        </p>

        {/* ─── FEATURE PILLS (compact) ─── */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-md mx-auto md:mx-0">
          {service.highlights.map((h, i) => (
            <div
              key={i}
              className="
                text-xs md:text-sm text-black/85
                bg-white border border-black/8
                px-2.5 py-1.5 rounded-lg
                shadow-sm hover:shadow transition-shadow
                flex items-center justify-center
              "
            >
              {h}
            </div>
          ))}
        </div>

        {/* ─── RATING ─── */}
        <div className="flex items-center justify-center md:justify-start gap-1 mt-4">
          {Array.from({ length: service.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Rated {service.rating}.0 / 5 by clients
        </p>
      </motion.div>
    </section>
  );
}



// ==== Stats Section ====
function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [150, 500, 10, 8];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((target, i) => {
            let start = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = Math.ceil(start);
                  return newCounts;
                });
              }
            }, 30);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Events Completed", value: counts[0] },
    { label: "Happy Clients", value: counts[1] },
    { label: "Team Members", value: counts[2] },
    { label: "Years Experience", value: counts[3] },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}+
              </div>
              <p className="text-lg text-pink-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const testimonials = [
  {
    name: "Chandan Ck",
    event: "Baby Shower",
    role: "Decorations",
    text: "I’m so happy with the amazing decoration done by Shri Events Decoration for my baby shower! The setup looked so elegant and dreamy and everything was perfect.",
    rating: 5,
    decorationImage: "/event05.webp",   // <-- BIG photo
  },
  {
    name: "Dheeraj Yadav",
    event: "Birthday",
    role: "Birthday Decoration",
    text: "Srinivas did great job in very less time. Had called him in the mrng around 9am for my daughter's birthday decore. He finished the work quickly within short notice with perfection.",
    rating: 5,
    decorationImage: "/event6.jpg",
  },
  {
    name: "Lavanya",
    event: "Birthday",
    role: "Birthday Party",
    text: "He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating: 5,
    decorationImage: "/event7.jpg",
  },
  {
    name:"Nikitha Apuri",
    event:"Baby Shower",
    role:"Baby SHower Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/events8.jpg",
  },
  {
    name:"Garima Singh",
    event:"Engagement",
    role:"Enagagement Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/event10.jpg",
  },
  {
    name:"Suhail Baig",
    event:"Haldi",
    role:"Haldi Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/event11.jpg"
  }
  // … add the rest with your own URLs …
];
// ==== Testimonials Section ====
function Testimonials() {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Love
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from real celebrations
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8 animate-marquee"
            style={{ width: "max-content" }}
          >
            {repeatedTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-slate-100
                           flex flex-col overflow-hidden transition hover:scale-105 duration-300"
              >
                {/* BIG decoration image – top of the card */}
                <div className="relative">
                  <img
                    src={t.decorationImage}
                    alt={`${t.event} decoration`}
                    className="w-full h-56 object-cover"   // <-- BIGGER (224 px)
                  />
                  {/* Optional dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Stars + event type (optional – you can delete) */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-600">
                      {t.event}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 italic mb-4 flex-1 leading-relaxed">
                    "{t.text}"
                  </p>

                  {/* Footer */}
                  <div>
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee animation */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
}
// ==== Call-to-Action ====
function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Create Magic?
        </h2>
        <p className="text-xl text-pink-200 mb-10">
          Let’s bring your vision to life. Get a free quote today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Get Free Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCallButton() {
  return (
    <>
      {/* Phone Button */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
      >
        <Phone className="w-8 h-8" />
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href="https://www.instagram.com/shri_events_decoration/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
      >
        <Instagram className="w-8 h-8" />
      </motion.a>
    </>
  );
}

// === MAIN APP ===
export default function Home() {
  return (
    <>
      <Hero />

{/* GLOBAL ANIMATIONS – Paste once */}
<style jsx global>{`
  @keyframes title-glow {
    0%, 100% { 
      text-shadow: 0 0 40px rgba(251, 191, 36, 0.8), 
                    0 0 80px rgba(251, 191, 36, 0.5),
                    0 0 120px rgba(251, 191, 36, 0.3);
    }
    50% { 
      text-shadow: 0 0 60px rgba(251, 191, 36, 1), 
                    0 0 100px rgba(251, 191, 36, 0.7),
                    0 0 140px rgba(251, 191, 36, 0.5);
    }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }
  .animate-title-glow { animation: title-glow 5s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
`}</style>
{/* ========== PERFECT HORIZONTAL SERVICES CAROUSEL (NO EDGE CUT-OFF) ========== */}
{/* ========== FINAL: CLEAN, SMALL, PREMIUM SCROLLING SERVICES (USING YOUR REAL DATA) ========== */}
<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-900"
      >
        Our <span className="bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">Services</span>
      </motion.h2>
      <p className="mt-4 text-lg text-gray-600">Tap any card to explore packages</p>
    </div>

    {/* Scrolling Container */}
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -100 + "%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ animationPlayState: "running" }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
        onTouchStart={(e) => e.currentTarget.style.animationPlayState = "paused"}
        onTouchEnd={(e) => e.currentTarget.style.animationPlayState = "running"}
      >
        {[...services, ...services].map((service, i) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.a
              key={`${service.id}-${i}`}
              href="/services"
              className="
                group flex-shrink-0 
                w-[78vw] 
                sm:w-[65vw] 
                md:w-[40vw] 
                lg:w-[30vw] 
                max-w-xs
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Icon + Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-8 h-8 mb-1.5" />
                    <h3 className="text-lg font-bold drop-shadow-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-gray-700 text-xs leading-relaxed mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-pink-600 font-semibold text-sm">
                    View Packages
                    <ChevronRight className="w-4.5 h-4.5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-14">
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
      >
        Explore All Services
      </motion.a>
    </div>
  </div>
</section>
      {/* Animate services, normal scroll sections - no container scroll */}
      {SERVICES.map((service) => (
        <ServiceFeature key={service.title} service={service} />
      ))}
      
      <Testimonials />
      <Stats />
      <CTA />
      <FloatingCallButton />
    </>
  );
}

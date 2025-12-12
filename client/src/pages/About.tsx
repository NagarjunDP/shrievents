// import { motion } from 'framer-motion';
// import { Award, Users, Heart, Zap } from 'lucide-react';

// export default function About() {
//   const features = [
//     {
//       icon: Award,
//       title: 'Award Winning',
//       description: 'Recognized for excellence in event decoration and management.',
//     },
//     {
//       icon: Users,
//       title: 'Expert Team',
//       description: 'Highly skilled professionals dedicated to your vision.',
//     },
//     {
//       icon: Heart,
//       title: 'Client Focused',
//       description: 'Your satisfaction is our top priority.',
//     },
//     {
//       icon: Zap,
//       title: 'Creative Solutions',
//       description: 'Innovative ideas for every occasion.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Header */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             About Shri Events
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl text-pink-200"
//           >
//             Creating memorable celebrations since 2016
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 With over 8 years of experience in event decoration and management, Shri Events has become a trusted name in creating memorable celebrations. What started as a small team with a big dream has grown into a professional organization serving hundreds of clients.
//               </p>
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 Our dedicated team of professionals is committed to bringing your vision to life with creativity, attention to detail, and exceptional service. We believe that every event is unique and deserves a personalized approach.
//               </p>
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 From intimate gatherings to grand celebrations, we handle every detail with precision and passion. Our portfolio speaks for itself - thousands of happy clients and countless unforgettable moments.
//               </p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl overflow-hidden shadow-lg"
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent"
//                 animate={{ opacity: [0.3, 0.6, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
//                   transition={{ duration: 6, repeat: Infinity }}
//                 >
//                   <Award size={120} className="text-pink-500/40" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Features Grid */}
//           <div className="mb-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-slate-900 mb-12 text-center"
//             >
//               Why Choose Us
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                   className="p-8 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-lg group text-center"
//                 >
//                   <motion.div
//                     className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 mx-auto group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                   >
//                     <feature.icon className="w-8 h-8 text-pink-600" />
//                   </motion.div>

//                   <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
//                     {feature.title}
//                   </h3>

//                   <p className="text-slate-700 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-xl p-12 text-white text-center"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div>
//                 <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   200+
//                 </div>
//                 <p className="text-lg text-slate-300">Events Completed</p>
//               </div>
//               <div>
//                 <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   500+
//                 </div>
//                 <p className="text-lg text-slate-300">Happy Clients</p>
//               </div>
//               <div>
//                 <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   5+
//                 </div>
//                 <p className="text-lg text-slate-300">Years Experience</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-slate-900 mb-12"
//           >
//             Our Commitment
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-slate-700 max-w-3xl mx-auto"
//           >
//             We are committed to delivering excellence in every aspect of event management. From the initial consultation to the final execution, we ensure that your event exceeds expectations. Our team works tirelessly to bring your vision to life with creativity, professionalism, and attention to detail.
//           </motion.p>
//         </div>
//       </section>
//     </div>
//   );
// }
//good
// import { motion } from 'framer-motion';
// import { Award, Heart, Zap, Sparkles } from 'lucide-react';

// export default function About() {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'Masters in Balloon Decorations',
//       description: 'We create stunning balloon arches, backdrops, and sculptures that transform any event.',
//     },
//     {
//       icon: Award,
//       title: 'Expert Event Planning',
//       description: 'From birthdays to weddings, we handle every detail with care and creativity.',
//     },
//     {
//       icon: Heart,
//       title: 'Client-First Approach',
//       description: 'Your vision is our mission. We listen, plan, and deliver exactly what you want.',
//     },
//     {
//       icon: Zap,
//       title: 'Fast & Reliable',
//       description: 'Quick setup, on-time delivery, and flawless execution — every single time.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Header */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             About Shri Decorations and Event Management
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl text-pink-200"
//           >
//             Turning your celebrations into unforgettable memories
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 Welcome to <strong>Shri Decorations and Event Management</strong> — your trusted partner in creating beautiful, joyful celebrations.
//               </p>
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 We specialize in <strong>balloon decorations</strong> and full event management. Whether it's a birthday party, wedding, baby shower, or corporate event, we bring creativity and care to every detail.
//               </p>
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 Our team is passionate about making your special day perfect. We work closely with you to understand your style and budget, then deliver decorations and planning that exceed your expectations.
//               </p>
//             </motion.div>

//             {/* Balloon Visual */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl overflow-hidden shadow-lg"
//             >
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   animate={{ 
//                     y: [0, -20, 0],
//                     rotate: [0, 5, 0]
//                   }}
//                   transition={{ 
//                     duration: 4, 
//                     repeat: Infinity, 
//                     ease: "easeInOut" 
//                   }}
//                   className="text-pink-500"
//                 >
//                   <Sparkles size={140} className="drop-shadow-lg" />
//                 </motion.div>
//               </div>
//               <div className="absolute bottom-8 left-8 right-8 text-center">
//                 <p className="text-2xl font-bold text-slate-800">Balloon Artistry</p>
//                 <p className="text-slate-600">Custom designs for every occasion</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Features Grid */}
//           <div className="mb-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-slate-900 mb-12 text-center"
//             >
//               Why Choose Us
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                   className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-xl group text-center"
//                 >
//                   <motion.div
//                     className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 mx-auto group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
//                     whileHover={{ rotate: 12, scale: 1.1 }}
//                   >
//                     <feature.icon className="w-8 h-8 text-pink-600" />
//                   </motion.div>

//                   <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
//                     {feature.title}
//                   </h3>

//                   <p className="text-slate-700 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Commitment */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-12 text-center border-2 border-pink-200"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-block"
//             >
//               <Heart size={60} className="text-pink-600 mx-auto mb-4" />
//             </motion.div>
//             <h3 className="text-3xl font-bold text-slate-900 mb-4">
//               Our Promise
//             </h3>
//             <p className="text-lg text-slate-700 max-w-3xl mx-auto">
//               We promise to deliver beautiful decorations, reliable service, and a stress-free experience. 
//               Your happiness is our success.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-slate-900 mb-6"
//           >
//             Let’s Make Your Event Special
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto"
//           >
//             Contact us today for a free consultation and quote.
//           </motion.p>
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             Get Started
//           </motion.a>
//         </div>
//       </section>
//     </div>
//   );
// }

// import { motion } from 'framer-motion';
// import { Award, Heart, Zap, Sparkles, UserCheck } from 'lucide-react'; // Added UserCheck for the proprietor section

// // Define the path for the uploaded image. Replace this with the actual path 
// // once the image is hosted (e.g., in a public folder or an asset pipeline).
// // **NOTE: For this example, I am using a placeholder for the image source. 
// // You must replace 'path/to/whatsapp-image-srinivas.jpg' with the actual live path.**
// const proprietorImage = '/WhatsApp Image 2025-12-12 at 12.00.40.jpeg';

// export default function About() {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'Masters in Balloon Decorations',
//       description: 'We create stunning balloon arches, backdrops, and sculptures that transform any event.',
//     },
//     {
//       icon: Award,
//       title: 'Expert Event Planning',
//       description: 'From birthdays to weddings, we handle every detail with care and creativity.',
//     },
//     {
//       icon: Heart,
//       title: 'Client-First Approach',
//       description: 'Your vision is our mission. We listen, plan, and deliver exactly what you want.',
//     },
//     {
//       icon: Zap,
//       title: 'Fast & Reliable',
//       description: 'Quick setup, on-time delivery, and flawless execution — every single time.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Header */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             About Shri Decorations and Event Management
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl text-pink-200"
//           >
//             Turning your celebrations into unforgettable memories
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content: Company Story (Updated) */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             {/* Text Content: Updated Description */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey in Event Excellence</h2>
              
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 **Shri Events Decoration** began its journey on **22nd November 2016**, focusing initially on smaller events. Since then, we have grown into a reliable full-service provider, specializing in decoration, planning, and comprehensive event services.
//               </p>
//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 Our mission is to make quality event setups accessible to everyone. We pride ourselves on offering **budget-friendly decoration services** without compromising on creativity or execution.
//               </p>
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 With **more than 700 successfully completed events** and consistently high client ratings, our track record speaks for itself. We are committed to providing reliable, professional, and memorable event solutions for you.
//               </p>
//             </motion.div>

//             {/* Stats/Counter Visual: Updated for Company Success */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
//             >
//               <div className="text-center p-8">
//                 <motion.h3 
//                   initial={{ scale: 0.8 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: 'spring', stiffness: 100 }}
//                   className="text-8xl font-extrabold text-purple-700"
//                 >
//                   700+
//                 </motion.h3>
//                 <p className="text-3xl font-semibold text-slate-800 mt-4">Successful Events</p>
//                 <p className="text-slate-600 mt-2">Built on professionalism and customer satisfaction</p>
//               </div>
//             </motion.div>
//           </div>
          
//           {/* New Section: Meet the Proprietor */}
//           <div className="mb-20 py-10">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-slate-900 mb-12 text-center"
//             >
//               Meet the Proprietor
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-slate-50 p-10 rounded-xl shadow-inner">
//               {/* Photo Column */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 className="lg:col-span-1 flex justify-center"
//               >
//                 <div className="w-64 h-auto rounded-xl overflow-hidden shadow-2xl border-4 border-pink-500">
//                   <img 
//                     src={proprietorImage} 
//                     alt="Proprietor Mr. Srinivas" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>

//               {/* Description Column */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="lg:col-span-2"
//               >
//                 <div className="flex items-center mb-4">
//                   <UserCheck size={36} className="text-purple-600 mr-3" />
//                   <h3 className="text-3xl font-bold text-slate-900">Mr. Srinivas, Proprietor</h3>
//                 </div>
//                 <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                   Mr. Srinivas is the driving force behind Shri Events Decoration. His commitment to the craft led him to complete an **Event Organiser course in May 2018** at a recognized event management company in Mangalore.
//                 </p>
//                 <p className="text-lg text-slate-700 mb-4 leading-relaxed font-semibold">
//                   His core philosophy is simple: delivering quality event planning and decoration services that are **accessible and budget-friendly** for everyone.
//                 </p>
//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   With professional training and years of hands-on experience in planning decoration and all types of event services, Mr. Srinivas ensures every client receives professional, well-managed, and highly-rated service.
//                 </p>
//               </motion.div>
//             </div>
//           </div>


//           {/* Features Grid (Existing) */}
//           <div className="mb-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-slate-900 mb-12 text-center"
//             >
//               Why Choose Us
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                   className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-xl group text-center"
//                 >
//                   <motion.div
//                     className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 mx-auto group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
//                     whileHover={{ rotate: 12, scale: 1.1 }}
//                   >
//                     <feature.icon className="w-8 h-8 text-pink-600" />
//                   </motion.div>

//                   <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
//                     {feature.title}
//                   </h3>

//                   <p className="text-slate-700 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Commitment (Existing) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-12 text-center border-2 border-pink-200"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-block"
//             >
//               <Heart size={60} className="text-pink-600 mx-auto mb-4" />
//             </motion.div>
//             <h3 className="text-3xl font-bold text-slate-900 mb-4">
//               Our Promise
//             </h3>
//             <p className="text-lg text-slate-700 max-w-3xl mx-auto">
//               We promise to deliver beautiful decorations, reliable service, and a stress-free experience. 
//               Your happiness is our success.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA (Existing) */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-slate-900 mb-6"
//           >
//             Let’s Make Your Event Special
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto"
//           >
//             Contact us today for a free consultation and quote.
//           </motion.p>
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//           >
//             Get Started
//           </motion.a>
//         </div>
//       </section>
//     </div>
//   );
// }
import { motion } from 'framer-motion';
import { Award, Heart, Zap, Sparkles, UserCheck } from 'lucide-react';

// Define the path for the uploaded image. (Using the path you provided)
const proprietorImage = '/WhatsApp Image 2025-12-12 at 12.00.40.jpeg';

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Masters in Balloon Decorations',
      description: 'We create stunning balloon arches, backdrops, and sculptures that transform any event.',
    },
    {
      icon: Award,
      title: 'Expert Event Planning',
      description: 'From birthdays to weddings, we handle every detail with care and creativity.',
    },
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Your vision is our mission. We listen, plan, and deliver exactly what you want.',
    },
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Quick setup, on-time delivery, and flawless execution — every single time.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            About Shri Decorations and Event Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-pink-200"
          >
            Turning your celebrations into unforgettable memories
          </motion.p>
        </div>
      </section>

      {/* Main Content: Company Story (Optimized) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content: Updated Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey in Event Excellence</h2>
              
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                <span className="font-bold text-purple-600">Shri Events Decoration</span> began its journey on <span className="font-semibold">22nd November 2016</span>, focusing initially on smaller events. Since then, we have grown into a reliable full-service provider, specializing in decoration, planning, and comprehensive event services.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Our mission is to make quality event setups accessible to everyone. We pride ourselves on offering <span className="font-bold">budget-friendly decoration services</span> without compromising on creativity or execution.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With <span className="font-bold text-pink-600">more than 700 successfully completed events</span> and consistently high client ratings, our track record speaks for itself. We are committed to providing reliable, professional, and memorable event solutions for you.
              </p>
            </motion.div>

            {/* Stats/Counter Visual: Updated for Company Success */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <div className="text-center p-8">
                <motion.h3 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="text-8xl font-extrabold text-purple-700"
                >
                  700+
                </motion.h3>
                <p className="text-3xl font-semibold text-slate-800 mt-4">Successful Events</p>
                <p className="text-slate-600 mt-2">Built on professionalism and customer satisfaction</p>
              </div>
            </motion.div>
          </div>
          
          {/* New Section: Meet the Proprietor (Optimized Image/Content) */}
          <div className="mb-20 py-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-slate-900 mb-12 text-center"
            >
              Meet the Proprietor
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-slate-50 p-10 rounded-xl shadow-inner">
              {/* Photo Column (Optimized for Mobile/Desktop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-1 flex justify-center"
              >
                {/* Responsive Image Container: w-48 on mobile, w-64 on large screens, fixed aspect ratio for consistent look */}
                <div className="w-48 lg:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-pink-500">
                  <img 
                    src={proprietorImage} 
                    alt="Proprietor Mr. Srinivas" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Description Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="flex items-center mb-4">
                  <UserCheck size={36} className="text-purple-600 mr-3" />
                  <h3 className="text-3xl font-bold text-slate-900">Mr. Srinivas, Proprietor</h3>
                </div>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  <span className="font-semibold text-slate-900">Mr. Srinivas</span> is the driving force behind Shri Events Decoration. His commitment to the craft led him to complete an <span className="font-semibold text-purple-600">Event Organiser course in May 2018</span> at a recognized event management company in Mangalore.
                </p>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  His core philosophy is simple: delivering quality event planning and decoration services that are <span className="font-bold text-pink-600">accessible and budget-friendly</span> for everyone.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With professional training and years of hands-on experience in planning decoration and all types of event services, Mr. Srinivas ensures every client receives professional, well-managed, and highly-rated service.
                </p>
              </motion.div>
            </div>
          </div>


          {/* Features Grid (Existing) */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-slate-900 mb-12 text-center"
            >
              Why Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-xl group text-center"
                >
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 mx-auto group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-pink-600" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Commitment (Existing) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-12 text-center border-2 border-pink-200"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Heart size={60} className="text-pink-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Promise
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We promise to deliver beautiful decorations, reliable service, and a stress-free experience. 
              Your happiness is our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA (Existing) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 mb-6"
          >
            Let’s Make Your Event Special
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a free consultation and quote.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </div>
  );
}

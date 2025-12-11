// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, Play, Star, Check } from 'lucide-react';

// interface ServicePackage {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   rating: number;
//   features: string[];
//   packages?: {
//     name: string;
//     price?: string;
//     items: string[];
//   }[];
//   gallery?: string[];
// }

// interface VideoShowcase {
//   title: string;
//   description: string;
//   videoUrl: string;
//   thumbnail: string;
// }

// export default function Services() {
//   const [selectedService, setSelectedService] = useState<string | null>(null);
//   const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
//   const [activeTab, setActiveTab] = useState<string>('all');
//   const [showVideoModal, setShowVideoModal] = useState(false);

//   // Service packages data
//   const services: ServicePackage[] = [
//     {
//       id: 'wedding',
//       title: 'Wedding Decoration',
//       subtitle: 'End-to-end coordination for your dream day',
//       description: 'Whatever you require for the wedding, we will arrange everything for you with perfection and elegance.',
//       image: '/wedding-main.jpg',
//       rating: 5,
//       features: ['Stage setups', 'Mandaps', 'Lighting design', 'Theme décor'],
//       packages: [
//         {
//           name: 'Standard Wedding Package',
//           items: [
//             'Wedding stage decoration',
//             'Welcome board',
//             'Welcome entry décor',
//             'Ramp decoration',
//             'Mantapa decoration',
//             'Grand reception garlands',
//             'Lighting arrangements',
//           ],
//         },
//         {
//           name: 'Premium Wedding Package',
//           items: [
//             'All Standard features',
//             'Grand muhurtham garlands',
//             'Extra garlands',
//             'Mallige dindu (jasmine arrangements)',
//             'Extra tied flower decorations',
//             'Flower petals and jade',
//             'VIP garlands',
//             'Chappara decoration',
//           ],
//         },
//         {
//           name: 'Complete Wedding Package',
//           items: [
//             'All Premium features',
//             'Home decoration',
//             'Food catering',
//             'Catering service staff',
//             'Photo booth',
//             '360-degree selfie booth',
//             'Sound system and speakers',
//             'Photography & Videography',
//           ],
//         },
//       ],
//       gallery: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg', '/wedding4.jpg'],
//     },
//     {
//       id: 'naming-ceremony',
//       title: 'Naming Ceremony',
//       subtitle: 'Birthdays, anniversaries & custom themes',
//       description: 'Complete and customizable naming ceremony packages with all decorations and services.',
//       image: '/naming-main.jpg',
//       rating: 5,
//       features: ['Kids themes', 'Naming Ceremony', 'Custom props', 'Entertainment'],
//       packages: [
//         {
//           name: 'Basic Naming Ceremony',
//           items: [
//             'Naming ceremony stage decoration',
//             'Theme-based backdrop and balloon decoration',
//             'Cradle (Palna/Jhula) decoration',
//             'Welcome board',
//             'Entrance decoration',
//             'Flower decoration (fresh flowers)',
//           ],
//         },
//         {
//           name: 'Standard Naming Ceremony',
//           items: [
//             'All Basic features',
//             'Garlands for baby and family members',
//             'Mallige dindu (jasmine arrangements)',
//             'Flower petals for rituals',
//             'LED baby name display',
//             'Photo booth with baby theme',
//             'Photography & Videography',
//           ],
//         },
//         {
//           name: 'Premium Naming Ceremony',
//           items: [
//             'All Standard features',
//             'Neon light board',
//             'Lighting and sound system',
//             'Background music',
//             'Return gift counter setup',
//             'Catering arrangement',
//             'Catering service staff',
//             'Hosting and coordination support',
//           ],
//         },
//       ],
//       gallery: ['/naming1.jpg', '/naming2.jpg', '/naming3.jpg', '/naming4.jpg'],
//     },
//     {
//       id: 'baby-shower',
//       title: 'Baby Shower',
//       subtitle: 'Seemantha / Godh Bharai - Complete packages',
//       description: 'Everything required for the function will be taken care of by us with utmost care.',
//       image: '/baby-shower-main.jpg',
//       rating: 5,
//       features: ['Stage setups', 'Floral décor', 'Theme decoration', 'Event coordination'],
//       packages: [
//         {
//           name: 'Basic Baby Shower',
//           items: [
//             'Baby shower stage decoration',
//             'Theme-based backdrop decoration',
//             'Balloon decoration',
//             'Floral decoration (fresh flowers)',
//             'Welcome board / Baby shower board',
//             'Entrance decoration',
//           ],
//         },
//         {
//           name: 'Standard Baby Shower',
//           items: [
//             'All Basic features',
//             'Sitting Chair',
//             'Flower garlands',
//             'Mallige dindu (jasmine arrangements)',
//             'Flower petals for rituals',
//             'Haragalu (floral jewelry)',
//             'Photo booth with baby shower theme',
//           ],
//         },
//         {
//           name: 'Premium Baby Shower',
//           items: [
//             'All Standard features',
//             'Photography & Videography',
//             'Sound system and background music',
//             'Catering arrangement',
//             'Event coordination support',
//             'Custom theme enhancements',
//             'Special lighting arrangements',
//           ],
//         },
//       ],
//       gallery: ['/baby-shower1.jpg', '/baby-shower2.jpg', '/baby-shower3.jpg', '/baby-shower4.jpg'],
//     },
//     {
//       id: 'birthday',
//       title: 'Birthday Party',
//       subtitle: 'Balloon decoration packages based on your budget',
//       description: 'From basic to luxury - we have the perfect birthday party solution for you.',
//       image: '/birthday-main.jpg',
//       rating: 5,
//       features: ['Balloon decoration', 'Theme setups', 'Entertainment', 'Photo booth'],
//       packages: [
//         {
//           name: 'Basic Balloon Package',
//           items: [
//             'Simple balloon arch or bunch decoration',
//             'Background wall balloon décor',
//             'Happy Birthday foil banner',
//             'Age / number foil balloons',
//             'Cake table balloon decoration',
//           ],
//         },
//         {
//           name: 'Standard Balloon Package',
//           items: [
//             'Theme-based balloon arch or ring decoration',
//             'Backdrop curtain with balloons',
//             'Happy Birthday neon or foil banner',
//             'Age / number foil balloons',
//             'Cake table with balloon décor',
//             'Side balloon bunches',
//             'Simple floor balloon setup',
//           ],
//         },
//         {
//           name: 'Premium Balloon Package',
//           items: [
//             'Customized theme backdrop with balloons',
//             'Organic balloon arch (2–3 colors)',
//             'LED Happy Birthday / Name board',
//             'Big LED or foil number balloons',
//             'Front cake table decoration',
//             'Side stand balloon decorations',
//             'Ceiling balloons (limited)',
//           ],
//         },
//         {
//           name: 'Luxury Balloon Package',
//           items: [
//             'Full theme-based balloon setup',
//             'Organic balloon arch with props',
//             'Customized backdrop with name',
//             'Neon Happy Birthday & LED name letters',
//             'Big LED number',
//             'Designer cake tables',
//             'Entrance balloon decoration',
//             'Photo booth with props',
//             'Floor and ceiling balloon décor',
//           ],
//         },
//       ],
//       gallery: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg', '/birthday4.jpg'],
//     },
//     {
//       id: 'kids-activities',
//       title: 'Kids Activities & Entertainment',
//       subtitle: 'Fun counters and entertainment for all ages',
//       description: 'Make the birthday party more enjoyable with our fun activities and entertainment options.',
//       image: '/kids-activities-main.jpg',
//       rating: 5,
//       features: ['Face painting', 'Magician show', 'Food counters', 'Game activities'],
//       packages: [
//         {
//           name: 'Kids Activities Package',
//           items: [
//             'Tattoo art',
//             'Face painting',
//             'Key chain making activity',
//             'Balloon crafting',
//             'Origami paper crafting',
//             'Pebble art',
//             'Clay modelling',
//             'Nail art',
//           ],
//         },
//         {
//           name: 'Entertainment Package',
//           items: [
//             'Live caricature artist',
//             'Magician show',
//             'MC anchoring (host to manage games)',
//             'Sound system and speakers',
//           ],
//         },
//         {
//           name: 'Food & Snack Counters',
//           items: [
//             'Popcorn counter',
//             'Chocolate fountain',
//             'Cotton candy counter',
//             'Gun shooting game counter',
//             'Food catering (veg / non-veg)',
//             'Catering service staff',
//           ],
//         },
//       ],
//       gallery: ['/kids1.jpg', '/kids2.jpg', '/kids3.jpg', '/kids4.jpg'],
//     },
//     {
//       id: 'other-events',
//       title: 'Other Events',
//       subtitle: 'Corporate, Festivals, Housewarming & More',
//       description: 'We handle all types of events with professional decoration and coordination.',
//       image: '/other-events-main.jpg',
//       rating: 5,
//       features: ['Corporate events', 'Festivals', 'Housewarming', 'School events'],
//       packages: [
//         {
//           name: 'Corporate Events',
//           items: [
//             'Office opening ceremonies',
//             'Annual day celebrations',
//             'Product launches',
//             'Employee engagement events',
//             'Conference & seminar setups',
//             'Stage decoration, branding & sound setup',
//           ],
//         },
//         {
//           name: 'Housewarming (Gruhapravesha)',
//           items: [
//             'Entrance decoration',
//             'Mantapa decoration',
//             'Floral & balloon decoration',
//             'Welcome board',
//             'Lighting & sound system',
//             'Catering arrangements',
//           ],
//         },
//         {
//           name: 'Festivals & Cultural Events',
//           items: [
//             'Ganesh Chaturthi decoration',
//             'Diwali decoration',
//             'Ugadi / Sankranti celebrations',
//             'Navaratri & festive décor',
//             'Temple and community event decoration',
//           ],
//         },
//         {
//           name: 'School & College Events',
//           items: [
//             'Annual day decoration',
//             'Sports day decoration',
//             'Graduation parties',
//             'Kids activity zones',
//             'Stage setup, sound & lighting',
//           ],
//         },
//       ],
//       gallery: ['/events1.jpg', '/events2.jpg', '/events3.jpg', '/events4.jpg'],
//     },
//   ];

//   // Video showcase data
//   const videoShowcase: VideoShowcase = {
//     title: 'Baby Naming Ceremony Showcase',
//     description: 'Watch our beautiful baby naming ceremony decoration in action. See how we transform spaces into magical moments.',
//     videoUrl: '/baby-naming-ceremony.mp4',
//     thumbnail: '/video-thumbnail.jpg',
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//   };

//   const selectedServiceData = services.find(s => s.id === selectedService);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
//         </div>

//         <motion.div
//           className="relative max-w-6xl mx-auto text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Our Services
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
//             Complete event decoration and management solutions for every celebration. From intimate gatherings to grand celebrations, we bring your vision to life.
//           </p>
//         </motion.div>
//       </section>

//       {/* Service Categories Section */}
//       <section className="py-16 md:py-24 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Filter Tabs */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-3 mb-16"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <button
//               onClick={() => setActiveTab('all')}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeTab === 'all'
//                   ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
//                   : 'bg-white/10 text-white hover:bg-white/20'
//               }`}
//             >
//               All Services
//             </button>
//             {services.map(service => (
//               <button
//                 key={service.id}
//                 onClick={() => setActiveTab(service.id)}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   activeTab === service.id
//                     ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
//                     : 'bg-white/10 text-white hover:bg-white/20'
//                 }`}
//               >
//                 {service.title.split(' ')[0]}
//               </button>
//             ))}
//           </motion.div>

//           {/* Service Cards Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {(activeTab === 'all' ? services : [services.find(s => s.id === activeTab)!]).map(
//               service => (
//                 <motion.div
//                   key={service.id}
//                   variants={itemVariants}
//                   onClick={() => setSelectedService(service.id)}
//                   className="group cursor-pointer"
//                 >
//                   <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//                     {/* Image */}
//                     <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
//                           <p className="text-sm text-gray-600">{service.subtitle}</p>
//                         </div>
//                       </div>

//                       {/* Rating */}
//                       <div className="flex items-center gap-1 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
//                         ))}
//                         <span className="text-sm text-gray-600 ml-2">Rated {service.rating}/5</span>
//                       </div>

//                       {/* Features */}
//                       <div className="grid grid-cols-2 gap-2 mb-6">
//                         {service.features.map((feature, idx) => (
//                           <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                             <Check size={14} className="text-pink-500 flex-shrink-0" />
//                             <span>{feature}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* CTA Button */}
//                       <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Video Showcase Section */}
//       <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-pink-500/10 to-purple-600/10">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               See Our Work in Action
//             </h2>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               Watch our beautiful baby naming ceremony decoration showcase
//             </p>
//           </motion.div>

//           <motion.div
//             className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             onClick={() => setShowVideoModal(true)}
//           >
//             {/* Video Thumbnail */}
//             <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 aspect-video flex items-center justify-center overflow-hidden">
//               <img
//                 src={videoShowcase.thumbnail}
//                 alt="Video thumbnail"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

//               {/* Play Button */}
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-full shadow-2xl">
//                   <Play size={48} className="text-white fill-white" />
//                 </div>
//               </motion.div>
//             </div>

//             {/* Video Info */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
//               <h3 className="text-2xl font-bold text-white mb-2">{videoShowcase.title}</h3>
//               <p className="text-gray-200">{videoShowcase.description}</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Service Details Modal */}
//       <AnimatePresence>
//         {selectedService && selectedServiceData && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedService(null)}
//           >
//             <motion.div
//               className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedService(null)}
//                 className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Modal Content */}
//               <div className="p-8 md:p-12">
//                 {/* Title */}
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                   {selectedServiceData.title}
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8">{selectedServiceData.description}</p>

//                 {/* Gallery */}
//                 {selectedServiceData.gallery && selectedServiceData.gallery.length > 0 && (
//                   <div className="mb-12">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       {selectedServiceData.gallery.map((image, idx) => (
//                         <motion.div
//                           key={idx}
//                           className="relative h-40 rounded-lg overflow-hidden cursor-pointer group"
//                           whileHover={{ scale: 1.05 }}
//                           onClick={() => setSelectedGalleryImage(idx)}
//                         >
//                           <img
//                             src={image}
//                             alt={`Gallery ${idx + 1}`}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                           />
//                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Packages */}
//                 {selectedServiceData.packages && selectedServiceData.packages.length > 0 && (
//                   <div className="mb-12">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-8">Service Packages</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {selectedServiceData.packages.map((pkg, idx) => (
//                         <motion.div
//                           key={idx}
//                           className="border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-500 hover:shadow-lg transition-all duration-300"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: idx * 0.1 }}
//                         >
//                           <h4 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
//                           {pkg.price && (
//                             <p className="text-2xl font-bold text-purple-600 mb-4">{pkg.price}</p>
//                           )}
//                           <ul className="space-y-3">
//                             {pkg.items.map((item, itemIdx) => (
//                               <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
//                                 <Check size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                           <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
//                             Choose Package
//                           </button>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Features */}
//                 {selectedServiceData.features && (
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       {selectedServiceData.features.map((feature, idx) => (
//                         <motion.div
//                           key={idx}
//                           className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 text-center"
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: idx * 0.05 }}
//                         >
//                           <p className="font-semibold text-gray-900">{feature}</p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* CTA */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
//                   <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//                     Book Now
//                   </button>
//                   <button
//                     onClick={() => setSelectedService(null)}
//                     className="flex-1 border-2 border-gray-300 text-gray-900 font-semibold py-4 rounded-lg hover:border-gray-400 transition-all duration-300"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {showVideoModal && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowVideoModal(false)}
//           >
//             <motion.div
//               className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowVideoModal(false)}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Video Player */}
//               <video
//                 src={videoShowcase.videoUrl}
//                 controls
//                 autoPlay
//                 className="w-full h-full"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Gallery Image Lightbox */}
//       <AnimatePresence>
//         {selectedGalleryImage !== null && selectedServiceData?.gallery && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedGalleryImage(null)}
//           >
//             <motion.div
//               className="relative max-w-4xl w-full"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedGalleryImage(null)}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Image */}
//               <img
//                 src={selectedServiceData.gallery[selectedGalleryImage]}
//                 alt="Gallery"
//                 className="w-full h-auto rounded-2xl"
//               />

//               {/* Navigation */}
//               <button
//                 onClick={() =>
//                   setSelectedGalleryImage(
//                     selectedGalleryImage === 0
//                       ? selectedServiceData.gallery!.length - 1
//                       : selectedGalleryImage - 1
//                   )
//                 }
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
//               >
//                 <ChevronLeft size={24} className="text-gray-900" />
//               </button>

//               <button
//                 onClick={() =>
//                   setSelectedGalleryImage(
//                     selectedGalleryImage === selectedServiceData.gallery!.length - 1
//                       ? 0
//                       : selectedGalleryImage + 1
//                   )
//                 }
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
//               >
//                 <ChevronRight size={24} className="text-gray-900" />
//               </button>

//               {/* Counter */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
//                 {selectedGalleryImage + 1} / {selectedServiceData.gallery.length}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Why Choose Us Section */}
//       <section className="py-16 md:py-24 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Choose Shri Events?
//             </h2>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               We offer all services in a very budget-friendly way without compromising on quality
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               { icon: '✨', title: 'Premium Quality', description: 'High-quality decorations and services' },
//               { icon: '💰', title: 'Budget-Friendly', description: 'Affordable packages without compromise' },
//               { icon: '🎯', title: 'Professional Team', description: 'Experienced and dedicated professionals' },
//               { icon: '🚀', title: 'Custom Solutions', description: 'Tailored packages for your needs' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-pink-500/50 transition-all duration-300"
//               >
//                 <div className="text-5xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                 <p className="text-gray-300">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Create Magic?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Let's bring your vision to life. Get a free quote today and let's start planning your perfect event!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//               Get Free Quote
//             </button>
//             <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
//               Call Now
//             </button>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


//2
// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Play, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

// interface ServicePackage {
//   id: string;
//   title: string;
//   icon: string;
//   color: string;
//   description: string;
//   image: string;
//   highlights: string[];
//   packages?: {
//     name: string;
//     items: string[];
//   }[];
//   gallery?: string[];
// }

// export default function Services() {
//   const [selectedService, setSelectedService] = useState<string | null>(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const [activePackageIndex, setActivePackageIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const services: ServicePackage[] = [
//     {
//       id: 'wedding',
//       title: 'Wedding Decoration',
//       icon: '💍',
//       color: 'from-rose-500 to-pink-500',
//       description: 'End-to-end coordination for your dream day',
//       image: '/wedding-main.jpg',
//       highlights: ['Stage Setup', 'Mandaps', 'Lighting', 'Florals'],
//       packages: [
//         {
//           name: 'Standard Wedding',
//           items: ['Wedding stage decoration', 'Welcome board', 'Ramp decoration', 'Mantapa decoration', 'Grand reception garlands'],
//         },
//         {
//           name: 'Premium Wedding',
//           items: ['All Standard features', 'Grand muhurtham garlands', 'Mallige dindu', 'Extra tied flowers', 'VIP garlands'],
//         },
//         {
//           name: 'Complete Wedding',
//           items: ['All Premium features', 'Home decoration', 'Food catering', 'Photo booth', '360 selfie booth', 'Photography & Videography'],
//         },
//       ],
//       gallery: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg', '/wedding4.jpg'],
//     },
//     {
//       id: 'naming',
//       title: 'Naming Ceremony',
//       icon: '👶',
//       color: 'from-blue-500 to-cyan-500',
//       description: 'Celebrate new beginnings with elegance',
//       image: '/naming-main.jpg',
//       highlights: ['Stage Setup', 'Custom Props', 'Photography', 'Entertainment'],
//       packages: [
//         {
//           name: 'Basic Naming',
//           items: ['Stage decoration', 'Theme backdrop', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
//         },
//         {
//           name: 'Standard Naming',
//           items: ['All Basic features', 'Garlands', 'Mallige dindu', 'LED name display', 'Photo booth', 'Photography & Videography'],
//         },
//         {
//           name: 'Premium Naming',
//           items: ['All Standard features', 'Neon light board', 'Sound system', 'Catering', 'Coordination support'],
//         },
//       ],
//       gallery: ['/naming1.jpg', '/naming2.jpg', '/naming3.jpg', '/naming4.jpg'],
//     },
//     {
//       id: 'baby-shower',
//       title: 'Baby Shower',
//       icon: '🎀',
//       color: 'from-purple-500 to-pink-500',
//       description: 'Celebrate motherhood in style',
//       image: '/baby-shower-main.jpg',
//       highlights: ['Floral Décor', 'Theme Setup', 'Rituals', 'Photography'],
//       packages: [
//         {
//           name: 'Basic Baby Shower',
//           items: ['Stage decoration', 'Backdrop decoration', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
//         },
//         {
//           name: 'Standard Baby Shower',
//           items: ['All Basic features', 'Flower garlands', 'Mallige dindu', 'Photo booth', 'Photography & Videography'],
//         },
//         {
//           name: 'Premium Baby Shower',
//           items: ['All Standard features', 'Sound system', 'Catering', 'Event coordination', 'Custom lighting'],
//         },
//       ],
//       gallery: ['/baby-shower1.jpg', '/baby-shower2.jpg', '/baby-shower3.jpg', '/baby-shower4.jpg'],
//     },
//     {
//       id: 'birthday',
//       title: 'Birthday Party',
//       icon: '🎈',
//       color: 'from-yellow-500 to-orange-500',
//       description: 'Make every birthday magical',
//       image: '/birthday-main.jpg',
//       highlights: ['Balloons', 'Themes', 'Entertainment', 'Food Counters'],
//       packages: [
//         {
//           name: 'Basic Balloons',
//           items: ['Balloon arch', 'Background wall décor', 'Happy Birthday banner', 'Cake table decoration'],
//         },
//         {
//           name: 'Standard Balloons',
//           items: ['Theme-based arch', 'Backdrop curtain', 'Neon banner', 'Side bunches', 'Floor setup'],
//         },
//         {
//           name: 'Luxury Balloons',
//           items: ['Full theme setup', 'Organic balloon arch', 'LED name board', 'Designer cake table', 'Photo booth', 'Ceiling décor'],
//         },
//       ],
//       gallery: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg', '/birthday4.jpg'],
//     },
//     {
//       id: 'kids-activities',
//       title: 'Kids Activities',
//       icon: '🎨',
//       color: 'from-green-500 to-emerald-500',
//       description: 'Fun and entertainment for all ages',
//       image: '/kids-activities-main.jpg',
//       highlights: ['Face Painting', 'Games', 'Entertainment', 'Food Counters'],
//       packages: [
//         {
//           name: 'Activities Package',
//           items: ['Tattoo art', 'Face painting', 'Key chain making', 'Balloon crafting', 'Clay modelling'],
//         },
//         {
//           name: 'Entertainment Package',
//           items: ['Live caricature artist', 'Magician show', 'MC anchoring', 'Sound system'],
//         },
//         {
//           name: 'Complete Package',
//           items: ['All activities', 'Entertainment', 'Popcorn counter', 'Chocolate fountain', 'Cotton candy counter', 'Catering'],
//         },
//       ],
//       gallery: ['/kids1.jpg', '/kids2.jpg', '/kids3.jpg', '/kids4.jpg'],
//     },
//     {
//       id: 'other-events',
//       title: 'Other Events',
//       icon: '✨',
//       color: 'from-indigo-500 to-purple-500',
//       description: 'Corporate, Festivals & More',
//       image: '/other-events-main.jpg',
//       highlights: ['Corporate', 'Festivals', 'Housewarming', 'School Events'],
//       packages: [
//         {
//           name: 'Corporate Events',
//           items: ['Office opening', 'Annual day', 'Product launches', 'Employee events', 'Stage decoration'],
//         },
//         {
//           name: 'Festival Events',
//           items: ['Ganesh Chaturthi', 'Diwali', 'Ugadi', 'Navaratri', 'Temple decoration'],
//         },
//         {
//           name: 'Special Events',
//           items: ['Housewarming', 'Engagement', 'Anniversary', 'School events', 'Full coordination'],
//         },
//       ],
//       gallery: ['/events1.jpg', '/events2.jpg', '/events3.jpg', '/events4.jpg'],
//     },
//   ];

//   const selectedServiceData = services.find(s => s.id === selectedService);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section - Minimalist & Energetic */}
//       <section className="relative pt-20 pb-32 px-4 md:px-8 lg:px-16">
//         {/* Subtle animated background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-40"
//             animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40"
//             animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
//             transition={{ duration: 8, repeat: Infinity, delay: 1 }}
//           />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* Breadcrumb */}
//           <motion.div
//             className="mb-8 flex items-center gap-2 text-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span className="text-gray-500">Home</span>
//             <ChevronRight size={16} className="text-gray-400" />
//             <span className="text-gray-900 font-medium">Services & Packages</span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="mb-12"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <Sparkles size={32} className="text-pink-500" />
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
//                 Services &<br />Packages
//               </h1>
//             </div>
//             <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
//               Discover our comprehensive collection of event decoration and management solutions. Each package is crafted to bring your celebration to life with elegance and energy.
//             </p>
//           </motion.div>

//           {/* Stats Row */}
//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {[
//               { number: '6+', label: 'Service Types' },
//               { number: '3+', label: 'Package Tiers' },
//               { number: '100+', label: 'Events Completed' },
//               { number: '24/7', label: 'Support' },
//             ].map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="border-l-2 border-gray-200 pl-4"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Portrait Video Showcase - Hero Feature */}
//       <section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             {/* Video Container - Portrait Format */}
//             <div className="relative mx-auto max-w-md md:max-w-2xl">
//               <div
//                 className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group aspect-[9/16] md:aspect-[9/16]"
//                 onClick={() => setShowVideoModal(true)}
//               >
//                 {/* Video Thumbnail */}
//                 <img
//                   src="/video-thumbnail.jpg"
//                   alt="Video"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

//                 {/* Play Button */}
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className="bg-white/95 backdrop-blur-sm p-6 rounded-full shadow-2xl">
//                     <Play size={40} className="text-gray-900 fill-gray-900" />
//                   </div>
//                 </motion.div>

//                 {/* Video Info Badge */}
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4">
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     Baby Naming Ceremony
//                   </h3>
//                   <p className="text-sm text-gray-600">Watch our latest showcase</p>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <motion.div
//                 className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-60"
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//               />
//               <motion.div
//                 className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-60"
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid - Modern Card Design */}
//       <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Explore All Services
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl">
//               Choose from our curated selection of event decoration packages, each designed with attention to detail and your celebration in mind.
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {services.map(service => (
//               <motion.div
//                 key={service.id}
//                 variants={itemVariants}
//                 onClick={() => setSelectedService(service.id)}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
//                   {/* Image Container */}
//                   <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     {/* Color Overlay */}
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     <div className="mb-4">
//                       <div className="text-4xl mb-3">{service.icon}</div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-gray-600 leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>

//                     {/* Highlights */}
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {service.highlights.map((highlight, idx) => (
//                         <span
//                           key={idx}
//                           className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
//                         >
//                           {highlight}
//                         </span>
//                       ))}
//                     </div>

//                     {/* CTA Button */}
//                     <motion.button
//                       whileHover={{ x: 4 }}
//                       className="mt-auto flex items-center gap-2 text-sm font-semibold text-gray-900 group/btn"
//                     >
//                       View Details
//                       <ArrowRight
//                         size={16}
//                         className="group-hover/btn:translate-x-1 transition-transform"
//                       />
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Service Details Modal */}
//       <AnimatePresence>
//         {selectedService && selectedServiceData && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedService(null)}
//           >
//             <motion.div
//               className="bg-white w-full md:max-w-3xl md:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 100 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedService(null)}
//                 className="sticky top-6 right-6 z-10 float-right bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Modal Header with Image */}
//               <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                 <img
//                   src={selectedServiceData.image}
//                   alt={selectedServiceData.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${selectedServiceData.color} opacity-20`}
//                 />
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 md:p-8">
//                 {/* Title */}
//                 <div className="mb-8">
//                   <div className="text-5xl mb-4">{selectedServiceData.icon}</div>
//                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//                     {selectedServiceData.title}
//                   </h2>
//                   <p className="text-lg text-gray-600">{selectedServiceData.description}</p>
//                 </div>

//                 {/* Packages */}
//                 {selectedServiceData.packages && (
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                       Available Packages
//                     </h3>

//                     {/* Package Tabs */}
//                     <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
//                       {selectedServiceData.packages.map((pkg, idx) => (
//                         <motion.button
//                           key={idx}
//                           onClick={() => setActivePackageIndex(idx)}
//                           className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
//                             activePackageIndex === idx
//                               ? 'bg-gray-900 text-white'
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           {pkg.name}
//                         </motion.button>
//                       ))}
//                     </div>

//                     {/* Package Details */}
//                     <motion.div
//                       key={activePackageIndex}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="bg-gray-50 rounded-2xl p-6 md:p-8"
//                     >
//                       <h4 className="text-xl font-bold text-gray-900 mb-6">
//                         {selectedServiceData.packages[activePackageIndex].name}
//                       </h4>
//                       <ul className="space-y-3">
//                         {selectedServiceData.packages[activePackageIndex].items.map(
//                           (item, idx) => (
//                             <motion.li
//                               key={idx}
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.05 }}
//                               className="flex items-start gap-3 text-gray-700"
//                             >
//                               <span className="text-pink-500 font-bold mt-1">✓</span>
//                               <span>{item}</span>
//                             </motion.li>
//                           )
//                         )}
//                       </ul>
//                     </motion.div>
//                   </div>
//                 )}

//                 {/* Gallery */}
//                 {selectedServiceData.gallery && selectedServiceData.gallery.length > 0 && (
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       {selectedServiceData.gallery.map((image, idx) => (
//                         <motion.div
//                           key={idx}
//                           className="relative h-40 rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <img
//                             src={image}
//                             alt={`Gallery ${idx + 1}`}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="flex-1 bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors"
//                   >
//                     Book Now
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setSelectedService(null)}
//                     className="flex-1 border-2 border-gray-300 text-gray-900 font-semibold py-4 rounded-xl hover:border-gray-400 transition-colors"
//                   >
//                     Close
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {showVideoModal && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowVideoModal(false)}
//           >
//             <motion.div
//               className="relative w-full max-w-md md:max-w-2xl aspect-[9/16] md:aspect-[9/16] rounded-3xl overflow-hidden"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowVideoModal(false)}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Video Player */}
//               <video
//                 ref={videoRef}
//                 src="/baby-naming-ceremony.mp4"
//                 controls
//                 autoPlay
//                 className="w-full h-full bg-black"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Why Choose Us Section */}
//       <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Why Choose Shri Events?
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl">
//               We deliver exceptional quality at budget-friendly prices without compromising on excellence.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               { icon: '⭐', title: 'Premium Quality', desc: 'High-quality decorations and services' },
//               { icon: '💰', title: 'Budget-Friendly', desc: 'Affordable packages without compromise' },
//               { icon: '👥', title: 'Expert Team', desc: 'Experienced professionals' },
//               { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your needs' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Ready to Plan Your Event?
//           </h2>
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//             Let's bring your vision to life. Contact us today for a free consultation and custom quote.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
//             >
//               Get Free Quote
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
//             >
//               Call Now
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// //3
// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ArrowRight, Check, Phone, Mail } from 'lucide-react';

// interface ServicePackage {
//   id: string;
//   title: string;
//   icon: string;
//   color: string;
//   lightColor: string;
//   description: string;
//   image: string;
//   highlights: string[];
//   packages?: {
//     name: string;
//     items: string[];
//   }[];
//   gallery?: string[];
// }

// export default function Services() {
//   const [selectedService, setSelectedService] = useState<string | null>(null);
//   const [activePackageIndex, setActivePackageIndex] = useState(0);

//   const services: ServicePackage[] = [
//     {
//       id: 'wedding',
//       title: 'Wedding Decoration',
//       icon: '💍',
//       color: 'from-rose-600 to-pink-600',
//       lightColor: 'from-rose-50 to-pink-50',
//       description: 'End-to-end coordination for your dream day',
//       image: '/wedding-main.jpg',
//       highlights: ['Stage Setup', 'Mandaps', 'Lighting', 'Florals'],
//       packages: [
//         {
//           name: 'Standard Wedding',
//           items: ['Wedding stage decoration', 'Welcome board', 'Ramp decoration', 'Mantapa decoration', 'Grand reception garlands'],
//         },
//         {
//           name: 'Premium Wedding',
//           items: ['All Standard features', 'Grand muhurtham garlands', 'Mallige dindu', 'Extra tied flowers', 'VIP garlands'],
//         },
//         {
//           name: 'Complete Wedding',
//           items: ['All Premium features', 'Home decoration', 'Food catering', 'Photo booth', '360 selfie booth', 'Photography & Videography'],
//         },
//       ],
//       gallery: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg', '/wedding4.jpg'],
//     },
//     {
//       id: 'naming',
//       title: 'Naming Ceremony',
//       icon: '👶',
//       color: 'from-blue-600 to-cyan-600',
//       lightColor: 'from-blue-50 to-cyan-50',
//       description: 'Celebrate new beginnings with elegance',
//       image: '/naming-main.jpg',
//       highlights: ['Stage Setup', 'Custom Props', 'Photography', 'Entertainment'],
//       packages: [
//         {
//           name: 'Basic Naming',
//           items: ['Stage decoration', 'Theme backdrop', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
//         },
//         {
//           name: 'Standard Naming',
//           items: ['All Basic features', 'Garlands', 'Mallige dindu', 'LED name display', 'Photo booth', 'Photography & Videography'],
//         },
//         {
//           name: 'Premium Naming',
//           items: ['All Standard features', 'Neon light board', 'Sound system', 'Catering', 'Coordination support'],
//         },
//       ],
//       gallery: ['/naming1.jpg', '/naming2.jpg', '/naming3.jpg', '/naming4.jpg'],
//     },
//     {
//       id: 'baby-shower',
//       title: 'Baby Shower',
//       icon: '🎀',
//       color: 'from-purple-600 to-pink-600',
//       lightColor: 'from-purple-50 to-pink-50',
//       description: 'Celebrate motherhood in style',
//       image: '/baby-shower-main.jpg',
//       highlights: ['Floral Décor', 'Theme Setup', 'Rituals', 'Photography'],
//       packages: [
//         {
//           name: 'Basic Baby Shower',
//           items: ['Stage decoration', 'Backdrop decoration', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
//         },
//         {
//           name: 'Standard Baby Shower',
//           items: ['All Basic features', 'Flower garlands', 'Mallige dindu', 'Photo booth', 'Photography & Videography'],
//         },
//         {
//           name: 'Premium Baby Shower',
//           items: ['All Standard features', 'Sound system', 'Catering', 'Event coordination', 'Custom lighting'],
//         },
//       ],
//       gallery: ['/baby-shower1.jpg', '/baby-shower2.jpg', '/baby-shower3.jpg', '/baby-shower4.jpg'],
//     },
//     {
//       id: 'birthday',
//       title: 'Birthday Party',
//       icon: '🎈',
//       color: 'from-amber-600 to-orange-600',
//       lightColor: 'from-amber-50 to-orange-50',
//       description: 'Make every birthday magical',
//       image: '/birthday-main.jpg',
//       highlights: ['Balloons', 'Themes', 'Entertainment', 'Food Counters'],
//       packages: [
//         {
//           name: 'Basic Balloons',
//           items: ['Balloon arch', 'Background wall décor', 'Happy Birthday banner', 'Cake table decoration'],
//         },
//         {
//           name: 'Standard Balloons',
//           items: ['Theme-based arch', 'Backdrop curtain', 'Neon banner', 'Side bunches', 'Floor setup'],
//         },
//         {
//           name: 'Luxury Balloons',
//           items: ['Full theme setup', 'Organic balloon arch', 'LED name board', 'Designer cake table', 'Photo booth', 'Ceiling décor'],
//         },
//       ],
//       gallery: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg', '/birthday4.jpg'],
//     },
//     {
//       id: 'kids-activities',
//       title: 'Kids Activities',
//       icon: '🎨',
//       color: 'from-emerald-600 to-teal-600',
//       lightColor: 'from-emerald-50 to-teal-50',
//       description: 'Fun and entertainment for all ages',
//       image: '/kids-activities-main.jpg',
//       highlights: ['Face Painting', 'Games', 'Entertainment', 'Food Counters'],
//       packages: [
//         {
//           name: 'Activities Package',
//           items: ['Tattoo art', 'Face painting', 'Key chain making', 'Balloon crafting', 'Clay modelling'],
//         },
//         {
//           name: 'Entertainment Package',
//           items: ['Live caricature artist', 'Magician show', 'MC anchoring', 'Sound system'],
//         },
//         {
//           name: 'Complete Package',
//           items: ['All activities', 'Entertainment', 'Popcorn counter', 'Chocolate fountain', 'Cotton candy counter', 'Catering'],
//         },
//       ],
//       gallery: ['/kids1.jpg', '/kids2.jpg', '/kids3.jpg', '/kids4.jpg'],
//     },
//     {
//       id: 'other-events',
//       title: 'Other Events',
//       icon: '✨',
//       color: 'from-indigo-600 to-purple-600',
//       lightColor: 'from-indigo-50 to-purple-50',
//       description: 'Corporate, Festivals & More',
//       image: '/other-events-main.jpg',
//       highlights: ['Corporate', 'Festivals', 'Housewarming', 'School Events'],
//       packages: [
//         {
//           name: 'Corporate Events',
//           items: ['Office opening', 'Annual day', 'Product launches', 'Employee events', 'Stage decoration'],
//         },
//         {
//           name: 'Festival Events',
//           items: ['Ganesh Chaturthi', 'Diwali', 'Ugadi', 'Navaratri', 'Temple decoration'],
//         },
//         {
//           name: 'Special Events',
//           items: ['Housewarming', 'Engagement', 'Anniversary', 'School events', 'Full coordination'],
//         },
//       ],
//       gallery: ['/events1.jpg', '/events2.jpg', '/events3.jpg', '/events4.jpg'],
//     },
//   ];

//   const selectedServiceData = services.find(s => s.id === selectedService);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
//           animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
//           animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-15"
//           animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
//           transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
//                 Services &<br />Packages
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
//                 Discover our comprehensive collection of event decoration and management solutions. Each package is crafted to bring your celebration to life with elegance and energy.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Grid Section */}
//         <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//           <div className="max-w-7xl mx-auto">
//             {/* Services Grid */}
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {services.map(service => (
//                 <motion.div
//                   key={service.id}
//                   variants={itemVariants}
//                   onClick={() => {
//                     setSelectedService(service.id);
//                     setActivePackageIndex(0);
//                   }}
//                   className="group cursor-pointer"
//                 >
//                   <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100/50">
//                     {/* Image Container with Overlay */}
//                     <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                       />
//                       {/* Gradient Overlay */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
//                       />
//                       {/* Icon Badge */}
//                       <div className="absolute top-4 right-4 text-4xl bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
//                         {service.icon}
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 md:p-7 flex-1 flex flex-col">
//                       {/* Title & Description */}
//                       <div className="mb-5">
//                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
//                           {service.title}
//                         </h3>
//                         <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//                           {service.description}
//                         </p>
//                       </div>

//                       {/* Highlights */}
//                       <div className="mb-6 flex flex-wrap gap-2">
//                         {service.highlights.map((highlight, idx) => (
//                           <motion.span
//                             key={idx}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: idx * 0.05 }}
//                             className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${service.lightColor} text-gray-700 border border-gray-200/50`}
//                           >
//                             {highlight}
//                           </motion.span>
//                         ))}
//                       </div>

//                       {/* Budget Info */}
//                       <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50">
//                         <p className="text-sm font-semibold text-green-700">
//                           💰 Budget-Friendly Packages Available
//                         </p>
//                       </div>

//                       {/* CTA Button */}
//                       <motion.button
//                         whileHover={{ x: 4 }}
//                         className="mt-auto flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold hover:shadow-lg transition-all duration-300 group/btn"
//                       >
//                         <span>View Details</span>
//                         <ArrowRight
//                           size={18}
//                           className="group-hover/btn:translate-x-1 transition-transform"
//                         />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Budget-Friendly Section */}
//         <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-green-200/30"
//             >
//               <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//                 <div className="flex-1">
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                     Affordable Quality
//                   </h2>
//                   <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                     We offer all services in a very budget-friendly way without compromising on quality. Every celebration deserves excellence, and we make it accessible to everyone.
//                   </p>
//                   <ul className="space-y-3">
//                     {[
//                       'Flexible payment plans',
//                       'Customizable packages',
//                       'No hidden charges',
//                       'Premium quality guaranteed',
//                     ].map((item, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.1 }}
//                         className="flex items-center gap-3 text-gray-700"
//                       >
//                         <Check size={20} className="text-green-600 flex-shrink-0" />
//                         <span className="font-medium">{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//                 <motion.div
//                   className="flex-shrink-0 text-6xl md:text-8xl"
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                 >
//                   💚
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200/30"
//             >
//               <div className="text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                   Ready to Plan Your Event?
//                 </h2>
//                 <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
//                   Let's bring your vision to life. Contact us today for a free consultation and custom quote.
//                 </p>
//               </div>

//               {/* Contact Options */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {/* Phone */}
//                 <motion.a
//                   href="tel:+919876543210"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
//                     <Phone size={24} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 font-medium">Call Now</p>
//                     <p className="text-lg font-bold text-gray-900">+91 98765 43210</p>
//                   </div>
//                 </motion.a>

//                 {/* Email */}
//                 <motion.a
//                   href="mailto:contact@shrievents.com"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-purple-200/50 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
//                     <Mail size={24} className="text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600 font-medium">Email Us</p>
//                     <p className="text-lg font-bold text-gray-900">contact@shrievents.com</p>
//                   </div>
//                 </motion.a>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-lg"
//                 >
//                   Get Free Quote
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg"
//                 >
//                   Contact Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Why Choose Shri Events?
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl">
//                 We deliver exceptional quality at budget-friendly prices without compromising on excellence.
//               </p>
//             </motion.div>

//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {[
//                 { icon: '⭐', title: 'Premium Quality', desc: 'High-quality decorations and services' },
//                 { icon: '💰', title: 'Budget-Friendly', desc: 'Affordable packages without compromise' },
//                 { icon: '👥', title: 'Expert Team', desc: 'Experienced professionals' },
//                 { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your needs' },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   className="bg-white rounded-2xl p-6 border border-gray-100/50 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="text-4xl mb-4">{item.icon}</div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Service Details Modal */}
//       <AnimatePresence>
//         {selectedService && selectedServiceData && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedService(null)}
//           >
//             <motion.div
//               className="bg-white w-full md:max-w-3xl md:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 100 }}
//               onClick={e => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedService(null)}
//                 className="sticky top-6 right-6 z-10 float-right bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
//               >
//                 <X size={24} className="text-gray-900" />
//               </button>

//               {/* Modal Header */}
//               <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//                 <img
//                   src={selectedServiceData.image}
//                   alt={selectedServiceData.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${selectedServiceData.color} opacity-20`}
//                 />
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 md:p-8">
//                 {/* Title */}
//                 <div className="mb-8">
//                   <div className="text-5xl mb-4">{selectedServiceData.icon}</div>
//                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//                     {selectedServiceData.title}
//                   </h2>
//                   <p className="text-lg text-gray-600">{selectedServiceData.description}</p>
//                 </div>

//                 {/* Packages */}
//                 {selectedServiceData.packages && (
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                       Available Packages
//                     </h3>

//                     {/* Package Tabs */}
//                     <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
//                       {selectedServiceData.packages.map((pkg, idx) => (
//                         <motion.button
//                           key={idx}
//                           onClick={() => setActivePackageIndex(idx)}
//                           className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
//                             activePackageIndex === idx
//                               ? 'bg-gray-900 text-white'
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           {pkg.name}
//                         </motion.button>
//                       ))}
//                     </div>

//                     {/* Package Details */}
//                     <motion.div
//                       key={activePackageIndex}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="bg-gray-50 rounded-2xl p-6 md:p-8"
//                     >
//                       <h4 className="text-xl font-bold text-gray-900 mb-6">
//                         {selectedServiceData.packages[activePackageIndex].name}
//                       </h4>
//                       <ul className="space-y-3">
//                         {selectedServiceData.packages[activePackageIndex].items.map(
//                           (item, idx) => (
//                             <motion.li
//                               key={idx}
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.05 }}
//                               className="flex items-start gap-3 text-gray-700"
//                             >
//                               <span className="text-green-600 font-bold mt-1">✓</span>
//                               <span className="font-medium">{item}</span>
//                             </motion.li>
//                           )
//                         )}
//                       </ul>
//                     </motion.div>
//                   </div>
//                 )}

//                 {/* Gallery */}
//                 {selectedServiceData.gallery && selectedServiceData.gallery.length > 0 && (
//                   <div className="mb-8">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       {selectedServiceData.gallery.map((image, idx) => (
//                         <motion.div
//                           key={idx}
//                           className="relative h-40 rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <img
//                             src={image}
//                             alt={`Gallery ${idx + 1}`}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="flex-1 bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors"
//                   >
//                     Book Now
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setSelectedService(null)}
//                     className="flex-1 border-2 border-gray-300 text-gray-900 font-semibold py-4 rounded-xl hover:border-gray-400 transition-colors"
//                   >
//                     Close
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

//butterfly
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Phone, Mail } from 'lucide-react';
import ButterflyAnimation from '../components/ButterflyAnimation';



interface ServicePackage {
  id: string;
  title: string;
  icon: string;
  color: string;
  lightColor: string;
  description: string;
  image: string;
  highlights: string[];
  packages?: {
    name: string;
    items: string[];
  }[];
  gallery?: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activePackageIndex, setActivePackageIndex] = useState(0);

  const services: ServicePackage[] = [
    {
      id: 'wedding',
      title: 'Wedding Decoration',
      icon: '💍',
      color: 'from-rose-600 to-pink-600',
      lightColor: 'from-rose-50 to-pink-50',
      description: 'End-to-end coordination for your dream day',
      image: '/WhatsApp Image 2025-12-08 at 22.55.11 (1).jpeg',
      highlights: ['Stage Setup', 'Mandaps', 'Lighting', 'Florals'],
      packages: [
        {
          name: 'Standard Wedding',
          items: ['Wedding stage decoration', 'Welcome board', 'Ramp decoration', 'Mantapa decoration', 'Grand reception garlands'],
        },
        {
          name: 'Premium Wedding',
          items: ['All Standard features', 'Grand muhurtham garlands', 'Mallige dindu', 'Extra tied flowers', 'VIP garlands'],
        },
        {
          name: 'Complete Wedding',
          items: ['All Premium features', 'Home decoration', 'Food catering', 'Photo booth', '360 selfie booth', 'Photography & Videography'],
        },
      ],
      gallery: ['/oie_911234R8vLZS8d.jpg', '/oie_9112734QQ2UOHsG.jpg', '/oie_9113025Zn4zvO9R.jpg', '/oie_9113226P3JvJBm9.jpg'],
    },
    {
      id: 'naming',
      title: 'Naming Ceremony',
      icon: '👶',
      color: 'from-blue-600 to-cyan-600',
      lightColor: 'from-blue-50 to-cyan-50',
      description: 'Celebrate new beginnings with elegance',
      image: '/oie_9113542DF0IVhHx.jpg',
      highlights: ['Stage Setup', 'Custom Props', 'Photography', 'Entertainment'],
      packages: [
        {
          name: 'Basic Naming',
          items: ['Stage decoration', 'Theme backdrop', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
        },
        {
          name: 'Standard Naming',
          items: ['All Basic features', 'Garlands', 'Mallige dindu', 'LED name display', 'Photo booth', 'Photography & Videography'],
        },
        {
          name: 'Premium Naming',
          items: ['All Standard features', 'Neon light board', 'Sound system', 'Catering', 'Coordination support'],
        },
      ],
      gallery: ['/oie_9113458FxOUTGzI.jpg', '/WhatsApp Image 2025-12-08 at 22.58.10.jpeg', '/WhatsApp Image 2025-12-08 at 22.58.05.jpeg', '/event17.webp'],
    },
    {
      id: 'baby-shower',
      title: 'Baby Shower',
      icon: '🎀',
      color: 'from-purple-600 to-pink-600',
      lightColor: 'from-purple-50 to-pink-50',
      description: 'Celebrate motherhood in style',
      image: '/WhatsApp Image 2025-12-08 at 23.02.28.jpeg',
      highlights: ['Floral Décor', 'Theme Setup', 'Rituals', 'Photography'],
      packages: [
        {
          name: 'Basic Baby Shower',
          items: ['Stage decoration', 'Backdrop decoration', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
        },
        {
          name: 'Standard Baby Shower',
          items: ['All Basic features', 'Flower garlands', 'Mallige dindu', 'Photo booth', 'Photography & Videography'],
        },
        {
          name: 'Premium Baby Shower',
          items: ['All Standard features', 'Sound system', 'Catering', 'Event coordination', 'Custom lighting'],
        },
      ],
      gallery: ['/WhatsApp Image 2025-12-08 at 23.02.30.jpeg', '/WhatsApp Image 2025-12-08 at 23.02.29 (1).jpeg', '/WhatsApp Image 2025-12-08 at 23.02.28 (1).jpeg', '/WhatsApp Image 2025-12-08 at 23.02.29.jpeg'],
    },
    {
      id: 'birthday',
      title: 'Birthday Party',
      icon: '🎈',
      color: 'from-amber-600 to-orange-600',
      lightColor: 'from-amber-50 to-orange-50',
      description: 'Make every birthday magical',
      image: '/event16.webp',
      highlights: ['Balloons', 'Themes', 'Entertainment', 'Food Counters'],
      packages: [
        {
          name: 'Basic Balloons',
          items: ['Balloon arch', 'Background wall décor', 'Happy Birthday banner', 'Cake table decoration'],
        },
        {
          name: 'Standard Balloons',
          items: ['Theme-based arch', 'Backdrop curtain', 'Neon banner', 'Side bunches', 'Floor setup'],
        },
        {
          name: 'Luxury Balloons',
          items: ['Full theme setup', 'Organic balloon arch', 'LED name board', 'Designer cake table', 'Photo booth', 'Ceiling décor'],
        },
      ],
      gallery: ['/WhatsApp Image 2025-12-08 at 23.08.26.jpeg', '/WhatsApp Image 2025-12-08 at 23.08.27 (1).jpeg', '/WhatsApp Image 2025-12-08 at 23.08.27.jpeg', '/WhatsApp Image 2025-12-08 at 23.08.28.jpeg'],
    },
    {
      id: 'kids-activities',
      title: 'Kids Activities',
      icon: '🎨',
      color: 'from-emerald-600 to-teal-600',
      lightColor: 'from-emerald-50 to-teal-50',
      description: 'Fun and entertainment for all ages',
      image: '/event14.webp',
      highlights: ['Face Painting', 'Games', 'Entertainment', 'Food Counters'],
      packages: [
        {
          name: 'Activities Package',
          items: ['Tattoo art', 'Face painting', 'Key chain making', 'Balloon crafting', 'Clay modelling'],
        },
        {
          name: 'Entertainment Package',
          items: ['Live caricature artist', 'Magician show', 'MC anchoring', 'Sound system'],
        },
        {
          name: 'Complete Package',
          items: ['All activities', 'Entertainment', 'Popcorn counter', 'Chocolate fountain', 'Cotton candy counter', 'Catering'],
        },
      ],
      gallery: ['/event12.webp', '/event6.jpg', '/WhatsApp Image 2025-12-08 at 23.08.26 (1).jpeg', '/WhatsApp Image 2025-12-08 at 23.08.26.jpeg'],
    },
    {
      id: 'other-events',
      title: 'Other Events',
      icon: '✨',
      color: 'from-indigo-600 to-purple-600',
      lightColor: 'from-indigo-50 to-purple-50',
      description: 'Corporate, Festivals & More',
      image: '/wMrfOfKI8tCt.jpg',
      highlights: ['Corporate', 'Festivals', 'Housewarming', 'School Events'],
      packages: [
        {
          name: 'Corporate Events',
          items: ['Office opening', 'Annual day', 'Product launches', 'Employee events', 'Stage decoration'],
        },
        {
          name: 'Festival Events',
          items: ['Ganesh Chaturthi', 'Diwali', 'Ugadi', 'Navaratri', 'Temple decoration'],
        },
        {
          name: 'Special Events',
          items: ['Housewarming', 'Engagement', 'Anniversary', 'School events', 'Full coordination'],
        },
      ],
      gallery: ['/event15.webp', '/event13.webp', '/event3.jpg', '/event01.webp'],
    },
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-15"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
  <div className="max-w-7xl mx-auto relative">

    {/* Decorative Butterfly - pushed a bit lower so it doesn't clash */}
    <div className="absolute top-8 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 hidden sm:block pointer-events-none opacity-60">
      <ButterflyAnimation />
    </div>

    {/* Heading & Description - now beautifully centered with proper top spacing */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center max-w-5xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
        Services &<br className="sm:hidden" /> Packages
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
        Discover our comprehensive collection of event decoration and management solutions.<br />
        Each package is crafted to bring your celebration to life with elegance and energy.
      </p>
    </motion.div>
  </div>
</section>



        {/* <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -mt-10 md:-mt-16 hidden sm:block pointer-events-none">
              <ButterflyAnimation />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center" 
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
                Services &<br />Packages
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                Discover our comprehensive collection of event decoration and management solutions. Each package is crafted to bring your celebration to life with elegance and energy.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Services Grid Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map(service => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedService(service.id);
                    setActivePackageIndex(0);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100/50">
                    {/* Image Container with Overlay */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 text-4xl bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      {/* Title & Description */}
                      <div className="mb-5">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${service.lightColor} text-gray-700 border border-gray-200/50`}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>

                      {/* Budget Info */}
                      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50">
                        <p className="text-sm font-semibold text-green-700">
                          💰 Budget-Friendly Packages Available
                        </p>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="mt-auto flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Budget-Friendly Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-green-200/30"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Affordable Quality
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We offer all services in a very budget-friendly way without compromising on quality. Every celebration deserves excellence, and we make it accessible to everyone.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Flexible payment plans',
                      'Customizable packages',
                      'No hidden charges',
                      'Premium quality guaranteed',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check size={20} className="text-green-600 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="flex-shrink-0 text-6xl md:text-8xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💚
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200/30"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Plan Your Event?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Let's bring your vision to life. Contact us today for a free consultation and custom quote.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Phone */}
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Call Now</p>
                    <p className="text-lg font-bold text-gray-900">+91 97392 20735</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:contact@shrievents.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-purple-200/50 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email Us</p>
                    <p className="text-lg font-bold text-gray-900">shrinivas199721@gmail.com</p>
                  </div>
                </motion.a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-lg"
                >
                  Book Now
                </motion.button>
                <motion.button
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg"
                >
                  Contact Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Shri Events?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                We deliver exceptional quality at budget-friendly prices without compromising on excellence.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '⭐', title: 'Premium Quality', desc: 'High-quality decorations and services' },
                { icon: '💰', title: 'Budget-Friendly', desc: 'Affordable packages without compromise' },
                { icon: '👥', title: 'Expert Team', desc: 'Experienced professionals' },
                { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your needs' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && selectedServiceData && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white w-full md:max-w-3xl md:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="sticky top-6 right-6 z-10 float-right bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
              >
                <X size={24} className="text-gray-900" />
              </button>

              {/* Modal Header */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={selectedServiceData.image}
                  alt={selectedServiceData.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedServiceData.color} opacity-20`}
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="mb-8">
                  <div className="text-5xl mb-4">{selectedServiceData.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    {selectedServiceData.title}
                  </h2>
                  <p className="text-lg text-gray-600">{selectedServiceData.description}</p>
                </div>

                {/* Packages */}
                {selectedServiceData.packages && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Available Packages
                    </h3>

                    {/* Package Tabs */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                      {selectedServiceData.packages.map((pkg, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setActivePackageIndex(idx)}
                          className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                            activePackageIndex === idx
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {pkg.name}
                        </motion.button>
                      ))}
                    </div>

                    {/* Package Details */}
                    <motion.div
                      key={activePackageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gray-50 rounded-2xl p-6 md:p-8"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6">
                        {selectedServiceData.packages[activePackageIndex].name}
                      </h4>
                      <ul className="space-y-3">
                        {selectedServiceData.packages[activePackageIndex].items.map(
                          (item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-green-600 font-bold mt-1">✓</span>
                              <span className="font-medium">{item}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  </div>
                )}

                {/* Gallery */}
                {selectedServiceData.gallery && selectedServiceData.gallery.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedServiceData.gallery.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="relative h-40 rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={image}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors text-center block"
                  >
                    Book Now
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-900 font-semibold py-4 rounded-xl hover:border-gray-400 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Sparkles, Palette, Music, Camera, Heart, Lightbulb, Users, Zap } from 'lucide-react';

// // Butterfly Animation Component
// function ButterflyAnimation() {
//   const [butterflies, setButterflies] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return;

//     const createButterfly = () => {
//       const id = Math.random();
//       const startY = Math.random() * 60 + 20;
//       const duration = 6 + Math.random() * 2;

//       setButterflies((prev) => [...prev, { id, startY, duration }]);

//       setTimeout(() => {
//         setButterflies((prev) => prev.filter((b) => b.id !== id));
//       }, duration * 1000);
//     };

//     const interval = setInterval(createButterfly, 2500);
//     createButterfly();

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   return (
//     <div className="fixed top-0 right-0 w-full h-screen pointer-events-none overflow-hidden z-10">
//       {butterflies.map((butterfly) => (
//         <ButterflyElement
//           key={butterfly.id}
//           startY={butterfly.startY}
//           duration={butterfly.duration}
//         />
//       ))}
//     </div>
//   );
// }

// function ButterflyElement({ startY, duration }) {
//   return (
//     <motion.div
//       initial={{ x: '100vw', y: `${startY}vh`, opacity: 0.8 }}
//       animate={{
//         x: '-10vw',
//         y: `${startY - 15}vh`,
//         opacity: 0,
//       }}
//       transition={{
//         duration,
//         ease: 'easeInOut',
//       }}
//       className="absolute"
//     >
//       <svg
//         width="32"
//         height="32"
//         viewBox="0 0 32 32"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="drop-shadow-lg"
//       >
//         <motion.path
//           d="M16 8C12 8 10 12 10 16C10 20 12 24 16 24"
//           stroke="#D9A400"
//           strokeWidth="2"
//           strokeLinecap="round"
//           animate={{ d: ['M16 8C12 8 10 12 10 16C10 20 12 24 16 24', 'M16 8C12 10 9 12 9 16C9 20 12 22 16 24'] }}
//           transition={{ duration: 0.6, repeat: Infinity }}
//         />
//         <motion.path
//           d="M16 8C20 8 22 12 22 16C22 20 20 24 16 24"
//           stroke="#D9A400"
//           strokeWidth="2"
//           strokeLinecap="round"
//           animate={{ d: ['M16 8C20 8 22 12 22 16C22 20 20 24 16 24', 'M16 8C20 10 23 12 23 16C23 20 20 22 16 24'] }}
//           transition={{ duration: 0.6, repeat: Infinity }}
//         />
//         <circle cx="16" cy="16" r="2" fill="#D9A400" />
//       </svg>

//       <motion.div
//         className="absolute -left-8 top-0 w-2 h-2 bg-brand-gold rounded-full blur-sm"
//         animate={{
//           opacity: [0.8, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.2,
//         }}
//       />
//       <motion.div
//         className="absolute -left-4 top-2 w-1.5 h-1.5 bg-brand-gold/60 rounded-full blur-sm"
//         animate={{
//           opacity: [0.6, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.4,
//         }}
//       />
//       <motion.div
//         className="absolute -left-2 -top-2 w-1 h-1 bg-brand-gold/40 rounded-full blur-sm"
//         animate={{
//           opacity: [0.4, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.6,
//         }}
//       />
//     </motion.div>
//   );
// }

// // Enhanced Service Card Component
// function ServiceCard({ icon: Icon, title, description }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -8 }}
//       whileTap={{ scale: 0.98 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//       className="group relative h-full"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

//       <div className="relative p-8 sm:p-6 md:p-8 bg-white rounded-xl border-2 border-brand-soft group-hover:border-brand-gold transition-all duration-300 shadow-md group-hover:shadow-glow-lg h-full flex flex-col">
//         <motion.div
//           whileHover={{ rotate: 6, scale: 1.1 }}
//           transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//           className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 rounded-lg mb-6 group-hover:from-brand-gold/25 group-hover:to-brand-gold/10 transition-all duration-300 border border-brand-gold/20 group-hover:border-brand-gold/40"
//         >
//           <Icon className="w-8 h-8 text-brand-gold group-hover:text-brand-dark transition-colors duration-300" />
//         </motion.div>

//         <motion.h3
//           initial={{ opacity: 0.9 }}
//           whileHover={{ opacity: 1 }}
//           className="text-xl sm:text-lg md:text-xl font-heading font-semibold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2"
//         >
//           {title}
//         </motion.h3>

//         <p className="text-brand-ink text-sm leading-relaxed flex-grow line-clamp-3 group-hover:text-brand-dark transition-colors duration-300">
//           {description}
//         </p>

//         <motion.div
//           initial={{ width: 0 }}
//           whileHover={{ width: '100%' }}
//           transition={{ duration: 0.3 }}
//           className="h-1 bg-gradient-to-r from-brand-gold to-brand-gold/30 rounded-full mt-6"
//         />
//       </div>
//     </motion.div>
//   );
// }

// // Main Services Page
// export default function Services() {
//   const services = [
//     {
//       icon: Sparkles,
//       title: 'Decoration',
//       description: 'Transform your venue with stunning decorations that match your vision and create an unforgettable atmosphere.',
//     },
//     {
//       icon: Palette,
//       title: 'Theming',
//       description: 'Custom themes designed to create the perfect atmosphere and bring your event concept to life beautifully.',
//     },
//     {
//       icon: Music,
//       title: 'Entertainment',
//       description: 'Professional entertainment services to keep your guests engaged and create memorable moments throughout.',
//     },
//     {
//       icon: Camera,
//       title: 'Photography',
//       description: 'Capture every precious moment with our professional photography team and cinematic videography.',
//     },
//     {
//       icon: Heart,
//       title: 'Event Planning',
//       description: 'Complete event planning from concept to execution, ensuring every detail is perfect for your celebration.',
//     },
//     {
//       icon: Lightbulb,
//       title: 'Creative Design',
//       description: 'Innovative design solutions that transform spaces and create immersive experiences for your guests.',
//     },
//     {
//       icon: Users,
//       title: 'Coordination',
//       description: 'Professional coordination and management to ensure seamless execution of your event from start to finish.',
//     },
//     {
//       icon: Zap,
//       title: 'Special Effects',
//       description: 'Stunning visual effects including lighting, projections, and special elements to elevate your event.',
//     },
//   ];

//   return (
//     <>
//       {/* Butterfly Animation */}
//       <ButterflyAnimation />

//       {/* Hero Section */}
//       <section className="relative min-h-screen bg-gradient-to-br from-brand-neutral via-white to-brand-soft pt-32 pb-20 overflow-hidden">
//         {/* Decorative Background Elements */}
//         <div className="absolute top-20 right-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold font-semibold text-sm">
//                 ✨ Our Services
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-brand-dark mb-6 leading-tight"
//             >
//               Comprehensive Event <span className="text-brand-gold">Solutions</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-lg sm:text-xl text-brand-ink max-w-3xl mx-auto leading-relaxed"
//             >
//               We offer complete event management services to transform your vision into reality. From decoration to entertainment, we handle every detail with precision and creativity.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid Section */}
//       <section className="py-20 bg-brand-neutral relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-dark mb-4">
//               What We Offer
//             </h2>
//             <p className="text-lg text-brand-ink max-w-2xl mx-auto">
//               Explore our full range of professional event services designed to make your celebration unforgettable.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <ServiceCard {...service} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-brand-dark text-brand-neutral relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -ml-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-neutral mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-lg text-brand-soft max-w-2xl mx-auto">
//               Experience excellence with our dedicated team of professionals.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Expert Team',
//                 description: 'Over 8 years of experience with a dedicated team of creative professionals.',
//               },
//               {
//                 title: 'Attention to Detail',
//                 description: 'Every element is carefully planned and executed to perfection.',
//               },
//               {
//                 title: 'Custom Solutions',
//                 description: 'Tailored services designed specifically for your unique event needs.',
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="p-8 rounded-xl bg-brand-dark border border-brand-gold/20 group-hover:border-brand-gold/50 transition-all duration-300 group-hover:bg-brand-dark/80">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-all duration-300"
//                   >
//                     <div className="w-6 h-6 bg-brand-gold rounded-full" />
//                   </motion.div>
//                   <h3 className="text-xl font-heading font-semibold text-brand-neutral mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-brand-soft leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-brand-neutral relative overflow-hidden">
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-48 -mb-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-dark mb-4">
//               Service Packages
//             </h2>
//             <p className="text-lg text-brand-ink max-w-2xl mx-auto">
//               Flexible packages tailored to your budget and requirements.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Starter',
//                 price: 'Custom',
//                 features: ['Decoration', 'Basic Theming', 'Photography', 'Event Coordination'],
//               },
//               {
//                 name: 'Professional',
//                 price: 'Custom',
//                 features: ['Full Decoration', 'Custom Theming', 'Photography & Videography', 'Entertainment', 'Complete Coordination'],
//                 highlighted: true,
//               },
//               {
//                 name: 'Premium',
//                 price: 'Custom',
//                 features: ['Luxury Decoration', 'Bespoke Design', 'Professional Photography & Video', 'Entertainment Package', 'Full Event Management', 'Special Effects'],
//               },
//             ].map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className={`rounded-xl p-8 transition-all duration-300 ${
//                   pkg.highlighted
//                     ? 'bg-brand-gold text-brand-dark shadow-glow-lg scale-105'
//                     : 'bg-white border-2 border-brand-soft hover:border-brand-gold'
//                 }`}
//               >
//                 <h3 className={`text-2xl font-heading font-bold mb-2 ${pkg.highlighted ? 'text-brand-dark' : 'text-brand-dark'}`}>
//                   {pkg.name}
//                 </h3>
//                 <p className={`text-lg font-semibold mb-6 ${pkg.highlighted ? 'text-brand-dark/80' : 'text-brand-gold'}`}>
//                   {pkg.price}
//                 </p>
//                 <ul className="space-y-3 mb-8">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className={`flex items-center ${pkg.highlighted ? 'text-brand-dark' : 'text-brand-ink'}`}>
//                       <span className={`w-2 h-2 rounded-full mr-3 ${pkg.highlighted ? 'bg-brand-dark' : 'bg-brand-gold'}`} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     pkg.highlighted
//                       ? 'bg-brand-dark text-brand-gold hover:bg-brand-dark/90'
//                       : 'bg-brand-gold text-brand-dark hover:bg-brand-dark hover:text-brand-gold'
//                   }`}
//                 >
//                   Get Quote
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-brand-dark text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent opacity-30" />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto px-4 relative z-10"
//         >
//           <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-neutral mb-6">
//             Ready to Plan Your Event?
//           </h2>
//           <p className="text-xl text-brand-soft mb-8">
//             Get in touch with our team today and let's create something extraordinary together.
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               href="/contact"
//               className="inline-block px-10 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-neutral transition-all duration-300 transform text-lg shadow-glow-lg"
//             >
//               Get a Free Quote
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

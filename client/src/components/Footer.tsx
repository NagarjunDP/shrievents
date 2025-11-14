// // import { motion } from 'framer-motion';
// // import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.5 },
// //     },
// //   };

// //   const socialLinks = [
// //     { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
// //     { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
// //     { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
// //   ];

// //   return (
// //     <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-8 relative overflow-hidden">
// //       {/* Decorative Background Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <motion.div
// //           className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
// //           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
// //           transition={{ duration: 8, repeat: Infinity }}
// //         />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
// //         >
// //           {/* Brand Section */}
// //           <motion.div variants={itemVariants}>
// //             <div className="flex items-center gap-2 mb-4">
// //               <motion.div whileHover={{ rotate: 5 }} transition={{ type: 'spring' }}>
// //                 <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center font-bold text-slate-900">
// //                   S
// //                 </div>
// //               </motion.div>
// //               <span className="font-bold text-lg text-yellow-400">Shri Events</span>
// //             </div>
// //             <p className="text-slate-400 text-sm leading-relaxed">
// //               Celebrate lovely moments with us. We make your smile shine brighter than ever with our premium decoration and event management services.
// //             </p>
// //           </motion.div>

// //           {/* Quick Links */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Quick Links</h3>
// //             <ul className="space-y-2 text-sm">
// //               {[
// //                 { label: 'Home', href: '#' },
// //                 { label: 'Services', href: '#services' },
// //                 { label: 'Gallery', href: '#gallery' },
// //                 { label: 'Contact', href: '#contact' },
// //               ].map((link) => (
// //                 <motion.li key={link.href} whileHover={{ x: 4 }}>
// //                   <a
// //                     href={link.href}
// //                     className="hover:text-yellow-400 transition-colors duration-300 relative group"
// //                   >
// //                     {link.label}
// //                     <motion.span
// //                       className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
// //                       initial={{ width: 0 }}
// //                       whileHover={{ width: '100%' }}
// //                       transition={{ duration: 0.3 }}
// //                     />
// //                   </a>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Contact Info */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Contact</h3>
// //             <ul className="space-y-3 text-sm">
// //               <motion.li className="flex items-center gap-2 group" whileHover={{ x: 4 }}>
// //                 <Phone size={16} className="text-yellow-400 flex-shrink-0" />
// //                 <a
// //                   href="tel:+919739120735"
// //                   className="hover:text-yellow-400 transition-colors duration-300"
// //                 >
// //                   +91 9739 120735
// //                 </a>
// //               </motion.li>
// //               <motion.li className="flex items-center gap-2 group" whileHover={{ x: 4 }}>
// //                 <Mail size={16} className="text-yellow-400 flex-shrink-0" />
// //                 <a
// //                   href="mailto:info@shrievents.com"
// //                   className="hover:text-yellow-400 transition-colors duration-300"
// //                 >
// //                   info@shrievents.com
// //                 </a>
// //               </motion.li>
// //               <motion.li className="flex items-start gap-2 group" whileHover={{ x: 4 }}>
// //                 <MapPin size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
// //                 <span>Bangalore, India</span>
// //               </motion.li>
// //             </ul>
// //           </motion.div>

// //           {/* Social Links */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Follow Us</h3>
// //             <div className="flex gap-4">
// //               {socialLinks.map((social) => {
// //                 const Icon = social.icon;
// //                 return (
// //                   <motion.a
// //                     key={social.label}
// //                     href={social.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="p-2 bg-yellow-400 text-slate-900 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md"
// //                     aria-label={social.label}
// //                     whileHover={{ scale: 1.2, rotate: 10 }}
// //                     whileTap={{ scale: 0.9 }}
// //                   >
// //                     <Icon size={20} />
// //                   </motion.a>
// //                 );
// //               })}
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* Divider */}
// //         <motion.div
// //           className="border-t border-slate-700/30 pt-8"
// //           initial={{ scaleX: 0 }}
// //           whileInView={{ scaleX: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
// //             <p>&copy; {currentYear} Shri Events Decoration & Management. All rights reserved.</p>
// //             <div className="flex gap-6">
// //               <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
// //                 Privacy Policy
// //               </a>
// //               <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
// //                 Terms of Service
// //               </a>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </footer>
// //   );
// // }

// // import { motion } from 'framer-motion';
// // import { Instagram, Facebook, Twitter,PhoneCallIcon, Phone, Mail, MapPin } from 'lucide-react';
// // import { MapView } from "../components/Map";

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   };

// //   const socialLinks = [
// //     { icon: Instagram, href: 'https://www.instagram.com/shri_events_decoration/', label: 'Instagram' },
// //     { icon: Facebook, href: 'https://facebook.coms/shri_events_decoration/', label: 'Facebook' },
// //     { icon: PhoneCallIcon, href: 'https://wa.me/9739220735', label: 'Whatsapp' },
// //   ];

// //   return (
// //     <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-10 relative overflow-hidden">
      
// //       {/* Glow */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
// //           animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
// //           transition={{ duration: 8, repeat: Infinity }}
// //         />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-5 relative z-10">
        
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
// //         >

// //           {/* Brand */}
// //           <motion.div variants={itemVariants}>
// //             <div className="flex items-center gap-3 mb-4">
// //               <motion.div whileHover={{ rotate: 4 }}>
// //                 <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
// //                   S
// //                 </div>
// //               </motion.div>
// //               <span className="font-bold text-lg text-yellow-400">Shri Events</span>
// //             </div>

// //             <p className="text-slate-400 text-sm leading-relaxed">
// //               Celebrate lovely moments with us. We make your memories shine with our premium decoration and event management services.
// //             </p>
// //           </motion.div>

// //           {/* Links */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Quick Links</h3>
// //             <ul className="space-y-2 text-sm">
// //               {[
// //                 { label: 'Home', href: '#' },
// //                 { label: 'Services', href: '#services' },
// //                 { label: 'Gallery', href: '#gallery' },
// //                 { label: 'Contact', href: '#contact' },
// //               ].map(link => (
// //                 <motion.li key={link.href} whileHover={{ x: 4 }}>
// //                   <a className="hover:text-yellow-400 transition-colors" href={link.href}>
// //                     {link.label}
// //                   </a>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Contact */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Contact</h3>
// //             <ul className="space-y-3 text-sm">

// //               <motion.li className="flex items-center gap-2" whileHover={{ x: 4 }}>
// //                 <Phone size={16} className="text-yellow-400" />
// //                 <a href="tel:+919739120735" className="hover:text-yellow-400">+91 9739 120735</a>
// //               </motion.li>

// //               <motion.li className="flex items-center gap-2" whileHover={{ x: 4 }}>
// //                 <Mail size={16} className="text-yellow-400" />
// //                 <a href="mailto:info@shrievents.com" className="hover:text-yellow-400">info@shrievents.com</a>
// //               </motion.li>

// //               <motion.li className="flex items-start gap-2" whileHover={{ x: 4 }}>
// //                 <MapPin size={16} className="text-yellow-400 mt-1" />
// //                 <span>4H2X+99 Yelahanka, Bengaluru</span>
// //               </motion.li>
// //             </ul>

// //             <div className="flex gap-4 mt-6">
// //               {socialLinks.map(s => {
// //                 const Icon = s.icon;
// //                 return (
// //                   <motion.a
// //                     key={s.label}
// //                     href={s.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     whileHover={{ scale: 1.2, rotate: 8 }}
// //                     whileTap={{ scale: 0.9 }}
// //                     className="p-2 bg-yellow-400 text-slate-900 rounded-full hover:bg-yellow-300 transition-all shadow-md"
// //                   >
// //                     <Icon size={20} />
// //                   </motion.a>
// //                 );
// //               })}
// //             </div>
// //           </motion.div>

// //           {/* MAP SECTION */}
// //           <motion.div variants={itemVariants}>
// //             <h3 className="font-semibold mb-4 text-yellow-400">Our Location</h3>

// //             <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
// //               <MapView
// //                 initialCenter={{ lat: 13.10209, lng: 77.58932 }}
// //                 initialZoom={16}
// //                 className="h-[240px] md:h-[300px]"
// //               />
// //             </div>
// //           </motion.div>

// //         </motion.div>

// //         {/* Bottom Bar */}
// //         <motion.div
// //           className="border-t border-slate-800/40 pt-6"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <div className="flex flex-col md:flex-row justify-between text-sm text-slate-400 gap-4">
// //             <p>© {currentYear} Shri Events — All Rights Reserved</p>
// //             <div className="flex gap-6">
// //               <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
// //               <a href="#" className="hover:text-yellow-400">Terms of Service</a>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </footer>
// //   );
// // }
// import { motion } from 'framer-motion';
// import { Instagram, Facebook, Twitter, PhoneCallIcon, Phone, Mail, MapPin } from 'lucide-react';
// import { MapView } from "../components/Map";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const socialLinks = [
//     { icon: Instagram, href: 'https://www.instagram.com/shri_events_decoration/', label: 'Instagram' },
//     { icon: Facebook, href: 'https://facebook.com/shri_events_decoration/', label: 'Facebook' },
//     { icon: PhoneCallIcon, href: 'https://wa.me/9739220735', label: 'Whatsapp' },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-12 relative overflow-hidden">

//       {/* Ambient Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* Top Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14"
//         >

//           {/* Brand */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-3 mb-4">
//               <motion.div whileHover={{ rotate: 4 }}>
//                 <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
//                   S
//                 </div>
//               </motion.div>
//               <span className="font-bold text-lg text-yellow-400">
//                 Shri Events
//               </span>
//             </div>

//             <p className="text-slate-400 text-sm leading-relaxed">
//               Celebrate lovely moments with us. We make your memories shine with our premium decoration and event management services.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="font-semibold mb-4 text-yellow-400">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               {[
//                 { label: 'Home', href: '#' },
//                 { label: 'Services', href: '#services' },
//                 { label: 'Gallery', href: '#gallery' },
//                 { label: 'Contact', href: '#contact' },
//               ].map(link => (
//                 <motion.li key={link.href} whileHover={{ x: 4 }}>
//                   <a className="hover:text-yellow-400 transition-colors" href={link.href}>
//                     {link.label}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div variants={itemVariants}>
//             <h3 className="font-semibold mb-4 text-yellow-400">Contact</h3>
//             <ul className="space-y-3 text-sm">

//               <motion.li className="flex items-center gap-2" whileHover={{ x: 4 }}>
//                 <Phone size={16} className="text-yellow-400" />
//                 <a href="tel:+919739120735" className="hover:text-yellow-400">+91 9739 120735</a>
//               </motion.li>

//               <motion.li className="flex items-center gap-2" whileHover={{ x: 4 }}>
//                 <Mail size={16} className="text-yellow-400" />
//                 <a href="mailto:info@shrievents.com" className="hover:text-yellow-400">shrinivas199721@gmail.com</a>
//               </motion.li>

//               <motion.li className="flex items-start gap-2" whileHover={{ x: 4 }}>
//                 <MapPin size={16} className="text-yellow-400 mt-1" />
//                 <span>4H2X+99 Yelahanka, Bengaluru</span>
//               </motion.li>
//             </ul>

//             <div className="flex gap-4 mt-6">
//               {socialLinks.map(s => {
//                 const Icon = s.icon;
//                 return (
//                   <motion.a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.2, rotate: 8 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-2 bg-yellow-400 text-slate-900 rounded-full hover:bg-yellow-300 transition-all shadow-md"
//                   >
//                     <Icon size={20} />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* MAP — Always on the RIGHT side on Desktop */}
//           <motion.div variants={itemVariants}>
//             <h3 className="font-semibold mb-4 text-yellow-400">Our Location</h3>

//             <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
//               {/* MAP SECTION */}
// <motion.div variants={itemVariants}>
//   <h3 className="font-semibold mb-4 text-yellow-400"></h3>

//   <MapView className="h-[240px] md:h-[300px]" />
// </motion.div>

//             </div>
//           </motion.div>

//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           className="border-t border-slate-800/40 pt-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col md:flex-row justify-between text-sm text-slate-400 gap-4">
//             <p>© {currentYear} Shri Events — All Rights Reserved</p>

//             <div className="flex gap-6">
//               <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
//               <a href="#" className="hover:text-yellow-400">Terms of Service</a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </footer>
//   );
// }

import { motion } from "framer-motion";
import { Instagram, Facebook, PhoneCallIcon, Phone, Mail, MapPin } from "lucide-react";
import { MapView } from "../components/Map";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/shri_events_decoration/", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/shri_events_decoration/", label: "Facebook" },
    { icon: PhoneCallIcon, href: "https://wa.me/9739220735", label: "Whatsapp" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-12 pb-10 md:pt-16 md:pb-12 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Top Grid – Mobile: stacked & centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid grid-cols-1 
            md:grid-cols-4 
            gap-8 md:gap-10 
            mb-10 md:mb-14
            text-center md:text-left   /* ← center on mobile only */
          "
        >

          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <motion.div whileHover={{ rotate: 4 }}>
                <div className="h-10 w-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                  S
                </div>
              </motion.div>
              <span className="font-bold text-lg text-yellow-400">Shri Events</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Celebrate lovely moments with us. We make your memories shine with our premium decoration and event management services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <a className="hover:text-yellow-400 transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-3 text-sm w-full max-w-xs mx-auto md:mx-0">

              <motion.li className="flex items-center justify-center md:justify-start gap-2" whileHover={{ x: 4 }}>
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+919739120735" className="hover:text-yellow-400">+91 97392 20735</a>
              </motion.li>

              <motion.li className="flex items-center justify-center md:justify-start gap-2" whileHover={{ x: 4 }}>
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:info@shrievents.com" className="hover:text-yellow-400 break-all">
                  shrinivas199721@gmail.com
                </a>
              </motion.li>

              <motion.li className="flex items-start justify-center md:justify-start gap-2" whileHover={{ x: 4 }}>
                <MapPin size={16} className="text-yellow-400 mt-0.5" />
                <span className="text-center md:text-left">4H2X+99 Yelahanka, Bengaluru</span>
              </motion.li>
            </ul>

            {/* Social Icons – centered on mobile */}
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-yellow-400 text-slate-900 rounded-full hover:bg-yellow-300 transition-all shadow-md"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* MAP – Full width & centered on mobile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-yellow-400">Our Location</h3>

            <div className="w-full max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <MapView className="h-60 md:h-72 w-full" />
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800/40 pt-5 md:pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between text-sm text-slate-400 gap-4 text-center md:text-left">
            <p>© {currentYear} Shri Events — All Rights Reserved</p>

            <div className="flex gap-6 justify-center">
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}

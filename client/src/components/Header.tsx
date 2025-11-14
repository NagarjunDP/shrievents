// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, MessageCircle } from 'lucide-react';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

// const navItems = [
//         { label: 'Home', href: '/' },
//         { label: 'Gallery', href: '/gallery' },
//         { label: 'About', href: '/about' },
//         { label: 'Contact', href: '/contact' },
//       ];

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//     exit: { opacity: 0, y: -20 },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <motion.header
//         className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg'
//             : 'bg-transparent'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <a href="/" className="flex items-center gap-2 group">
//                 <motion.div
//                   whileHover={{ rotate: 5 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <img src="/logo.png" alt="Shri Events" className="h-14 w-auto drop-shadow-lg" />
//                 </motion.div>
//               </a>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.href}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <a
//                     href={item.href}
//                     className={`relative font-medium group transition-colors duration-300 ${
//                       isScrolled
//                         ? 'text-slate-900 hover:text-yellow-500'
//                         : 'text-white hover:text-yellow-300'
//                     }`}
//                   >
//                     {item.label}
//                     <motion.span
//                       className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
//                       initial={{ width: 0 }}
//                       whileHover={{ width: '100%' }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </a>
//                 </motion.div>
//               ))}
//             </nav>

//             {/* CTA Button */}
//             <motion.div
//               className="hidden md:flex items-center gap-4"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg"
//               >
//                 Book Now
//               </motion.button>
//             </motion.div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`md:hidden p-2 transition-colors ${
//                 isScrolled ? 'text-slate-900' : 'text-white'
//               }`}
//               aria-label="Toggle menu"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <AnimatePresence mode="wait">
//                 {isOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <X size={28} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Menu size={28} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 top-20 z-40 bg-white md:hidden"
//           >
//             <nav className="flex flex-col items-center gap-6 p-8">
//               {navItems.map((item) => (
//                 <motion.div key={item.href} variants={itemVariants}>
//                   <a
//                     href={item.href}
//                     className="text-lg font-semibold text-slate-900 hover:text-yellow-500 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 </motion.div>
//               ))}
//               <motion.div variants={itemVariants} className="w-full">
//                 <button
//                   className="block px-6 py-2 bg-yellow-400 text-slate-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 w-full text-center"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Book Now
//                 </button>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* WhatsApp Floating Button */}
//       <motion.a
//         href="https://wa.me/919739120735"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
//         aria-label="Contact us on WhatsApp"
//         whileHover={{ scale: 1.15, rotate: 10 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
//       >
//         <MessageCircle size={24} />
//       </motion.a>
//     </>
//   );
// // }
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, MessageCircle } from 'lucide-react';

// const WHATSAPP_URL = "https://wa.me/919739120735";
// const LOGO_SRC = "/logo-removebg-preview.png"; // PNG placed in public/

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'About', href: '/about' },
//   { label: 'Contact', href: '/contact' }
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
//     exit: { opacity: 0, y: -20 }
//   };
//   const itemVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

//   return (
//     <>
//       <header
//         className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${
//           isScrolled ? 'bg-white/95 backdrop-blur-lg' : 'bg-transparent'
//         }`}
//         style={{
//           borderBottom: isScrolled ? '2px solid #ec4899' : 'none',
//           boxShadow: isScrolled ? '0 4px 20px rgba(236,72,153,0.12)' : 'none',
//           minHeight: '94px',
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-24">
//             {/* Logo and Brand */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={LOGO_SRC}
//                 alt="Shri Events logo butterfly"
//                 className="h-16 w-auto drop-shadow-lg"
//                 style={{ minWidth: "64px", minHeight: "64px" }}
//               />
//               <span
//                 className="text-3xl font-extrabold tracking-tight text-pink-600 leading-tight"
//                 style={{ letterSpacing: "0.05em" }}
//               >
//                 Shri Events
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-8 ml-8">
//               {navItems.map((item, index) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className={`font-medium uppercase tracking-wide transition-colors duration-200
//                       ${isScrolled ? 'text-slate-900 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>

//             {/* CTA Button */}
//             <div className="hidden md:flex items-center gap-4">
//               <a
//                 href="/contact"
//                 className="px-7 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow hover:shadow-pink-500/20 transition-all duration-300 text-lg tracking-wide"
//               >
//                 Book Now
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-pink-600' : 'text-white'}`}
//               aria-label="Toggle navigation"
//             >
//               <AnimatePresence mode="wait">
//                 {isOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.16 }}
//                   >
//                     <X size={34} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: 0.16 }}
//                   >
//                     <Menu size={32} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 top-24 z-40 bg-gradient-to-b from-white via-pink-100 to-orange-100/60 md:hidden shadow-2xl"
//           >
//             <nav className="flex flex-col items-center gap-7 pt-16 pb-6 px-8">
//               {navItems.map((item) => (
//                 <motion.div key={item.href} variants={itemVariants}>
//                   <a
//                     href={item.href}
//                     className="text-xl font-bold uppercase tracking-wide text-pink-700 hover:text-orange-400 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 </motion.div>
//               ))}
//               <motion.div variants={itemVariants} className="w-full mb-8">
//                 <a
//                   href="/contact"
//                   className="block px-7 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow mt-6 hover:scale-105 transition-all text-center w-full"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Book Now
//                 </a>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* WhatsApp Floating Button */}
//       <motion.a
//         href={WHATSAPP_URL}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-7 right-7 z-50 bg-gradient-to-r from-green-400 to-lime-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-500"
//         aria-label="Contact Shri Events on WhatsApp"
//         whileHover={{ scale: 1.13, rotate: 16, boxShadow: '0 8px 24px #22c55e', filter: 'brightness(1.08)' }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, type: 'spring', stiffness: 180 }}
//       >
//         <MessageCircle size={27} />
//       </motion.a>
//     </>
//   );
// }

//working slight changes
//import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, MessageCircle } from 'lucide-react';

// const WHATSAPP_URL = "https://wa.me/919739120735";
// const LOGO_SRC = "/logo-removebg-preview.png";

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'About', href: '/about' },
//   { label: 'Contact', href: '/contact' }
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [currentPath, setCurrentPath] = useState(window.location.pathname);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);

//     const handlePopState = () => setCurrentPath(window.location.pathname);
//     window.addEventListener('popstate', handlePopState);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   const alwaysColored =
//     isScrolled ||
//     currentPath === '/gallery' ||
//     currentPath === '/about' ||
//     currentPath === '/contact';

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
//     exit: { opacity: 0, y: -20 }
//   };
//   const itemVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

//   return (
//     <>
//       <header
//         className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${
//           alwaysColored ? 'bg-white/95 backdrop-blur-lg' : 'bg-transparent'
//         }`}
//         style={{
//           borderBottom: alwaysColored ? '2px solid #ec4899' : 'none',
//           boxShadow: alwaysColored ? '0 4px 20px rgba(236,72,153,0.10)' : 'none',
//           minHeight: '104px',
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-28">
//             <div className="flex items-center gap-6">
//               <img
//                 src={LOGO_SRC}
//                 alt="Shri Events logo butterfly"
//                 className="h-20 w-auto drop-shadow-lg"
//                 style={{ minWidth: "96px", minHeight: "96px" }}
//               />
              
//               <a href="/" className="w-full flex justify-center sm:w-auto">
//     <img
//       src="/Gemini_Generated_Image_casu65casu65casu-removebg-preview.png"
//       alt="Shri Events Logo"
//       className="h-36 sm:h-44 md:h-56 lg:h-64 xl:h-72 w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105 mx-auto"
//       style={{
//         minWidth: "250px",
//         maxWidth: "700px",
//       }}
//     />
//   </a>


//               {/* <span
//   className="
//     text-4xl font-extrabold
//     text-pink-500
//     tracking-tight
//     drop-shadow-lg
//   "
//   style={{
//     fontFamily: "Pacifico, cursive",
//     letterSpacing: "0.07em",
//     lineHeight: "1",
//   }}
// >
//   Shri Events
// </span> */}


//             </div>
//             <nav className="hidden md:flex items-center gap-8 ml-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className={`font-semibold uppercase tracking-wide transition-colors duration-200
//                     ${
//                       alwaysColored
//                         ? "text-slate-900 hover:text-pink-600"
//                         : "text-white hover:text-yellow-300"
//                     }`}
//                   style={{ fontSize: "1.13rem", letterSpacing: "0.07em" }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>
//             <div className="hidden md:flex items-center gap-4">
//               <a
//                 href="/contact"
//                 className="px-8 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow hover:shadow-pink-500/20 transition-all duration-300 text-lg tracking-wide"
//                 style={{ fontSize: "1.14rem" }}
//               >
//                 Book Now
//               </a>
//             </div>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`md:hidden p-2 transition-colors ${
//                 alwaysColored ? 'text-pink-600' : 'text-white'
//               }`}
//               aria-label="Toggle navigation"
//             >
//               <AnimatePresence mode="wait">
//                 {isOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.16 }}
//                   >
//                     <X size={38} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: 0.16 }}
//                   >
//                     <Menu size={36} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </button>
//           </div>
//         </div>
//       </header>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 top-28 z-40 bg-gradient-to-b from-white via-pink-100 to-orange-100/60 md:hidden shadow-2xl"
//           >
//             <nav className="flex flex-col items-center gap-7 pt-16 pb-6 px-8">
//               {navItems.map((item) => (
//                 <motion.div key={item.href} variants={itemVariants}>
//                   <a
//                     href={item.href}
//                     className="text-xl font-bold uppercase tracking-wide text-pink-700 hover:text-orange-400 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 </motion.div>
//               ))}
//               <motion.div variants={itemVariants} className="w-full mb-8">
//                 <a
//                   href="/contact"
//                   className="block px-7 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow mt-6 hover:scale-105 transition-all text-center w-full"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Book Now
//                 </a>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/919739120735";
const BUTTERFLY_LOGO = "/logo-removebg-preview.png";
const MAIN_LOGO = "/Gemini_Generated_Image_casu65casu65casu-removebg-preview.png";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  {label : 'Testimonials',href : '/testimonials'},
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const alwaysColored =
    isScrolled ||
    currentPath === '/gallery' ||
    currentPath === '/about' ||
    currentPath === '/contact';

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };
  const itemVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <header
  className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 shadow-lg ${
    alwaysColored ? 'bg-white/95 backdrop-blur-lg' : 'bg-transparent'
  }`}
  style={{
    borderBottom: alwaysColored ? '1px solid #ec4899' : 'none',
    boxShadow: alwaysColored ? '0 2px 10px rgba(236,72,153,0.08)' : 'none',
    minHeight: '104px',
  }}
>
  <div className="w-full px-0">
    <div className="flex items-center justify-between h-28">

      {/* LOGOS – FULL LEFT */}
      <div className="flex items-center">
        <img src={BUTTERFLY_LOGO} alt="Shri Events butterfly" loading="lazy" className="h-20 md:h-34 w-auto drop-shadow-md" style={{ minWidth: '80px' }} />
        <a href="/" className="flex">
          <img
            src={MAIN_LOGO}
            alt="Shri Events Logo"
            loading="lazy"
            className="h-36 sm:h-40 md:h-40 lg:h-48 xl:h-56 w-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
            style={{ minWidth: '240px', maxWidth: '520px' }}
          />
        </a>
      </div>

      {/* NAV + BOOK NOW – RIGHT SIDE */}
      <div className="hidden md:flex items-center gap-10">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-semibold uppercase tracking-wide transition-colors duration-200
                ${alwaysColored ? "text-slate-900 hover:text-pink-600" : "text-white hover:text-yellow-300"}
              `}
              style={{ fontSize: "1.13rem", letterSpacing: "0.07em" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="px-8 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow hover:shadow-pink-500/20 transition-all duration-300 text-lg tracking-wide"
          style={{ fontSize: "1.14rem" }}
        >
          Book Now
        </a>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden p-2 transition-colors z-50 mr-4 ${
          alwaysColored ? 'text-pink-600' : 'text-white'
        }`}
        aria-label="Toggle navigation"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.16 }}>
              <X size={38} />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.16 }}>
              <Menu size={36} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  </div>
</header>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-28 z-40 bg-gradient-to-b from-white via-pink-100 to-orange-100/60 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col items-center gap-7 pt-16 pb-6 px-8">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <a
                    href={item.href}
                    className="text-xl font-bold uppercase tracking-wide text-pink-700 hover:text-orange-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="w-full mb-8">
                <a
                  href="/contact"
                  className="block px-7 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow mt-6 hover:scale-105 transition-all text-center w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
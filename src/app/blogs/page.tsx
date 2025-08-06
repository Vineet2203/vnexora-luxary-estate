'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { Poppins, Playfair_Display } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

// type Blog = {
//   id: number;
//   slug: string;
//   title: string;
//   date: string;
//   category: string;
//   excerpt: string;
//   content: string;
//   image: string;
// };

// const blogs: Blog[] = [
//   {
//     id: 1,
//     slug: 'top-jaipur-railway-station-hotels',
//     title: 'Top Jaipur Railway Station Hotels For A Comfortable Stay In Jaipur',
//     date: '16th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur is one of the most popular tourist destinations in India...',
//     content: 'This is the full detailed blog content about Jaipur Railway Station hotels. It includes amenities, locations, proximity to tourist spots, and tips for visitors. You’ll find comfortable, budget-friendly, and luxury hotels all in one place...',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-16-09-41-36_687773d0d0081.jpg',
//   },
//   {
//     id: 2,
//     slug: 'jaipur-airport-hotels',
//     title: 'Comfortable Stay Near The Jaipur Airport Hotels',
//     date: '14th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur, the Pink City of India, has always been a favorite...',
//     content: 'This is a detailed blog post about staying near Jaipur airport, with a breakdown of hotel categories, travel convenience, food options, and pricing ranges. Ideal for late-night arrivals or business travelers.',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-14-07-01-31_6874ab4bd331b.jpg',
//   },
//   {
//     id: 3,
//     slug: 'top-jaipur-railway-station-hotels',
//     title: 'Top Jaipur Railway Station Hotels For A Comfortable Stay In Jaipur',
//     date: '16th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur is one of the most popular tourist destinations in India...',
//     content: 'This is the full detailed blog content about Jaipur Railway Station hotels. It includes amenities, locations, proximity to tourist spots, and tips for visitors. You’ll find comfortable, budget-friendly, and luxury hotels all in one place...',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-16-09-41-36_687773d0d0081.jpg',
//   },
//   {
//     id: 4,
//     slug: 'jaipur-airport-hotels',
//     title: 'Comfortable Stay Near The Jaipur Airport Hotels',
//     date: '14th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur, the Pink City of India, has always been a favorite...',
//     content: 'This is a detailed blog post about staying near Jaipur airport, with a breakdown of hotel categories, travel convenience, food options, and pricing ranges. Ideal for late-night arrivals or business travelers.',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-14-07-01-31_6874ab4bd331b.jpg',
//   },
//   {
//     id: 5,
//     slug: 'top-jaipur-railway-station-hotels',
//     title: 'Top Jaipur Railway Station Hotels For A Comfortable Stay In Jaipur',
//     date: '16th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur is one of the most popular tourist destinations in India...',
//     content: 'This is the full detailed blog content about Jaipur Railway Station hotels. It includes amenities, locations, proximity to tourist spots, and tips for visitors. You’ll find comfortable, budget-friendly, and luxury hotels all in one place...',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-16-09-41-36_687773d0d0081.jpg',
//   },
//   {
//     id: 6,
//     slug: 'jaipur-airport-hotels',
//     title: 'Comfortable Stay Near The Jaipur Airport Hotels',
//     date: '14th-Jul-2025',
//     category: 'Hotel',
//     excerpt: 'Jaipur, the Pink City of India, has always been a favorite...',
//     content: 'This is a detailed blog post about staying near Jaipur airport, with a breakdown of hotel categories, travel convenience, food options, and pricing ranges. Ideal for late-night arrivals or business travelers.',
//     image: 'https://www.foxosohotels.com/blog/admin/assets/img/post/image_2025-07-14-07-01-31_6874ab4bd331b.jpg',
//   },
//   // Add more blogs as needed
// ];

// export default function BlogSection() {
//   const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Images/hero-banner.jpg')" }}>
//   <div className="absolute inset-0 bg-black/50" />
//   <div className="relative z-10 text-center px-4 text-white">
//     <h1 className="text-4xl md:text-5xl font-bold">VNEXORA Blogs</h1>
//     <p className="mt-4 text-lg max-w-2xl mx-auto">
//       A Visual Journey Through Our Signature Hospitality, Design, and Experiences
//     </p>
//   </div>
// </section>

//       {/* Blog Cards */}
//       <section className="bg-white py-16 px-4 sm:px-10 max-w-7xl mx-auto">
//         <div className="space-y-10">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
//             >
//               <div className="md:w-1/2 w-full">
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   width={600}
//                   height={400}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               <div className="p-6 md:w-1/2 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-xl font-semibold text-[#9c7b4b] mb-2">{blog.title}</h2>
//                   <p className="text-gray-700 mb-2">
//                     <span className="font-semibold">{blog.date}</span> – <em>{blog.category}</em>
//                   </p>
//                   <p className="text-gray-600">{blog.excerpt}</p>
//                 </div>
//                 <div className="mt-4">
//                   <button
//                     onClick={() => setSelectedBlog(blog)}
//                     className="bg-[#9c7b4b] text-white px-5 py-2 font-semibold rounded shadow hover:bg-[#8a683a] transition"
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedBlog && (
//           <motion.div
//             key="modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"

//             onClick={() => setSelectedBlog(null)}
//           >
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-xl relative"
//             >
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-black"
//                 onClick={() => setSelectedBlog(null)}
//               >
//                 <FaTimes className="text-xl" />
//               </button>
//               <Image
//                 src={selectedBlog.image}
//                 alt={selectedBlog.title}
//                 width={800}
//                 height={400}
//                 className="rounded-lg w-full object-cover mb-4"
//               />
//               <h2 className="text-2xl font-bold text-[#9c7b4b] mb-2">{selectedBlog.title}</h2>
//               <p className="text-sm text-gray-500 mb-4">
//                 {selectedBlog.date} – <em>{selectedBlog.category}</em>
//               </p>
//               <p className="text-gray-700 leading-relaxed">{selectedBlog.content}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
const blogs= () =>{
      return(
        <main className={`w-full mx-auto space-y-16 px-0 pb-10 relative bg-[#f7f5f1] wedding-page ${poppins.className}`}>
           {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          src="/Videos/pool_hotel.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute text-center text-[#f5e8d7] z-10">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>Blogs</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Crafting Tailored Hospitality Solutions with Vision, Innovation & Expertise.
          </p>
        </div>
      </section>

          <h1>COMING SOON</h1>
        </main>
      );

   }
export default blogs;
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

const allies = [
  { name: 'Accor Hotels', logo: 'https://hospitality-on.com/sites/default/files/2020-01/accor-new-logo_1.jpg'},
  { name: 'Ibis Hotels', logo: 'https://www.asiamiles.com/content/dam/am-content/brands/logo/hotel/accorhotels/Logo_ibis_RGB.png' },
  { name: 'The Leela', logo: 'https://globalhospitalitysolution.com/wp-content/uploads/2021/01/leela_logo.jpg' },
  { name: 'Sunday Hotels', logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/eca6fb180890227.Y3JvcCwxNDUxLDExMzUsMjgwLDA.jpg' },
  { name: 'Parkside Hotels', logo: 'https://www.parksidehotels.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-9.07.51-AM.jpeg' },
  { name: 'Hyatt Hotels', logo: 'https://1000logos.net/wp-content/uploads/2020/02/Hyatt-Logo-1990-1080x648.jpg' },
  { name: 'Bloom Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBETJmEGs2LeUCH7SKD0Cjw3E_3VnaOHfVKg&s' },
  { name: 'Treebo Hotels', logo: 'https://i.ytimg.com/vi/8x5IKkDrOhM/maxresdefault.jpg' },
  { name: 'JW Marriott', logo: 'https://svgmix.com/uploads/b0ceb1-jw-marriott-hotel-resorts.svg' },
  { name: 'Lemon Tree Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzRRRhKKhgR5RjZwcj5Q-Up3HWZyEq_9CGA&s' },
  { name: 'Sterling Holidays', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Sterling_logo.png' },
  { name: 'Wyndham Hotel Group', logo: 'https://corporate.wyndhamhotels.com/wp-content/uploads/2019/07/WYNDHAM_HR_PMS-285-C@3003.jpg' },
  { name: 'Radisson Hotels', logo: 'https://cdn.worldvectorlogo.com/logos/radisson.svg'},
  { name: 'Cardinal Hotel', logo: 'https://cardinalhotel.com/wp-content/uploads/bb-plugin/cache/built-1924-2-landscape.jpg' },
  { name: 'Playotel Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgkMNTwEUNEctWrIVzYcLuKT5iYEOfrPTLw&s' },
  { name: 'Sheraton Hotels', logo: 'https://logowik.com/content/uploads/images/480_sheratonhotelsandresorts.jpg' },
  { name: 'The Orchid', logo: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_302,w_3507,h_1897,r_0,c_crop,q_90/w_355,h_200,f_auto,c_fit/orchid-hotels/Orchid_New_Logo_i6vzc7' },
  { name: 'IHG Hotels & Resorts', logo: 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/04/IHC_Hotels_CustomerStory.png' },
  { name: 'the Hostellers', logo: 'https://img-cdn.publive.online/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2022/06/the-hosteller-.jpg' },
  { name: 'Darwin Hotels', logo: 'https://images-platform.99static.com//hPCanOpBkJZgWLVYwFisxzz8YU4=/247x230:915x898/fit-in/500x500/99designs-contests-attachments/129/129576/attachment_129576888' },
  { name: 'OYO Rooms', logo: 'https://mma.prnewswire.com/media/997097/OYO_Hotels_and_Homes_Logo.jpg?p=publish' },
  { name: 'Sarovar Hotels', logo: 'https://aniportalimages.s3.amazonaws.com/media/details/Sarovar_Hotels_and_Resorts2021102610474220211026110352.jpg' },
  { name: 'The fern', logo: 'https://safariplus.co.in/uploads/images/image_750x_665883390f47d.jpg' },
  { name: 'Fairmont Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuD5VL9c7A2rkvvgQeriwtGKv2LSKbo7vYA&s' },
  { name: 'Mercure Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOAmDokKyU0lzXw172GLoHbdt3efthOcX_w&s' },
  { name: 'Spree Hotels', logo: 'https://gos3.ibcdn.com/Spree_Hotels-1424348746.jpg' },
  { name: 'Lords Hotels', logo: 'https://api.blessingsonthenet.com/uploads/hotel_groups/ae485c0c4fee053310702a304054017d-1701765710588-Lords-Hotels-And-Resorts.jpg' },
  { name: 'Ecko Hotels', logo: 'https://media.licdn.com/dms/image/v2/D560BAQGniYxIZTYR5A/company-logo_200_200/B56ZXv3DrPGQAI-/0/1743485942924/eckohotels_logo?e=2147483647&v=beta&t=w6uT67mC29mhGy97oRvDUT4F8TE5iFXBodH81R6NGJ8' },
  { name: 'Novotel Hotels', logo: 'https://www.medellin.travel/wp-content/uploads/2021/11/0000_Novotel_HResorts_logo_RVB-alta.jpg' },
  { name: 'Westin Hotels & Resorts', logo: 'https://logowik.com/content/uploads/images/westin-hotels-resort4429.jpg' },
  { name: 'Grandmas Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0yS653GxaWpBKiuoqL0BN7xCUv1T0w0Qrw&s' },
  { name: 'Four Seasons Hotels & Resorts', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PO2iXdmm26C0GMfCQ7CzALu1LagZLA6Qvw&s' },
  { name: 'Crowne Plaza Hotels & Resorts', logo: 'https://cdn-djonn.nitrocdn.com/VhEUDFzwbGGLWMnLYBosSYzwIBuPnGru/assets/images/optimized/rev-cb5d05f/wp-content/uploads/2020/01/NEW_Crowne_Plaza_Brand_1-1536x745.jpg' },
  { name: 'Canatla Hotels', logo: 'https://canaltahotels.prevueaps.com/images/3/2599/Canalta-Hdr.png' },
  { name: 'The Royal Orchid', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlKdF10TVt_9KcKzNlNiQC0vpWuJmzxQqKQ&s' },
  { name: 'Conrad Hotels & Resorts', logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Conrad-Hotels-Logo-Vector.svg-.png' },
  { name: 'WB Hotels & Resorts', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtK7LDmgOnA6tek51RtZFmu10fRcbSwfe8w&s' },
  { name: 'Even Hotels', logo: 'https://digital.ihg.com/is/image/ihg/even-hotels-long-island-city-6483429991-original?wid=1440&hei=810&fit=stretch,1&resMode=sharp2&op_usm=0.9,1.0,8,0' },
];

const OurAllies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
       <>
    {/* Hero Section */}
<section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
  <video
    src="/Videos/ourAllies.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  />

  {/* Black overlay */}
  <div className="absolute w-full h-full bg-black/40 z-10" />

  {/* Text content */}
  <div className="absolute text-center text-[#f5e8d7] z-20 px-4">
    <h1 className={`text-4xl md:text-5xl font-extrabold ${playfair.className}`}>
      Our Allies
    </h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Trusted Partnerships That Power Our Vision of Excellence in Hospitality
    </p>
  </div>
</section>

    <section className="py-16 px-4 md:px-16 bg-[#fdfaf7]" id="OurAllies">
      <h2 className={`${playfair.className} text-4xl font-bold text-center text-[#432c15] mb-6 mt-10`}>
        Trusted by the hospitality&apos;s leading brands/partners
      </h2>
      <p className={`${poppins.className} text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto`}>
        Proudly trusted by global hospitality trailblazers — relationships built on excellence and lasting impact.
      </p>
      <p className={`${poppins.className} text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto`}>We&apos;re not just building hotels. We&apos;re building enduring legacies.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allies.map((ally, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 w-full h-32 flex items-center justify-center p-2"
            data-aos="zoom-in"
          >
            <Image
              src={ally.logo}
              alt={ally.name}
              className="object-contain w-full h-full"
              width={300}
              height={128}
            />
          </div>
        ))}
      </div>
    </section>
 </>
  );
};

export default OurAllies;
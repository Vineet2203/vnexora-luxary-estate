'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allies = [
  { name: 'Accor Hotels', logo: 'https://hospitality-on.com/sites/default/files/2020-01/accor-new-logo_1.jpg'},
  { name: 'Ibis Hotels', logo: 'https://www.asiamiles.com/content/dam/am-content/brands/logo/hotel/accorhotels/Logo_ibis_RGB.png' },
  { name: 'The Leela', logo: 'https://globalhospitalitysolution.com/wp-content/uploads/2021/01/leela_logo.jpg' },
  { name: 'Sunday Hotels', logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/eca6fb180890227.Y3JvcCwxNDUxLDExMzUsMjgwLDA.jpg' },
  { name: 'Parkside Hotels', logo: 'https://www.parksidehotels.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-9.07.51-AM.jpeg' },
  { name: 'Hyatt Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpztHnNN5iX0tjOjj8rhrWEGROImIuKat84w&s' },
  { name: 'Bloom Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBETJmEGs2LeUCH7SKD0Cjw3E_3VnaOHfVKg&s' },
  { name: 'Treebo Hotels', logo: 'https://seeklogo.com/images/T/treebo-hotels-logo-E09B00A337-seeklogo.com.png' },
  { name: 'JW Marriott', logo: 'https://svgmix.com/uploads/b0ceb1-jw-marriott-hotel-resorts.svg' },
  { name: 'Lemon Tree Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzRRRhKKhgR5RjZwcj5Q-Up3HWZyEq_9CGA&s' },
  { name: 'Sterling Holidays', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Sterling_logo.png' },
  { name: 'Wyndham Hotel Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wyndham_Hotels_%26_Resorts_logo.svg/2560px-Wyndham_Hotels_%26_Resorts_logo.svg.png' },
  { name: 'Radisson Hotels', logo: 'https://cdn.worldvectorlogo.com/logos/radisson.svg'},
  { name: 'Cardinal Hotel', logo: 'https://cardinalhotel.com/wp-content/uploads/bb-plugin/cache/built-1924-2-landscape.jpg' },
  { name: 'Playotel Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgkMNTwEUNEctWrIVzYcLuKT5iYEOfrPTLw&s' },
  { name: 'Sheraton Hotels', logo: 'https://logowik.com/content/uploads/images/480_sheratonhotelsandresorts.jpg' },
  { name: 'The Orchid', logo: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_302,w_3507,h_1897,r_0,c_crop,q_90/w_355,h_200,f_auto,c_fit/orchid-hotels/Orchid_New_Logo_i6vzc7' },
  { name: 'IHG Hotels & Resorts', logo: 'https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/04/IHC_Hotels_CustomerStory.png' },
  { name: 'the Hostellers', logo: 'https://img-cdn.publive.online/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2022/06/the-hosteller-.jpg' },
  { name: 'Darwin Hotels', logo: 'https://images-platform.99static.com//hPCanOpBkJZgWLVYwFisxzz8YU4=/247x230:915x898/fit-in/500x500/99designs-contests-attachments/129/129576/attachment_129576888' },
  { name: 'OYO Rooms', logo: 'https://play-lh.googleusercontent.com/vjwvFI_MnaaDIp9P4pbk4XbYNDpo0Vl5o9LspNP9vX9kcidGSQ0iqV1r0fuX7BCt4qA=w600-h300-pc0xffffff-pd' },
  { name: 'Sarovar Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPjfeuFI-zVitjlZtvuROwpeFPmODdAqLMg&s' },
  { name: 'The fern', logo: 'https://safariplus.co.in/uploads/images/image_750x_665883390f47d.jpg' },
  { name: 'Fairmont Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuD5VL9c7A2rkvvgQeriwtGKv2LSKbo7vYA&s' },
  { name: 'Mercure Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvR5LYZ3Wfc5otRk5CcGBcg7N_D7Q5RGl9ZQ&s' },
  { name: 'Spree Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_KXsy5ATopGr24zv8QMUDVoE-cKTDIB6Ag&s' },
  { name: 'Lords Hotels', logo: 'https://api.blessingsonthenet.com/uploads/hotel_groups/ae485c0c4fee053310702a304054017d-1701765710588-Lords-Hotels-And-Resorts.jpg' },
  { name: 'Ecko Hotels', logo: 'https://www.tnhglobal.com/wp-content/uploads/2025/04/Ecko-logo-1900x700_c.jpg' },
  { name: 'Novotel Hotels', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Logo_Novotel_Hotels.svg/1200px-Logo_Novotel_Hotels.svg.png' },
  { name: 'Westin Hotels & Resorts', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Westin_Hotels_%26_Resorts_logo.svg/2560px-Westin_Hotels_%26_Resorts_logo.svg.png' },
  { name: 'Grandmas Hotels', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0yS653GxaWpBKiuoqL0BN7xCUv1T0w0Qrw&s' },
  { name: 'Four Seasons Hotels & Resorts', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PO2iXdmm26C0GMfCQ7CzALu1LagZLA6Qvw&s' },
  { name: 'Crowne Plaza Hotels & Resorts', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Crowne_Plaza_logo.svg/1200px-Crowne_Plaza_logo.svg.png' },
  { name: 'Canatla Hotels', logo: 'https://goeastofedmonton.com/wp-content/uploads/2022/06/Canalta-2-color-FA.png' },
  { name: 'The Royal Orchid', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlKdF10TVt_9KcKzNlNiQC0vpWuJmzxQqKQ&s' },
  { name: 'Conrad Hotels & Resorts', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ConradHotelsLogo.svg/2560px-ConradHotelsLogo.svg.png' },
  { name: 'WB Hotels & Resorts', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtK7LDmgOnA6tek51RtZFmu10fRcbSwfe8w&s' },
  { name: 'Even Hotels', logo: 'https://digital.ihg.com/is/image/ihg/even-hotels-long-island-city-6483429991-original?wid=1440&hei=810&fit=stretch,1&resMode=sharp2&op_usm=0.9,1.0,8,0' },
];

const OurAllies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-4 md:px-16 bg-[#fdfaf7]" id ="OurAllies">
      <h2 className="text-4xl font-bold text-center text-[#432c15] mb-10">Our Allies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allies.map((ally, index) => (
          <div
  key={index}
  className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 w-full h-32"
  data-aos="zoom-in"
>
  <Image
    src={ally.logo}
    alt={ally.name}
    className="w-full h-full object-cover"
    width={300}
    height={128}
  />
</div>
        ))}
      </div>
    </section>
  );
};

export default OurAllies;

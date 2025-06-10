'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allies = [
  { name: 'Accor Hotels', logo: '/Images/allies/accor.png' },
  { name: 'Ibis Hotels', logo: '/Images/allies/ibis.png' },
  { name: 'The Leela', logo: '/Images/allies/theleela.png' },
  { name: 'Sunday Hotels', logo: '/Images/allies/sunday.png' },
  { name: 'Parkside Hotels', logo: '/Images/allies/parkside.png' },
  { name: 'Hyatt Hotels', logo: '/Images/allies/hyatt.png' },
  { name: 'Bloom Hotels', logo: '/Images/allies/bloomhotels.png' },
  { name: 'Treebo Hotels', logo: '/Images/allies/treebo.png' },
  { name: 'JW Marriott', logo: '/Images/allies/jwmarriott.png' },
  { name: 'Lemon Tree Hotels', logo: '/Images/allies/lemontree.png' },
  { name: 'Sterling Holidays', logo: '/Images/allies/sterling.png' },
  { name: 'Wyndham Hotel Group', logo: '/Images/allies/wyndham.png' },
  { name: 'Radisson Hotels', logo: '/Images/allies/radisson.png' },
  { name: 'Fortune Hotel', logo: '/Images/allies/fortune.png' },
  { name: 'Playotel Hotels', logo: '/Images/allies/playotel.png' },
  { name: 'Sheraton Hotels', logo: '/Images/allies/sheraton.png' },
  { name: 'The Orchid', logo: '/Images/allies/orchid.png' },
  { name: 'IHG Hotels & Resorts', logo: '/Images/allies/ihg.png' },
  { name: 'Hostie Hotels', logo: '/Images/allies/hostie.png' },
  { name: 'Darwin Hotels', logo: '/Images/allies/darwin.png' },
  { name: 'OYO Rooms', logo: '/Images/allies/oyo.png' },
  { name: 'Sarovar Hotels', logo: '/Images/allies/sarovar.png' },
  { name: 'Hilton Hotels & Resorts', logo: '/Images/allies/hilton.png' },
  { name: 'Fairmont Hotels', logo: '/Images/allies/fairmont.png' },
  { name: 'Mercure Hotels', logo: '/Images/allies/mercure.png' },
  { name: 'Spree Hotels', logo: '/Images/allies/spree.png' },
  { name: 'Lords Hotels', logo: '/Images/allies/lords.png' },
  { name: 'Ecko Hotels', logo: '/Images/allies/ecko.png' },
  { name: 'Novotel Hotels', logo: '/Images/allies/novotel.png' },
  { name: 'Westin Hotels & Resorts', logo: '/Images/allies/westin.png' },
  { name: 'Grandmas Hotels', logo: '/Images/allies/grandmas.png' },
  { name: 'Four Seasons Hotels & Resorts', logo: '/Images/allies/fourseasons.png' },
  { name: 'Crowne Plaza Hotels & Resorts', logo: '/Images/allies/crowneplaza.png' },
  { name: 'Canatala Hotels', logo: '/Images/allies/canatala.png' },
  { name: 'The Royal Orchid', logo: '/Images/allies/royalorchid.png' },
  { name: 'Conrad Hotels & Resorts', logo: '/Images/allies/conrad.png' },
  { name: 'WB Hotels & Resorts', logo: '/Images/allies/wbhotels.png' },
  { name: 'Even Hotels', logo: '/Images/allies/evenhotels.png' },
];

const OurAllies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-4 md:px-16 bg-[#fdfaf7]">
      <h2 className="text-4xl font-bold text-center text-[#432c15] mb-10">Our Allies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allies.map((ally, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-xl flex items-center justify-center hover:scale-105 transform transition duration-300"
            data-aos="zoom-in"
          >
            <Image
              src={ally.logo}
              alt={ally.name}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAllies;

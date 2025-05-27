import React, { useState } from 'react';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';

const testimonials = [
  {
    name: 'Random Woman',
    location: 'NY, USA',
    text: 'Understated, but unforgettable. It feels like it was made for me',
    image: t1,
  },
  {
    name: 'Cool Guy',
    location: 'CA, USA',
    text: 'The fabric, the fit — it’s everything I didn’t know I needed.',
    image: t2,
  },
  {
    name: 'Art Lover',
    location: 'Paris, France',
    text: 'Wearing this feels like stepping into a painting. Stunning.',
    image: t3,
  },
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <div className="bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">Our Customers</p>
      <blockquote className="text-3xl md:text-4xl font-light leading-snug mb-8">
        <span className="text-5xl leading-none mr-2">“</span>
        {active.text}
      </blockquote>
      <div className="mb-10">
        <p className="font-semibold text-lg">{active.name}</p>
        <p className="text-sm text-gray-400">{active.location}</p>
      </div>

      <div className="flex items-center justify-end gap-6">
        {testimonials.map((user, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
              index === activeIndex ? 'border-white' : 'border-transparent'
            } transition-all duration-200`}
          >
            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

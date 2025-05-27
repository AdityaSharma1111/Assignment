import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductSection from './ProductSection'
import DropDown from './DropDown'
import Testimonial from './Testimonial'

// Images
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import heroHeader from '../assets/images/Hero_header.png';
import logo from '../assets/images/logo.jpg';

// Videos
import firstVideo from '../assets/first.mp4';
import psVid from '../assets/ps_vid.mp4';
import secondVideo from '../assets/second.mp4';


function Home() {
  const navigate = useNavigate()

  // Dropdown open state (track index of open one)
  const [openDropdownIndex, setOpenDropdownIndex] = React.useState(null)

  const handleToggle = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const dropData = [
    {
      title: 'Size & Fit',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Delivery & Returns',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'How this was made',
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <div className="pt-16 w-full bg-black">
        {/* Hero Section */}
        <div className="flex flex-col text-center bg-black/70 backdrop-blur-md text-white px-4 w-full">
        <img className="w-72 mt-32 h-auto mb-4" src={heroHeader} alt="eclipse" />   {/* Increased size & added margin */}
        <div className='flex flex-col items-center mb-6'>
            <video className="w-full h-full mb-6 rounded-md" src={firstVideo} autoPlay muted loop playsInline />  {/* Same size & margin, autoplay */}
        </div>
        </div>

        <p className="text-white mx-auto my-6 px-4 text-lg">
        Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>

        <div className="flex justify-center mb-12">
        <button
            className="text-white bg-transparent border text-2xl mb-10 border-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
            onClick={() => navigate('about')}
        >
            Learn More About Eclipse
        </button>
        </div>

        {/* Grid Media Section */}
        <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
            <video
                className="w-full h-auto rounded-lg"
                autoPlay
                muted
                loop
                playsInline
                src={secondVideo}
            />
            </div>

            <img src={img1} alt="Image 1" className="w-full h-auto rounded-lg object-cover" />
            <img src={img2} alt="Image 2" className="w-full h-auto rounded-lg object-cover" />
            <img src={img3} alt="Image 3" className="w-full h-auto rounded-lg object-cover bg-white p-4" />
            <img src={img4} alt="Image 4" className="w-full h-auto rounded-lg object-cover" />
        </div>
        </div>

        {/* Product Section */}
        <h2 className="text-4xl text-white mb-10">Silhouette No. 1 - Vermilion</h2>

        <ProductSection />

        {/* Dropdowns Section */}
        <div className="mt-8 px-4 sm:px-8 w-full mx-auto">
        {dropData.map((item, index) => (
            <DropDown
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openDropdownIndex === index}
            onToggle={() => handleToggle(index)}
            isFirst={index === 0}  // <-- pass this prop
            />
        ))}
        </div>



        <Testimonial />
    </div>
    );

}

export default Home

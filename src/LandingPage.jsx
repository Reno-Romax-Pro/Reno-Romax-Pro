
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send message: ' + error.text);
      });
  };

  return (
    <div className="font-inter text-[#FFFFFF] bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-black">Reno-Romax-Pro</span>
          <a
            href="https://wa.me/14377999960"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-xl"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
        <nav className="hidden md:flex gap-8 text-base text-black">
          <a href="#about" className="hover:text-[#FF6B35] transition">About</a>
          <a href="#services" className="hover:text-[#FF6B35] transition">Services</a>
          <a href="#portfolio" className="hover:text-[#FF6B35] transition">Portfolio</a>
          <a href="#contact" className="hover:text-[#FF6B35] transition">Contact</a>
        </nav>
        <Button className="hidden md:block bg-[#0066CC] text-white">Contact Us</Button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </header>

      <section className="h-screen flex items-center justify-center bg-white relative">
        <div className="relative z-10 text-center text-black">
          <span className="text-4xl font-bold">Reno-Romax-Pro</span>
          <p className="text-2xl my-6">Quality You Can Trust</p>
          <Button className="bg-[#FF6B35] text-white">Contact Us</Button>
        </div>
      </section>

      <motion.section id="about" className="py-16 px-4 md:px-16 grid md:grid-cols-2 gap-8 items-center text-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-base leading-relaxed">
            At Reno-Romax-Pro, we bring years of experience in high-quality renovations and interior finishing. We pride ourselves on delivering excellence, on time and on budget. Whether it’s a full home makeover or a small remodel, we treat every project with care and precision.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card><CardContent className="p-4 text-center bg-[#294B4F] text-white"><strong>150+</strong><br/>Projects Completed</CardContent></Card>
          <Card><CardContent className="p-4 text-center bg-[#294B4F] text-white"><strong>10+</strong><br/>Years Experience</CardContent></Card>
          <Card><CardContent className="p-4 text-center bg-[#294B4F] text-white"><strong>98%</strong><br/>Client Satisfaction</CardContent></Card>
          <Card><CardContent className="p-4 text-center bg-[#294B4F] text-white"><strong>5⭐</strong><br/>Google Rating</CardContent></Card>
        </div>
      </motion.section>

      <section id="services" className="py-16 px-4 md:px-16 text-black">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {['Kitchen Renovation', 'Bathroom Remodel', 'Flooring Installation', 'Interior Painting'].map((service, i) => (
            <div key={i} className="p-6 border border-gray-300 rounded-2xl text-center shadow-sm bg-[#f9f9f9] text-black">
              <div className="mb-4">
                <img src={`/icons/service${i + 1}.svg`} alt={service} className="mx-auto w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm">Professional {service.toLowerCase()} services tailored to your needs.</p>
            </div>
          ))}
        </div>
      </section>

      <motion.section id="contact" className="py-16 px-4 md:px-16 bg-[#203A3E] text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">📍 Concord, ON, Canada</p>
            <p className="mb-4">📞 +1 (437) 799-9960</p>
            <p className="mb-4">✉️ RenoRomaxPro@gmail.com</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} placeholder="Your Name" className="w-full p-2 rounded bg-white text-black" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" name="email" value={formData.email} placeholder="Your Email" className="w-full p-2 rounded bg-white text-black" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <textarea name="message" value={formData.message} placeholder="Your Message" rows="4" className="w-full p-2 rounded bg-white text-black" onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            <Button type="submit" className="bg-[#FF6B35] text-white">Send Message</Button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
    
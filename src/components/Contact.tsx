export default function Contact() {
    return (
      <section className="w-full py-20 bg-[#282230] flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Contact Us</h2>
  
        {/* Contact Form and Info Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-11/12 max-w-full p-8 rounded-2xl shadow-lg border border-white">

          
          {/* Left Side - Contact Form */}
          <div className="flex flex-col gap-6">
  <input 
    type="email" 
    placeholder="Your Email" 
    className="p-4 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
  />
  <textarea 
    placeholder="Your Message" 
    rows={5} 
    className="p-4 border border-white text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
  ></textarea>
  <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send</button>
</div>

  
          {/* Right Side - Contact Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p className="text-white mt-2">📍 123 Business Street, City, Country</p>
              <p className="text-white">📞 +1 234 567 890</p>
              <p className="text-white">✉️ contact@business.com</p>
            </div>
  
            {/* Google Map (Below Contact Info) */}
            <div className="w-full h-48 rounded-2xl overflow-hidden">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.9537363159047!3d-37.81627944202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4b1f9fd%3A0xe6f17d2d0f1df1fd!2sBusiness%20Office!5e0!3m2!1sen!2sus!4v1633069467959!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-10">
      <div className="px-5 md:px-[1rem]">
        <div className="max-w-full mx-auto bg-[#2B2B2B] py-8 px-6 md:py-[1.3rem] md:px-[1.3rem] flex flex-col md:flex-row justify-between">
          <div className="flex flex-col items-start">
            <h3 className="text-[#FFFFFF] text-lg md:text-[1.5rem] font-[300] tracking-wide mb-6 md:mb-4">
              Contact Us
            </h3>

            <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-6">
              <h2 className="text-[#FFFFFF] text-3xl md:text-[2.8rem] font-[500] leading-none">
                Find us
              </h2>
              <span className="bg-orange-primary text-white text-3xl md:text-[2.8rem] font-[500] px-5 py-2 md:px-8 md:py-2 rounded-[3rem] leading-none flex items-center justify-center">
                Here.
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-14">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-[2.2rem] md:h-[2.2rem] rounded-full bg-orange-primary flex-shrink-0" />
                <a
                  href="tel:+917907114319"
                  className="text-white text-xl md:text-[1.7rem] font-[500] hover:text-orange-primary transition-colors tracking-wide"
                >
                  +91 7907114319
                </a>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-[2.2rem] md:h-[2.2rem] rounded-full bg-orange-primary flex-shrink-0" />
                <a
                  href="tel:+917907114319"
                  className="text-white text-xl md:text-[1.7rem] font-[500] hover:text-orange-primary transition-colors tracking-wide"
                >
                  +91 7907114319
                </a>
              </div>
            </div>
          </div>

          <div className="text-left md:text-right mt-12 md:mt-1 flex flex-col justify-start">
            <div className="text-white space-y-1 md:space-y-3 text-base md:text-[1.3rem] font-[300] tracking-wide">
              <p>Address line 01</p>
              <p>Address line 02</p>
              <p>Address line 03</p>
              <p>Ernakulam, Kerala</p>
              <p className="uppercase text-white/90">PINCODE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

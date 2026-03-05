
const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-10">
      <div className="px-5 md:px-[3rem]">
        <div className="max-w-full mx-auto bg-[#2B2B2B] p-6 md:px-[1.5rem]">
          <h3 className="text-[#FFFFFF] text-xs md:text-PoppinsDescription tracking-wider mb-4 md:mb-4">Contact Us</h3>

          <div className="grid md:grid-cols-12 gap-8 md:gap-6">
            <div className="col-span-8">
              <h2 className="text-[#FFFFFF] text-2xl md:text-[2.5rem] font-[500] leading-tight mb-8 md:mb-12">
                Find us{" "}
                <span className="bg-orange-primary text-white px-[1rem] pb-0 rounded-full font-[500] inline-block whitespace-nowrap">
                  HERE
                </span>{" "}
                so we can start shaping your ideas into reality.
              </h2>
              <div className="flex flex-row gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-orange-primary flex-shrink-0" />
                  <a
                    // href="mailto:contact@greetmotion.com"
                    href="tel:+917907114319"

                    className="text-white text-base md:text-[1.75rem] hover:text-orange-primary transition-colors"
                  >
                    +91 7907114319
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-orange-primary flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-white text-base md:text-[1.75rem] hover:text-orange-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right mt-3 md:mt-0 col-span-4">
              <div className="text-white space-y-2 text-base md:text-[1.2rem]">
                <p>Address line 01</p>
                <p>Address line 02</p>
                <p>Address line 03</p>
                <p>Ernakulam, Kerala</p>
                <p className="mt-4 md:mt-6 font-normal">PINCODE</p>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-8 pt-8 border-t border-white" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

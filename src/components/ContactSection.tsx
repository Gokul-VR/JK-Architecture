
const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-10">
      <div className="px-5 md:px-[4rem]">
        <div className="max-w-full mx-auto bg-zinc-700 p-5 md:px-[1.5rem]">
          <h3 className="text-zinc-400 text-xs md:text-sm tracking-wider uppercase mb-4 md:mb-2">Contact Us</h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-6">
            <div className="">
              <h2 className="text-white text-2xl md:text-3xl font-[500] leading-tight mb-8 md:mb-12">
                Find us{" "}
                <span className="bg-orange-500 text-white px-[1rem] pb-0 md:pb-1 rounded-full font-[500] inline-block whitespace-nowrap">
                  HERE
                </span>{" "}
                so we can start shaping your ideas into reality.
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+917907114319"
                    className="text-white text-base md:text-[1.2rem] hover:text-orange-500 transition-colors"
                  >
                    +91 7907114319
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+917907114319"
                    className="text-white text-base md:text-[1.2rem] hover:text-orange-500 transition-colors"
                  >
                    +91 7907114319
                  </a>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right mt-3 md:mt-0">
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

// import Logo from "@/assets/logo-1.png";

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 bg-black text-white">
//       <div className="container">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
//           <div className="w-full lg:w-[60%] flex justify-center lg:justify-end lg:pr-12 max-w-md mx-auto lg:mx-0">
//             <img
//               src={Logo}
//               alt="Logo"
//               className="w-full h-auto max-w-[250px] lg:max-w-[300px] object-contain drop-shadow-xl"
//             />
//           </div>

//           <div className="hidden lg:block w-[3px] h-[35rem] bg-gradient-to-b from-white/30 to-transparent mx-2" />

//           <div className="w-full lg:w-[40%] mt-12 lg:mt-0 flex items-center">
//             <p className="text-xl lg:text-2xl leading-relaxed text-gray-200 anime-fade-in max-w-lg font-[700] tracking-wider">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//               laborensectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//               adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import Logo from "@/assets/logo-1.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end lg:pr-16 max-w-lg mx-auto lg:mx-0">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-auto max-w-[280px] lg:max-w-[320px] object-contain drop-shadow-2xl"
            />
          </div>

          <div className="hidden lg:block w-[3px] h-[35rem] bg-gradient-to-b from-white/30 to-transparent mx-2" />

          <div className="w-full lg:w-[45%] mt-16 lg:mt-0 lg:pl-82 flex items-start">
            <p className="text-2xl lg:text-[2.3rem] leading-[1.2em] lg:leading-[1.2] text-gray-100 anime-fade-in max-w-[30rem] font-medium tracking-[0.02em] lg:tracking-[0.01em] bg-gradient-to-r from-white/90 via-gray-100 to-white/80 bg-clip-text text-transparent drop-shadow-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              laborensectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

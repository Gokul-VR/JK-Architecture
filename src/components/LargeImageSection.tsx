import heroLarge from "@/assets/hero-3.jpg";

const LargeImageSection = () => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-end">

      <img
        src={heroLarge}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative bottom-16 left-6 md:left-12 max-w-2xl text-white">
        <p className="text-2xl md:text-3xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

    </section>
  );
};

export default LargeImageSection;
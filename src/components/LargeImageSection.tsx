import heroLarge from "@/assets/hero-large.jpg";

const LargeImageSection = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden">
      <img
        src={heroLarge}
        alt="Luxury architecture resort in Kerala"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-16 left-6 md:left-12 max-w-2xl text-foreground animate-fade-in">
        <p className="text-2xl md:text-3xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
        </p>
      </div>
    </section>
  );
};

export default LargeImageSection;

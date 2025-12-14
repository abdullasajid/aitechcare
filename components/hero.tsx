"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end pt-24 pb-20 pl-8">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_done-H5YeAYJt47JacQkQLu5kHnUvtVGTUZ.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <h1
          className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight px-4 py-2 rounded-lg inline-block"
          style={{ backgroundColor: "#007f91" }}
        >
          Home of AI Technology
        </h1>
      </div>
    </section>
  );
}

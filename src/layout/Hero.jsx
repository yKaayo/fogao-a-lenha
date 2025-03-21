import video1 from "../assets/videos/video1.mp4";
import textureVideo from "../assets/videos/texture.mp4";

const Hero = () => {
  const time = new Date();

  const day = time.getDate();
  const year = time.getFullYear();

  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  const month = months[time.getMonth()];

  return (
    <>
      <video
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src={video1} type="video/mp4" className="" />
      </video>

      <video
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 h-full w-full object-cover opacity-15"
      >
        <source src={textureVideo} type="video/mp4" />
      </video>

      <main className="relative z-[1] container mx-auto flex h-screen items-center justify-center px-5 py-5 md:px-0 md:py-10">
        <div className="absolute top-5 flex w-full items-center justify-between px-5 md:top-10 gap-5">
          <h1 className="font-ultra text-lg sm:text-2xl text-white">FOGÃO A LENHA</h1>

          <div className="font-boldonse text-xs sm:text-base flex gap-3 text-white">
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
          </div>
        </div>

        <h2 className="font-ballet text-center text-5xl text-fuchsia-200 md:text-7xl">
          Sabores <br />
          <span className="font-boldonse relative z-[1] text-white">
            AQUECEM
            <span className="font-boldonse absolute top-7 -left-1 -z-[1] text-[49.4px] text-amber-950 md:top-9 md:text-[73.4px]">
              AQUECEM
            </span>
          </span>
          <br /> Memórias
        </h2>
      </main>
    </>
  );
};

export default Hero;

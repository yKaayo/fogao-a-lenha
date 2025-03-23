import { useState } from "react";

// Videos
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

// Icons
import arrowRight from "../assets/icons/arrowRight.svg";
import arrowLeft from "../assets/icons/arrowLeft.svg";

const Hero = () => {
  const videos = [video1, video2, video3];

  const [video, setVideo] = useState(videos[0]);

  function handleLeftClick() {
    let previousVideoIndex = videos.indexOf(video);

    previousVideoIndex === 0
      ? (previousVideoIndex = videos.length - 1)
      : (previousVideoIndex -= 1);

    setVideo(videos[previousVideoIndex]);
  }

  function handleRightClick() {
    let nextVideo = videos.indexOf(video);

    videos.length - 1 == nextVideo ? (nextVideo = 0) : (nextVideo += 1);

    setVideo(videos[nextVideo]);
  }

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
        key={video}
        muted
        autoPlay
        loop
        className="absolute top-0 left-0 -z-[2] h-screen w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <main className="relative z-[1] container mx-auto flex h-screen items-center justify-center px-5 py-5 md:px-0 md:py-10">
        <div className="absolute top-5 flex w-full items-center justify-between gap-5 px-2 sm:px-5 md:top-10">
          <h1 className="font-ultra text-lg text-white sm:text-2xl">
            FOGÃO A LENHA
          </h1>

          <div className="flex flex-col items-center gap-2">
            <div className="font-boldonse flex gap-3 text-xs text-white sm:text-base">
              <p>{day}</p>
              <p>{month}</p>
              <p>{year}</p>
            </div>
            <div className="font-boldonse flex gap-3 text-xs text-white sm:text-base items-center">
              <button className="cursor-pointer" onClick={handleLeftClick}>
                <img src={arrowLeft} alt="Ícone para mudar de canal" />
              </button>
              <p>CANAL {videos.indexOf(video) + 1}</p>
              <button className="cursor-pointer" onClick={handleRightClick}>
                <img src={arrowRight} alt="Ícone para mudar de canal" />
              </button>
            </div>
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

import textureVideo from "../assets/videos/texture.mp4";

const BackgroundSite = () => {
  return (
    <video
      muted
      autoPlay
      loop
      className="fixed top-0 left-0 -z-[1] h-full w-full object-cover opacity-20"
    >
      <source src={textureVideo} type="video/mp4" />
    </video>
  );
};

export default BackgroundSite;

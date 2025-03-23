const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 to-green-200">
      <footer className="container mx-auto h-screen px-5 md:px-0 relative z-[1]">
        <h3 className="font-ballet pt-8 text-center text-5xl text-orange-500 sm:text-7xl">
          A cozinha <br />
          <span className="font-boldonse relative -z-[1] text-yellow-400">
            TE ESPERA
            <span className="font-boldonse absolute top-7 -left-1 -z-[1] text-[49.4px] text-nowrap text-amber-950 sm:top-9 sm:text-[73.4px]">
              TE ESPERA
            </span>
          </span>
        </h3>
      </footer>
    </div>
  );
};

export default Footer;

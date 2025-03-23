const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-orange-200 to-yellow-200">
    <section className="container relative z-[1] mx-auto flex h-screen flex-col items-center justify-center gap-3 px-5 py-5 md:px-0 md:py-10">
      <h3 className="relative text-4xl">
        <div className="flex gap-2">
          <span className="font-ballet text-[52px] text-yellow-400">Com</span>
          <span className="font-kiteone font-extrabold text-orange-500">
            FOME?
          </span>
        </div>

        <div className="absolute top-[2.6px] -z-[1] flex gap-2">
          <span className="font-ballet text-[52px] text-amber-950">Com</span>
          <span className="font-kiteone font-extrabold text-amber-950">
            FOME?
          </span>
        </div>
      </h3>

      <a
        href="#"
        className="font-kiteone rounded-full bg-amber-600 px-8 py-1.5 text-xl font-extrabold transition-colors"
      >
        Peça já
      </a>
    </section></div>
  );
};

export default CallToAction;

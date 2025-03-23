const CallToAction = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-3">
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
    </section>
  );
};

export default CallToAction;

import pastaImg from "../assets/images/pasta.webp";

const Info = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-yellow-200">
      <section className="relative z-[1] container mx-auto flex min-h-screen flex-col items-center justify-center px-5 py-10 md:px-0 md:py-20 gap-5">
        <h3 className="font-kiteone text-center text-4xl leading-12 font-extrabold text-balance text-orange-950 sm:text-7xl sm:leading-24">
          Deixe ferver
          <br />a criatividade!
        </h3>

        <p className="font-opensans text-center text-2xl text-balance text-amber-950">
          Com receitas passo a passo, dicas de preparo e técnicas infalíveis,
          você vai dominar a arte da gastronomia e surpreender no fogão. De
          pratos clássicos a criações ousadas, cada receita é uma aula para
          elevar suas habilidades e transformar suas refeições em experiências
          incríveis. Vamos cozinhar, aprender e se deliciar!
        </p>

        <div className="rounded-[100%/100%] border border-orange-950 p-0.5 mt-10">
          <div className="rounded-[100%/100%] border-2 border-orange-950 p-1">
            <div className="h-[80vh] overflow-hidden rounded-[100%/100%] border-4 border-orange-950">
              <img
                src={pastaImg}
                alt="Macarrão"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;

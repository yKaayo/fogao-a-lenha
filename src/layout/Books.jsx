import Book from "../components/Book";

// 3D Models
import book1 from '../assets/3d/book.glb'
import book2 from '../assets/3d/3d_book.glb'

const Books = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-200 via-cyan-200 to-orange-200">
      <section className="relative z-[1] container mx-auto px-5 py-5 md:px-0 md:py-10">
        <h3 className="font-ballet pt-8 text-center text-transparent mb-5">
          <span className="text-4xl [-webkit-text-stroke:_.4px_#461901] sm:text-7xl">
            Nossos Melhores
          </span>
          <br />
          <div className="relative -top-2">
            <span className="font-boldonse relative -z-[1] text-[36.8px] text-pink-300 sm:text-[73.4px]">
              LIVROS
              <span className="font-boldonse absolute top-4 -left-1 -z-[1] text-nowrap text-amber-950 sm:top-6">
                LIVROS
              </span>
            </span>
            <br />
            <span className="font-boldonse relative -z-[1] text-[36.8px] text-pink-300 sm:text-[73.4px]">
              CULINÁRIOS
              <span className="font-boldonse absolute top-4 -left-1 -z-[1] text-nowrap text-amber-950 sm:top-6">
                CULINÁRIOS
              </span>
            </span>
          </div>
        </h3>

        <p className="font-kiteone text-orange-950 text-center text-2xl font-extrabold text-balance">
          Com nossos livros de receitas, você vai dominar técnicas incríveis,
          descobrir segredos dos chefs e criar pratos que vão impressionar todos
          à mesa. Adquira já o seu e comece sua jornada gastronômica hoje mesmo!
        </p>
      </section>

      <div className="h-[80vh] w-full">
        <Book model={book1} rotationXDefault={Math.PI} rotationYDefault={Math.PI / 2} rotationZDefault={Math.PI / 2} scale={[1, 1, 1]} /></div>
      <div className="h-[80vh] w-full">
        <Book model={book2} rotationXDefault={Math.PI} rotationYDefault={Math.PI/2} rotationZDefault={Math.PI/2} scale={[3, 3, 3]} /></div>
    </div>
  );
};

export default Books;

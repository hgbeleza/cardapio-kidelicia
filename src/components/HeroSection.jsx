import video1 from "../assets/kidelicia-video1.mp4";
import video2 from "../assets/kidelicia-video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Casual e Atraente. Sabor,
        <span className="bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text">
          {" "}
          Praticidade e Alegria em Cada Mordida!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Descubra nossos lanches irresistíveis, feitos com igredientes
        fresquinhos e entregues rapidinho para você.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#cardapio"
          className="bg-gradient-to-r from-red-500 to-red-900 py-3 px-4 rounded-md"
        >
          Ver cardapio
        </a>
        <a
          href="https://w.app/f7EqWd"
          target="_blank"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Pedir pelo Whatsapp
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-500 shadow-red-900 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Esse vídeo não é suportado pelo seu navegador.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-500 shadow-red-900 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Esse vídeo não é suportado pelo seu navegador.
        </video>
      </div>
    </div>
  );
}

export default HeroSection;

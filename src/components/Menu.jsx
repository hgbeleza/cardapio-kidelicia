import Card from "./Card";
import { batataFritaItems, bebidasItems, hamburguerItems } from "../constants";

function Menu({ titleSection }) {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral min-h-[800px]">
        <div className="text-center" id="cardapio">
          <span className="bg-neutral-900 text-red-500 rounded-full h-6 text-xl font-medium px-2 py-1">
            Hamburguer
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {hamburguerItems.map((item, index) => (
            <div key={index}>
              <Card
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 border-b border-neutral">
        <div className="text-center">
          <span className="bg-neutral-900 text-red-500 rounded-full h-6 text-xl font-medium px-2 py-1">
            Batata frita
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {batataFritaItems.map((item, index) => (
            <div key={index}>
              <Card
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 border-b border-neutral min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-red-500 rounded-full h-6 text-xl font-medium px-2 py-1">
            Bebidas
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {bebidasItems.map((item, index) => (
            <div key={index}>
              <Card
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;

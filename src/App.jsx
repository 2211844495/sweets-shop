import "./App.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "wouter";
import ShoppingCartItem from "./ShoppingCartItem";
import donut from "./pics/donut.png";
import cheesecake from "./pics/cheesecake.png";
import cupcake from "./pics/cupcake.png";
import tiramisu from "./pics/tiramisu.png";

const sweets = [
  {
    id: 1,
    image: donut,
    name: "donut",
    price: 6.5,
    desc: "Indulge in our perfectly glazed donuts—fluffy, soft, and dipped in rich, velvety icing. Each bite delivers a sweet, nostalgic taste that's simply irresistible.",
  },
  {
    id: 2,
    image: cupcake,
    name: "cupcake",
    price: 4,
    desc: "Treat yourself to our delightful cupcakes, bursting with flavor and topped with a swirl of luscious frosting. Each bite is a little piece of heaven, perfect for any occasion.",
  },
  {
    id: 3,
    image: cheesecake,
    name: "cheesecake",
    price: 7.5,
    desc: "Experience pure bliss with our creamy, decadent cheesecake. Each slice boasts a velvety texture with a buttery crust, topped with a hint of fresh fruit or a decadent drizzle.",
  },
  {
    id: 4,
    image: tiramisu,
    name: "tiramisu",
    price: 8.5,
    desc: "Savor the classic Italian delight—our tiramisu layers espresso-soaked ladyfingers with smooth mascarpone cream, dusted with cocoa for a sophisticated, indulgent treat.",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <h1>Desserts</h1>
        <Link href="/cart">
          <FaCartShopping size={30} color="rgb(78, 41, 24)" />
        </Link>
      </div>
      <div className="sweets">
        {sweets.map((sweet) => {
          return (
            <>
              <div className="sweet">
                <figure>
                  <img width="200" src={sweet.image} alt={sweet.name} />
                </figure>
                <div className="sweet1">
                  <figcaption>{sweet.name}</figcaption>
                  <p>${sweet.price}</p>
                </div>
                <p id="description">{sweet.desc}</p>
                <div className="bottom-part">
                  <button>Add to cart</button>
                  <ShoppingCartItem />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

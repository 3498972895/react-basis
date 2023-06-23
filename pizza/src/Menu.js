import Pizza from "./Pizza";
import { pizzaData } from "./data";
function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        <ul className="pizzas">
          {pizzaData.map((item, index) => (
            <Pizza
              name={item.name}
              ingredient={item.ingredients}
              price={item.price}
              soldOut={item.soldOut}
              key={index}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
export default Menu;

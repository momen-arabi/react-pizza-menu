import { pizzaData } from "./data";

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length ? (
        <>
          <p>Discover our mouthwatering selection of pizzas, each crafted with fresh ingredients and bursting with authentic Italian flavors.</p>
          <div className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.id} />
            ))}
          </div>
        </>
      ) : (
        <p>Our menu is still cooking and will be ready soon—stay tuned for a slice of something delicious! 🍕</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? price : "Sold Out"}</span>
      </div>
    </div>
  );
}

function Footer() {
  const currTime = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currTime >= openHour && currTime <= closeHour;
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <FooterText openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>Our shop is currently closed, but we can't wait to serve you soon. See you next time! 😊</p>
        )}
      </div>
    </footer>
  );
}

function FooterText({ openHour, closeHour }) {
  return (
    <>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </>
  );
}
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;

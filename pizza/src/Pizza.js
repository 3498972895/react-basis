function Pizza(props) {
  const { name, ingredient, price, soldOut } = props;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ``}`}>
      <img
        src=""
        alt=""
        style={{
          display: "block",
          width: "100px",
          height: "100px",
          backgroundColor: "blueviolet",
        }}
      ></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "we sold out" : price}</span>
      </div>
    </li>
  );
}
export default Pizza;

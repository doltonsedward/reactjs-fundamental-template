function Card({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.type}</p>
      <img src={require("./assets/image1.png").default} alt="car" />
    </div>
  );
}

export default Card;

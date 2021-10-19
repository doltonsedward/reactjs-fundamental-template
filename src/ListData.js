import Card from "./Card";
import data from "./list.json";
function ListData() {
  return (
    <div>
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default ListData;
